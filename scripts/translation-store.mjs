import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve, relative } from 'node:path'
import { parse } from 'yaml'

// npm runs scripts and Astro builds from the project root, including prerendering.
export const root = process.cwd()
export const reviewsPath = resolve(root, 'translations/reviews.json')
export const hash = (text) => createHash('sha256').update(text.replace(/\r\n/g, '\n')).digest('hex')

export function loadEntries() {
  const entries = []
  for (const collection of ['blog', 'projects']) {
    const base = resolve(root, 'src/content', collection)
    for (const name of readdirSync(base, { recursive: true })) {
      if (!/\.mdx?$/.test(String(name))) continue
      const path = resolve(base, String(name))
      const raw = readFileSync(path, 'utf8').replace(/^\uFEFF/, '')
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
      if (!match) throw new Error(`Frontmatter absent : ${path}`)
      const data = parse(match[1])
      entries.push({ collection, id: relative(base, path).replaceAll('\\', '/').replace(/\.mdx?$/, ''), path, raw, data })
    }
  }
  return entries
}

export function loadReviews() {
  return existsSync(reviewsPath) ? JSON.parse(readFileSync(reviewsPath, 'utf8')) : {}
}

export function translationState(entry, entries, reviews) {
  const source = entries.find((item) => item.collection === entry.collection && item.id === entry.data.translationOf)
  if (!source || (source.data.locale ?? 'fr') !== 'fr' || source.data.translationOf) {
    throw new Error(`Source française invalide pour ${entry.collection}/${entry.id}`)
  }
  const review = reviews[`${entry.collection}/${entry.id}`]
  if (!review) return 'draft'
  if (review.sourceHash !== hash(source.raw)) return 'outdated'
  if (!review.reviewedAt) return 'draft'
  if (review.targetHash !== hash(entry.raw)) return 'edited'
  return 'reviewed'
}

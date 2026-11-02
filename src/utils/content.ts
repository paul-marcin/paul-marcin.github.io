import { getCollection, type CollectionEntry } from 'astro:content'
import { loadEntries, loadReviews, translationState } from '../../scripts/translation-store.mjs'
import { entryPath, localPath, type Locale } from './i18n'

const files = loadEntries()
const reviews = loadReviews()
const pairs = new Set<string>()
for (const entry of files.filter((entry) => entry.data.locale === 'en')) {
  const key = `${entry.collection}/${entry.data.translationOf}`
  if (pairs.has(key)) throw new Error(`Deux traductions anglaises pour ${key}`)
  if (!entry.id.startsWith('en/')) throw new Error(`Traduction hors du dossier en/ : ${entry.id}`)
  pairs.add(key)
  translationState(entry, files, reviews)
}

export function reviewState(entry: CollectionEntry<'blog' | 'projects'>) {
  // Read again so edits and approvals are reflected without restarting dev.
  const current = loadEntries()
  const file = current.find((item) => item.collection === entry.collection && item.id === entry.id)
  return file ? translationState(file, current, loadReviews()) : 'draft'
}

export function visible(entry: CollectionEntry<'blog' | 'projects'>) {
  return import.meta.env.DEV || (!entry.data.draft && (entry.data.locale !== 'en' || reviewState(entry) === 'reviewed'))
}

export async function localizedContent<C extends 'blog' | 'projects'>(collection: C, locale: Locale): Promise<CollectionEntry<C>[]> {
  return (await getCollection(collection)).filter((entry) => entry.data.locale === locale && visible(entry)) as CollectionEntry<C>[]
}

export async function alternateEntry(entry: CollectionEntry<'blog' | 'projects'>) {
  const entries = await getCollection(entry.collection)
  return entries.find((candidate) => visible(candidate) && (
    entry.data.locale === 'en'
      ? candidate.id === entry.data.translationOf && candidate.data.locale === 'fr'
      : candidate.data.translationOf === entry.id && candidate.data.locale === 'en'
  ))
}

export async function languageLinks(path: string): Promise<{ locale: Locale; href: string }[]> {
  const locale = path.startsWith('/en/') ? 'en' : 'fr'
  const clean = path.replace(/^\/en(?=\/)/, '').replace(/\/$/, '') || '/'
  const collection = clean.startsWith('/blog/') ? 'blog' : clean.startsWith('/recherche/projets/') ? 'projects' : undefined
  if (collection) {
    const prefix = collection === 'blog' ? '/blog/' : '/recherche/projets/'
    const id = `${locale === 'en' ? 'en/' : ''}${clean.slice(prefix.length)}`
    const entry = (await getCollection(collection)).find((item) => item.id === id)
    if (!entry) return []
    const alternate = await alternateEntry(entry)
    return [entry, ...(alternate ? [alternate] : [])].map((item) => ({ locale: item.data.locale, href: entryPath(collection, item.id, item.data.locale) }))
  }
  if (!['/', '/essays', '/recherche', '/about', '/blog', '/search'].includes(clean)) return []
  return (['fr', 'en'] as const).map((lang) => ({ locale: lang, href: localPath(clean === '/' ? '/' : `${clean}/`, lang) }))
}

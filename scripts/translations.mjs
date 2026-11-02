import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { loadEntries, loadReviews, translationState, hash, reviewsPath, root } from './translation-store.mjs'

const [command = 'status', key] = process.argv.slice(2)
try {
  const entries = loadEntries()
  const reviews = loadReviews()
  const targets = entries.filter((entry) => entry.data.locale === 'en')
  for (const entry of targets) {
    if (!entry.id.startsWith('en/') || !entry.data.translationOf) throw new Error(`Métadonnées de traduction invalides : ${entry.id}`)
    translationState(entry, entries, reviews)
  }
  if (command === 'prepare') {
    const source = entries.find((entry) => `${entry.collection}/${entry.id}` === key && (entry.data.locale ?? 'fr') === 'fr')
    if (!source) throw new Error('Indiquer une source française existante : npm run translations -- prepare blog/exemples/modele-humeur')
    const target = targets.find((entry) => entry.collection === source.collection && entry.data.translationOf === source.id)
    const path = resolve(root, '.astro/translation-requests', source.collection, `${source.id}.json`)
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, JSON.stringify({
      instruction: 'Préparer une traduction anglaise fidèle pour relecture humaine. Conserver les nuances, les équations, le code, les imports MDX et les liens valides. Traduire titre, résumé, texte, légendes et libellés. Adapter les ancres et les références liées vers les traductions disponibles. Conserver les dates, la catégorie et les chemins des images (en adaptant les chemins relatifs au nouveau dossier). Pour une mise à jour, préserver les corrections anglaises et proposer un diff ; ne pas les écraser par une retraduction complète. Ne jamais approuver automatiquement.',
      source: { key, hash: hash(source.raw), content: source.raw },
      target: target ? { key: `${target.collection}/${target.id}`, content: target.raw } : null
    }, null, 2) + '\n')
    console.log(`Dossier de traduction préparé : ${path}\nAucun texte envoyé à un service ; aucun fichier anglais modifié.`)
  } else if (command === 'approve' || command === 'stage') {
    const target = targets.find((entry) => `${entry.collection}/${entry.id}` === key)
    if (!target) throw new Error('Indiquer une traduction existante, par exemple : npm run translations -- approve blog/en/exemples/modele-humeur')
    const source = entries.find((entry) => entry.collection === target.collection && entry.id === target.data.translationOf)
    if (command === 'approve' && (source.data.draft || target.data.draft)) throw new Error('Retirer draft: true avant validation. La relecture est suivie séparément du brouillon éditorial.')
    reviews[key] = command === 'approve'
      ? { sourceHash: hash(source.raw), targetHash: hash(target.raw), reviewedAt: new Date().toISOString() }
      : { sourceHash: hash(source.raw) }
    mkdirSync(dirname(reviewsPath), { recursive: true })
    writeFileSync(reviewsPath, JSON.stringify(reviews, null, 2) + '\n')
    console.log(`${command === 'approve' ? 'Traduction validée' : 'Brouillon prêt à relire'} : ${key}`)
  } else if (command === 'status') {
    const labels = { draft: 'À RELIRE', reviewed: 'VALIDÉE', outdated: 'FRANÇAIS MODIFIÉ — À ACTUALISER', edited: 'ANGLAIS MODIFIÉ — À REVALIDER' }
    for (const entry of targets) console.log(`${labels[translationState(entry, entries, reviews)]}\t${entry.collection}/${entry.id}`)
    const missing = entries.filter((entry) => (entry.data.locale ?? 'fr') === 'fr' && !targets.some((target) => target.collection === entry.collection && target.data.translationOf === entry.id))
    for (const entry of missing) console.log(`SANS TRADUCTION\t${entry.collection}/${entry.id}`)
  } else throw new Error('Commandes disponibles : status, prepare <source>, stage <traduction>, approve <traduction>')
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
}

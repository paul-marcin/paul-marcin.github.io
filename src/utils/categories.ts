import type { CollectionEntry } from 'astro:content'
import { choose, type Locale } from './i18n'

export type Category = NonNullable<CollectionEntry<'blog'>['data']['category']>

// Libellés et page de rattachement de chaque domaine (accueil, aperçus, bouton retour des articles).
export const categories: Record<
  Category,
  { title: string; domain: string; page: string; linkLabel: string }
> = {
  recherche: {
    title: 'Recherche',
    domain: 'Recherche',
    page: '/recherche/',
    linkLabel: 'Explorer la recherche'
  },
  psychiatrie: {
    title: 'Réflexions sur la psychiatrie',
    domain: 'Essai',
    page: '/essays/#psychiatrie',
    linkLabel: 'Les essais sur la psychiatrie'
  },
  politique: {
    title: 'Réflexions politiques',
    domain: 'Essai',
    page: '/essays/#politique',
    linkLabel: 'Les essais politiques'
  }
}

export function postsIn(posts: CollectionEntry<'blog'>[], category: Category) {
  return posts.filter((post) => post.data.category === category)
}

export function categoryLabels(category: Category, locale: Locale) {
  const english = {
    recherche: { title: 'Research', domain: 'Research', linkLabel: 'Explore the research' },
    psychiatrie: { title: 'Reflections on psychiatry', domain: 'Essay', linkLabel: 'Essays on psychiatry' },
    politique: { title: 'Political reflections', domain: 'Essay', linkLabel: 'Political essays' }
  }
  return { ...categories[category], ...choose(locale, categories[category], english[category]) }
}

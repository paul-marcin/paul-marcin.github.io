import type { CollectionEntry } from 'astro:content'

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

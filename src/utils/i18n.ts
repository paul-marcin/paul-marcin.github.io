export type Locale = 'fr' | 'en'
export const localeFromPath = (path: string): Locale => /^\/en(?:\/|$)/.test(path) ? 'en' : 'fr'
export const localPath = (path: string, locale: Locale): string => locale === 'en' ? `/en${path}` : path
export const entryPath = (collection: 'blog' | 'projects', id: string, locale: Locale): string =>
  localPath(`${collection === 'blog' ? '/blog/' : '/recherche/projets/'}${id.replace(/^en\//, '')}/`, locale)
export const choose = <T>(locale: Locale, fr: T, en: T): T => locale === 'en' ? en : fr
export const siteDescription = (locale: Locale) => choose(locale,
  'Mieux vivre, avec soi-même et en société. Recherche et réflexions.',
  'Living better, with ourselves and with others. Research and reflections.')

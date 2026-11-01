import type { Config, ThemeUserConfig, IntegrationUserConfig } from 'astro-pure/types';
// Pure defaults remain temporary until the design workshop.
export const theme: ThemeUserConfig = {
  title: 'Paul', author: 'Paul',
  description: 'Mieux vivre, avec soi-même et en société. Recherche et réflexions.',
  favicon: '/favicon.svg', socialCard: '/social-card.jpg',
  logo: { src: '/src/assets/blog-placeholder-about.jpg', alt: 'Image de démonstration' },
  locale: { lang: 'fr', attrs: 'fr_FR', dateLocale: 'fr-FR', dateOptions: { day: 'numeric', month: 'short', year: 'numeric' } },
  titleDelimiter: '·', prerender: true,
  header: { menu: [{ title: 'Articles', link: '/blog/' }, { title: 'À propos', link: '/about/' }] },
  footer: { year: `© ${new Date().getFullYear()} `, credits: true, social: [{ icon: 'rss', label: 'Flux RSS', href: '/rss.xml' }] },
  content: { externalLinks: { content: ' ↗' }, blogPageSize: 8, share: [], imageCaption: true },
};
export const integ: IntegrationUserConfig = {
  links: { logbook: [], applyTip: [], cacheAvatar: false }, pagefind: true,
  quote: { server: '', target: '' },
  typography: { class: 'prose text-base', blockquoteStyle: 'italic', inlineCodeBlockStyle: 'modern' },
  mediumZoom: { enable: false }, waline: { enable: false },
};
const config = { ...theme, integ } as Config;
export default config;

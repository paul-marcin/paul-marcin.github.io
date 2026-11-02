// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import Pure from 'astro-pure';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import config from './src/site.config.ts';
export default defineConfig({
  site: 'https://paul-marcin.github.io', output: 'static',
  i18n: { defaultLocale: 'fr', locales: ['fr', 'en'], routing: { prefixDefaultLocale: false } },
  integrations: [mdx(), sitemap(), Pure(config)],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex], shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
  fonts: [
    // Texte et interface : Literata (choisie le 1er novembre 2026). Plage variable 400–700.
    { provider: fontProviders.google(), name: 'Literata', cssVariable: '--font-literata', styles: ['normal', 'italic'], weights: ['400 700'], subsets: ['latin'] },
    // Titres : Fraunces (choisie le 1er novembre 2026)
    { provider: fontProviders.google(), name: 'Fraunces', cssVariable: '--font-fraunces', styles: ['normal'], weights: ['400 700'], subsets: ['latin'] },
  ],
});

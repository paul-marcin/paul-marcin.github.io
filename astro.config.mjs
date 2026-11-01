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
  integrations: [mdx(), sitemap(), Pure(config)],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex], shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } } },
  fonts: [{ provider: fontProviders.fontshare(), name: 'Satoshi', cssVariable: '--font-satoshi', styles: ['normal', 'italic'], weights: [400, 500], subsets: ['latin'] }],
});

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(), description: z.string(),
    // Preserve starter frontmatter and expose Pure metadata without rewriting articles.
    pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(), tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), pin: z.boolean().optional(),
    language: z.string().optional(), comment: z.boolean().default(false),
  }).transform(data => ({ ...data, publishDate: data.pubDate,
    heroImage: data.heroImage ? { src: data.heroImage, alt: data.title } : undefined,
  })),
});
export const collections = { blog };

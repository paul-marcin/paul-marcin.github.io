import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const translationFields = {
  locale: z.enum(['fr', 'en']).default('fr'),
  translationOf: z.string().optional(),
};
const validTranslation = (data: { locale: string; translationOf?: string }) =>
  data.locale === 'en' ? !!data.translationOf : !data.translationOf;
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    ...translationFields,
    title: z.string(), description: z.string(),
    // Preserve starter frontmatter and expose Pure metadata without rewriting articles.
    pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(), tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), pin: z.boolean().optional(),
    language: z.string().optional(), comment: z.boolean().default(false),
    // Domaine affiché en colonne sur l'accueil. Facultatif tant que les articles du starter n'en ont pas.
    category: z.enum(['recherche', 'psychiatrie', 'politique']).optional(),
  }).refine(validTranslation, 'Une traduction anglaise doit référencer sa source française ; une source française ne doit pas avoir translationOf.').transform(data => ({ ...data, publishDate: data.pubDate,
    heroImage: data.heroImage ? { src: data.heroImage, alt: data.title } : undefined,
  })),
});
// Pages projet de l'espace Recherche : synthèse en tête, sections en Markdown/MDX.
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    ...translationFields,
    title: z.string(), description: z.string(),
    pubDate: z.coerce.date(), updatedDate: z.coerce.date().optional(),
    // Repères affichés sous le titre (domaine, approche, statut…)
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    // Accès rapides vers des sections du projet (ancres des titres)
    shortcuts: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // Articles qui expliquent le projet, affichés en fin de page
    related: z.array(reference('blog')).default([]),
    draft: z.boolean().default(false),
  }).refine(validTranslation, 'Métadonnées de traduction invalides.'),
});
export const collections = { blog, projects };

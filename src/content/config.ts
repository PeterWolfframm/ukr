import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const places = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/places" }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['restaurant', 'organization']),
    location: z.string(),
    locationBadge: z.string(),
    address: z.string(),
    verified: z.boolean().optional(),
    tags: z.array(z.string()),
    ctaPrimary: z.object({
      label: z.string(),
      url: z.string(),
    }),
    ctaSecondary: z.object({
      label: z.string(),
      url: z.string(),
    }),
    image: z.string().optional(),
    mapEmbed: z.string().optional(),
  }),
});

export const collections = { places };

// Helper types for i18n
export const locales = ['de', 'uk'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'de';

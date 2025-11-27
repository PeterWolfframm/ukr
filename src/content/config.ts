import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const places = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/places" }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['restaurant', 'organization', 'medical']),
    location: z.string(),
    locationBadge: z.string(),
    address: z.string(),
    hours: z.string(),
    rating: z.number().optional(),
    verified: z.boolean().optional(),
    phone: z.string().optional(),
    priceLevel: z.string().optional(),
    insurance: z.string().optional(),
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

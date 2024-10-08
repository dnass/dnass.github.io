// src/content/config.ts

import { defineCollection, z } from 'astro:content';

export const collections = {
  project: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        publications: z.array(z.string()),
        date: z.string(),
        image: image(),
        alt: z.string(),
        info: z.string().optional(),
        url: z.string(),
        technologies: z.array(z.string()),
        roles: z.array(z.string()),
        dark: z.boolean().optional().default(false),
      }),
  }),
};

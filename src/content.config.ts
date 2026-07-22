import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number().int(),
    role: z.string(),
    stack: z.array(z.string()),
    website: z.url().optional(),
    source: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };

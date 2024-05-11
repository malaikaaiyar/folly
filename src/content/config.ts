// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const articles = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.string().transform((str) => new Date(str)),
    updated: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    published: z.boolean().optional().default(false),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
    imageUrl: z.string(),
    author: reference("authors"),
    relatedArticles: z.array(reference("articles")).optional(),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    website: z.string().optional(),
  }),
});

const podcasts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    created: z.string().transform((str) => new Date(str)),
    published: z.boolean().optional().default(false),
    tags: z.array(z.string()),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  articles,
  authors,
  podcasts,
  pages,
};

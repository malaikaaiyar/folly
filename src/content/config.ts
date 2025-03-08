// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    published: z.boolean().default(false),
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
  'articles': articlesCollection,
  authors,
  podcasts,
  pages,
};

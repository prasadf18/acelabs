import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Notes are Markdown files in src/content/notes/.
 * The file name becomes the URL: my-post.md -> /notes/my-post/
 */
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(["AI", "Cloud", "Engineering"]),
    /** Set to true to hide a note from the site while it is still being written. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };

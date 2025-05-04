import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "src/content/blog",
    }),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        author: z.string(),
        image: z.object({
            hasImage: z.boolean(),
            url: z.string().optional(),
            alt: z.string().optional(),
        }),
        tags: z.array(z.string()),
        lang: z.string().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
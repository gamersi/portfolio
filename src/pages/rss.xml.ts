import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: any) {
  return rss({
    title: "Simon (aka gamersi) Portfolio and Blog",
    description: "A blog and portfolio site for Simon (aka gamersi)",
    site: context.site,
    customData: `<language>en-US</language>`, // @ts-ignore
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
  });
}

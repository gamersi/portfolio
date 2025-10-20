import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
    const posts = await getCollection('blog');
    return rss({
        title: 'Simon (aka gamersi) Portfolio and Blog',
        description: 'A blog and portfolio site for Simon (aka gamersi)',
        site: context.site,
        items: posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()).map((post) => ({
            title: post.data.title,
            link: `/posts/${post.id}`,
            pubDate: post.data.pubDate,
            author: post.data.author,
            categories: post.data.tags,
        })),
    });
}

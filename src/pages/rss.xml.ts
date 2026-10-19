import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../../site.config.ts';
import { getPosts, postUrl, excerpt } from '../lib/posts.ts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: postUrl(post),
      description: excerpt(post),
      categories: post.data.tags,
    })),
    customData: `<language>${siteConfig.lang}</language>`,
  });
}

import { getCollection, type CollectionEntry } from 'astro:content';
import { siteConfig } from '../../site.config.ts';

export type Post = CollectionEntry<'posts'>;

// build 開始的時間,顯示於頁尾
export const builtAt = new Date();

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post): string {
  return `/posts/${post.id}/`;
}

// 標籤網址:去頭尾空白、轉小寫、空白與斜線改成 -
export function tagSlug(tag: string): string {
  return tag.trim().toLowerCase().replace(/[\s/]+/g, '-');
}

export function tagUrl(tag: string): string {
  return `/tags/${tagSlug(tag)}/`;
}

export function formatDate(date: Date, withTime = false): string {
  return new Intl.DateTimeFormat(siteConfig.lang, {
    timeZone: siteConfig.timeZone,
    dateStyle: 'medium',
    ...(withTime ? { timeStyle: 'short' } : {}),
  }).format(date);
}

// 取 Markdown 原文的第一個一般段落,作為摘要與 meta description
export function excerpt(post: Post, length = 120): string {
  const paragraph =
    (post.body ?? '')
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find((block) => block && !/^(#|!\[|>|[-*+] |\d+\. |```|<|\|)/.test(block)) ?? '';
  const text = paragraph
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > length ? `${text.slice(0, length)}…` : text;
}

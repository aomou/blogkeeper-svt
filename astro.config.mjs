// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './site.config.ts';

export default defineConfig({
  site: siteConfig.url,
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: {
    // 文章內圖片與封面自動產生多種尺寸
    layout: 'constrained',
    responsiveStyles: true,
  },
});

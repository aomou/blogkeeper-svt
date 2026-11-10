// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './site.config.ts';

export default defineConfig({
  site: siteConfig.url,
  trailingSlash: 'always',
  // lightningcss 會把 max-width 編成 width<= ,舊版手機瀏覽器會整段丟掉。
  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
  integrations: [sitemap()],
  image: {
    // 文章內圖片與封面自動產生多種尺寸
    layout: 'constrained',
    responsiveStyles: true,
  },
});

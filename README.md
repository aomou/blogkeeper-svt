# blogkeeper-svt

部落格架構的 Sveltia 路線(svt)。Astro 靜態網站,文章與圖片都在這個 repo。架構與決策見 [aomou/blogkeeper](https://github.com/aomou/blogkeeper)。

目前進度:Phase 1 階段一(網站骨架)。CMS、OAuth、部署尚未加入。

## 開發

需要 Node 24(版本寫在 `.nvmrc`)。

```bash
npm ci          # 依 lockfile 安裝
npm run dev     # 本機預覽 http://localhost:4321
npm run build   # 輸出至 dist/
```

## 站台專屬檔案

開新站時只改這些,其餘檔案是共用範本:

| 檔案 | 內容 |
|---|---|
| `site.config.ts` | 站名、網址、語系、時區、聯絡方式、預設分享圖 |
| `src/content/posts/` | 文章,一篇一個資料夾:`<slug>/index.md` |
| `src/assets/uploads/` | 集中圖庫 |
| `public/favicon.svg`、`public/og-default.png` | 網站圖示、預設分享圖 |

## 文章欄位

| 欄位 | 必填 | 說明 |
|---|---|---|
| `title` | ✅ | 標題 |
| `date` | ✅ | 日期 |
| `cover` | | 封面,同時作為分享預覽圖 |
| `tags` | | 標籤清單 |

新增欄位一律設為選填或給預設值(`src/content.config.ts`),既有文章不需修改。

## 網址

| 網址 | 頁面 |
|---|---|
| `/` | 文章列表 |
| `/posts/<slug>/` | 文章 |
| `/tags/`、`/tags/<tag>/` | 標籤 |
| `/rss.xml`、`/sitemap-index.xml` | RSS、sitemap |

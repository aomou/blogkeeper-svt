# blogkeeper-svt

部落格架構的 Sveltia 路線(svt)。Astro 靜態網站,文章與圖片都在這個 repo。架構與決策見 [aomou/blogkeeper](https://github.com/aomou/blogkeeper)。

網址:https://blogkeeper.afmo.cc

目前進度:Phase 1 階段三進行中。網站已部署(試用期間以 Cloudflare Access 保護),後台已加入,待測試登入。

## 開發

需要 Node 24(版本寫在 `.nvmrc`)。

```bash
npm ci          # 依 lockfile 安裝
npm run dev     # 本機預覽 http://localhost:4321
npm run build   # 輸出至 dist/
npx wrangler dev   # 以 Cloudflare 的執行環境在本機預覽 dist/
```

部署由 Cloudflare Workers Builds 在 main 更新時自動執行(`npm run build` → `npx wrangler deploy`),設定在 `wrangler.jsonc`。

`package.json` 的 `allowScripts` 綁定了 esbuild 與 workerd 的版本;升級後執行 `npm install-scripts approve esbuild workerd` 重新批准。

## 後台

網址:https://blogkeeper.afmo.cc/admin/ ,以 GitHub 帳號登入(經 `auth.afmo.cc` 的 sveltia-cms-auth Worker)。

| 檔案 | 內容 |
|---|---|
| `public/admin/index.html` | 載入 Sveltia CMS,版本鎖在這裡 |
| `public/admin/config.yml` | CMS 設定:repo、發布模式、圖片轉檔、文章欄位 |

- 發布模式為 Editorial Workflow,階段只有「草稿 → 可發布」:儲存只 commit 到該篇的分支,在看板發布才合併進 main
- 上傳的圖片轉成 WebP、長邊最多 2048px,存到 `src/assets/uploads/`,檔名為「文章網址-亂碼」
- 文章網址預設為建立當天日期,只能在建立時修改

改欄位時 `config.yml` 與 `src/content.config.ts` 要一起改。

## 站台專屬檔案

開新站時只改這些,其餘檔案是共用範本:

| 檔案 | 內容 |
|---|---|
| `site.config.ts` | 站名、網址、語系、時區、聯絡方式、預設分享圖 |
| `src/content/posts/` | 文章,一篇一個資料夾:`<slug>/index.md` |
| `src/assets/uploads/` | 集中圖庫 |
| `public/favicon.svg`、`public/og-default.png` | 網站圖示、預設分享圖 |
| `public/admin/config.yml` | 後台設定裡的 `repo`、`site_url` |

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

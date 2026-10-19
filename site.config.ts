// 站台專屬設定。開新站時只改這個檔案、src/content/、src/assets/uploads/ 與 public/ 的圖示。
export const siteConfig = {
  title: '我的部落格',
  description: '圖文部落格',
  // 正式網址,sitemap、RSS、OG 圖的絕對網址都由此產生
  url: 'https://example.com',
  lang: 'zh-Hant-TW',
  timeZone: 'Asia/Taipei',
  // 文章沒有 cover 時使用的分享預覽圖,放在 public/
  defaultOgImage: '/og-default.png',
  contact: {
    email: 'hello@example.com',
  },
};

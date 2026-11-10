// 站台專屬設定。開新站時只改這個檔案、src/content/、src/assets/uploads/ 與 public/ 的圖示。
export const siteConfig = {
  title: 'My blog',
  description: 'A blog of writing and images',
  // 正式網址,sitemap、RSS、OG 圖的絕對網址都由此產生
  url: 'https://blogkeeper.afmo.cc',
  lang: 'zh-Hant-TW',
  timeZone: 'Asia/Taipei',
  // 文章沒有 cover 時使用的分享預覽圖,放在 public/
  defaultOgImage: '/og-default.png',
  contact: {
    email: 'hello@example.com',
  },
  // Home blurb, About copy, and About contact links. Replace the placeholders in this one place.
  about: {
    blurb: '[Placeholder] Notes, travel, and whatever I am reading.',
    moreLabel: 'More about me →',
    paragraphs: [
      '[Placeholder] This page is a layout preview only. Replace the paragraphs below with a real bio later.',
      '[Placeholder] I write about software, travel, and things I am learning. This sentence is sample copy for spacing — not a real statement about the author.',
      '[Placeholder] A second paragraph so the page has a bit of length. Swap this out when the real About text is ready.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/your-handle', text: 'your-handle' },
      { label: 'X', href: 'https://x.com/your-handle', text: '@your-handle' },
      { label: 'Email', href: 'mailto:you@example.com', text: 'you@example.com' },
    ],
  },
};

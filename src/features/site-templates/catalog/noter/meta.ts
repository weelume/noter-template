import type {SiteTemplate} from '../../types';
export const noterTemplate:SiteTemplate={...{
  "id": "noter",
  "name": "Noter · 设计与开发手记",
  "localizedNames": {
    "en": "Noter · Minimal editorial blog"
  },
  "sceneId": "brand-portfolio",
  "listed": false,
  "tags": [
    "编辑博客",
    "设计与开发",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "极简编辑博客，含首页、3个分类、9篇完整双语文章、关于、联系与政策；支持站内搜索和本地演示订阅。",
  "accentColor": "#44735b",
  "cover": "/templates/noter/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/noter/screenshots/desktop-home.webp",
      "alt": "Noter desktop home",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/noter/screenshots/desktop-design.webp",
      "alt": "Noter desktop design",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/noter/screenshots/desktop-post.webp",
      "alt": "Noter desktop post",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/noter/screenshots/desktop-contact.webp",
      "alt": "Noter desktop contact",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/noter/screenshots/tablet-home.webp",
      "alt": "Noter tablet home",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/noter/screenshots/tablet-design.webp",
      "alt": "Noter tablet design",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/noter/screenshots/tablet-post.webp",
      "alt": "Noter tablet post",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/noter/screenshots/tablet-contact.webp",
      "alt": "Noter tablet contact",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/noter/screenshots/mobile-home.webp",
      "alt": "Noter mobile home",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/noter/screenshots/mobile-design.webp",
      "alt": "Noter mobile design",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/noter/screenshots/mobile-post.webp",
      "alt": "Noter mobile post",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/noter/screenshots/mobile-contact.webp",
      "alt": "Noter mobile contact",
      "device": "mobile",
      "width": 390,
      "height": 844
    }
  ]
},surfaces:[{id:'site',name:'编辑博客',platform:'pc',locales:['zh','en'],pages:[
{...{"slug":"","title":"首页","localizedTitles":{"en":"Home"}},load:()=>import('./pages/HomePage')},
{...{"slug":"about","title":"关于","localizedTitles":{"en":"About"}},load:()=>import('./pages/AboutPage')},
{...{"slug":"contact","title":"联系","localizedTitles":{"en":"Contact"}},load:()=>import('./pages/ContactPage')},
{...{"slug":"terms","title":"条款与政策","localizedTitles":{"en":"Terms & Policy"}},load:()=>import('./pages/TermsPage')},
{...{"slug":"categories/design","title":"设计","localizedTitles":{"en":"Design"}},load:()=>import('./pages/CategoryPage')},
{...{"slug":"categories/experience","title":"体验","localizedTitles":{"en":"Experience"}},load:()=>import('./pages/CategoryPage')},
{...{"slug":"categories/development","title":"开发","localizedTitles":{"en":"Development"}},load:()=>import('./pages/CategoryPage')},
{...{"slug":"posts/choosing-between-qual-and-quant-research","title":"如何选择定性与定量研究","localizedTitles":{"en":"Choosing Between Qual and Quant Research"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/do-users-really-hate-change","title":"用户真的讨厌改变吗","localizedTitles":{"en":"Why \"Users Hate Change\" Is Mostly Wrong"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/five-fixes-for-better-sticky-headers","title":"让吸顶导航更好用的五个方法","localizedTitles":{"en":"Five Fixes for Better Sticky Headers"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/guide-remote-ux-collaboration","title":"远程用户体验协作指南","localizedTitles":{"en":"A Guide to Remote UX Collaboration"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/hiding-interaction-delays-with-progress-indicators","title":"用进度反馈缓解交互等待","localizedTitles":{"en":"Hiding Interaction Delays with Progress Indicators"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/how-to-write-cancellation-emails","title":"如何写好订阅取消邮件","localizedTitles":{"en":"How to Write Cancellation Emails That Works"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/the-principle-of-contrast-in-ui-design","title":"界面设计中的对比原则","localizedTitles":{"en":"The Principle of Contrast in UI Design"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/three-myths-about-the-roi-of-ux","title":"用户体验投资回报的三个误区","localizedTitles":{"en":"Three Myths About the ROI of UX"}},load:()=>import('./pages/PostPage')},
{...{"slug":"posts/what-the-best-intranets-get-right","title":"优秀企业内网做对了什么","localizedTitles":{"en":"What the Best Intranets Get Right"}},load:()=>import('./pages/PostPage')}]}]};

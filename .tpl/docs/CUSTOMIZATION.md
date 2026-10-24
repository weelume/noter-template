# 修改指南

品牌：config/brand.ts 与 host.tsx；文案：content/site.ts、about.ts、terms.ts；文章：content/posts.ts；主题：theme.css 的 --nt-* 变量；折射：components/FlutedGlass.tsx；表单：components/Form.tsx；菜单和搜索：components/Shell.tsx。所有入口位于 src/features/site-templates/catalog/noter/。

增删文章需同步 meta.ts 与 .tpl/template.json 的 pages，前后篇索引与搜索数量自动计算。每个分类的数据来自实际文章。修改对应语言、设备和页面检查，不手工修改 pnpm 锁文件。

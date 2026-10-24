# Noter · 设计与开发手记

独立 React / Next.js 双语编辑博客。包含首页、关于、联系、条款、3 个分类与 9 篇文章，共16页、32条语言路由。默认中文，英文路径为 /en。具备分类导航、菜单、站内搜索、加载更多、文章前后翻页、联系与订阅本地校验、WebGL2 长虹玻璃折射。

## 准备与运行

使用 .nvmrc 固定的 Node 和 package.json 固定的 pnpm。先 `pnpm install --frozen-lockfile`，再 `pnpm dev`；默认 http://127.0.0.1:43360 ，可通过 PORT / HOSTNAME 显式配置。Ctrl+C 停止。所有依赖安装和生产构建应在本地 Linux 文件系统进行。

## 检查

`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。生产预览 `pnpm start`。共享包由 `pnpm bundle` 输出至忽略目录 .work/packages。包入口 ./template 提供页面注册，./host 提供通用品牌与可选页脚插槽；生产消费者固定归档与 SHA256。

## 修改

品牌 config/brand.ts，双语文章 content/posts.ts，通用文案 content/site.ts，页面 pages/，共用交互 components/，主题 theme.css，注册 meta.ts；均位于 src/features/site-templates/catalog/noter/。新增文章必须同时更新注册与 .tpl/template.json。运行素材在 public/templates/noter，市场截图在 .tpl/assets。

## 限制

表单仅本地校验，未连接邮件或数据库。无评论后端。WebGL2 不可用或纹理加载失败会显示明确错误并记录日志，不静默换成截图。参考站的文章及图片许可未确认，禁止据此宣称商业授权或公开上架。Git 公开仓库创建被当前任务审批阻止，gitUrl 暂未填写，协议检查将明确失败；不得伪造地址。完整原站三端逐帧动效对照尚未完成。

进一步规则见 .tpl/docs/ARCHITECTURE.md、CUSTOMIZATION.md、ASSETS.md、MOTION.md、VERIFICATION.md 与 LICENSE.md。

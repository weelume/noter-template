# 架构

Next App Router 仅选择注册页面；feature-based 模块按 config、content、components、pages 分工。所有响应式设备共用 site 端，中文默认、英文 /en。品牌注入通过 React Context，外部消费者可提供 Logo、市场入口与备案插槽。页面采用 Next Link 客户端路由。路由语言切换保留查询和锚点。表单无外部依赖，字段值不写日志。

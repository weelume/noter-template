import type {ReactNode} from 'react';import './globals.css';
export const metadata={title:'Noter · 设计与开发手记',description:'关于设计、体验与开发的独立双语博客'};
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}

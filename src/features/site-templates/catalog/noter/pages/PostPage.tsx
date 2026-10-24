'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import type {SiteTemplatePageProps} from '../../../types';
import {posts} from '../content/posts';
import {ui} from '../content/site';
import {Shell} from '../components/Shell';
import {CategoryLabel} from '../components/ArticleCard';
import {pageHref} from '../components/routing';
export default function PostPage({locale='zh',basePath}:SiteTemplatePageProps){const path=usePathname(),index=posts.findIndex(p=>path.endsWith('/posts/'+p.slug)),post=posts[index],t=ui[locale];if(!post)throw new Error('Noter 文章路由与注册不一致');return <Shell {...{locale,basePath}}><article className="nt-container nt-post"><header className="nt-post-heading"><CategoryLabel {...{post,locale,basePath}}/><h1>{post.title[locale]}</h1><time dateTime={post.date}>{new Intl.DateTimeFormat(locale==='zh'?'zh-CN':'en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(post.date))}</time></header><img className="nt-post-cover" src={post.image} width={1440} height={960} alt="" fetchPriority="high"/><div className="nt-prose">{post.body.map((block,i)=>block.tag==='h2'?<h2 id={'section-'+i} key={i}>{block[locale]}</h2>:<p key={i}>{block[locale]}</p>)}</div><nav className="nt-post-pagination" aria-label={locale==='zh'?'文章翻页':'Article pagination'}>{[index>0?posts[index-1]:null,index<posts.length-1?posts[index+1]:null].map((p,i)=>p?<Link key={i} href={pageHref(basePath,'posts/'+p.slug)}><span className="nt-label">{i===0?t.previous:t.next}</span><h2>{p.title[locale]}</h2></Link>:<span key={i}/>)}</nav></article></Shell>}

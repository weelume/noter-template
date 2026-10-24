'use client';
import {useState} from 'react';
import Link from 'next/link';
import {motion,useReducedMotion} from 'framer-motion';
import type {SiteTemplatePageProps} from '../../../types';
import {posts} from '../content/posts';
import {ui} from '../content/site';
import {brand} from '../config/brand';
import {Shell} from '../components/Shell';
import {ArticleCard,CategoryLabel} from '../components/ArticleCard';
import {DemoForm} from '../components/Form';
import {pageHref} from '../components/routing';
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps){
 const t=ui[locale],reduce=useReducedMotion(),[count,setCount]=useState(5);const featured=posts[5];
 return <Shell {...{locale,basePath}}><div className="nt-container"><section className="nt-hero"><Link className="nt-hero-image nt-image-link" href={pageHref(basePath,'posts/'+featured.slug)} aria-label={featured.title[locale]}><img src={featured.image} width={1116} height={836} alt="" fetchPriority="high"/></Link><div className="nt-hero-copy"><CategoryLabel post={featured} {...{locale,basePath}}/><h1><Link href={pageHref(basePath,'posts/'+featured.slug)}>{featured.title[locale]}</Link></h1><p>{featured.body[0][locale]}</p></div></section>
 <section className="nt-featured" aria-label={locale==='zh'?'精选文章':'Featured articles'}>{posts.slice(6).map(p=><ArticleCard key={p.slug} post={p} {...{locale,basePath}} overlay/>)}</section>
 <div className="nt-editorial-grid"><section><h2 className="nt-section-label">{t.latest}</h2><motion.div layout={!reduce} className="nt-latest">{posts.slice(0,count).map(p=><ArticleCard key={p.slug} post={p} {...{locale,basePath}}/>)}</motion.div>{count<posts.length?<button className="nt-button nt-load" onClick={()=>{setCount(Math.min(count+4,posts.length));if(process.env.NODE_ENV==='development')console.debug('[noter:pagination]',{from:count,to:Math.min(count+4,posts.length),total:posts.length})}}>{t.loadMore}</button>:<p role="status" className="nt-label">{t.allLoaded}</p>}</section>
 <aside className="nt-sidebar"><h2 className="nt-section-label">{t.welcome}</h2><img className="nt-portrait" src={brand.portrait} width={728} height={808} alt={t.author}/><h3>{t.author}</h3><p>{t.authorBio}</p><Link className="nt-text-link" href={pageHref(basePath,'about')}>{t.readMore}</Link><div className="nt-subscribe-card"><h2 className="nt-section-label">{t.subscribe}</h2><p>{t.subscribeText}</p><DemoForm {...{locale,basePath}}/></div><div className="nt-ad"><span>{t.ad}</span></div></aside></div></div></Shell>
}

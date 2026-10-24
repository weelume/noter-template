'use client';
import {useEffect,useRef,useState,type ReactNode} from 'react';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {AnimatePresence,motion,useReducedMotion} from 'framer-motion';
import type {SiteTemplatePageProps} from '../../../types';
import {categories,ui} from '../content/site';
import {posts} from '../content/posts';
import {brand} from '../config/brand';
import {useNoterHost} from '../host';
import {pageHref,switchHref} from './routing';
import {DemoForm} from './Form';
import '../theme.css';

export function Shell({locale='zh',basePath,children}:{children:ReactNode}&SiteTemplatePageProps){
 const t=ui[locale],host=useNoterHost(),pathname=usePathname(),router=useRouter(),reduce=useReducedMotion();
 const[panel,setPanel]=useState<'menu'|'search'|null>(null),[query,setQuery]=useState('');
 const trigger=useRef<HTMLButtonElement|null>(null),panelRef=useRef<HTMLDivElement>(null);
 const matches=posts.filter(p=>(p.title[locale]+' '+p.body.map(b=>b[locale]).join(' ')).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
 function close(){setPanel(null);trigger.current?.focus()}
 // 模态面板锁定滚动、限制焦点范围，退出时归还触发按钮；不记录查询和表单内容。
 useEffect(()=>{if(!panel)return;const previous=document.body.style.overflow;document.body.style.overflow='hidden';const focusable=()=>Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button,a,input')??[]);(panel==='search'?panelRef.current?.querySelector<HTMLInputElement>('input'):focusable()[0])?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setPanel(null);trigger.current?.focus()}if(e.key==='Tab'){const items=focusable(),first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}};document.addEventListener('keydown',key);return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',key)}},[panel]);
 useEffect(()=>{if(process.env.NODE_ENV==='development')console.debug('[noter:route]',{pathname,locale})},[pathname,locale]);
 const navigation=<>{categories.map(c=><Link key={c.id} onClick={()=>setPanel(null)} href={pageHref(basePath,'categories/'+c.id)}>{c[locale]}</Link>)}</>;
 return <div className="noter" lang={locale==='zh'?'zh-CN':'en'}>
 <Link className="nt-skip" href="#nt-main">{t.skip}</Link>
 <header className="nt-header"><div className="nt-nav-left"><button type="button" className="nt-icon" aria-label={t.menu} aria-expanded={panel==='menu'} aria-controls="nt-panel" onClick={event=>{trigger.current=event.currentTarget;setPanel('menu')}}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg></button><nav aria-label={locale==='zh'?'文章分类':'Article categories'}>{navigation}</nav></div>
 <Link className="nt-brand" href={pageHref(basePath)}><img src={host.logo} width={32} height={32} alt=""/><span>{host.brandName[locale]}</span></Link>
 <div className="nt-nav-right"><Link className="nt-contact-nav" href={pageHref(basePath,'contact')}>{t.contact}</Link><Link className="nt-lang" href={switchHref(pathname,basePath,locale)} aria-label={t.language} onClick={event=>{event.preventDefault();router.push(switchHref(window.location.pathname,basePath,locale,window.location.search,window.location.hash))}}>{locale==='zh'?'EN':'中文'}</Link><button type="button" className="nt-icon" aria-label={t.search} aria-expanded={panel==='search'} aria-controls="nt-panel" onClick={event=>{trigger.current=event.currentTarget;setPanel('search')}}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button></div></header>
 <main id="nt-main" className="nt-main" key={pathname}>{children}</main>
 <footer className="nt-footer"><div className="nt-footer-inner"><div><Link className="nt-footer-brand" href={pageHref(basePath)}><img src={host.logo} width={42} height={42} alt=""/>{host.brandName[locale]}</Link><p>{t.tagline}</p><nav aria-label={locale==='zh'?'页脚导航':'Footer navigation'}>{navigation}<Link href={pageHref(basePath,'about')}>{t.about}</Link><Link href={pageHref(basePath,'contact')}>{t.contact}</Link><Link href={pageHref(basePath,'terms')}>{t.terms}</Link></nav></div><div><h2 className="nt-label">{t.subscribe}</h2><DemoForm {...{locale,basePath}}/></div></div><div className="nt-copyright">© {brand.year} {host.brandName[locale]} · {t.tagline}{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>
 {host.marketplaceHref&&<Link className="nt-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}><img src={host.lightLogo??host.logo} width={24} height={24} alt=""/><span>{host.brandName[locale]}</span></Link>}
 <AnimatePresence>{panel&&<motion.div className="nt-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduce?0:0.2}} onClick={close}><motion.div id="nt-panel" ref={panelRef} className={'nt-panel '+(panel==='menu'?'nt-menu-panel':'nt-search-panel')} role="dialog" aria-modal="true" aria-label={panel==='menu'?t.menu:t.search} initial={panel==='menu'?{x:'-100%'}:{opacity:0,scale:0.95}} animate={{x:0,y:0,opacity:1,scale:1}} exit={panel==='menu'?{x:'-100%'}:{opacity:0}} transition={reduce?{duration:0}:panel==='search'?{type:'spring',stiffness:600,damping:40}:{duration:0.3,ease:[0.22,1,0.36,1]}} onClick={e=>e.stopPropagation()}><button className="nt-icon nt-close" type="button" aria-label={t.close} onClick={close}>×</button>{panel==='menu'?<><div className="nt-panel-brand">{host.brandName[locale]}</div><nav><Link onClick={()=>setPanel(null)} href={pageHref(basePath)}>{t.home}</Link>{navigation}<Link onClick={()=>setPanel(null)} href={pageHref(basePath,'about')}>{t.about}</Link><Link onClick={()=>setPanel(null)} href={pageHref(basePath,'contact')}>{t.contact}</Link><Link onClick={()=>setPanel(null)} href={pageHref(basePath,'terms')}>{t.terms}</Link></nav></>:<><h2>{t.search}</h2><label><span className="nt-sr">{t.search}</span><input autoFocus type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={t.searchPlaceholder}/></label><div aria-live="polite" className="nt-search-results"><p className="nt-label">{t.results} · {matches.length}</p>{matches.map(p=><Link key={p.slug} href={pageHref(basePath,'posts/'+p.slug)} onClick={()=>setPanel(null)}><img src={p.image} alt="" width={72} height={54}/><span>{p.title[locale]}</span></Link>)}{!matches.length&&<p>{t.noResults}</p>}</div></>}</motion.div></motion.div>}</AnimatePresence>
 </div>
}

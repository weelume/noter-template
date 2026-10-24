import Link from 'next/link';
import type {TemplateLocale} from '../../../types';
import type {Post} from '../content/posts';
import {categories} from '../content/site';
import {pageHref} from './routing';
export function CategoryLabel({post,locale,basePath}:{post:Post;locale:TemplateLocale;basePath:string}){return <Link className="nt-label" href={pageHref(basePath,'categories/'+post.category)}>{categories.find(c=>c.id===post.category)?.[locale]}</Link>}
export function ArticleCard({post,locale,basePath,overlay=false}:{post:Post;locale:TemplateLocale;basePath:string;overlay?:boolean}){
 return <article className={'nt-article-card '+(overlay?'nt-overlay-card':'nt-list-card')}>
 <Link className="nt-image-link" tabIndex={-1} aria-hidden="true" href={pageHref(basePath,'posts/'+post.slug)}><img src={post.image} alt="" width={1116} height={836} loading="lazy"/></Link>
 <div className="nt-card-copy"><CategoryLabel {...{post,locale,basePath}}/><h2><Link href={pageHref(basePath,'posts/'+post.slug)}>{post.title[locale]}</Link></h2>{!overlay&&<p>{post.body[0][locale]}</p>}</div></article>
}

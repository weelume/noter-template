'use client';
import {usePathname} from 'next/navigation';
import type {SiteTemplatePageProps} from '../../../types';
import {posts} from '../content/posts';
import {categories} from '../content/site';
import {Shell} from '../components/Shell';
import {ArticleCard} from '../components/ArticleCard';
export default function CategoryPage({locale='zh',basePath}:SiteTemplatePageProps){const path=usePathname();const category=categories.find(c=>path.endsWith('/categories/'+c.id));if(!category)throw new Error('Noter 分类路由与注册不一致');return <Shell {...{locale,basePath}}><div className="nt-container nt-category"><h1>{category[locale]}</h1><div className="nt-category-grid">{posts.filter(p=>p.category===category.id).map(post=><ArticleCard key={post.slug} {...{post,locale,basePath}} overlay/>)}</div></div></Shell>}

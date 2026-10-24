import type {SiteTemplatePageProps} from '../../../types';
import {about} from '../content/about';
import {brand} from '../config/brand';
import {ui} from '../content/site';
import {Shell} from '../components/Shell';
export default function AboutPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell {...{locale,basePath}}><div className="nt-container nt-about"><img src={brand.portrait} width={728} height={808} alt={ui[locale].author}/><article className="nt-prose">{about.map((block,i)=>block.tag==='h2'?<h1 key={i}>{block[locale]}</h1>:block.tag==='li'?<div className="nt-about-item" key={i}>{block[locale]}</div>:<p key={i}>{block[locale]}</p>)}</article></div></Shell>}

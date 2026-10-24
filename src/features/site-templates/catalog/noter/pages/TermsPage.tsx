import type {SiteTemplatePageProps} from '../../../types';
import {terms} from '../content/terms';
import {Shell} from '../components/Shell';
export default function TermsPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell {...{locale,basePath}}><article className="nt-container nt-prose nt-terms">{terms.map((block,i)=>block.tag==='h1'?<h1 key={i}>{block[locale]}</h1>:block.tag==='h6'?<h2 key={i}>{block[locale]}</h2>:block.tag==='li'?<div className="nt-about-item" key={i}>{block[locale]}</div>:<p key={i}>{block[locale]}</p>)}</article></Shell>}

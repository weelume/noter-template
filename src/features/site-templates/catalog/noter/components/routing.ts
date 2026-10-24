import type {TemplateLocale} from '../../../types';
/** basePath 为当前语言根路径，切换语言只替换根，查询及锚点由调用方原样保留。 */
export function siteRoot(basePath:string){return basePath.replace(/\/en\/?$/,'').replace(/\/$/,'')}
export function pageHref(basePath:string,slug=''){return (basePath.replace(/\/$/,'')+(slug?'/'+slug:''))||'/'}
export function switchHref(pathname:string,basePath:string,locale:TemplateLocale,search='',hash=''){
 const current=basePath.replace(/\/$/,'');const relative=current?pathname.slice(current.length):pathname;
 return (siteRoot(basePath)+(locale==='zh'?'/en':'')+relative||'/')+search+hash;
}

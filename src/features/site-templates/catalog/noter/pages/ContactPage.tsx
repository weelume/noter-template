import type {SiteTemplatePageProps} from '../../../types';
import {ui} from '../content/site';
import {Shell} from '../components/Shell';
import {DemoForm} from '../components/Form';
import {FlutedGlass} from '../components/FlutedGlass';
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){return <Shell {...{locale,basePath}}><section className="nt-container nt-contact"><FlutedGlass locale={locale}/><div className="nt-contact-card"><h1>{ui[locale].contact}</h1><DemoForm {...{locale,basePath}} contact/></div></section></Shell>}

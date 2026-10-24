'use client';
import {useState,type FormEvent} from 'react';
import Link from 'next/link';
import type {TemplateLocale} from '../../../types';
import {ui} from '../content/site';
import {pageHref} from './routing';
export function DemoForm({locale,basePath,contact=false}:{locale:TemplateLocale;basePath:string;contact?:boolean}){
 const t=ui[locale];const[status,setStatus]=useState<'idle'|'valid'|'invalid'>('idle');
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();const form=event.currentTarget;const data=new FormData(form);const valid=form.checkValidity()&&(!contact||['name','message'].every(key=>String(data.get(key)||'').trim().length>0));setStatus(valid?'valid':'invalid');if(process.env.NODE_ENV==='development')console.debug('[noter:form]',{kind:contact?'contact':'newsletter',status:valid?'validated-local-only':'invalid',sent:false,saved:false});}
 return <form className={'nt-form '+(contact?'nt-contact-form':'')} onSubmit={submit} onInvalid={()=>setStatus('invalid')}>
 {contact&&<div className="nt-name-row"><label><span className="nt-sr">{locale==='zh'?'名字':'First name'}</span><input name="name" autoComplete="given-name" placeholder={locale==='zh'?'名字':'First name'} required maxLength={120}/></label><label><span className="nt-sr">{locale==='zh'?'姓氏':'Last name'}</span><input name="lastName" autoComplete="family-name" placeholder={locale==='zh'?'姓氏':'Last name'} maxLength={120}/></label></div>}
 <label><span className="nt-sr">{t.email}</span><input type="email" name="email" autoComplete="email" placeholder={t.email} required maxLength={254}/></label>
 {contact&&<label><span className="nt-sr">{t.message}</span><textarea name="message" rows={5} required maxLength={5000} placeholder={t.message}/></label>}
 <button type="submit" className="nt-button">{contact?t.submit:t.subscribeButton}</button>
 <small>{t.agree} <Link href={pageHref(basePath,'terms')}>{t.terms}</Link></small>
 <small className="nt-demo">{t.demo}</small>
 <p role="status" aria-live="polite" className={'nt-form-status '+status}>{status==='valid'?t.valid:status==='invalid'?t.invalid:''}</p>
 </form>
}

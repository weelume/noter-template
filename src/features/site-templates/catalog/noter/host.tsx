'use client';
import {createContext,useContext,type ReactNode} from 'react';
import {brand} from './config/brand';
export interface NoterHost {brandName:{zh:string;en:string};logo:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:{zh:string;en:string};marketplaceAriaLabel?:{zh:string;en:string};filing?:ReactNode}
const Context=createContext<NoterHost>({brandName:brand.name,logo:brand.logo});
export function NoterHostProvider({children,...host}:NoterHost&{children:ReactNode}){return <Context.Provider value={host}>{children}</Context.Provider>}
export const useNoterHost=()=>useContext(Context);

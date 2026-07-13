"use client";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { handbookModules } from "@/content/handbook";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topline"><div className="shell topline-inner"><span>CELE · UNIVERSITY OF NOTTINGHAM NINGBO CHINA</span><span>20 JUL — 11 SEP 2026</span></div></div>
      <div className="shell nav-row">
        <Link className="brand" href="/" aria-label="CELE 2026 学生手册首页"><span className="brand-mark">C</span><span><strong>CELE 2026</strong><small>STUDENT HANDBOOK</small></span></Link>
        <nav className="desktop-nav" aria-label="主要导航">
          {handbookModules.map((item) => <Link key={item.slug} href={`/handbook/${item.slug}`} title={`${item.titleZh} / ${item.titleEn}`}>{item.moduleId}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="icon-button" href="/search" aria-label="搜索"><Search size={18} /></Link>
          <span className="language-switch" aria-label="语言：中文为默认">中 <i /> EN</span>
          <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="移动端导航">{handbookModules.map((item) => <Link key={item.slug} href={`/handbook/${item.slug}`} onClick={() => setOpen(false)}><span>0{item.moduleId}</span><div>{item.titleZh}<small>{item.titleEn}</small></div></Link>)}</nav>}
    </header>
  );
}

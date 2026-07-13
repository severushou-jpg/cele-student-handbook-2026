import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUp, CheckCircle2, ChevronRight, Link2 } from "lucide-react";
import { notFound } from "next/navigation";
import { CampusLifeView } from "@/components/campus-life-view";
import { ContactsView } from "@/components/contacts-view";
import { EmergencyStrip } from "@/components/emergency-strip";
import { RegistrationSchedule } from "@/components/registration-schedule";
import { SafetyView } from "@/components/safety-view";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TimetableView } from "@/components/timetable-view";
import { campusLifeSections } from "@/content/campus-life";
import { getModuleBySlug, handbookModules } from "@/content/handbook";

type PageProps = { params: Promise<{ slug: string }> };

const safetyRulesToc = [
  { id: "rule-1", title: "禁烟与访问区域" },
  { id: "rule-4", title: "紧急电话" },
  { id: "rule-6", title: "疏散与交通" },
  { id: "rule-10", title: "水域安全" },
  { id: "rule-11", title: "政策与法律" },
];

export function generateStaticParams() {
  return handbookModules.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const handbookModule = getModuleBySlug(slug);
  return { title: handbookModule ? `${handbookModule.titleZh} | CELE 2026` : "CELE 2026" };
}

function StandardSections({ slug }: { slug: string }) {
  const handbookModule = getModuleBySlug(slug)!;
  return <div className="standard-sections">{handbookModule.sections.map((section) => <section id={section.id} key={section.id}>
    <div className="section-title-row"><div><span>{section.titleEn}</span><h2>{section.titleZh}</h2></div><a href={`#${section.id}`} aria-label={`复制 ${section.titleZh} 的锚点链接`}><Link2 size={16} /></a></div>
    {section.contentZh.map((text) => <p key={text}>{text}</p>)}
    {section.contentEn?.map((text) => <p lang="en" className="english-original" key={text}>{text}</p>)}
    {section.links && <div className="inline-links">{section.links.map((link) => <a href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>{link.label} <ChevronRight size={15} /></a>)}</div>}
    <small className="source-note">来源：Student Handbook PDF，第 {section.sourcePage} 页</small>
  </section>)}</div>;
}

function TableOfContents({ slug }: { slug: string }) {
  const handbookModule = getModuleBySlug(slug)!;
  const items = slug === "campus-life"
    ? campusLifeSections.map(({ id, titleZh }) => ({ id, title: titleZh }))
    : slug === "provisional-timetable"
      ? Array.from({ length: 8 }, (_, index) => ({ id: `week-${index + 1}`, title: `Week ${index + 1}` }))
      : slug === "contacts"
        ? [{ id: "programme", title: "项目团队" }, { id: "departments", title: "相关部门" }]
        : slug === "safety-rules"
          ? safetyRulesToc
          : handbookModule.sections.map(({ id, titleZh }) => ({ id, title: titleZh }));
  return <aside className="module-toc"><span>ON THIS PAGE</span><strong>本页目录</strong><nav>{items.map((item, index) => <a href={`#${item.id}`} key={item.id}><i>{String(index + 1).padStart(2, "0")}</i>{item.title}</a>)}</nav></aside>;
}

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const handbookModule = getModuleBySlug(slug);
  if (!handbookModule) notFound();
  return <><SiteHeader /><main id="top">
    <div className="module-hero"><div className="shell"><Link href="/" className="back-link"><ArrowLeft size={16} /> 返回首页</Link><div className="module-hero-content"><span>MODULE {String(handbookModule.moduleId).padStart(2, "0")}</span><h1>{handbookModule.titleZh}</h1><p>{handbookModule.titleEn}</p><div><CheckCircle2 size={17} /> 已依据 PDF 第 {handbookModule.sourcePage} 页核验 · {handbookModule.lastVerifiedAt}</div></div></div></div>
    <div className="shell module-layout"><TableOfContents slug={slug} /><article className="module-content">{slug === "provisional-timetable" ? <TimetableView /> : slug === "contacts" ? <ContactsView /> : slug === "safety-rules" ? <SafetyView /> : slug === "campus-life" ? <CampusLifeView /> : <><StandardSections slug={slug} />{slug === "registration-day" && <RegistrationSchedule />}</>}</article></div>
    <a className="back-to-top" href="#top"><ArrowUp size={17} /> 返回顶部</a><EmergencyStrip />
  </main><SiteFooter /></>;
}

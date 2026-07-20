import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, MapPin, PhoneCall } from "lucide-react";
import { AnnouncementBoard } from "@/components/announcement-board";
import { EmergencyStrip } from "@/components/emergency-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { handbookModules } from "@/content/handbook";
import { getCurrentWeek, timetable } from "@/content/timetable";
import { getPublicAnnouncements } from "@/lib/data";

export default async function Home() {
  const announcements = await getPublicAnnouncements();
  const currentWeek = getCurrentWeek(new Date());
  return <>
    <SiteHeader />
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="kicker">2026 · EIGHT WEEK PROGRAMME</span>
            <h1>CELE <span>Pre-Sessional</span><br />Information Hub</h1>
            <p className="hero-zh">2026 CELE 八周学术英语课程<br />在线学生手册</p>
            <div className="course-dates"><CalendarDays size={20} /><div><small>COURSE PERIOD</small><strong>20 JUL — 11 SEP 2026</strong></div></div>
            <div className="quick-links"><Link href="/handbook/provisional-timetable">查看课程安排 <ArrowRight size={17} /></Link><Link href="/handbook/registration-day">查看报到日 <ArrowRight size={17} /></Link><a href="#emergency">紧急联系方式 <PhoneCall size={17} /></a></div>
          </div>
          <div className="hero-side"><AnnouncementBoard announcements={announcements} /></div>
        </div>
      </section>

      <section className="modules-section shell" aria-labelledby="modules-title">
        <div className="section-heading"><div><span className="kicker">HANDBOOK CONTENTS</span><h2 id="modules-title">学生手册目录</h2></div><p>七个模块严格按照原手册顺序编排。<br />点击进入结构化双语内容。</p></div>
        <div className="module-grid">{handbookModules.map((module) => <Link className="module-card" href={`/handbook/${module.slug}`} key={module.slug}><span className="module-number">0{module.moduleId}</span><div><h3>{module.titleZh}</h3><p className="module-en">{module.titleEn}</p><p>{module.description}</p></div><ChevronRight className="module-arrow" size={20} /></Link>)}</div>
      </section>

      <section className="week-section"><div className="shell">
        <div className="section-heading inverse"><div><span className="kicker">COURSE AT A GLANCE</span><h2>{currentWeek ? `本周安排 · Week ${currentWeek.week}` : "八周课程一览"}</h2></div><Link href="/handbook/provisional-timetable">查看完整课程表 <ArrowRight size={17} /></Link></div>
        <div className="week-rail">{(currentWeek ? [currentWeek] : timetable).map((week) => <Link href={`/handbook/provisional-timetable#week-${week.week}`} className="week-chip" key={week.week}><span>W{String(week.week).padStart(2, "0")}</span><strong>{week.range}</strong><small>{week.days.reduce((count, day) => count + day.events.length, 0)} EVENTS</small></Link>)}</div>
      </div></section>

      <div id="emergency"><EmergencyStrip /></div>
      <section className="location-callout shell"><MapPin size={28} /><div><small>REGISTRATION LOCATION</small><h2>D.H. Lawrence Auditorium</h2><p>2026 年 7 月 21 日 · 09:00 · 请携带笔记本电脑</p></div><Link href="/handbook/campus-life#maps">查看校园地图 <ArrowRight size={18} /></Link></section>
    </main>
    <SiteFooter />
  </>;
}

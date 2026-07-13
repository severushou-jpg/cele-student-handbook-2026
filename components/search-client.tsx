"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { handbookModules } from "@/content/handbook";
import { contacts } from "@/content/contacts";
import { campusLifeSections } from "@/content/campus-life";
import { safetyRules } from "@/content/safety-rules";
import { timetable } from "@/content/timetable";

const index = [
  ...handbookModules.flatMap((module) => module.sections.map((section) => ({ moduleId: module.moduleId, moduleTitle: module.titleZh, title: section.titleZh, text: [...section.contentZh, ...(section.contentEn ?? [])].join(" "), href: `/handbook/${module.slug}#${section.id}` }))),
  ...contacts.map((item) => ({ moduleId: 5, moduleTitle: "联系人及相关部门", title: `${item.nameZh} ${item.nameEn}`, text: [item.person, item.responsibility, item.location, item.hours, item.phone, item.email].filter(Boolean).join(" "), href: `/handbook/contacts#${item.group === "programme" ? "programme" : "departments"}` })),
  ...safetyRules.map((item, index) => ({ moduleId: 6, moduleTitle: "《访客安全须知》", title: `安全规则 ${index + 1}`, text: `${item.zh} ${item.en}`, href: `/handbook/safety-rules#rule-${index + 1}` })),
  ...campusLifeSections.flatMap((section) => section.items.map((item) => ({ moduleId: 7, moduleTitle: "附录－校园生活手册", title: item.title, text: item.text, href: `/handbook/campus-life#${section.id}` }))),
  ...timetable.flatMap((week) => week.days.flatMap((day) => day.events.map((event) => ({ moduleId: 2, moduleTitle: "课程安排", title: event.title, text: `${day.date} ${day.day} ${event.time} Week ${week.week}`, href: `/handbook/provisional-timetable#week-${week.week}` })))),
];
const suggestions = ["请假", "考试", "校园卡", "Wi-Fi", "医务室", "宿舍", "报修", "紧急电话", "机场", "地铁"];

export function SearchClient() { const [query, setQuery] = useState(""); const results = useMemo(() => { const term = query.trim().toLowerCase(); if (!term) return []; return index.filter((item) => `${item.title} ${item.text} ${item.moduleTitle}`.toLowerCase().includes(term)).slice(0, 60); }, [query]); return <div className="search-app"><div className="search-box"><Search /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索标题、联系人、地点、电话或关键词" aria-label="搜索手册" /></div><div className="suggestions">{suggestions.map((item) => <button onClick={() => setQuery(item)} key={item}>{item}</button>)}</div>{query && <p className="result-count">找到 {results.length} 条结果</p>}<div className="search-results">{results.map((item, index) => <Link href={item.href} key={`${item.href}-${item.title}-${index}`}><span>0{item.moduleId}</span><div><small>{item.moduleTitle}</small><h2>{item.title}</h2><p>{item.text.length > 150 ? `${item.text.slice(0, 150)}…` : item.text}</p></div></Link>)}</div>{query && results.length === 0 && <div className="empty-state"><h2>未找到相关内容</h2><p>请尝试更短的关键词，或从手册目录进入对应模块。</p></div>}</div>; }

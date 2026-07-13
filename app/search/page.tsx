import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SearchClient } from "@/components/search-client";
export const metadata = { title: "搜索 | CELE 2026" };
export default function SearchPage() { return <><SiteHeader /><main className="search-page"><div className="shell narrow"><span className="kicker">SEARCH THE HANDBOOK</span><h1>搜索学生手册</h1><p>按模块检索课程、联系人、地点、电话与生活服务。</p><SearchClient /></div></main><SiteFooter /></>; }

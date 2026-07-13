import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AnnouncementForm } from "@/components/announcement-form";
import { demoAnnouncements, type Announcement } from "@/lib/announcements";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
type Props = { params: Promise<{ id: string }> };
export const dynamic = "force-dynamic";
export default async function AnnouncementEditorPage({ params }: Props) { const { id } = await params; let item: Announcement | undefined = id === "new" ? undefined : demoAnnouncements.find((entry) => entry.id === id); if (isSupabaseConfigured && id !== "new") { const supabase = await createSupabaseServerClient(); const { data } = await supabase!.from("announcements").select("*").eq("id", id).maybeSingle(); if (data) item = data as Announcement; } return <main className="admin-editor-page"><div className="admin-editor-shell"><Link href="/admin"><ArrowLeft size={17} /> 返回公告列表</Link><span>ANNOUNCEMENT EDITOR</span><h1>{id === "new" ? "新建公告" : "编辑公告"}</h1><p>发布前请检查时间、级别与前台预览。演示公告保存时将创建新记录。</p><AnnouncementForm item={item} configured={isSupabaseConfigured} /></div></main>; }

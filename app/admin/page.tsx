import { AdminDashboard } from "@/components/admin-dashboard";
import { demoAnnouncements, type Announcement } from "@/lib/announcements";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export const dynamic = "force-dynamic";
export default async function AdminPage() { let items: Announcement[] = demoAnnouncements; if (isSupabaseConfigured) { const supabase = await createSupabaseServerClient(); const { data } = await supabase!.from("announcements").select("*").order("updated_at", { ascending: false }); if (data) items = data as Announcement[]; } return <AdminDashboard initialItems={items} configured={isSupabaseConfigured} />; }

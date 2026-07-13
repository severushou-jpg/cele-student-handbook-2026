import { AdminDashboard } from "@/components/admin-dashboard";
import { demoAnnouncements, type Announcement } from "@/lib/announcements";
import { isSupabaseConfigured } from "@/lib/env";
import { requireAdmin } from "@/lib/require-admin";
export const dynamic = "force-dynamic";
export default async function AdminPage() { const supabase = await requireAdmin(); let items: Announcement[] = demoAnnouncements; if (supabase) { const { data } = await supabase.from("announcements").select("*").order("updated_at", { ascending: false }); if (data) items = data as Announcement[]; } return <AdminDashboard initialItems={items} configured={isSupabaseConfigured} />; }

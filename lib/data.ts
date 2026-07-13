import { demoAnnouncements, filterVisibleAnnouncements, type Announcement } from "@/lib/announcements";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getPublicAnnouncements(): Promise<Announcement[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return filterVisibleAnnouncements(demoAnnouncements);
  const { data, error } = await supabase.from("announcements").select("*").order("is_pinned", { ascending: false }).order("publish_at", { ascending: false });
  if (error) return filterVisibleAnnouncements(demoAnnouncements);
  return filterVisibleAnnouncements(data as Announcement[]);
}

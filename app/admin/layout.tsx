import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/env";
import { isAdminRole } from "@/lib/admin";
export default async function AdminLayout({ children }: { children: React.ReactNode }) { if (isSupabaseConfigured) { const supabase = await createSupabaseServerClient(); const { data: { user } } = await supabase!.auth.getUser(); if (!user) redirect("/admin/login"); const { data } = await supabase!.from("admin_profiles").select("role").eq("user_id", user.id).maybeSingle(); if (!isAdminRole(data?.role)) redirect("/admin/login?error=not-authorized"); } return children; }

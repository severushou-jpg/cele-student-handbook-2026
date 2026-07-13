import "server-only";

import { redirect } from "next/navigation";
import { isAdminRole } from "@/lib/admin";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function requireAdmin() {
  if (!isSupabaseConfigured) return null;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase!.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data } = await supabase!
    .from("admin_profiles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!isAdminRole(data?.role)) {
    redirect("/admin/login?error=not-authorized");
  }

  return supabase;
}

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const schema = z.object({ email: z.string().email("请输入有效邮箱"), password: z.string().min(8, "密码至少 8 位") });
type FormData = z.infer<typeof schema>;

export function AdminLoginForm() { const router = useRouter(); const [message, setMessage] = useState(""); const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) }); const onSubmit = async (values: FormData) => { const supabase = createSupabaseBrowserClient(); if (!supabase) { setMessage("尚未配置 Supabase。请先完成 .env.local。 "); return; } const { error } = await supabase.auth.signInWithPassword(values); if (error) { setMessage("登录失败，请检查账号或密码。"); return; } router.push("/admin"); router.refresh(); }; return <form className="admin-form" onSubmit={handleSubmit(onSubmit)}><label>管理员邮箱<input type="email" autoComplete="email" {...register("email")} /></label>{errors.email && <p className="field-error">{errors.email.message}</p>}<label>密码<input type="password" autoComplete="current-password" {...register("password")} /></label>{errors.password && <p className="field-error">{errors.password.message}</p>}<button type="submit" disabled={isSubmitting}>{isSubmitting ? "正在登录…" : "登录后台"}</button>{message && <p role="alert" className="form-message">{message}</p>}</form>; }

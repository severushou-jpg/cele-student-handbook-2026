import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { AdminLoginForm } from "@/components/admin-login-form";
export const metadata = { title: "管理员登录 | CELE 2026" };
export default function AdminLoginPage() { return <main className="admin-login"><div className="login-card"><Link href="/"><ArrowLeft size={16} /> 返回学生手册</Link><div className="login-icon"><LockKeyhole /></div><span>CELE 2026 · ADMIN</span><h1>公告管理后台</h1><p>仅限白名单管理员登录。前台学生访问无需账号。</p><AdminLoginForm /></div></main>; }

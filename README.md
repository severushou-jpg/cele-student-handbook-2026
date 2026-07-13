# CELE Student Handbook 2026

面向 2026 CELE 8-Week Pre-Sessional Course 学生的开放式中文在线手册。前台无需注册或登录，内容根据 41 页 `Pre-sessional Student Handbook 2026 (v10).pdf` 重构，包含七个固定模块、八周课程表、全文搜索、紧急联系与可放大地图。

## 技术栈

- Next.js 16 App Router、React 19、TypeScript strict、Tailwind CSS 4
- Supabase PostgreSQL / Auth / RLS（仅独立公告维护后台使用）
- React Hook Form、Zod、Lucide Icons、Vitest
- Vercel 部署

## 本地启动

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

打开 `http://localhost:3000`。即使不配置 Supabase，公开网站也能使用内置且明确标记为 DEMO 的公告数据。学生浏览全站不需要任何账号。

## Supabase（可选公告后台）

1. 创建 Supabase 项目，在 SQL Editor 执行 `supabase/schema.sql`。
2. 在 Authentication 中创建维护人员账号。
3. 在 SQL Editor 将该账号加入白名单：

```sql
insert into public.admin_profiles (user_id, role)
values ('AUTH_USER_UUID', 'admin');
```

4. 将 Project URL 与 anon key 写入 `.env.local`。不要将 service role key 放入浏览器或 Git。
5. 独立维护入口为 `/admin/login`；公开网站不显示该入口。

## 质量检查

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## 部署

参见 `docs/deployment.md`。生产发布前必须删除 DEMO 公告、复核 `docs/content-audit.md` 中的待确认项，并确认从 PDF 提取的校园地图、图片和品牌元素可以公开使用。

## 内容与版权

页面数据集中存放在 `content/`，每个条目保留 PDF 来源页。PDF 原文件约 33 MB，未复制进仓库；网站只保留地图、二维码和设备说明等难以可靠转换为文字的优化图片。上线前需由学校确认品牌与图片授权。

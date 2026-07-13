# 部署说明

生产环境：[https://cele-student-handbook-2026-fv4camzcs-severus-hou.vercel.app/](https://cele-student-handbook-2026-fv4camzcs-severus-hou.vercel.app/)

截至 2026-07-13，公开学生网站、Supabase 公告数据和管理员登录均已在生产环境验证通过。

## Vercel

1. 将仓库推送至 GitHub，生产分支使用 `main`。
2. 在 Vercel 导入仓库，Framework Preset 选择 Next.js，构建命令保持 `pnpm build`。
3. 如需启用公告后台，在 Vercel 配置 `NEXT_PUBLIC_SUPABASE_URL`、`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`（兼容旧名称 `NEXT_PUBLIC_SUPABASE_ANON_KEY`）和可选的 `NEXT_PUBLIC_SITE_URL`。
4. 部署后检查首页、七个模块、`/search` 与手机端菜单。当前生产地址为 `https://cele-student-handbook-2026-fv4camzcs-severus-hou.vercel.app/`，公开手册无需登录。
5. 独立公告后台入口为 `https://cele-student-handbook-2026-fv4camzcs-severus-hou.vercel.app/admin/login`；该地址不在公开导航中。

## 发布前清单

- 执行 `pnpm lint && pnpm typecheck && pnpm test && pnpm build`。
- 删除 Supabase 中标题含 `DEMO` 的公告。
- 完成 `docs/content-audit.md` 的人工确认项。
- 如使用 `NEXT_PUBLIC_SITE_URL`，将其设置为 `https://cele-student-handbook-2026-fv4camzcs-severus-hou.vercel.app`。
- 确认 Supabase RLS 已开启，不要在 Vercel 中添加 service role key。

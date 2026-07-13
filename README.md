# CELE Student Handbook 2026

2026 CELE 8-Week Pre-Sessional Course 在线学生手册项目的启动仓库。

当前仓库包含：

- `CODEX_PROMPT.md`：交给 Codex 的完整开发任务
- `docs/CONTENT_STRUCTURE.md`：7 个模块的信息架构
- `docs/DEPLOYMENT.md`：GitHub / Vercel / Supabase 部署建议
- `supabase/schema.sql`：公告功能数据库起始结构
- `.env.example`：环境变量模板
- `source/README.md`：原始 PDF 放置说明

## 使用方法

1. 将 `Pre-sessional Student Handbook 2026 (v10).pdf` 放入 `source/`。
2. 在 Codex 中打开本项目根目录。
3. 将 `CODEX_PROMPT.md` 全文发送给 Codex。
4. 让 Codex 完成开发、测试和构建。
5. 创建 GitHub 仓库并推送代码。
6. 在 Supabase 创建项目并执行 `supabase/schema.sql`。
7. 在 Vercel 导入 GitHub 仓库并配置环境变量。

## 建议的仓库设置

学校内部开发阶段建议先设为 **Private**。正式上线前确认：

- 学校品牌与 Logo 使用权限
- 学生手册 PDF 是否可以公开下载
- 联系方式是否允许公开展示
- 管理员账号和公告发布责任人

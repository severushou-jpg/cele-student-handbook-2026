# 推荐部署结构

## 推荐方案

- GitHub：保存代码、版本记录、协作与 Codex 工作区
- Vercel：部署 Next.js 前后端并获得可访问网址
- Supabase：公告数据库、管理员登录和附件存储

## 为什么不只用 GitHub Pages

GitHub Pages 适合纯静态 HTML/CSS/JavaScript。学生手册正文可以静态托管，但“管理员登录 + 公告增删改查 + 定时发布”需要数据库和安全的服务端能力，因此推荐 Vercel + Supabase。

## 预期网址

- GitHub 仓库：`https://github.com/severushou-jpg/cele-student-handbook-2026`
- Vercel 网站：部署时由 Vercel 分配，例如 `https://cele-student-handbook-2026.vercel.app`
- 管理后台：`https://你的域名/admin`

实际网址以创建和部署时系统生成的结果为准。

# Codex 任务：开发 2026 CELE 在线学生手册中文网页（含公告后台）

你是一名资深全栈工程师、信息架构师和高校数字产品设计师。请在当前项目中，基于根目录或 `source/` 目录内的 **`Pre-sessional Student Handbook 2026 (v10).pdf`**，开发一个可正式演示、可部署、可维护的在线学生手册中文网页。

## 0. 项目目标

将 41 页 PDF 学生手册重构为适合手机和电脑访问的响应式网页，而不是简单嵌入 PDF。网页面向 2026 CELE 8-Week Pre-Sessional Course 学生，默认中文展示，保留必要英文名称与中英文对照。

产品必须：

1. **严格按照原学生手册目录的 7 个一级模块组织内容，不得改名、合并、删减或新增并列一级模块。**
2. 采用“学术、简约、分格、清晰”的视觉风格。
3. 首页设置非常醒目的公告栏，公告由管理员在后台新增、编辑、置顶、定时发布、下架。
4. 前台无需登录即可查看学生手册；后台必须登录，且只有管理员能够修改公告。
5. 内容以 PDF 为唯一事实来源，严禁凭空补写学校政策、时间、电话、邮箱、地点、价格或课程安排。
6. 完成后可通过 GitHub 管理代码，并优先部署到 Vercel；公告数据和管理员认证使用 Supabase。

---

## 1. 固定的 7 个一级模块

一级导航必须按以下顺序和名称展示：

1. **欢迎函 / Welcome Letter**
2. **课程安排 / Provisional Timetable**
3. **报到日安排 / Registration Day**
4. **课程重要信息 / Course Important Information**
5. **联系人及相关部门 / Contacts & Relevant Departments**
6. **《访客安全须知》 / UNNC Safety Rules for Visitors**
7. **附录－校园生活手册 / Appendix－Campus Life**

不要把“首页”“公告”“搜索”“后台”算作学生手册一级模块。它们是产品功能或独立路由，不参与 7 模块编号。

### 模块 1：欢迎函

- 展示欢迎函正文。
- 保留署名：Shayna Kozuch、CELE Deputy Director、Centre for English Language Education、University of Nottingham Ningbo China。
- 正文默认展示中文摘要与英文原文，或采用“中文 / English”切换；不要伪造 PDF 中没有的中文全文翻译。若需要翻译，明确标记为“中文导读”，英文原文保持不变。
- Writing Lab 链接与项目邮箱应可点击。

### 模块 2：课程安排

- 按 **Week 1 至 Week 8** 分周展示。
- 桌面端使用清晰的周视图 / 时间表；移动端使用日期卡片或时间轴。
- 区分以下内容类型，并使用克制的视觉标签：
  - RWRS
  - LDP
  - Self Study
  - Advising (Optional)
  - Live Lecture
  - Training
  - Submission
  - Mock Exam / Exam
  - Opening / Closing / Departure
- 考试和提交类事件应更醒目，但不要使用大面积高饱和红色。
- 至少核验这些关键节点：
  - 20 July 2026：Accommodation Check-in
  - 21 July 2026：Opening Ceremony、Course Introduction
  - 7 August：Annotated Bibliography Submission
  - 13 August：RWRS Mock Exam
  - 21 August：Group Discussion Exam
  - 27 August：RWRS Short Essay Exam
  - 4 September：IWA Submission
  - 7-8 September：LDP Presentation Exam
  - 9 September：Poster Presentation & Closing Ceremony
  - 10 September：Final Exam Results Publish & Departure
- 所有时间、日期和活动名称必须逐项与 PDF 核对。

### 模块 3：报到日安排

结构化展示：

- 开始时间：2026 年 7 月 21 日 9:00
- 地点：D.H. Lawrence Auditorium / 劳伦斯报告厅
- 所需物品：Laptop / 笔记本电脑
- 领取教材和 Welcome Pack
- Microsoft Teams 与 Moodle 介绍
- 校园安全与 IT 服务介绍
- 学术支持与核心课程导论
- 报到日日程表：
  - 09:00-09:30 Welcome speech
  - 09:30-10:00 Introduction to the programme
  - 10:00-10:30 Tea break
  - 10:30-12:00 Safety training & IT training
  - 14:00-16:00 Introduction to the Course

建议使用“准备清单 + 当日日程时间轴 + 地点卡片”的布局。

### 模块 4：课程重要信息

至少按以下二级分区组织：

- 出勤 Attendance
- 请假 Ask for Leave
- 账号密码 Account & Password
- 邮件 Email
- 校园安全政策 Safety and Health Protocols
- 校园卡 Campus Card
- 打印 / 复印 Print Functions
- 无线网络 Wi-Fi

重要规则使用“提示 / 警告 / 操作步骤”组件，但不得夸大或改变原意。邮箱、Web Print 链接应可点击。

### 模块 5：联系人及相关部门

分成两部分：

A. CELE Summer Programme Office 与项目团队

- Course Director
- Senior Tutor
- RWRS Module Convener
- LDP Module Convener
- Administrative Support Team
- Senior Tutor for Student Experience
- Student Support

B. Relevant Departments

- Security and Safety Office
- Campus Public Security Service Centre
- Campus Clinic
- IT Services
- The Library
- Sports Department
- The Hub

每个联系人 / 部门使用统一卡片：名称、职责、地点、开放时间、电话、邮箱、网站。电话支持点击拨号，邮箱支持点击写信。

特别注意：PDF 中出现的姓名、电话号码、邮箱和开放时间必须逐项核验，不要自行纠正拼写，除非能从 PDF 其他位置明确验证。若 PDF 内部存在明显冲突，在 `docs/content-audit.md` 记录，而不是擅自修改。

### 模块 6：《访客安全须知》

- 按 PDF 中 1-12 条原顺序展示。
- 中文为主，英文可折叠查看。
- 重点突出：禁烟、限制区域、紧急疏散、校园交通限速、水域安全、危险品与法律法规。
- 紧急联系电话使用固定的 Emergency Card：
  - Safety / Security：0574-8818 0111
  - Medical Services：0574-8818 0120
- 不要把该部分改写成泛化安全常识；必须忠实于手册文本。

### 模块 7：附录－校园生活手册

按 PDF 内部层级组织，不得做成一大段长页面。至少包括：

- 交通 Transportation
  - 学校地址、Gate 4 报到入口、快递地址
  - 宁波栎社机场、宁波站、轨道交通 8 号线学府路站
- 住宿 Accommodation
  - 校内 / 校外入住时间与地点
  - 入住步骤、宿舍热线
  - On-Campus / Off-Campus Residential Hub
- 宁诺小 Upay
  - 校园卡、水电充值步骤与注意事项
- 公共设施使用
  - 洗衣房、洗衣机、烘干机、热水、直饮水、UNNC Living 网络
- 物业服务
  - 报修、网络、钥匙、行李车、补卡、家政服务
- 突发或紧急事件
  - 台风暴雨、火警、电梯困人、受伤就医、应急热线
- 入住期间注意事项、班车服务、公寓前台电话、附近医院
- 暑期生活区设施
  - 餐厅、快递、便利店、饮品水果、ATM、桶装水与营业时间
- 校园地点与地图
  - Portland Building
  - D.H. Lawrence Auditorium
  - Residential Hub
  - 最后一页校园地图 / 紧急联系方式

营业时间和设施信息应以表格 / 筛选卡片展示。不要把 PDF 页面截图当作主要内容；只有地图、建筑照片、二维码或难以转换的视觉内容可以作为图片，并提供可放大查看。

---

## 2. 首页信息架构

首页必须包含：

1. 顶部导航栏
   - CELE 2026 Student Handbook
   - 7 个模块入口
   - 搜索按钮
   - 中 / EN 显示切换（默认中文）
2. Hero 区
   - 标题：2026 CELE 8-Week Pre-Sessional Course Student Handbook
   - 中文副标题：2026 CELE 八周学术英语课程在线学生手册
   - 课程日期范围
   - “查看课程安排”“查看报到日”“紧急联系方式”三个快捷入口
3. **醒目公告栏**
   - 位于首屏 Hero 下方或与 Hero 并列，手机端必须在首屏可见
   - 展示置顶公告和最新公告
   - 支持级别：普通、重要、紧急
   - 支持标题、正文、发布时间、有效期、附件 / 外链、置顶状态
   - 过期公告自动从首页隐藏，但后台可查看
   - 有新公告时显示“NEW”标记
4. 7 模块分格入口
   - 7 张编号卡片，严格按照目录顺序
   - 每张卡片包含中文标题、英文标题、简短描述、图标
5. “本周安排”
   - 根据当前日期自动定位对应 Week；若当前不在课程期间，显示完整 8 周入口
6. 紧急联系条
   - 校园安全、医疗、项目办公室
7. 页脚
   - 项目邮箱、Office Location、数据来源说明、最后更新时间

---

## 3. 公告后台

路由建议：

- 前台：`/`
- 模块：`/handbook/[slug]`
- 搜索：`/search`
- 管理员登录：`/admin/login`
- 管理后台：`/admin`
- 公告编辑：`/admin/announcements/[id]`

### 管理员功能

- 使用 Supabase Auth 邮箱密码登录。
- 只允许白名单管理员访问后台。
- 公告 CRUD：新建、编辑、预览、发布、撤回、删除。
- 字段：
  - `title`
  - `summary`
  - `content`
  - `level`：normal / important / emergency
  - `is_pinned`
  - `status`：draft / published / archived
  - `publish_at`
  - `expire_at`
  - `link_url`
  - `attachment_url`
  - `created_by`
  - `created_at`
  - `updated_at`
- 后台列表支持状态筛选、关键词搜索、按更新时间排序。
- 发布前提供前台预览。
- 删除使用二次确认。
- 记录基础审计信息。

### 数据库与安全

使用 Supabase PostgreSQL，并开启 Row Level Security：

- 所有人只能读取已发布且在有效时间内的公告。
- 只有 `admin` 角色可以写入、修改、删除公告。
- 禁止将 service role key 暴露到浏览器。
- 提供 `supabase/schema.sql`、RLS policy 和初始管理员配置说明。
- `.env.local` 不提交 Git；提供 `.env.example`。

公告内容支持 Markdown 或受控富文本，但必须进行 XSS 防护。外链使用安全属性。

---

## 4. 技术栈

采用当前稳定版本，不锁死过时版本号：

- Next.js App Router
- TypeScript，开启 strict mode
- Tailwind CSS
- shadcn/ui 或同等轻量无障碍组件
- Supabase：PostgreSQL + Auth + Storage（附件可选）
- Zod：表单 / 环境变量校验
- React Hook Form：后台表单
- Lucide Icons
- 部署：Vercel

尽量使用 Server Components；需要交互的部分再使用 Client Components。避免不必要的全局状态库。

---

## 5. 内容数据设计

学生手册正文不要散落硬编码在多个组件中。请建立明确的数据层，例如：

```text
content/
  handbook.ts
  timetable.ts
  contacts.ts
  campus-life.ts
  safety-rules.ts
```

或者结构化 JSON / TypeScript 数据。每条内容保留：

- `moduleId`
- `sectionId`
- `titleZh`
- `titleEn`
- `contentZh`
- `contentEn`
- `sourcePage`
- `links`
- `contacts`
- `lastVerifiedAt`

页面底部可显示“来源：Student Handbook PDF，第 X 页”，便于审核。

请生成 `docs/content-audit.md`，列出：

- 已提取的 7 个模块
- 每个模块对应 PDF 页码
- 所有电话、邮箱、URL、日期、费用的核验清单
- PDF 中疑似拼写问题或内部不一致
- 未能可靠识别的图片 / 二维码 / 地图信息

严禁悄悄猜测无法识别的内容。

---

## 6. 搜索与易用性

- 支持全文搜索：标题、关键词、联系人、部门、地点、电话。
- 搜索结果按模块分组，显示命中片段。
- 常用关键词：请假、考试、校园卡、打印、Wi-Fi、医务室、宿舍、报修、紧急电话、机场、地铁。
- 模块页提供左侧目录（桌面端）和顶部可折叠目录（移动端）。
- 支持锚点链接和复制链接。
- 提供“返回顶部”。
- 电话、邮箱、地址、网站均可点击。
- 关键表格在移动端转换为卡片，避免横向溢出。

---

## 7. 视觉规范

关键词：**academic / minimal / structured / calm / trustworthy**。

- 主色：深海军蓝、白色、浅灰蓝；强调色仅用于重要公告和考试节点。
- 网格：桌面 12 栏；卡片之间有明确间距；使用细边框和轻阴影。
- 不使用花哨霓虹、玻璃拟态、大面积渐变、卡通插画或过度圆角。
- 标题有清晰层级；正文行宽控制在 65-80 字符。
- 中文字体优先系统字体：PingFang SC / Microsoft YaHei / Noto Sans CJK SC。
- 英文字体使用 Inter 或系统 sans-serif。
- 图片统一圆角和比例，提供 alt 文本。
- 可参考 PDF 的深蓝与浅蓝视觉，但不要逐页照搬排版。
- 不擅自使用未经授权的学校 Logo；若 PDF 中已有并用于内部项目，仍要将 Logo 作为可替换资产，并在 README 提醒上线前确认品牌授权。

---

## 8. 响应式与无障碍

- Mobile-first，重点适配 375px、390px、768px、1024px、1440px。
- Lighthouse 目标：Performance、Accessibility、Best Practices、SEO 均达到 90+（合理范围内）。
- 语义化 HTML、键盘可操作、可见焦点、正确 heading 顺序。
- 颜色对比度满足 WCAG AA。
- `prefers-reduced-motion` 下减少动画。
- 所有图标提供文本或 aria-label。

---

## 9. 图片与 PDF 处理

- 读取 PDF 文字并逐页核验，不要仅依赖一次性自动抽取结果。
- 对复杂表格、地图、二维码、建筑照片进行人工视觉检查。
- 可提取并优化为 WebP，但必须保证地图与文字清晰。
- 原 PDF 可放在 `public/downloads/` 作为“下载原版手册”，前提是文件体积合理并符合学校发布要求。
- 不要用 41 张整页截图替代网页内容。

---

## 10. 工程要求

请创建清晰目录，并至少提供：

```text
app/
components/
content/
lib/
public/
supabase/
docs/
```

必须包含：

- `README.md`
- `.env.example`
- `supabase/schema.sql`
- `docs/content-audit.md`
- `docs/deployment.md`
- `docs/admin-guide.md`
- 基础测试
- ESLint / TypeScript 配置

### 测试

至少覆盖：

- 7 个模块顺序不可改变
- 公告有效期筛选
- 管理员权限保护
- 课程关键节点数据
- 电话 / 邮箱链接格式
- 移动端导航基本交互

运行并修复：

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

如项目没有 `typecheck` 或 `test`，请补充脚本。

---

## 11. 部署要求

- 代码推送到 GitHub。
- Vercel 连接 GitHub 仓库，`main` 为生产分支。
- 配置 Supabase 环境变量。
- README 写清：本地运行、Supabase 初始化、管理员创建、Vercel 部署。
- 给出生产环境 URL 和管理员后台 URL。
- 不在 README、代码或提交历史中泄露密码、service role key 或管理员凭据。

---

## 12. 执行步骤

请按以下顺序工作，不要只输出建议：

1. 检查项目目录和 PDF 是否存在。
2. 解析 PDF，建立 `docs/content-audit.md` 和结构化内容文件。
3. 搭建 Next.js + TypeScript + Tailwind 项目。
4. 完成首页、7 个模块页、搜索、响应式导航。
5. 完成 Supabase schema、Auth、RLS、公告后台。
6. 添加种子公告数据，用于演示：
   - 普通公告示例
   - 重要公告示例
   - 有过期时间的公告示例
   明确标记为 demo，不能伪装成学校真实通知。
7. 添加测试、运行 lint/typecheck/test/build。
8. 修复全部阻塞错误。
9. 输出最终文件树、启动方式、部署步骤、已完成项、仍需人工确认项。

---

## 13. 验收标准

项目只有同时满足以下条件才算完成：

- [ ] 前台严格只有 7 个学生手册一级模块，顺序和名称与 PDF 一致。
- [ ] PDF 主要信息被结构化为网页，不是简单嵌入 PDF。
- [ ] 8 周课程安排完整且关键日期核验正确。
- [ ] 公告栏首屏醒目，后台可以真实增删改查。
- [ ] 后台有身份验证和权限隔离。
- [ ] 手机端可正常使用，无明显横向滚动和文字溢出。
- [ ] 所有电话、邮箱、日期、价格和开放时间有来源页码。
- [ ] `npm run build` 成功。
- [ ] README 可以让其他实习生独立启动和部署项目。
- [ ] 不包含真实管理员密码、密钥或未经核验的学校信息。

开始执行。先列出你从 PDF 中识别到的 7 个模块、对应页码和计划生成的路由，然后直接进行实现。

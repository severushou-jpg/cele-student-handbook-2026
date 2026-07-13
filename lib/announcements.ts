export type AnnouncementLevel = "normal" | "important" | "emergency";
export type AnnouncementStatus = "draft" | "published" | "archived";
export type Announcement = {
  id: string;
  title: string;
  summary: string;
  content: string;
  level: AnnouncementLevel;
  is_pinned: boolean;
  status: AnnouncementStatus;
  publish_at: string;
  expire_at: string | null;
  link_url: string | null;
  attachment_url: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  is_demo?: boolean;
};

export const demoAnnouncements: Announcement[] = [
  {
    id: "demo-important",
    title: "重要公告示例：报到前准备清单",
    summary: "这是演示公告，不代表学校真实通知。请携带笔记本电脑，并在抵达前确认报到地点。",
    content: "此内容仅用于演示重要公告的视觉与后台字段。正式上线前请删除所有 demo 公告。",
    level: "important", is_pinned: true, status: "published", publish_at: "2026-07-12T01:00:00.000Z", expire_at: "2026-07-22T15:59:59.000Z", link_url: null, attachment_url: null, created_by: null, created_at: "2026-07-12T01:00:00.000Z", updated_at: "2026-07-12T01:00:00.000Z", is_demo: true,
  },
  {
    id: "demo-normal",
    title: "普通公告示例：在线手册开放试用",
    summary: "这是演示公告，不代表学校真实通知。在线手册现已开放内部审核。",
    content: "请使用搜索和模块导航检查内容。",
    level: "normal", is_pinned: false, status: "published", publish_at: "2026-07-11T01:00:00.000Z", expire_at: null, link_url: null, attachment_url: null, created_by: null, created_at: "2026-07-11T01:00:00.000Z", updated_at: "2026-07-11T01:00:00.000Z", is_demo: true,
  },
  {
    id: "demo-expiring",
    title: "限时公告示例：迎新资料领取",
    summary: "这是带有效期的演示公告，不代表学校真实通知。",
    content: "过期后会自动从首页隐藏，但仍保留在管理后台。",
    level: "normal", is_pinned: false, status: "published", publish_at: "2026-07-10T01:00:00.000Z", expire_at: "2026-07-30T15:59:59.000Z", link_url: null, attachment_url: null, created_by: null, created_at: "2026-07-10T01:00:00.000Z", updated_at: "2026-07-10T01:00:00.000Z", is_demo: true,
  },
];

export function isAnnouncementVisible(item: Announcement, now = new Date()) {
  const publishAt = new Date(item.publish_at);
  const expireAt = item.expire_at ? new Date(item.expire_at) : null;
  return item.status === "published" && publishAt <= now && (!expireAt || expireAt > now);
}

export function filterVisibleAnnouncements(items: Announcement[], now = new Date()) {
  return items.filter((item) => isAnnouncementVisible(item, now)).sort((a, b) => Number(b.is_pinned) - Number(a.is_pinned) || +new Date(b.publish_at) - +new Date(a.publish_at));
}

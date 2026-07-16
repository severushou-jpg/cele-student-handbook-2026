import { describe, expect, it } from "vitest";
import { handbookModules } from "@/content/handbook";
import { timetable } from "@/content/timetable";
import { contacts, phoneHref } from "@/content/contacts";
import { demoAnnouncements, filterVisibleAnnouncements } from "@/lib/announcements";
import { isAdminRole } from "@/lib/admin";

describe("handbook content invariants", () => {
  it("keeps exactly seven modules in the required order", () => {
    expect(handbookModules.map((item) => item.titleZh)).toEqual(["欢迎函", "课程安排", "开学典礼", "课程重要信息", "联系人及相关部门", "《访客安全须知》", "附录－校园生活手册"]);
  });
  it("contains all verified timetable milestones", () => {
    const text = timetable.flatMap((week) => week.days).flatMap((day) => day.events.map((event) => `${day.date} ${event.title}`)).join("\n");
    ["2026-07-20 Accommodation Check-in", "2026-07-21 Opening Ceremony", "2026-08-07 Annotated bibliography Submission", "2026-08-13 RWRS Mock Exam", "2026-08-21 Group Discussion Exam", "2026-08-27 RWRS Short Essay Exam", "2026-09-04 IWA Submission", "2026-09-07 LDP Presentation Exam", "2026-09-09 Poster Presentation & Closing Ceremony", "2026-09-10 Final Exam Results Publish & Departure"].forEach((item) => expect(text).toContain(item));
  });
  it("creates safe telephone and email links", () => {
    expect(phoneHref("0574-8818 0111 (ext.1111)")).toBe("tel:0574881801111111");
    expect(contacts.filter((item) => item.email).every((item) => item.email?.includes("@"))).toBe(true);
  });
});

describe("announcement and admin rules", () => {
  it("hides expired or future announcements", () => {
    const visible = filterVisibleAnnouncements(demoAnnouncements, new Date("2026-07-13T00:00:00Z"));
    expect(visible).toHaveLength(3);
    expect(filterVisibleAnnouncements(demoAnnouncements, new Date("2027-01-01T00:00:00Z")).map((item) => item.id)).toEqual(["demo-normal"]);
  });
  it("allows only the admin role", () => {
    expect(isAdminRole("admin")).toBe(true);
    expect(isAdminRole("student")).toBe(false);
    expect(isAdminRole(undefined)).toBe(false);
  });
});

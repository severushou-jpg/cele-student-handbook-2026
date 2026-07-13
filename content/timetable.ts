export type EventKind = "rwrs" | "ldp" | "self" | "advising" | "lecture" | "training" | "submission" | "exam" | "milestone";
export type TimetableEvent = { time: string; title: string; kind: EventKind };
export type TimetableDay = { date: string; day: string; events: TimetableEvent[] };
export type TimetableWeek = { week: number; range: string; sourcePage: number; days: TimetableDay[] };

const e = (time: string, title: string, kind: EventKind): TimetableEvent => ({ time, title, kind });

export const timetable: TimetableWeek[] = [
  { week: 1, range: "20–24 July", sourcePage: 4, days: [
    { date: "2026-07-20", day: "MON", events: [e("12:00–18:00", "Accommodation Check-in", "milestone")] },
    { date: "2026-07-21", day: "TUE", events: [e("09:00–12:00", "Opening Ceremony", "milestone"), e("14:00–16:00", "Course Introduction", "milestone")] },
    { date: "2026-07-22", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Introduction to Library", "training")] },
    { date: "2026-07-23", day: "THU", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp")] },
    { date: "2026-07-24", day: "FRI", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp")] },
  ]},
  { week: 2, range: "27–31 July", sourcePage: 5, days: [
    { date: "2026-07-27", day: "MON", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Academic Honesty Training & AI (D.H. Lawrence Auditorium)", "training")] },
    { date: "2026-07-28", day: "TUE", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-07-29", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP Live Lecture 1 (D.H. Lawrence Auditorium)", "lecture"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-07-30", day: "THU", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-07-31", day: "FRI", events: [e("09:00–12:00", "Self Study", "self"), e("14:00–16:00", "Self Study", "self")] },
  ]},
  { week: 3, range: "3–7 August", sourcePage: 6, days: [
    { date: "2026-08-03", day: "MON", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Academic Honesty Training & AI (D.H Lawrence Auditorium)", "training")] },
    { date: "2026-08-04", day: "TUE", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-05", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP Live Lecture 2 (D.H. Lawrence Auditorium)", "lecture"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-06", day: "THU", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-07", day: "FRI", events: [e("09:00–12:00", "Self Study", "self"), e("14:00–16:00", "Annotated bibliography Submission", "submission")] },
  ]},
  { week: 4, range: "10–14 August", sourcePage: 7, days: [
    { date: "2026-08-10", day: "MON", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp")] },
    { date: "2026-08-11", day: "TUE", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-12", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP Live Lecture 3 (D.H. Lawrence Auditorium)", "lecture"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-13", day: "THU", events: [e("09:00–12:00", "RWRS Mock Exam", "exam"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-14", day: "FRI", events: [e("09:00–12:00", "Self Study", "self"), e("14:00–16:00", "Self Study", "self")] },
  ]},
  { week: 5, range: "17–21 August", sourcePage: 8, days: [
    { date: "2026-08-17", day: "MON", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Introduction to the new semster", "training")] },
    { date: "2026-08-18", day: "TUE", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-19", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-20", day: "THU", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-21", day: "FRI", events: [e("09:00–12:00", "Group Discussion Exam", "exam"), e("14:00–16:00", "Group Discussion Exam", "exam")] },
  ]},
  { week: 6, range: "24–28 August", sourcePage: 9, days: [
    { date: "2026-08-24", day: "MON", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp")] },
    { date: "2026-08-25", day: "TUE", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-26", day: "WED", events: [e("09:00–12:00", "RWRS", "rwrs"), e("14:00–16:00", "LDP", "ldp"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-27", day: "THU", events: [e("09:00–12:00", "RWRS Short Essay Exam", "exam"), e("14:00–16:00", "Self study", "self"), e("16:10–17:00", "Advising (Optional)", "advising")] },
    { date: "2026-08-28", day: "FRI", events: [e("09:00–12:00", "Self Study", "self"), e("14:00–16:00", "Self Study", "self")] },
  ]},
  { week: 7, range: "31 August–4 September", sourcePage: 10, days: [
    ...["2026-08-31", "2026-09-01", "2026-09-02", "2026-09-03"].map((date, index) => ({ date, day: ["MON", "TUE", "WED", "THU"][index], events: [e("09:00–12:00", "RWRS: IWA tutorials", "rwrs"), e("14:00–16:00", "LDP", "ldp")] })),
    { date: "2026-09-04", day: "FRI", events: [e("09:00–12:00", "Self Study", "self"), e("14:00–16:00", "IWA Submission", "submission")] },
  ]},
  { week: 8, range: "7–11 September", sourcePage: 11, days: [
    { date: "2026-09-07", day: "MON", events: [e("09:00–12:00", "LDP Presentation Exam", "exam"), e("14:00–16:00", "LDP Presentation Exam", "exam")] },
    { date: "2026-09-08", day: "TUE", events: [e("09:00–12:00", "LDP Presentation Exam", "exam"), e("14:00–16:00", "LDP Presentation Exam", "exam")] },
    { date: "2026-09-09", day: "WED", events: [e("09:00–12:00", "Poster Presentation & Closing Ceremony", "milestone"), e("14:00–16:00", "Departure", "milestone")] },
    { date: "2026-09-10", day: "THU", events: [e("All day", "Final Exam Results Publish & Departure", "milestone")] },
    { date: "2026-09-11", day: "FRI", events: [e("All day", "Departure", "milestone")] },
  ]},
];

export const getCurrentWeek = (now: Date) => timetable.find((week) => {
  const dates = week.days.map((day) => new Date(`${day.date}T00:00:00+08:00`).getTime());
  const value = now.getTime();
  return value >= Math.min(...dates) && value <= Math.max(...dates) + 86_399_999;
});

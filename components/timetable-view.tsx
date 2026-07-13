import { timetable } from "@/content/timetable";

const kindLabels = { rwrs: "RWRS", ldp: "LDP", self: "Self Study", advising: "Advising", lecture: "Live Lecture", training: "Training", submission: "Submission", exam: "Exam", milestone: "Milestone" };

export function TimetableView() {
  return <div className="timetable-wrap"><div className="legend">{Object.entries(kindLabels).map(([kind, label]) => <span key={kind} className={`tag tag-${kind}`}>{label}</span>)}</div>{timetable.map((week) => <section className="timetable-week" id={`week-${week.week}`} key={week.week}><header><div><span>W{String(week.week).padStart(2, "0")}</span><h2>Week {week.week}</h2></div><p>{week.range} 2026</p></header><div className="days-grid">{week.days.map((day) => <article className="day-card" key={day.date}><div className="day-date"><b>{day.day}</b><time>{new Intl.DateTimeFormat("en-GB", { month: "short", day: "numeric" }).format(new Date(`${day.date}T12:00:00+08:00`))}</time></div><div className="day-events">{day.events.map((event, index) => <div className={`event event-${event.kind}`} key={`${event.time}-${index}`}><time>{event.time}</time><strong>{event.title}</strong></div>)}</div></article>)}</div><small className="source-note">来源：Student Handbook PDF，第 {week.sourcePage} 页</small></section>)}</div>;
}

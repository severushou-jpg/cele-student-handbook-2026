const schedule = [
  ["09:00–09:30", "Welcome speech", "欢迎仪式"], ["09:30–10:00", "Introduction to the programme", "课程导览"], ["10:00–10:30", "Tea break", "茶歇"], ["10:30–12:00", "Safety training & IT training", "安全培训与 IT 培训"], ["14:00–16:00", "Introduction to the Course", "核心课程导论"],
];
export function RegistrationSchedule() { return <section className="registration-schedule"><h2>报到日日程 <small>21 JULY 2026</small></h2><div>{schedule.map(([time, en, zh]) => <article key={time}><time>{time}</time><span /><div><strong>{zh}</strong><p>{en}</p><small>D.H. Lawrence Auditorium</small></div></article>)}</div><p className="source-note">来源：Student Handbook PDF，第 14 页（手册页 12）</p></section>; }

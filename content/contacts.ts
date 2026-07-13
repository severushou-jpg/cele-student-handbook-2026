export type Contact = {
  group: "programme" | "department";
  nameZh: string;
  nameEn: string;
  person?: string;
  responsibility?: string;
  location?: string;
  hours?: string;
  phone?: string;
  email?: string;
  website?: string;
  sourcePage: number;
};

export const contacts: Contact[] = [
  { group: "programme", nameZh: "项目主管", nameEn: "Course Director", person: "Shayna Kozuch", email: "Shayna.Kozuch@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "项目高级教师", nameEn: "Senior Tutor", person: "David Anstey", email: "David.Anstey@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "RWRS 课程主管", nameEn: "RWRS Module Convener", person: "Mahmoud Jeidani", responsibility: "RWRS 课程相关的学术问题解答", email: "Mahmoud.Jeidani@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "LDP 课程主管", nameEn: "LDP Module Convener", person: "Ada Wang", responsibility: "LDP 课程相关的学术问题解答", email: "Ada.Wang@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "行政支持团队", nameEn: "Administrative Support Team", person: "Geoffrey Gao, Frank Zhou, Susan Xiang, Vinna Wang, Zoey Yuan", responsibility: "语言班教务及行政事务支持，包括项目安排、请假缺勤与课程反馈", email: "unncpre-sessional@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "学术体验支持高级教师", nameEn: "Senior Tutor for Student Experience", person: "Maxine Mou", responsibility: "身心健康与关切相关支持", email: "Maxine.Mou@nottingham.edu.cn", sourcePage: 17 },
  { group: "programme", nameZh: "学生事务支持", nameEn: "Student Support", person: "Pual Huang", responsibility: "校园生活相关学生事务支持，包括心理危机帮扶与转介、重大突发状况支持", phone: "8818 0000 – 8393", email: "Ze.Huang@nottingham.edu.cn", sourcePage: 17 },
  { group: "department", nameZh: "安全与保卫办公室", nameEn: "Security and Safety Office", location: "15 号楼一站式社区服务中心", hours: "周一至周五 08:30–11:30，12:30–17:00", phone: "0574-8818 0078", email: "sso@nottingham.edu.cn", responsibility: "24 小时紧急电话：0574-8818 0111（ext.1111，仅限紧急情况）", sourcePage: 18 },
  { group: "department", nameZh: "校园警务服务中心", nameEn: "Campus Public Security Service Centre", location: "15 号楼附近（near Residential Hub）", hours: "学期中周一至周五 09:00–11:30，14:30–17:00；寒暑假 14:30–16:30", phone: "0574-8818 0783", responsibility: "报警登记、户籍办理、法律援助、出入境业务与矛盾调解", sourcePage: 18 },
  { group: "department", nameZh: "医务室", nameEn: "Campus Clinic", location: "生活区 23 号楼一楼", hours: "门诊：周一至周日 08:30–22:30；急诊：每天 24/7", phone: "0574-8818 0120", email: "UNNC.Clinic@nottingham.edu.cn", responsibility: "24 小时校园医疗救援专线：15168185997", sourcePage: 18 },
  { group: "department", nameZh: "IT 服务中心", nameEn: "IT Services", location: "1 号楼 305，Trent Building Room 305", hours: "周一至周五 08:30–12:00，13:30–17:00", phone: "0574-8818 0009", email: "itservicedesk@nottingham.edu.cn", website: "https://www.nottingham.edu.cn/en/its/index.aspx", sourcePage: 18 },
  { group: "department", nameZh: "图书馆", nameEn: "The Library", hours: "08:00–22:00", phone: "+86 574 8818 0152", email: "Library@nottingham.edu.cn", website: "https://www.nottingham.edu.cn/en/Library", sourcePage: 19 },
  { group: "department", nameZh: "体育部", nameEn: "Sports Department", location: "Sports Centre", hours: "周一至周日 07:00–22:00", phone: "0574-8818 0000 ext. 8519", email: "SportsManagement@nottingham.edu.cn", sourcePage: 19 },
  { group: "department", nameZh: "学生服务中心", nameEn: "The Hub", location: "Portland Building 120", hours: "周一至周五 09:00–12:00，13:30–17:00（2026 年 6 月 15 日至 9 月 18 日暑假）", phone: "0574-8818 0000 ext. 8062", email: "thehub@nottingham.edu.cn", responsibility: "一站式学生服务，并为语言班学生提供失物招领服务", sourcePage: 19 },
];

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

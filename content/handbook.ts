export type HandbookSection = {
  id: string;
  titleZh: string;
  titleEn: string;
  contentZh: string[];
  contentEn?: string[];
  sourcePage: string;
  links?: { label: string; href: string }[];
};

export type HandbookModule = {
  moduleId: number;
  slug: string;
  titleZh: string;
  titleEn: string;
  description: string;
  sourcePage: string;
  sections: HandbookSection[];
  lastVerifiedAt: string;
};

export const handbookModules: HandbookModule[] = [
  {
    moduleId: 1,
    slug: "welcome-letter",
    titleZh: "欢迎函",
    titleEn: "Welcome Letter",
    description: "课程欢迎、学习建议与支持资源",
    sourcePage: "3（手册页 1）",
    lastVerifiedAt: "2026-07-13",
    sections: [
      {
        id: "guide",
        titleZh: "中文导读",
        titleEn: "Chinese guide",
        sourcePage: "3",
        contentZh: [
          "欢迎来到宁波诺丁汉大学八周学术英语课程。本课程旨在为研究生阶段学习提供必要的学术语言与学习技能训练。未来八周课程内容密集，除完成导师布置的任务外，还需要投入充分时间进行独立学习。",
          "Writing Lab 可提供额外学习支持。如对课程有疑问或顾虑，可以联系任课教师或发送邮件至项目邮箱。以下中文内容为导读，英文原文保持不变。",
        ],
        links: [
          { label: "Writing Lab", href: "https://www.nottingham.edu.cn/en/cele/the-writing-labunnc/the-writing-labunnc.aspx" },
          { label: "unncpre-sessional@nottingham.edu.cn", href: "mailto:unncpre-sessional@nottingham.edu.cn" },
        ],
      },
      {
        id: "original",
        titleZh: "英文原文",
        titleEn: "Original letter",
        sourcePage: "3",
        contentZh: [],
        contentEn: [
          "Dear Students,",
          "Welcome to the University of Nottingham Ningbo China Pre-Sessional course. By now, based on the brochure emailed to you prior to the course commencement, you should possess a solid understanding of the course content.",
          "This course is designed to equip you with the essential academic language and study skills necessary for postgraduate studies at UNNC. Due to the extensive material that needs to be covered over the next eight weeks, the course will be intensive. It will undoubtedly be challenging, and I strongly encourage you to dedicate a significant amount of your time outside of class to independent study, in addition to completing all assignments set by your tutors. You may also find the Writing Lab on campus a valuable resource.",
          "The course will be demanding, but I hope you also find it both interesting and enjoyable. Most importantly, I hope that the course proves useful for your future studies at UNNC and beyond.",
          "For some of you, this may be your first time visiting Ningbo; I hope you settle quickly and enjoy your time both on the university campus and in the city of Ningbo.",
          "If you have any questions or concerns, feel free to speak to one of your course tutors. Alternatively, you can email unncpre-sessional@nottingham.edu.cn.",
          "Best wishes and good luck,",
        ],
      },
      {
        id: "signature",
        titleZh: "署名",
        titleEn: "Signature",
        sourcePage: "3",
        contentZh: ["Shayna Kozuch", "CELE Deputy Director", "Centre for English Language Education", "University of Nottingham Ningbo China"],
      },
    ],
  },
  {
    moduleId: 2,
    slug: "provisional-timetable",
    titleZh: "课程安排",
    titleEn: "Provisional Timetable",
    description: "Week 1 至 Week 8 完整课程与考试节点",
    sourcePage: "4–11（手册页 2–9）",
    lastVerifiedAt: "2026-07-13",
    sections: [],
  },
  {
    moduleId: 3,
    slug: "registration-day",
    titleZh: "开学典礼",
    titleEn: "Opening Ceremony",
    description: "准备清单、地点与当日日程",
    sourcePage: "12–14（手册页 10–12）",
    lastVerifiedAt: "2026-07-13",
    sections: [
      { id: "essentials", titleZh: "报到须知", titleEn: "Essentials", sourcePage: "12", contentZh: ["开始时间：2026 年 7 月 21 日 09:00", "地点：D.H. Lawrence Auditorium / 劳伦斯报告厅（地图见手册封底）", "所需物品：Laptop / 笔记本电脑"] },
      { id: "materials", titleZh: "领取教材和 Welcome Pack", titleEn: "Materials", sourcePage: "12", contentZh: ["报到日将领取教材和 Welcome Pack，其中包括课表、校园地图、临时校园卡、邮箱与网络账号、笔记本和笔等。"] },
      { id: "platforms", titleZh: "在线学习平台", titleEn: "Microsoft Teams and Moodle", sourcePage: "12", contentZh: ["成功登录校园账号后，工作人员将介绍 Moodle 和 Teams 的使用方法。"] },
      { id: "support", titleZh: "安全、IT 与学术支持", titleEn: "Safety, IT and academic support", sourcePage: "13", contentZh: ["校园安全部门和 IT 部门将介绍学校安全须知与校园账号使用。Writing Lab 团队负责人将介绍学术支持服务；课程主管将介绍 RWRS 与 LDP 两门核心课程。"] },
    ],
  },
  {
    moduleId: 4,
    slug: "course-important-information",
    titleZh: "课程重要信息",
    titleEn: "Course Important Information",
    description: "出勤、账号、校园卡、打印与网络",
    sourcePage: "15–16（手册页 13–14）",
    lastVerifiedAt: "2026-07-13",
    sections: [
      { id: "attendance", titleZh: "出勤", titleEn: "Attendance", sourcePage: "15", contentZh: ["持有有条件录取通知书的学员需参加所有课程、完成全部作业并通过最终测试。只有完成课程并通过考试，才能被视为语言成绩合格。"] },
      { id: "leave", titleZh: "请假", titleEn: "Ask for Leave", sourcePage: "15", contentZh: ["如需请假，请至少在请假日期前一个工作日填写并电子签名请假申请表，发送至项目邮箱并抄送任课教师。手册强烈建议尽量不要请假，过多缺勤可能影响考试成绩及能否顺利结业。"], links: [{ label: "发送请假申请", href: "mailto:unncpre-sessional@nottingham.edu.cn" }] },
      { id: "account", titleZh: "账号密码", titleEn: "Account & Password", sourcePage: "15", contentZh: ["临时校园账号有效期为 2026 年 7 月 20 日至 2026 年 9 月 21 日，可用于校内公共电脑、UNNC 邮箱、Moodle、Teams、Nu-search 与 eduroam。账号仅供本人使用，请勿分享。"] },
      { id: "email", titleZh: "邮件", titleEn: "Email", sourcePage: "15", contentZh: ["邮件是 UNNC 官方沟通渠道。课表、考试安排、成绩等重要信息会通过邮件发送，请保持校园邮箱登录并每天查收。"] },
      { id: "safety", titleZh: "校园安全政策", titleEn: "Safety and Health Protocols", sourcePage: "16", contentZh: ["请详细阅读《访客安全须知》。如有违反，学校有权采取相应处理措施；若影响课程与考试，责任由学生本人承担。"] },
      { id: "card", titleZh: "校园卡", titleEn: "Campus Card", sourcePage: "16", contentZh: ["校园卡可用于进出校园、图书馆、体育馆／健身房、打印复印及部分生活区消费。临时卡默认不能借阅实体图书；如需开通，手册注明可联系图书馆前台并缴纳可退还的 2,000 元押金。"] },
      { id: "print", titleZh: "打印 / 复印", titleEn: "Print Functions", sourcePage: "16", contentZh: ["校园卡账户已预充 50 元，可在教学区打印、复印和扫描，也可使用 Web Print。该预充费用不能返现、退款或转账。"], links: [{ label: "打开 Web Print", href: "https://webprint.nottingham.edu.cn/user" }] },
      { id: "wifi", titleZh: "无线网络", titleEn: "Wi-Fi", sourcePage: "16", contentZh: ["教学区和生活区均有无线网络。教学区网络名称为 eduroam，使用方法将在报到日 IT 培训中介绍。"] },
    ],
  },
  {
    moduleId: 5,
    slug: "contacts",
    titleZh: "联系人及相关部门",
    titleEn: "Contacts & Relevant Departments",
    description: "课程团队、校园服务与紧急支持",
    sourcePage: "17–19（手册页 15–17）",
    lastVerifiedAt: "2026-07-13",
    sections: [],
  },
  {
    moduleId: 6,
    slug: "safety-rules",
    titleZh: "《访客安全须知》",
    titleEn: "UNNC Safety Rules for Visitors",
    description: "12 条校园访客安全规则与紧急电话",
    sourcePage: "20（手册页 18）",
    lastVerifiedAt: "2026-07-13",
    sections: [],
  },
  {
    moduleId: 7,
    slug: "campus-life",
    titleZh: "附录－校园生活手册",
    titleEn: "Appendix－Campus Life",
    description: "交通、住宿、设施、服务与校园地图",
    sourcePage: "21–41（手册页 19–38 及封底）",
    lastVerifiedAt: "2026-07-13",
    sections: [],
  },
];

export const getModuleBySlug = (slug: string) => handbookModules.find((module) => module.slug === slug);

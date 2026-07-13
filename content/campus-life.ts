export type CampusSection = {
  id: string;
  titleZh: string;
  titleEn: string;
  sourcePage: string;
  intro?: string;
  items: { title: string; text: string; href?: string }[];
  images?: { src: string; alt: string }[];
};

export const campusLifeSections: CampusSection[] = [
  { id: "transportation", titleZh: "交通", titleEn: "Transportation", sourcePage: "22", items: [
    { title: "学校地址与报到入口", text: "浙江省宁波市鄞州区泰康东路 199 号，宁波诺丁汉大学。报到日请走 4 号门（东门）；首次进入校园请向门岗出示身份证和课程录取通知书。" },
    { title: "校内快递", text: "浙江省宁波市鄞州区泰康东路 199 号宁波诺丁汉大学学生公寓 23 号楼菜鸟驿站" },
    { title: "HOLA 快递", text: "宁波市鄞州区三池路 90 号和瑞国际社区菜鸟驿站" },
    { title: "宁波栎社国际机场", text: "距离 13 公里；出租车约 35 元，约 30 分钟。" },
    { title: "宁波火车站", text: "距离 12 公里；出租车约 30 元，约 30 分钟。" },
    { title: "轨道交通 8 号线学府路站", text: "距离 4 号门步行 980 米，约 15 分钟。" },
  ]},
  { id: "accommodation", titleZh: "住宿", titleEn: "Accommodation", sourcePage: "23–24", items: [
    { title: "校内公寓入住", text: "2026 年 7 月 20 日 12:00–18:00；校内公寓一站式服务中心，15 号学生公寓楼一楼西侧街区。" },
    { title: "校外公寓入住", text: "2026 年 7 月 20 日 09:00–18:00；Welcome Point，HOLA 和瑞国际社区 4 号公寓楼一楼。" },
    { title: "入住步骤", text: "校内学生建议从 4 号门进入；校外学生建议导航至 HOLA 南门或北门（自驾从南门驶入）。在对应地点出示身份证办理入住。不能按时到达请提前联系项目组。" },
    { title: "宿舍热线", text: "校内前台：0574-8814 90 + 宿舍楼号（例如 14 号楼：0574-8814 9014）；校外公寓：0574-8818 0608 或 0574-8818 0611。" },
    { title: "校内 Residential Hub", text: "提供公寓、财务、物业及安保服务。暑期多数服务时间为周一至周五 08:30–12:00、13:30–17:00；不同窗口以手册页 22 为准。" },
    { title: "校外 Residential Hub", text: "和瑞国际社区 4 号公寓楼一楼；周一至周五 08:30–12:00、13:00–17:00。" },
    { title: "房型与床铺尺寸", text: "查看学校官网学生公寓介绍。", href: "https://www.nottingham.edu.cn/cn/accommodation/home.aspx" },
  ]},
  { id: "upay", titleZh: "宁诺小 Upay", titleEn: "Top-up your balance", sourcePage: "25–26", intro: "用于校园卡、宿舍水电费充值及其他生活区服务。", items: [
    { title: "1–3 关注并绑定", text: "微信搜索或扫码关注“宁诺小 Upay”，选择 service，绑定学生卡。" },
    { title: "4–6 选择充值", text: "选择校园卡、电费或水费。暑期课程校园卡充值请输入卡片正面姓名下方卡号；水电充值请输入楼号、楼层、寝室号与金额。" },
    { title: "注意", text: "校园卡充值用于部分餐厅和超市消费会收取 5% 服务费；手册建议使用现金、支付宝或微信。" },
  ], images: [{ src: "/images/upay-guide.webp", alt: "宁诺小 Upay 二维码与 service 操作示意，来源于手册第 25 页" }] },
  { id: "facilities", titleZh: "公共设施使用", titleEn: "Public facilities", sourcePage: "27–31", items: [
    { title: "洗衣房", text: "通常位于公寓一楼；23 号楼男生宿舍位于 2、6、10、23 层，女生宿舍位于 15、17、20、23 层。开放时间 07:30–22:00。刷校园卡使用时洗衣机与烘干机均为 5 元 / 35 分钟。" },
    { title: "热水", text: "校内住宿电费充值至寝室，热水费充值至校园卡。11–22 号楼插卡后按开始／停止；23 号楼将学生卡放入水控器卡槽。异常可在宁诺小 Upay 报修。" },
    { title: "直饮水", text: "免费提供常温水和热水。热水可达 90℃ 以上，先解锁童锁并使用耐高温杯具；显示 F1/F7 等错误代码时立即停用并联系工作人员。" },
    { title: "UNNC Living", text: "连接 Wi-Fi 后会自动打开登录页。输入暑期账号用户名和密码，阅读并勾选隐私声明与条款后登录。服务热线 0574-8818 0997（09:00–21:00），邮箱 SRNS@nottingham.edu.cn。" },
  ], images: [{ src: "/images/facilities-guide.webp", alt: "洗衣机与烘干机使用说明，来源于手册第 28 页" }] },
  { id: "property", titleZh: "物业服务", titleEn: "Property services", sourcePage: "32", items: [
    { title: "设施报修", text: "通过宁诺小 Upay 报修，或联系公寓楼前台宿管员。" },
    { title: "网络问题", text: "拨打 0574-8818 0997；校内学生也可联系公寓楼前台。" },
    { title: "忘带卡或钥匙", text: "校内学生到公寓前台登记；校外学生工作时间到和瑞一站式服务中心，工作时间外拨打 24 小时值班电话 0574-8818 0611。" },
    { title: "行李车", text: "可在公寓楼前台登记借取；校外学生可在一站式服务中心门口小广场借取，用后及时归还。" },
    { title: "补卡", text: "到 Residential Hub 4 号窗口办理，再到 2 号窗口或 15 号楼旁自助机激活后勤功能。" },
    { title: "家政服务", text: "可在宁诺小 Upay 选择家政服务，费用 45 元 / 小时，1 小时起。" },
  ]},
  { id: "emergency", titleZh: "突发或紧急事件", titleEn: "Emergencies", sourcePage: "33–34", items: [
    { title: "台风或暴雨", text: "关注预警，尽量留在安全室内，关紧门窗并移走高处易坠物，储备必要生活用品。校内联系宿管前台；校外拨打 0574-8818 0611。" },
    { title: "火警", text: "从就近疏散通道有序撤离，切勿乘坐电梯。无法撤离时退回房间封堵门缝，拨打 119 或校园应急电话 0574-8818 0111；校外也可拨打 0574-8818 0611。" },
    { title: "电梯困人", text: "保持冷静，不要强行开门。使用警铃或对讲系统，或拨打 0574-8818 0111；校外拨打 0574-8818 0611。" },
    { title: "受伤就医", text: "联系学校医务室 0574-8818 0120；校外可拨打 0574-8818 0611。情况严重时联系 120。" },
    { title: "应急热线", text: "校园应急（24H）：0574-8818 0111；医务室（24H）：0574-8818 0120；校外公寓（24H）：0574-8818 0611。" },
  ]},
  { id: "living-notes", titleZh: "入住期间与附近医院", titleEn: "During your stay", sourcePage: "34", items: [
    { title: "入住知情书", text: "入住时需签订《入住知情书》，涉及水电额度及生活区纪律。校内外可能因建设施工产生噪音。" },
    { title: "HOLA 班车", text: "每日提供往返 HOLA 与学校的免费班车，具体营运信息在入住时告知。" },
    { title: "浙江大学明州医院", text: "浙江省宁波市鄞州区泰安西路 168 号；0574-8300 9999。" },
    { title: "宁波市鄞州第二医院", text: "宁波市鄞州区前河北路 998 号；0574-5566 5555（24 小时）。" },
  ]},
  { id: "summer", titleZh: "暑期生活区设施", titleEn: "Campus Facilities in Summer Period", sourcePage: "35–37", items: [
    { title: "万诺餐厅（第一食堂）", text: "6 月 8 日–9 月 1 日：早餐 07:30–09:15；午餐 11:00–13:00；晚餐 17:00–18:30。9 月 2 日恢复正常。" },
    { title: "第三空间（第四食堂）", text: "6 月 8 日–9 月 1 日 10:00–20:00；9 月 2 日恢复正常。" },
    { title: "宁诺餐厅", text: "正常营业：午餐 11:00–14:00；晚餐 17:00–20:00。" },
    { title: "湖畔餐厅（LA Hotel）", text: "正常营业：早餐 07:30–09:00；午餐、晚餐以团队预订时间为准。" },
    { title: "小灶台", text: "6 月 15 日–9 月 1 日 07:30–20:00；9 月 2 日恢复正常。" },
    { title: "顺丰与 23# 快递中心", text: "7 月 20 日–8 月 31 日寄件 10:00–17:00；23# 取件 24 小时；9 月 1 日寄件恢复正常。" },
    { title: "便利店", text: "7-Eleven 一店正常营业；十足 6 月 17 日–8 月 31 日 06:00–00:00；呀咪超市 07:30–23:00。" },
    { title: "饮品水果", text: "大庄园水果店 11:00–21:00；古茗 10:30–20:30；霸王茶姬 08:00–21:00（均按手册注明的 6 月 15 日至 8 月 31 日暑期范围）；柠檬向右正常营业。" },
    { title: "其他", text: "中国银行 ATM 24 小时；雪窦山桶装水正常营业。" },
  ]},
  { id: "maps", titleZh: "校园地点与地图", titleEn: "Campus locations & maps", sourcePage: "38–40", items: [
    { title: "关键地点", text: "Portland Building、D.H. Lawrence Auditorium、Residential Hub 已在地图中标注；HOLA 地图标注 Welcome Point。点击图片可查看原尺寸。" },
  ], images: [
    { src: "/images/campus-map-west.webp", alt: "校园地图西侧：Portland Building 与 D.H. Lawrence Auditorium" },
    { src: "/images/campus-map-east.webp", alt: "校园地图东侧：Gate 4 与 Residential Hub" },
    { src: "/images/hola-map.webp", alt: "HOLA International Community 校外学生公寓地图" },
  ]},
];

export const residencePhones = [
  ["11", "0574-8814 9011"], ["12A", "0574-8814 9012"], ["12B", "0574-8814 9021"], ["13", "0574-8814 9013"],
  ["14", "0574-8814 9014"], ["15", "0574-8814 9015"], ["16", "0574-8814 9016"], ["17", "0574-8814 9017"],
  ["18", "0574-8814 9018"], ["19", "0574-8814 9019"], ["20", "0574-8814 9020"], ["22", "0574-8814 9022"], ["23", "0574-8814 9023"],
];

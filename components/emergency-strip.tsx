import { HeartPulse, ShieldAlert } from "lucide-react";
export function EmergencyStrip() {
  return <aside className="emergency-strip" aria-label="紧急联系方式"><div className="shell emergency-grid"><strong><ShieldAlert size={20} /> 紧急联系</strong><a href="tel:057488180111">校园安全 <b>0574-8818 0111</b></a><a href="tel:057488180120"><HeartPulse size={18} /> 医疗服务 <b>0574-8818 0120</b></a><a href="mailto:unncpre-sessional@nottingham.edu.cn">项目办公室 <b>发送邮件</b></a></div></aside>;
}

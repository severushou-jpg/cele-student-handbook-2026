import { HeartPulse, ShieldAlert } from "lucide-react";
import { safetyRules } from "@/content/safety-rules";

export function SafetyView() { return <div className="safety-view"><div className="emergency-cards"><a href="tel:057488180111"><ShieldAlert /><small>SAFETY / SECURITY</small><strong>0574-8818 0111</strong></a><a href="tel:057488180120"><HeartPulse /><small>MEDICAL SERVICES</small><strong>0574-8818 0120</strong></a></div><ol className="rules-list">{safetyRules.map((rule, index) => <li id={`rule-${index + 1}`} key={index}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{rule.zh}</p><details><summary>English</summary><p lang="en">{rule.en}</p></details></div></li>)}</ol><p className="source-note">来源：Student Handbook PDF，第 20 页（手册页 18）。原顺序与文字已核验。</p></div>; }

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Cloud,
  FileCode2,
  Brain,
  MessageSquare,
  Network,
  Workflow,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./Section";

const technical = [
  { icon: Code2, name: "HTML & CSS" },
  { icon: FileCode2, name: "JavaScript (basics)" },
  { icon: Code2, name: "C (basics)" },
  { icon: Server, name: "Linux (learning)" },
  { icon: Code2, name: "Python (learning)" },
  { icon: Cloud, name: "AI Tools" },
];

const marketing = [
  { icon: Brain, name: "Brand Identity" },
  { icon: Sparkles, name: "Ad Copywriting" },
  { icon: Network, name: "Meta Ads (learning)" },
  { icon: MessageSquare, name: "Outreach" },
  { icon: Workflow, name: "Campaign Theory" },
  { icon: Brain, name: "Marketing Strategy" },
];

function SkillGrid({
  items,
  accent,
}: {
  items: { icon: LucideIcon; name: string }[];
  accent: "electric" | "teal";
}) {
  const accentClass =
    accent === "electric"
      ? "text-electric group-hover:shadow-glow"
      : "text-teal group-hover:shadow-glow-teal";
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
      {items.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: i * 0.04 }}
          className={`group flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 ${accentClass}`}
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-lg bg-secondary transition-colors ${accent === "electric" ? "group-hover:bg-electric/10" : "group-hover:bg-teal/10"}`}
          >
            <s.icon className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-foreground">{s.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Skills"
          title={
            <>
              Two disciplines. <span className="text-gradient">Still growing.</span>
            </>
          }
          description="A CS foundation I'm building on, paired with the marketing skills I'm developing through coursework and real projects."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-background p-8 shadow-card"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric/10 text-electric">
                <Code2 className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold">Technical</h3>
            </div>
            <SkillGrid items={technical} accent="electric" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-background p-8 shadow-card"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal">
                <Brain className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold">Marketing</h3>
            </div>
            <SkillGrid items={marketing} accent="teal" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

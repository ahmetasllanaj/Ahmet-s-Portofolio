import { motion } from "framer-motion";
import { Award, Briefcase, Brain } from "lucide-react";
import portrait from "@/assets/portrait-new.png";
import { SectionHeader, FadeIn } from "./Section";

const stats = [
  { icon: Briefcase, label: "1.5+", sub: "Yrs Klarna Support" },
  { icon: Award, label: "BSc", sub: "Computer Science" },
  { icon: Brain, label: "MSc", sub: "Marketing (ongoing)" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Technical foundation. <span className="text-gradient">Marketing direction.</span>
            </>
          }
          description="I'm Ahmet Asllanaj, based in Tirana — a Computer Science graduate now finishing an MSc in Marketing Management, building brand and digital marketing work as I move toward that career."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn>
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-border shadow-lift">
                <img
                  src={portrait}
                  alt="Portrait of Ahmet Asllanaj"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I hold a <span className="font-semibold">Computer Science bachelor's</span> and am
                finishing a <span className="font-semibold">Marketing Management MSc</span>. That
                gives me a working knowledge of HTML, CSS, and the basics of JavaScript and C,
                alongside the brand strategy and campaign theory I'm studying now.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I spent time in technical customer support at Klarna and in a data coordination
                role, and I'm currently building brand identity and digital marketing projects —
                including this site and a small agency concept called Nexora — while I look for my
                next role.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.sub}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                  >
                    <s.icon className="mb-3 h-6 w-6 text-electric transition-transform group-hover:scale-110" />
                    <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {s.label}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const testimonials = [
  {
    id: "placeholder-1",
    quote:
      "Client feedback coming soon — this section will fill in as I take on more brand and marketing projects.",
    name: "Placeholder",
    role: "Awaiting first client review",
    initials: "—",
  },
  {
    id: "placeholder-2",
    quote:
      "If you've worked with me on Juiciana Bar, Nexora, or another project, I'd love to add your feedback here.",
    name: "Placeholder",
    role: "Awaiting first client review",
    initials: "—",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-secondary/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What teams <span className="text-gradient">say.</span>
            </>
          }
          description="I'm early in client work, so this section is a placeholder for now — real feedback will replace it as projects wrap up."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-dashed border-border bg-background/60 p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-electric/15 transition-colors group-hover:text-electric/30" />
              <blockquote className="text-lg leading-relaxed text-muted-foreground italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-dashed border-border font-bold text-muted-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-muted-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

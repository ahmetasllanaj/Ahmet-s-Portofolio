import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/ahmetasllanaj" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ahmet-asllanaj-b323a41a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
   setSubmitting(true);
const res = await fetch("https://formspree.io/f/xjgqvypd", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
setSubmitting(false);
if (res.ok) {
  toast.success("Message sent — I'll get back to you within 24 hours.");
  setForm({ name: "", email: "", message: "" });
} else {
  toast.error("Something went wrong. Try again.");
}
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-hero py-28 text-white sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-electric/30 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 h-[26rem] w-[26rem] rounded-full bg-teal/25 blur-3xl animate-blob [animation-delay:5s]"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal backdrop-blur">
            Contact
          </span>
          <h2 className="mt-4 text-balance text-4xl font-bold sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-teal to-white bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
          <p className="mt-4 text-white/75">
            Open to marketing, support, and entry-level digital roles — or a project to collaborate
            on. Drop a message.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:ahmetasllanaj@gmail.com"
              className="group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur transition-all hover:bg-white/10"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="min-w-0">
                <div className="text-sm text-white/60">Email</div>
                <div className="truncate font-semibold group-hover:text-teal">
                  ahmetasllanaj@gmail.com
                </div>
              </div>
            </a>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="text-sm text-white/60">Follow</div>
              <div className="mt-3 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="group grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-glow-teal"
                  >
                    <s.icon className="h-5 w-5 text-white/80 transition-colors group-hover:text-teal" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur"
            noValidate
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/30"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/30"
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-teal focus:ring-2 focus:ring-teal/30"
                placeholder="Tell me about your project…"
              />
              {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send Message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

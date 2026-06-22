import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionHeader } from "./Section";

type Asset = {
  label: string;
  type: "image" | "pdf" | "link";
  src: string;
};

type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  thumbnail?: string;
  assets: Asset[];
  link?: { label: string; href: string };
};

const projects: Project[] = [
  {
    id: "juiciana-club",
    title: "Juiciana Club",
    short: "Full brand identity for a grab-and-go beverage concept in Tirana.",
    description:
      'Full brand identity for Juiciana Club, a grab-and-go beverage concept built around "Tropical Taste, Urban Pace." Covers brand strategy, positioning, and voice; a full logo system (primary, monogram, and badge); the color palette and typography; the mascot "Juico"; and two ad copy sets for social promotion.',
    tags: ["Brand", "Design"],
    category: "Brand",
    gradient: "from-teal to-electric",
    thumbnail: "/assets/projects/juiciana-club-moodboard.png",
    assets: [
      { label: "Moodboard", type: "image", src: "/assets/projects/juiciana-club-moodboard.png" },
      { label: "Full Brand PDF", type: "pdf", src: "/assets/projects/juiciana-club-brand.pdf" },
      { label: "Ad Copy Set 1", type: "image", src: "/assets/projects/juiciana-club-ads-1.jpg" },
      { label: "Ad Copy Set 2", type: "image", src: "/assets/projects/juiciana-club-ads-2.jpg" },
    ],
  },
  {
    id: "DM-LAB",
    title: "DM-LAB",
    short: "Agency site built from scratch for my own digital marketing studio.",
    description:
      "Single-page site for DM-LAB, a digital agency I'm building, covering digital marketing, web design, social media management, and brand work. Hand-coded in HTML, CSS, and JavaScript with a teal and off-black color scheme, built to target English-speaking clients.",
    tags: ["Web", "Brand"],
    category: "Web",
    gradient: "from-navy to-electric",
    thumbnail: "/assets/projects/dm-lab-preview.png",
    assets: [{ label: "Site Preview", type: "image", src: "/assets/projects/dm-lab-preview.png" }],
    link: { label: "View Site", href: "https://ahmetasllanaj.github.io/DM-LAB/" },
  },
];

const filters = ["All", "Brand", "Web"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.tags.includes(filter);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-gradient">work.</span>
            </>
          }
          description="Real brand and web projects I've built so far."
        />

        <div className="mb-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm shadow-card outline-none transition-all focus:border-electric focus:ring-2 focus:ring-electric/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                  filter === f
                    ? "border-transparent bg-gradient-accent text-primary-foreground shadow-glow"
                    : "border-border bg-card text-muted-foreground hover:border-electric/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                layout
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card text-left shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}
                >
                  {p.thumbnail ? (
                    <img
                      src={p.thumbnail}
                      alt={`${p.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <span className="font-display text-3xl font-bold text-white/90 drop-shadow-lg">
                          {p.title}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No projects match that filter.</p>
        )}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-lift"
            >
              <div className={`relative aspect-[16/8] bg-gradient-to-br ${active.gradient}`}>
                {active.thumbnail ? (
                  <img
                    src={active.thumbnail}
                    alt={`${active.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <span className="font-display text-4xl font-bold text-white drop-shadow-lg">
                        {active.title}
                      </span>
                    </div>
                  </>
                )}
                <button
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold">{active.title}</h3>
                <p className="mt-4 text-foreground/80">{active.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {active.assets.length > 0 && (
                  <div className="mt-6 space-y-2">
                    <div className="text-sm font-semibold text-foreground">Assets</div>
                    <div className="flex flex-wrap gap-2">
                      {active.assets.map((a) => (
                        <a
                          key={a.label}
                          href={a.src}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                          {a.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {active.link && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={active.link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" /> {active.link.label}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

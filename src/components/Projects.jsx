import { Code2, Globe, Zap, Cpu } from "lucide-react";

const projects = [
  {
    title: "Algo Visualizer",
    desc: "Interactive pathfinding and sorting visualizations built with React and Canvas.",
    tags: ["React", "Algorithms", "Canvas"],
    icon: <Cpu className="text-cyan-400" size={20} />,
    link: "#"
  },
  {
    title: "Dev Notes",
    desc: "Markdown notes app with sync and full‑text search.",
    tags: ["TypeScript", "IndexedDB", "PWA"],
    icon: <Globe className="text-blue-400" size={20} />,
    link: "#"
  },
  {
    title: "API Playgrounds",
    desc: "A set of small tools for testing REST and WebSocket APIs.",
    tags: ["FastAPI", "WebSocket", "UI"],
    icon: <Zap className="text-indigo-400" size={20} />,
    link: "#"
  },
  {
    title: "Code Snippets",
    desc: "Snippet manager with tagging and AI summaries.",
    tags: ["Next.js", "Vector DB", "OpenAI"],
    icon: <Code2 className="text-violet-400" size={20} />,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-slate-300/80">A mix of client work, experiments, and school projects.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur transition hover:border-cyan-400/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-600/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/5 p-2">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <span key={j} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

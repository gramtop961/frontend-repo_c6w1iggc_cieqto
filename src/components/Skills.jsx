import { Database, Layers, Brain, TerminalSquare } from "lucide-react";

const skills = [
  { name: "Frontend", items: ["React", "Tailwind", "TypeScript", "Vite"], icon: <Layers className="text-cyan-400" size={18} /> },
  { name: "Backend", items: ["FastAPI", "Node", "Express", "MongoDB"], icon: <Database className="text-blue-400" size={18} /> },
  { name: "Systems", items: ["Algorithms", "OS", "Networking", "Git"], icon: <TerminalSquare className="text-indigo-400" size={18} /> },
  { name: "AI/ML", items: ["Python", "NumPy", "Pandas", "PyTorch"], icon: <Brain className="text-violet-400" size={18} /> }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-slate-300/80">Technologies and areas I work with.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/5 p-2">{s.icon}</div>
                <h3 className="text-white font-semibold">{s.name}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                {s.items.map((it, j) => (
                  <li key={j} className="rounded-md border border-white/5 bg-white/5 px-2 py-1 inline-block mr-2 mb-2">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';

export default function SplitCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-1">
          <div className="grid items-stretch gap-0 overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)] lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1300&auto=format&fit=crop"
                alt="workspace"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Let’s create something cinematic</h3>
              <p className="mt-3 text-slate-300/90">I blend polished interactions, 3D, and strong engineering to build experiences that feel like film—smooth, moody, and memorable.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:brightness-95">
                  Explore Work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

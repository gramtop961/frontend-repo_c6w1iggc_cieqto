import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  // Track scroll progress relative to the hero section
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Map scroll to a subtle zoom-in scale (cinematic push-in)
  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scale = useSpring(rawScale, { stiffness: 120, damping: 24, mass: 0.2 });
  // Optional: slight y-translation for parallax feel
  const rawY = useTransform(scrollYProgress, [0, 1], ["0vh", "4vh"]);
  const y = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <section id="top" ref={ref} className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background 3D scene with scroll-zoom effect */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ scale, y }}
      >
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Vignette for cinematic edges */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.55)_70%,rgba(2,6,23,0.9)_100%)]" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Building thoughtful software with a curiosity for systems
          </h1>

          <p className="mt-4 text-slate-300/90 text-base md:text-lg">
            I’m a computer science student focusing on full‑stack development, systems, and human‑centered design. I love shipping small projects that feel polished and performant.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110">See Projects</a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

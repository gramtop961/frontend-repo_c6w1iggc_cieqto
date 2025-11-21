import { useRef, useEffect } from 'react';

const items = [
  'React', 'TypeScript', 'Tailwind', 'FastAPI', 'MongoDB', 'Node', 'Python', 'Docker', 'Vite', 'Framer Motion', 'WebGL', 'Spline', 'CI/CD', 'Redis', 'Next.js'
];

export default function Marquee({ speed = 40, reversed = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--duration', `${speed}s`);
    el.style.setProperty('--direction', reversed ? 'reverse' : 'normal');
  }, [speed, reversed]);

  return (
    <div className="relative overflow-hidden py-6">
      <div
        ref={ref}
        className="flex gap-8 whitespace-nowrap will-change-transform animate-marquee"
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            {it}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}

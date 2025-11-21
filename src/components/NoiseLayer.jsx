export default function NoiseLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] opacity-[0.06] mix-blend-soft-light" aria-hidden>
      <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

import { Send } from "lucide-react";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    alert(`Thanks ${data.name}! I\nEmail: ${data.email}\nMessage: ${data.message}`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
            <p className="mt-2 text-slate-300/80">Open to internships, collaborations, and hackathons.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <ul className="space-y-2 text-slate-300/90 text-sm">
                <li><span className="text-white">Email:</span> you@example.com</li>
                <li><span className="text-white">Location:</span> Remote / Your City</li>
                <li><span className="text-white">Focus:</span> Full‑stack, Systems, UI</li>
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input name="name" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" required />
              <input type="email" name="email" placeholder="Your email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" required />
              <textarea name="message" placeholder="Your message" rows="5" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:brightness-110">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

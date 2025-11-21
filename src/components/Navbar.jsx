import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm">
      <li><a href="#projects" className="text-slate-200 hover:text-white transition">Projects</a></li>
      <li><a href="#skills" className="text-slate-200 hover:text-white transition">Skills</a></li>
      <li><a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a></li>
      <li className="flex gap-4 md:ml-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={18} /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
        <a href="mailto:you@example.com" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group">
              <div className="text-white font-semibold tracking-tight text-lg">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
                <span className="ml-2 text-slate-300/80">• CS Student</span>
              </div>
              <div className="h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400/60 via-blue-400/60 to-indigo-400/60"></div>
            </a>

            <nav className="hidden md:block">
              <NavLinks />
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Menu">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 border-t border-white/10">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

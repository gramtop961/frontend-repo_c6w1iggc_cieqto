import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Marquee from './components/Marquee'
import SplitCTA from './components/SplitCTA'
import NoiseLayer from './components/NoiseLayer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <NoiseLayer />

      {/* Cinematic background auras */}
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <main className="relative z-[2] space-y-24">
        <Hero />
        <Marquee />
        <Projects />
        <SplitCTA />
        <Skills />
        <Contact />

        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Your Name — Built with React & Tailwind</p>
        </footer>
      </main>
    </div>
  )
}

export default App

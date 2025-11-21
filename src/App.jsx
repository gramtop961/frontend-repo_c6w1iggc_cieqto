import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <main className="relative">        
        <Hero />
        <Projects />
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
import './App.css'
import { Header } from '@/components/layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/Profesional'
import { Personal } from '@/components/sections/Personal'
import { Contact } from '@/components/sections/Contact'
import { Skills } from '@/components/sections/Skills'
import ParticlesBackground from '@/components/ui/ParticlesBg'

function App() {
  return (
    <div>
      <Header />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-16 bg-woodsmoke-50 text-woodsmoke-900 relative z-10">
      <ParticlesBackground />
        {/* Hero Section */}
        <Hero />
        <About />
        <Personal />
        <Skills />
        <Contact /> 
      </main>
    </div>
  )
}

export default App

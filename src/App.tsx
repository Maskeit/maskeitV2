import { useEffect, useState } from 'react'
import './App.css'
import { Header } from '@/components/layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/Services'
import { Personal } from '@/components/sections/Personal'
import { Contact } from '@/components/sections/Contact'
import { Skills } from '@/components/sections/Skills'
import ParticlesBackground from '@/components/ui/ParticlesBg'
import { Demo } from '@/pages/Demo'

function App() {
  const [route, setRoute] = useState<string>(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash)
      if (window.location.hash === '#/demo') {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const isDemoRoute = route === '#/demo'

  return (
    <div>
      <Header />

      <main className="pt-16 bg-woodsmoke-50 text-woodsmoke-900 relative z-10">
        <ParticlesBackground />
        {isDemoRoute ? (
          <Demo />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Personal />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}

export default App

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
import { useSEO } from '@/hooks/useSEO'

function App() {
  const [route, setRoute] = useState<string>(window.location.pathname)

  useSEO({
    title: 'Codeale - Desarrollo Web Moderno con React y Vite',
    description: 'Creamos aplicaciones web escalables y performantes con React, Vite y tecnologías modernas. Especialistas en frontend con JavaScript y TypeScript.',
    keywords: 'desarrollo web, react, vite, frontend, javascript, typescript, web moderno',
    ogImage: 'https://codeale.com/og-image.jpg',
    ogUrl: 'https://codeale.com'
  })

  useEffect(() => {
    const handlePopState = () => {
      setRoute(window.location.pathname)
      if (window.location.pathname === '/demo') {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return

      if (href.startsWith('/#')) {
        const pathAndAnchor = href.replace('/#', '')
        const [path, anchor] = pathAndAnchor.includes('#')
          ? pathAndAnchor.split('#')
          : [pathAndAnchor, '']

        e.preventDefault()
        const finalPath = path || '/'

        if (window.location.pathname !== finalPath) {
          window.history.pushState(null, '', finalPath)
          setRoute(finalPath)
          if (finalPath === '/demo') {
            window.scrollTo({ top: 0, behavior: 'instant' })
          }
        }

        if (anchor) {
          setTimeout(() => {
            const element = document.getElementById(anchor)
            element?.scrollIntoView({ behavior: 'smooth' })
          }, 0)
        }
      } else if (href.startsWith('/')) {
        e.preventDefault()
        if (window.location.pathname !== href) {
          window.history.pushState(null, '', href)
          setRoute(href)
          if (href === '/demo') {
            window.scrollTo({ top: 0, behavior: 'instant' })
          }
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    document.addEventListener('click', handleLinkClick as EventListener)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleLinkClick as EventListener)
    }
  }, [])

  const isDemoRoute = route === '/demo'

  return (
    <div>
      <Header />

      <main className="pt-16 relative z-10">
        <ParticlesBackground />
        {isDemoRoute ? (
          <Demo />
        ) : (
          <>
            <Hero />
            <About />
            <Personal />
            <Skills />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}

export default App

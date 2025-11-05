import './App.css'
import { Header } from '@/components/layout'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/Profesional'
import { Personal } from '@/components/sections/Personal'
function App() {
  return (
    <div>
      <Header />
      
      {/* Main content with proper spacing for fixed header */}
      <main className="pt-16 bg-woodsmoke-50 text-woodsmoke-900 ">
        {/* Hero Section */}
        <Hero />
        <About />
        <Personal />
      </main>
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
//import logo from '@/assets/logos/logo2.svg'
import logo from '@/assets/logos/2.png'

interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  const headerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    // Native scroll fallback - will be replaced with Lenis context
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const navItems = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Professional Journey', href: '#professional' },
    { label: 'About me', href: '#about' },
    { label: 'Experience', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white/95 backdrop-blur-md border-b border-woodsmoke-200/30
        transition-transform duration-300 ease-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Brand - Más prominente */}
          <div className="flex items-center">
            <a
              href="#hero"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="hidden lg:flex rounded-lg items-center justify-center">
                <img src={logo} className='w-24 h-24' alt="Logo" />
              </div>
              <div className="flex flex-col">
                <span className="lg:text-3xl font-bold text-woodsmoke-900 leading-tight">
                  MIGUEL ALEJANDRE
                </span>
                <span className="text-lg text-woodsmoke-600 leading-tight">
                  Software Engineer
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - A la derecha */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  px-4 py-2 text-base font-medium text-woodsmoke-700 
                  hover:text-woodsmoke-900 hover:bg-woodsmoke-100 
                  rounded-lg transition-all duration-200 relative group
                "
              >
                {item.label}
              </a>
            ))}

            {/* Language Selector (opcional, como en el ejemplo) */}
            <div className="ml-4 flex items-center">
              <button className="flex items-center px-3 py-2 text-sm font-medium text-woodsmoke-700 hover:text-woodsmoke-900 rounded-lg hover:bg-woodsmoke-100 transition-all duration-200">
                <span>Language</span>
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="
                inline-flex items-center justify-center p-2 rounded-lg
                text-woodsmoke-600 hover:text-woodsmoke-900 hover:bg-woodsmoke-100
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-woodsmoke-300
                transition-colors duration-200
              "
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú principal'}
              </span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
          id="mobile-menu"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="
                  block px-3 py-2 rounded-lg text-base font-medium
                  text-woodsmoke-700 hover:text-woodsmoke-900
                  hover:bg-woodsmoke-100 transition-all duration-200
                "
              >
                {item.label}
              </a>
            ))}

            {/* Language selector mobile */}
            <div className="pt-2 border-t border-woodsmoke-200">
              <button className="
                w-full flex items-center justify-between px-3 py-2 rounded-lg
                text-base font-medium text-woodsmoke-700 hover:text-woodsmoke-900
                hover:bg-woodsmoke-100 transition-all duration-200
              ">
                <span>Language</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
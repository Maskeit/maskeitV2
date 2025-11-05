import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '@/assets/logos/logo2.svg'
import { MapPinIcon } from '@heroicons/react/16/solid'

export const Hero = () => {
    const heroRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    
    useEffect(() => {
        // GSAP Timeline para secuencia de animaciones
        const tl = gsap.timeline()
        
        if (titleRef.current && subtitleRef.current) {
            // Set initial state
            gsap.set([titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: 50
            })
            
            // Animate title first
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            })
            // Then animate subtitle
            .to(subtitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8") // Overlap with previous animation
        }
        
        return () => {
            tl.kill() // Cleanup
        }
    }, [])
    
    return (
        <>
            <section 
                id="hero" 
                ref={heroRef}
                className="min-h-screen justify-center items-center flex flex-col px-4 pt-16">
                <div className="max-w-5xl mx-auto space-y-8">
                    {/* Título principal */}
                    <div className="text-center">
                        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide mb-6">
                            Full Stack Engineering & AI Solutions
                        </h1>
                        <p ref={subtitleRef} className="text-lg md:text-xl text-woodsmoke-700 animate-fade-in-delay max-w-3xl mx-auto">
                            Hi, I'm Miguel Alejandre. I'm a Full Stack Engineer specializing in systems architectures and modern web development.
                        </p>
                    </div>

                    {/* Información de ubicación y puesto */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12">
                        <div>
                            <h3 className="text-sm font-semibold text-woodsmoke-600 uppercase tracking-wide mb-2 flex items-center">
                                Location <MapPinIcon className="size-5" /> 
                            </h3>
                            <p className="text-lg text-woodsmoke-900">
                                México
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-sm font-semibold text-woodsmoke-600 uppercase tracking-wide mb-2">
                                Current Position
                            </h3>
                            <p className="text-lg text-woodsmoke-900">
                                Fullstack Engineer & AI Developer in Jatenx
                            </p>
                        </div>
                    </div>

                    {/* Botón CTA */}
                    <div className="text-center mt-8">
                        <a 
                            href="#professional" 
                            className="inline-block bg-woodsmoke-900 text-white px-8 py-3 rounded-full font-medium hover:bg-woodsmoke-800 transition-colors duration-200"
                        >
                            About me
                        </a>
                    </div>
                </div>
                
                {/* Logo */}
                <div className="mt-12">
                    <img src={logo} className='w-32 h-32 mx-auto opacity-20' alt="Logo" />
                </div>
            </section>
        </>
    )
}
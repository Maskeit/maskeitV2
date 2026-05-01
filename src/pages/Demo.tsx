import { ArrowLeft } from 'lucide-react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export const Demo = () => {
    return (
        <section className="min-h-screen text-woodsmoke-900 px-4 pt-24 pb-16">
            <div className="max-w-6xl mx-auto w-full">
                {/* Back link */}
                <a
                    href="#services"
                    onClick={() => {
                        // Allow default hash navigation; ensure we leave /demo route
                        window.location.hash = '#services'
                    }}
                    className="inline-flex items-center gap-2 text-woodsmoke-700 hover:text-woodsmoke-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </a>

                {/* Header */}
                <div className="text-center mb-14">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent tracking-wide">
                        Ejemplos de Desarrollo
                    </h1>
                    <p className="text-woodsmoke-600 text-xl mt-4 max-w-2xl mx-auto">
                        Una selección de proyectos que muestran el tipo de soluciones que puedo construir para tu negocio.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-woodsmoke-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-woodsmoke-800 transition-colors duration-200 text-lg"
                    >
                        Hablemos de tu proyecto
                    </a>
                    <p className="text-woodsmoke-500 text-sm mt-3">
                        ¿Tienes una idea? Construyamos algo juntos.
                    </p>
                </div>
            </div>
        </section>
    )
}

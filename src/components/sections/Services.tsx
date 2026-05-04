import { LayoutDashboard, ShoppingCart, CalendarCheck, BarChart3 } from 'lucide-react'
import type { ReactNode } from 'react'

const services: { icon: ReactNode; title: string; description: string }[] = [
    {
        icon: <LayoutDashboard className="w-8 h-8 text-woodsmoke-700" />,
        title: 'Sistemas de Gestión',
        description: 'CRUD completo con autenticación, panel admin y dashboards internos para tu operación.',
    },
    {
        icon: <ShoppingCart className="w-8 h-8 text-woodsmoke-700" />,
        title: 'E-commerce & Catálogos',
        description: 'Tiendas online con integración de pagos Stripe, inventario y gestión de productos.',
    },
    {
        icon: <CalendarCheck className="w-8 h-8 text-woodsmoke-700" />,
        title: 'Reservas & Agendamiento',
        description: 'Plataformas de citas, reservas y calendarios con notificaciones automáticas.',
    },
    {
        icon: <BarChart3 className="w-8 h-8 text-woodsmoke-700" />,
        title: 'Portales & Reportes',
        description: 'Portal de clientes con reportes y datos en tiempo real para toma de decisiones.',
    },
]

export const About = () => {

    return (
        <section id="services" className="min-h-screen flex flex-col justify-center text-woodsmoke-900 px-4 pt-16">
            <div className="max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide">
                        Software a la Medida
                    </h2>
                    <p className="text-woodsmoke-600 text-xl mt-4 max-w-2xl mx-auto">
                        Desarrollo soluciones web confiables y rápidas, diseñadas para las necesidades reales de tu negocio.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-sm border border-woodsmoke-200/50 rounded-2xl p-6 hover:shadow-lg hover:border-woodsmoke-300/60 transition-all duration-300"
                        >
                            <div className="mb-3">{service.icon}</div>
                            <h3 className="text-xl font-bold text-woodsmoke-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-woodsmoke-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-5 text-center">
                        <div className="text-3xl font-bold text-woodsmoke-900">5+</div>
                        <div className="text-sm text-woodsmoke-600">Años de experiencia</div>
                    </div>
                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-5 text-center">
                        <div className="text-3xl font-bold text-woodsmoke-900">10+</div>
                        <div className="text-sm text-woodsmoke-600">Proyectos entregados</div>
                    </div>
                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-5 text-center">
                        <div className="text-3xl font-bold text-woodsmoke-900">100%</div>
                        <div className="text-sm text-woodsmoke-600">Clientes satisfechos</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#/demo"
                        className="inline-block bg-woodsmoke-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-woodsmoke-800 transition-colors duration-200 text-lg"
                    >
                        Ver ejemplos de proyectos
                    </a>
                    <p className="text-woodsmoke-500 text-sm mt-3">
                        Conoce ejemplos de lo que puedo construir para ti
                    </p>
                </div>
            </div>
        </section>
    )
}

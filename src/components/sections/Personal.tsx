import { Lightbulb, Handshake, Zap } from 'lucide-react'

export const Personal = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center text-woodsmoke-900 px-4 pt-16">
            <div className="max-w-7xl mx-auto w-full">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide">
                        Vida Personal
                    </h2>
                    <p className="text-woodsmoke-600 text-xl mt-4">
                        más allá del código, un vistazo a mi vida personal y pasiones
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">

                    {/* Foto principal - tall left */}
                    <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/me-2.jpeg" alt="Miguel" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-5">
                            <h3 className="text-white font-bold text-xl">Miguel</h3>
                            <p className="text-white/90 text-sm">Software Engineer & Creator</p>
                        </div>
                    </div>

                    {/* Tecnología */}
                    <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/tech.jpeg" alt="Tecnología" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-3">
                            <h3 className="text-white font-bold text-lg">Entusiasta de la Tecnología</h3>
                            <p className="text-white/90 text-xs hidden md:block">Experimentando con herramientas de vanguardia y código abierto.</p>
                        </div>
                    </div>

                    {/* Música */}
                    <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/me-3.jpeg" alt="Música" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-3">
                            <h3 className="text-white font-bold text-lg">La música como expresión</h3>
                            <p className="text-white/90 text-xs hidden md:block">Escuchar y tocar me inspira a crear nuevas ideas.</p>
                        </div>
                    </div>

                    {/* Bio personal - wide */}
                    <div className="col-span-2 row-span-1 bg-white/60 backdrop-blur-sm border border-woodsmoke-200/50 rounded-2xl p-5 flex flex-col justify-center">
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Un poco sobre mi vida</h4>
                        <p className="text-sm text-woodsmoke-700 leading-relaxed">
                            Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, tocando el bajo,
                            o disfrutando de un buen café mientras trabajo en proyectos personales que me apasionan.
                            Creo que la creatividad fluye a partir de experiencias diversas.
                        </p>
                    </div>

                    {/* Compartiendo Conocimiento */}
                    <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/talk.jpeg" alt="Compartiendo conocimiento" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-3">
                            <h3 className="text-white font-bold text-base">Compartiendo Conocimiento</h3>
                        </div>
                    </div>

                    {/* Tiempo Libre */}
                    <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/me-chill.jpeg" alt="Tiempo libre" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-3">
                            <h3 className="text-white font-bold text-base">Tiempo Libre</h3>
                        </div>
                    </div>

                    {/* Exposiciones - wide */}
                    <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative border border-woodsmoke-200/50">
                        <img src="/photos/me-expo.jpeg" alt="Exposiciones" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-3">
                            <h3 className="text-white font-bold text-lg">Exposiciones y Eventos</h3>
                            <p className="text-white/90 text-xs">Participando en eventos de tecnología y compartiendo ideas con la comunidad.</p>
                        </div>
                    </div>

                </div>

                {/* Sección inferior: Valores personales */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="flex justify-center mb-3"><Lightbulb className="w-8 h-8 text-woodsmoke-700" /></div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Curiosidad</h4>
                        <p className="text-woodsmoke-600 text-sm">Siempre preguntando "¿y si...?" y buscando mejores formas de resolver problemas. Creo que cuestionar el status quo conduce a innovaciones revolucionarias.</p>
                    </div>

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="flex justify-center mb-3"><Handshake className="w-8 h-8 text-woodsmoke-700" /></div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Colaboración</h4>
                        <p className="text-woodsmoke-600 text-sm">Creo que las mejores ideas surgen del trabajo en equipo y de perspectivas diversas. Cada proyecto es una oportunidad para aprender de los demás.</p>
                    </div>

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="flex justify-center mb-3"><Zap className="w-8 h-8 text-woodsmoke-700" /></div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Innovación</h4>
                        <p className="text-woodsmoke-600 text-sm">Apasionado por crear soluciones que tengan un impacto real en la vida de las personas y que empujen los límites de lo que es posible.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

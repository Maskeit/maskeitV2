export const About = () => {
    return (
        <section id="professional" className="min-h-screen flex flex-col justify-center text-woodsmoke-900 px-4 pt-16">
            <div className="max-w-7xl mx-auto w-full">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide">
                        Professional Journey
                    </h2>
                </div>

                {/* Contenido principal: Grid de 2 columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Columna izquierda: Información */}
                    <div className="space-y-6">
                        <div className="bg-white/60 backdrop-blur-sm border border-woodsmoke-200/50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-woodsmoke-900 mb-4">
                                Full Stack Engineer
                            </h3>
                            <p className="text-lg text-woodsmoke-700 leading-relaxed mb-4">
                                From the start of my training as an engineer, I've been passionate about building innovative products that solve real-world problems. With a strong focus on system architecture, adapting hasn't always been easy, but I find motivation in every challenge to discover effective solutions.
                            </p>
                            <p className="text-lg text-woodsmoke-700 leading-relaxed mb-4">
                                I have experience building developer tools and CLIs for embedding generation and data processing. I'm passionate about scalable architectures, MLOps best practices, and the ethical development of AI technologies.
                            </p>
                            <p className="text-lg text-woodsmoke-700 leading-relaxed">
                                I continue to forge my professional path through new challenges and continuous learning.
                            </p>
                        </div>

                        {/* Stats o información adicional */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-woodsmoke-900">3+</div>
                                <div className="text-sm text-woodsmoke-600">Years of experience</div>
                            </div>
                            <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                                <div className="text-3xl font-bold text-woodsmoke-900">5+</div>
                                <div className="text-sm text-woodsmoke-600">Projects completed and deployed</div>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha: Bento Grid */}
                    <div className="grid grid-cols-3 grid-rows-4 gap-3 h-[600px]">
                        
                        {/* Card grande superior izquierda - 2x2 */}
                        <div className="col-span-2 row-span-2 bg-white/60 rounded-2xl p-6 flex items-center justify-center overflow-hidden relative border border-woodsmoke-200/50">
                            <div className="text-center">
                                <div className="text-4xl mb-2">💻</div>
                                <div className="text-woodsmoke-900 font-semibold">Development</div>
                                <div className="text-woodsmoke-600 text-sm">Full Stack</div>
                            </div>
                            {/* Placeholder para imagen */}
                            <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                <span className="text-woodsmoke-600 text-xs">Imagen aquí</span>
                            </div>
                        </div>

                        {/* Card superior derecha */}
                        <div className="col-span-1 row-span-1 bg-white/60 rounded-2xl p-4 flex items-center justify-center relative border border-woodsmoke-200/50">
                            <div className="text-center">
                                <div className="text-2xl mb-1">🤖</div>
                                <div className="text-woodsmoke-900 text-sm font-medium">AI & ML</div>
                            </div>
                            <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                <span className="text-woodsmoke-600 text-xs">IMG</span>
                            </div>
                        </div>

                        {/* Card medio derecha */}
                        <div className="col-span-1 row-span-1 bg-white/60 rounded-2xl p-4 flex items-center justify-center relative border border-woodsmoke-200/50">
                            <div className="text-center">
                                <div className="text-2xl mb-1">🎨</div>
                                <div className="text-woodsmoke-900 text-sm font-medium">Design</div>
                            </div>
                            <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                <span className="text-woodsmoke-600 text-xs">IMG</span>
                            </div>
                        </div>

                        {/* Card medio izquierda - horizontal */}
                        <div className="col-span-2 row-span-1 bg-white/60 rounded-2xl p-4 flex items-center justify-between relative border border-woodsmoke-200/50">
                            <div>
                                <div className="text-woodsmoke-900 font-semibold">Tech Stack</div>
                                <div className="text-woodsmoke-600 text-sm">React • Node • Python • AI</div>
                            </div>
                            <div className="text-3xl">⚡</div>
                            <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                <span className="text-woodsmoke-600 text-xs">Imagen aquí</span>
                            </div>
                        </div>

                        {/* Card inferior grande - full width */}
                        <div className="col-span-3 row-span-1 bg-white/60 rounded-2xl p-6 flex items-center justify-center relative border border-woodsmoke-200/50">
                            <div className="text-center">
                                <div className="text-woodsmoke-900 text-xl font-bold mb-1">Connecting Ideas</div>
                                <div className="text-woodsmoke-600 text-sm">Empowering Innovation</div>
                            </div>
                            <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                <span className="text-woodsmoke-600 text-xs">Imagen panorámica aquí</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
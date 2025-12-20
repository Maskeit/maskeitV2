export const Personal = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center text-woodsmoke-900 px-4 pt-16">
            <div className="max-w-7xl mx-auto w-full">
                {/* Título principal */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide">
                        Personal Side
                    </h2>
                    <p className="text-woodsmoke-600 text-xl mt-4">
                        beyond the code
                    </p>
                </div>

                {/* Grid principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Columna izquierda: Foto principal y bio personal */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Foto principal */}
                        <div className="aspect-[4/5] bg-white/60 border border-woodsmoke-200/50 rounded-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <img src="/src/assets/photos/me-2.jpeg" alt="Miguel" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-6">
                                <h3 className="text-white font-bold text-xl">Miguel</h3>
                                <p className="text-white/90 text-sm">Software Engineer & Creator</p>
                            </div>
                        </div>

                        {/* Bio personal */}
                        <div className="bg-white/60 backdrop-blur-sm border border-woodsmoke-200/50 rounded-2xl p-6">
                            <h4 className="text-woodsmoke-900 font-semibold mb-3">A little about my life</h4>
                            <p className="text-lg text-woodsmoke-700 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies, playing bass guitar,
                                or enjoying a good coffee while working on personal projects that I'm passionate about.
                                I believe that creativity flows from diverse experiences, so I try to balance my technical
                                work with music, travel, and connecting with nature whenever possible.
                            </p>
                        </div>
                    </div>

                    {/* Columna central y derecha: Grid de hobbies y trayectoria */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 gap-4 h-[700px]">

                            {/* Hobby 1: Tecnología - Grande */}

                            <div className="col-span-1 row-span-2 bg-white/60 rounded-2xl relative border border-woodsmoke-200/50 overflow-hidden">
                                
                                <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                                    <img
                                        src="/src/assets/photos/tech.jpeg"
                                        alt="bassist"
                                        className="w-full h-full object-contain object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-2 rounded-md">
                                    <h3 className="text-white font-bold text-xl">Tech Enthusiast</h3>
                                    <p className="text-white/90 text-sm">I love experimenting with
                                        cutting-edge tools and contributing to open-source projects in my free time</p>
                                </div>
                            </div>
                            
                            {/* Música */}
                            <div className="col-span-1 row-span-2 bg-white/60 rounded-2xl relative border border-woodsmoke-200/50 overflow-hidden">
                                
                                <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                                    <img
                                        src="/src/assets/photos/me-3.jpeg"
                                        alt="bassist"
                                        className="w-full h-full object-contain object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/100 to-transparent p-2 rounded-md">
                                    <h3 className="text-white font-bold text-xl">Music as expression</h3>
                                    <p className="text-white text-sm">One of my hobbies is music; listening and playing inspires you to create new ideas.</p>
                                </div>
                            </div>

                            {/* Gaming */}
                            <div className="col-span-1 row-span-2 bg-white/60 rounded-2xl relative border border-woodsmoke-200/50 overflow-hidden">
                                
                                <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                                    <img
                                        src="/src/assets/photos/talk.jpeg"
                                        alt="bassist"
                                        className="w-full h-full object-contain object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-woodsmoke-900/80 to-transparent p-2 rounded-md">
                                    <h3 className="text-white font-bold text-xl">Sharing Knowledge</h3>
                                    <p className="text-white/90 text-sm">As a software engineer, I enjoy mentoring and collaborating with peers.</p>
                                </div>
                            </div>

                            {/* Trayectoria/Timeline - Horizontal grande */}
                            <div className="col-span-2 md:col-span-3 row-span-1 bg-white/60 rounded-2xl p-6 relative border border-woodsmoke-200/50">
                                <div className="flex items-center justify-between relative z-10">
                                    <div>
                                        <h4 className="text-woodsmoke-900 font-bold text-lg mb-1">My Journey</h4>
                                        <p className="text-woodsmoke-600 text-sm">2021 → Engineering Student | 2023 → Junior Developer | 2025 → Full Stack AI Engineer</p>
                                    </div>
                                    <div className="text-4xl">🚀</div>
                                </div>
                                <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                    <span className="text-woodsmoke-600 text-xs">Timeline & graduation photos</span>
                                </div>
                            </div>

                            {/* Viajes */}
                            <div className="col-span-1 row-span-1 bg-white/60 rounded-2xl p-4 relative border border-woodsmoke-200/50">
                                <div className="text-center relative z-10">
                                    <div className="text-3xl mb-2">✈️</div>
                                    <div className="text-woodsmoke-900 text-sm font-medium">Travel</div>
                                    <div className="text-woodsmoke-600 text-xs">Culture Explorer</div>
                                </div>
                                <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                    <span className="text-woodsmoke-600 text-xs">Travel photos</span>
                                </div>
                            </div>

                            {/* Fotografía/Arte */}
                            <div className="col-span-1 row-span-1 bg-white/60 rounded-2xl p-4 relative border border-woodsmoke-200/50">
                                <div className="text-center relative z-10">
                                    <div className="text-3xl mb-2">📸</div>
                                    <div className="text-woodsmoke-900 text-sm font-medium">Photography</div>
                                    <div className="text-woodsmoke-600 text-xs">Creative Eye</div>
                                </div>
                                <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-50">
                                    <span className="text-woodsmoke-600 text-xs">Photo work</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Sección inferior: Valores personales */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">💡</div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Curiosity</h4>
                        <p className="text-woodsmoke-600 text-sm">Always asking "what if...?" and seeking better ways to solve problems. I believe that questioning the status quo leads to breakthrough innovations.</p>
                    </div>

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">🤝</div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Collaboration</h4>
                        <p className="text-woodsmoke-600 text-sm">I believe the best ideas emerge from teamwork and diverse perspectives. Every project is an opportunity to learn from others.</p>
                    </div>

                    <div className="bg-white/60 border border-woodsmoke-200/50 rounded-xl p-6 text-center">
                        <div className="text-3xl mb-3">⚡</div>
                        <h4 className="text-woodsmoke-900 font-semibold mb-2">Innovation</h4>
                        <p className="text-woodsmoke-600 text-sm">Passionate about creating solutions that make a real impact in people's lives and push the boundaries of what's possible.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

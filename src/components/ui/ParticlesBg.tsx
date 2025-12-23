import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container, type ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => {
            setInit(true)
        })
    }, [])

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log('Particles loaded',container)
    }

    const options: ISourceOptions = useMemo(
        () => ({
            autoPlay: true,
            enableUpdates: true,
            responsive: [
                {
                    maxWidth: 1024,
                    options: {
                        particles: {
                            number: {
                                value: 40,
                            },
                        },
                    },
                },
            ],
            background: {
                color: {
                    value: 'transparent',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: '#64748b',
                },
                links: {
                    color: '#94a3b8',
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'out',
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: { min: 0.1, max: 0.5 },
                    animation: {
                        enable: true,
                        speed: 1,
                        sync: false,
                    },
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 3 },
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false,
                    },
                },
            },
            detectRetina: true,
        }),
        []
    )

    if (!init) {
        return null
    }

    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    )
}
import { useMemo, useRef, useEffect } from 'react'
import experienceData from '@/data/experience.json'
import skillsData from '@/data/skills.json'
import { SkillLogo } from '@/components/ui/SkillLogo'

export const Skills = () => {
    const experiences = useMemo(() => experienceData, [])
    const skills = useMemo(() => skillsData.skills, [])
    const scrollContainersRef = useRef<HTMLDivElement[]>([])

    // Flatten all technical skills
    const allSkills = useMemo(() => {
        const flattened: Array<{ name: string; logo: string }> = []
        Object.values(skills.technical).forEach((categoryItems) => {
            flattened.push(...(categoryItems as Array<{ name: string; logo: string }>))
        })
        return flattened
    }, [skills])

    // Divide skills into 3 rows
    const skillRows = useMemo(() => {
        const itemsPerRow = Math.ceil(allSkills.length / 3)
        return [
            allSkills.slice(0, itemsPerRow),
            allSkills.slice(itemsPerRow, itemsPerRow * 2),
            allSkills.slice(itemsPerRow * 2),
        ]
    }, [allSkills])

    // Auto-scroll animation
    useEffect(() => {
        const containers = scrollContainersRef.current

        containers.forEach((container) => {
            if (!container) return

            let scrollPos = 0
            const scroll = () => {
                scrollPos += 1
                const maxScroll = container.scrollWidth - container.clientWidth

                if (scrollPos > maxScroll) {
                    scrollPos = 0
                }

                container.scrollLeft = scrollPos
            }

            const interval = setInterval(scroll, 30) // Smooth animation

            return () => clearInterval(interval)
        })
    }, [])

    return (
        <>
            <section className="min-h-screen px-4 py-16" id='skills'>
                {/* Experience Section */}
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide mb-16 text-center">
                        Experience
                    </h1>

                    <div className="space-y-16">
                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:auto-cols-reverse' : ''
                                    }`}
                            >
                                {/* Content Column */}
                                <div
                                    className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:col-start-2' : ''
                                        }`}
                                >
                                    <div className="space-y-4">
                                        <h3 className="text-3xl md:text-4xl font-bold text-woodsmoke-900">
                                            {experience.job}
                                        </h3>
                                        <p className="text-xl text-woodsmoke-600 font-semibold">
                                            {experience.company}
                                        </p>
                                        <a
                                            href={experience.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-primary-600 hover:text-primary-700 font-medium underline transition-colors"
                                        >
                                            {experience.url}
                                        </a>
                                        <p className="text-lg text-woodsmoke-700 leading-relaxed mt-6">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Image Placeholder Column */}
                                <div
                                    className={`h-80 md:h-96 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                                        }`}
                                >
                                    <div className="text-center text-slate-500">
                                        <svg
                                            className="w-16 h-16 mx-auto mb-4 opacity-40"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-sm font-medium">Image Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section - Infinite Carousel */}
            <section className="px-4 py-20 bg-gradient-to-b from-slate-50 to-slate-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-woodsmoke-900 via-woodsmoke-800 to-woodsmoke-700 bg-clip-text text-transparent animate-fade-in tracking-wide mb-16 text-center">
                        Skills & Technologies
                    </h2>

                    <div className="space-y-8">
                        {skillRows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative group overflow-hidden">
                                {/* Left Fade Overlay */}
                                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-100 to-transparent z-20 pointer-events-none" />

                                {/* Right Fade Overlay */}
                                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-100 to-transparent z-20 pointer-events-none" />

                                {/* Scrollable Container */}
                                <div
                                    ref={(el) => {
                                        if (el && rowIndex < 3) scrollContainersRef.current[rowIndex] = el
                                    }}
                                    className="flex gap-6 md:gap-8 overflow-x-hidden py-4"
                                >
                                    {/* Render each skill multiple times for infinite loop effect */}
                                    {[...row, ...row, ...row].map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center justify-center flex-shrink-0 group/item"
                                        >
                                            {/* Circular Logo Container */}
                                            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-2 border-slate-200 hover:border-primary-500 hover:scale-110">
                                                {/* Logo Component */}
                                                <SkillLogo logoName={skill.logo} className="w-12 h-12 md:w-14 md:h-14" />
                                            </div>

                                            {/* Skill Name - Only visible on hover */}
                                            <p className="text-xs md:text-sm font-semibold text-woodsmoke-900 text-center whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 h-5">
                                                {skill.name}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
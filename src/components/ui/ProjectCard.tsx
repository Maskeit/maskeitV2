import { ExternalLink } from 'lucide-react'
import type { Project } from '@/types/project'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const { title, description, image, link, category, tags } = project

    return (
        <article className="group bg-white/60 backdrop-blur-sm border border-woodsmoke-200/50 rounded-2xl overflow-hidden hover:shadow-xl hover:border-woodsmoke-300/60 transition-all duration-300 flex flex-col">
            <div className="relative overflow-hidden aspect-video bg-woodsmoke-100">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {category && (
                    <span className="absolute top-3 left-3 bg-woodsmoke-900/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-woodsmoke-900 mb-2">
                    {title}
                </h3>
                <p className="text-woodsmoke-600 text-sm leading-relaxed mb-4 flex-1">
                    {description}
                </p>

                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs text-woodsmoke-700 bg-woodsmoke-100 px-2.5 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-woodsmoke-900 font-semibold hover:gap-3 transition-all duration-200 mt-auto"
                >
                    Ver proyecto
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </article>
    )
}

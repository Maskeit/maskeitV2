interface SkillLogoProps {
    logoName: string
    className?: string
}

export const SkillLogo = ({ logoName, className = '' }: SkillLogoProps) => {
    // Ruta directa al SVG en public/skills/
    return (
        <img
            src={`/src/assets/skills/${logoName}.svg`}
            alt={logoName}
            className={className}
            width="56"
            height="56"
            style={{ objectFit: 'contain' }}
        />
    )
}

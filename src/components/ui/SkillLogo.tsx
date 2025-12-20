import React, { Suspense } from 'react'

interface SkillLogoProps {
    logoName: string
    className?: string
}

// Lazy load componentes de iconos - default exports
const GithubLogo = React.lazy(() => import('@/assets/icons/comp/Github'))
const GmailLogo = React.lazy(() => import('@/assets/icons/comp/Gmail'))
const LinkedinLogo = React.lazy(() => import('@/assets/icons/comp/Linkedin'))

// Lazy load componentes de iconos - named exports (Frontend)
const ReactLogo = React.lazy(() =>
    import('@/assets/icons/comp/React').then(m => ({ default: m.React }))
)
const VueLogo = React.lazy(() =>
    import('@/assets/icons/comp/Vue').then(m => ({ default: m.Vue }))
)
const TypeScriptLogo = React.lazy(() =>
    import('@/assets/icons/comp/TypeScript').then(m => ({ default: m.TypeScript }))
)
const TailwindLogo = React.lazy(() =>
    import('@/assets/icons/comp/Tailwind').then(m => ({ default: m.Tailwind }))
)

// Backend
const PythonLogo = React.lazy(() =>
    import('@/assets/icons/comp/Python').then(m => ({ default: m.Python }))
)
const FlaskLogo = React.lazy(() =>
    import('@/assets/icons/comp/Flask').then(m => ({ default: m.Flask }))
)
const FastAPILogo = React.lazy(() =>
    import('@/assets/icons/comp/FastAPI').then(m => ({ default: m.FastAPI }))
)
const PHPLogo = React.lazy(() =>
    import('@/assets/icons/comp/PHP').then(m => ({ default: m.PHP }))
)
const NodeJSLogo = React.lazy(() =>
    import('@/assets/icons/comp/NodeJS').then(m => ({ default: m.NodeJS }))
)

// Databases
const PostgreSQLLogo = React.lazy(() =>
    import('@/assets/icons/comp/PostgreSQL').then(m => ({ default: m.PostgreSQL }))
)
const MySQLLogo = React.lazy(() =>
    import('@/assets/icons/comp/MySQL').then(m => ({ default: m.MySQL }))
)
const RedisLogo = React.lazy(() =>
    import('@/assets/icons/comp/Redis').then(m => ({ default: m.Redis }))
)
// const PineconeLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Pinecone').then(m => ({ default: m.Pinecone }))
// )

// DevOps
const DockerLogo = React.lazy(() =>
    import('@/assets/icons/comp/Docker').then(m => ({ default: m.Docker }))
)
// const CICDLogo = React.lazy(() =>
//     import('@/assets/icons/comp/CICD').then(m => ({ default: m.CICD }))
// )
const GitLogo = React.lazy(() =>
    import('@/assets/icons/comp/Git').then(m => ({ default: m.Git }))
)
// const AWSLogo = React.lazy(() =>
//     import('@/assets/icons/comp/AWS').then(m => ({ default: m.AWS }))
// )

// Methodologies
// const AgileLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Agile').then(m => ({ default: m.Agile }))
// )
// const ScrumLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Scrum').then(m => ({ default: m.Scrum }))
// )

// Frameworks
const LaravelLogo = React.lazy(() =>
    import('@/assets/icons/comp/Laravel').then(m => ({ default: m.Laravel }))
)
const NextJSLogo = React.lazy(() =>
    import('@/assets/icons/comp/NextJS').then(m => ({ default: m.NextJS }))
)

// Automation
const N8NLogo = React.lazy(() =>
    import('@/assets/icons/comp/N8N').then(m => ({ default: m.N8N }))
)

// AI/ML - Core
// const TensorFlowLogo = React.lazy(() =>
//     import('@/assets/icons/comp/TensorFlow').then(m => ({ default: m.TensorFlow }))
// )
// const PyTorchLogo = React.lazy(() =>
//     import('@/assets/icons/comp/PyTorch').then(m => ({ default: m.PyTorch }))
// )

// Data Science
// const NumPyLogo = React.lazy(() =>
//     import('@/assets/icons/comp/NumPy').then(m => ({ default: m.NumPy }))
// )
// const PandasLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Pandas').then(m => ({ default: m.Pandas }))
// )
// const ScikitlearnLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Scikitlearn').then(m => ({ default: m.Scikitlearn }))
// )
// const OpenCVLogo = React.lazy(() =>
//     import('@/assets/icons/comp/OpenCV').then(m => ({ default: m.OpenCV }))
// )

// Computer Vision
// const YOLOLogo = React.lazy(() =>
//     import('@/assets/icons/comp/YOLO').then(m => ({ default: m.YOLO }))
// )
// const ComputerVisionLogo = React.lazy(() =>
//     import('@/assets/icons/comp/ComputerVision').then(m => ({ default: m.ComputerVision }))
// )
// const RaspberryPiLogo = React.lazy(() =>
//     import('@/assets/icons/comp/RaspberryPi').then(m => ({ default: m.RaspberryPi }))
// )

// NLP
// const NLPLogo = React.lazy(() =>
//     import('@/assets/icons/comp/NLP').then(m => ({ default: m.NLP }))
// )
// const LabelingLogo = React.lazy(() =>
//     import('@/assets/icons/comp/Labeling').then(m => ({ default: m.Labeling }))
// )

// Mapeo de nombres a componentes reales
const logoComponentMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
    // Social
    github: GithubLogo,
    gmail: GmailLogo,
    linkedin: LinkedinLogo,

    // Frontend
    react: ReactLogo,
    vue: VueLogo,
    typescript: TypeScriptLogo,
    tailwind: TailwindLogo,

    // Backend
    python: PythonLogo,
    flask: FlaskLogo,
    fastapi: FastAPILogo,
    php: PHPLogo,
    nodejs: NodeJSLogo,

    // Databases
    postgresql: PostgreSQLLogo,
    mysql: MySQLLogo,
    redis: RedisLogo,
    //pinecone: PineconeLogo,

    // DevOps
    docker: DockerLogo,
    //cicd: CICDLogo,
    git: GitLogo,
    //aws: AWSLogo,

    // Methodologies
    // agile: AgileLogo,
    // scrum: ScrumLogo,

    // Frameworks
    laravel: LaravelLogo,
    nextjs: NextJSLogo,

    // Automation
    n8n: N8NLogo,

    // AI/ML - Core
    // tensorflow: TensorFlowLogo,
    // pytorch: PyTorchLogo,

    // // Data Science
    // numpy: NumPyLogo,
    // pandas: PandasLogo,
    // scikitlearn: ScikitlearnLogo,
    // opencv: OpenCVLogo,

    // // Computer Vision
    // yolo: YOLOLogo,
    // computervision: ComputerVisionLogo,
    // raspberrypi: RaspberryPiLogo,

    // // NLP
    // nlp: NLPLogo,
    // labeling: LabelingLogo,
}

// Placeholder SVG para logos sin componente
const PlaceholderLogo = ({ text, className = '' }: { text: string; className?: string }) => (
    <svg
        className={`${className}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1" />
        <text x="50" y="55" textAnchor="middle" fontSize="28" fontWeight="bold" fill="currentColor" opacity="0.4">
            {text.slice(0, 2).toUpperCase()}
        </text>
    </svg>
)

const FallbackLogo = ({ logoName, className = '' }: { logoName: string; className?: string }) => (
    <PlaceholderLogo text={logoName} className={`text-slate-400 ${className}`} />
)

export const SkillLogo = ({ logoName, className = '' }: SkillLogoProps) => {
    const Component = logoComponentMap[logoName]

    // Si el componente no existe, mostrar fallback
    if (!Component) {
        return <FallbackLogo logoName={logoName} className={className} />
    }

    // Si existe el componente, cargarlo con Suspense
    return (
        <Suspense fallback={<FallbackLogo logoName={logoName} className={className} />}>
            <Component className={className} />
        </Suspense>
    )
}

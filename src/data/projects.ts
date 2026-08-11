import type { Project } from '@/types/project'

export const projects: Project[] = [
    {
        id: 'ecommerce',
        title: 'E-commerce con Stripe',
        description:
            'Tienda online completa con Google SSO, catálogo, carrito, integración de pagos Stripe y panel de inventario.',
        image: '/photos/catalogo_cis.png',
        link: 'https://cisnaturatienda.com/',
        category: 'E-commerce',
        tags: ['Next.js', 'Stripe', 'Tailwind','FastAPI', 'PostgreSQL'],
    },
    {
        id: 'gestion',
        title: 'Red de gestión y certificación de playas de Iberoamérica',
        description:'Red de gestión integrada por profesionales, empresarios y científicos de más de 17 países que comparten actividades y eventos de los nodos.',
        image: '/photos/proplayas.png',
        link: 'https://proplayas.org/',
        category: 'Portales',
        tags: ['Next.js', 'Tailwind','FastAPI', 'PostgreSQL'],
    },
    {
        id: 'chat-llm',
        title: 'Plataforma de conversación con LLM base RAG',
        description:
            'Sistema de conversación con modelos de lenguaje grande (LLM) soporte automatizado alimentado con informacion empresarial.',
        image: '/photos/llm.png',
        link: '#/demo',
        category: 'Chats & LLM',
        tags: ['Next.js', 'FastAPI', 'RedisVL', 'Microsoft Azure', 'OpenAI'],
    },
    {
        id: 'landing-page',
        title: 'Sitio web de compañía de tecnología',
        description:
            'Landing page para una compañía de tecnología, mostrando servicios, equipo y contacto. Integrado con Sanity CMS para fácil actualización de contenido.',
        image: '/photos/quantum.png',
        link: 'https://01com.com/',
        category: 'Portales',
        tags: ['Next.js', 'Sanity CMS'],
    },
]

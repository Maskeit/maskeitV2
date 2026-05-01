import type { Project } from '@/types/project'

export const projects: Project[] = [
    {
        id: 'ecommerce',
        title: 'E-commerce con Stripe',
        description:
            'Tienda online completa con catálogo, carrito, integración de pagos Stripe y panel de inventario.',
        image: '/photos/catalogo_cis.png',
        link: 'https://cisnaturatienda.com/',
        category: 'E-commerce',
        tags: ['Next.js', 'Stripe', 'Tailwind','FastAPI', 'PostgreSQL'],
    },
    {
        id: 'gestion',
        title: 'Portal de difusión de eventos',
        description:'Portal de eventos y organizacion de personas por nodo, registro y panel de eventos.',
        image: '/photos/proplayas.png',
        link: 'https://proplayas.org/',
        category: 'Portales',
        tags: ['Next.js', 'FastAPI', 'PostgreSQL'],
    },
    {
        id: 'chat-llm',
        title: 'Plataforma de conversacion con LLM',
        description:
            'Sistema de conversación con modelos de lenguaje grande (LLM) soporte automatizado alimentado con informacion empresarial.',
        image: '/photos/llm.png',
        link: '#/demo',
        category: 'Chats & LLM',
        tags: ['Next.js', 'FastAPI', 'RedisVL', 'Microsoft Azure','OpenAI'],
    },
    {
        id: 'landing-page',
        title: 'Sitio web de compañía de tecnología',
        description:
            'Landing page para una compañía de tecnología, mostrando servicios, equipo y contacto. Integrado con Sanity CMS para fácil actualización de contenido.',
        image: '/photos/quantum.png',
        link: '#/demo',
        category: 'Portales',
        tags: ['Next.js', 'Sanity CMS'],
    },
]

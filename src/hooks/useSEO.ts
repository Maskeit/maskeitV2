import { useEffect } from 'react';

export const useSEO = ({ 
  title = 'Codeale - Desarrollo Web Moderno', 
  description = 'Soluciones de desarrollo web con React, Vite, Next js y tecnologías modernas', 
  keywords = 'desarrollo web, react, vite, frontend, api',
  ogImage = 'https://codeale.com/og-image.jpg',
  ogUrl = 'https://codeale.com'
}) => {
  useEffect(() => {
    // Título
    document.title = title;

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph
    setOGMeta('og:title', title);
    setOGMeta('og:description', description);
    setOGMeta('og:image', ogImage);
    setOGMeta('og:url', ogUrl);

  }, [title, description, keywords, ogImage, ogUrl]);
};

const setOGMeta = (property: any, content: any) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (meta) {
    meta.setAttribute('content', content);
  } else {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
};
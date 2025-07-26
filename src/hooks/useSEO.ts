import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export const useSEO = ({
  title,
  description,
  keywords = 'senior care, elderly services, senior citizens, senior community, elder care, senior wellness, senior activities, senior support',
  image = '/ezyelders-logo.png',
  url = 'https://ezyelders.com',
  type = 'website',
  author = 'EzyElders'
}: SEOProps) => {
  const fullTitle = title.includes('EzyElders') ? title : `${title} | EzyElders`;
  const fullUrl = url.startsWith('http') ? url : `https://ezyelders.com${url}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Function to update or create meta tag
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', name);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMetaTag('title', fullTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');

    // Update Open Graph tags
    updateMetaTag('', type, 'og:type');
    updateMetaTag('', fullUrl, 'og:url');
    updateMetaTag('', fullTitle, 'og:title');
    updateMetaTag('', description, 'og:description');
    updateMetaTag('', image, 'og:image');
    updateMetaTag('', 'EzyElders', 'og:site_name');

    // Update Twitter Card tags
    updateMetaTag('', 'summary_large_image', 'twitter:card');
    updateMetaTag('', fullUrl, 'twitter:url');
    updateMetaTag('', fullTitle, 'twitter:title');
    updateMetaTag('', description, 'twitter:description');
    updateMetaTag('', image, 'twitter:image');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = fullUrl;
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = fullUrl;
      document.head.appendChild(canonicalLink);
    }

  }, [fullTitle, description, keywords, image, fullUrl, type, author]);

  return null;
}; 
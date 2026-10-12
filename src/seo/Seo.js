import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath, SITE_NAME } from './seoConfig';

// Creates or updates a <meta>/<link> tag in <head>.
function setTag(tagName, keyAttr, keyValue, valueAttr, value) {
  let el = document.head.querySelector(`${tagName}[${keyAttr}="${keyValue}"]`);
  if (!el) {
    el = document.createElement(tagName);
    el.setAttribute(keyAttr, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

// Updates title, description, keywords, canonical, Open Graph and Twitter tags on every route change.
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const meta = (name, content) => setTag('meta', 'name', name, 'content', content);
    const og = (property, content) => setTag('meta', 'property', property, 'content', content);

    document.title = seo.title;
    meta('description', seo.description);
    meta('keywords', seo.keywords);
    meta('robots', seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setTag('link', 'rel', 'canonical', 'href', seo.url);

    og('og:title', seo.title);
    og('og:description', seo.description);
    og('og:url', seo.url);
    og('og:image', seo.image);
    og('og:site_name', SITE_NAME);

    meta('twitter:title', seo.title);
    meta('twitter:description', seo.description);
    meta('twitter:image', seo.image);
  }, [pathname]);

  return null;
};

export default Seo;

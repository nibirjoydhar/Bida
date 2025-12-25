import { initSearch } from './search.js';
import { initNav } from './nav.js';
import { initHeroSlider } from './hero-slider.js';
import { initScrollDown } from './scroll-down.js';
import {initHistogram} from './body-histogram.js';
import { initStickyHeader } from './sticky.js';



async function loadTemplate(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to load ${url}`);
  const text = await response.text();
  const template = document.createElement('template');
  template.innerHTML = text.trim();
  return template.content;
}

async function initPage() {
  const app = document.getElementById('app');

  try {
    const headerContent = await loadTemplate('components/header.html');
    const heroContent = await loadTemplate('components/hero.html');
    const searchOverlay = await loadTemplate('components/search-overlay.html');
    const bodyContent = await loadTemplate('components/body.html');
    const footerContent = await loadTemplate('components/footer.html');

    // heroContent.prepend(headerContent);
    app.appendChild(headerContent);
    app.appendChild(heroContent);
    app.appendChild(searchOverlay);
    app.appendChild(bodyContent);
    app.appendChild(footerContent);

    // Initialize features
    initSearch();
    initNav();
    initHeroSlider(); 
    initScrollDown();
    initHistogram();
    initStickyHeader();
  } catch (err) {
    console.error("Error loading templates:", err);
  }
}

initPage();

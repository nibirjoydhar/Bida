export function initScrollDown() {
  const btn = document.querySelector('.scroll-down-btn');
  const hero = document.querySelector('.hero');
  const nextSection = document.querySelector('.body-section');
  let shown = false;

  if (!btn || !hero || !nextSection) return;

  // Show button when user scrolls near bottom of hero video
  window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (!shown && heroBottom <= window.innerHeight * 1.5) { 
      // adjust threshold for 200vh video
      btn.classList.add('show');
      shown = true;
    }
  });

  // Smooth scroll to body section
  btn.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
}

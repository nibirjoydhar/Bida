export function initHeroSlider() {
  const track = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.slide-card');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const viewport = document.querySelector('.slider-viewport');

  if (!track || cards.length === 0 || !nextBtn || !prevBtn || !viewport) return;

  let index = 0;
  let visibleCards = 3;
  let autoSlideInterval;

  function updateVisibleCards() {
    if (window.innerWidth <= 600) visibleCards = 1;
    else if (window.innerWidth <= 1024) visibleCards = 2;
    else visibleCards = 3;
  }

 function moveSlider() {
  const card = cards[0];

  // Real width INCLUDING margins
  const cardStyle = getComputedStyle(card);
  const margin =
    parseFloat(cardStyle.marginLeft) +
    parseFloat(cardStyle.marginRight);

  const slideWidth = card.offsetWidth + margin;

  track.style.transform = `translateX(-${index * slideWidth}px)`;
}


  function nextSlide() {
    updateVisibleCards();
    index = (index < cards.length - visibleCards) ? index + 1 : 0;
    moveSlider();
  }

  function prevSlide() {
    updateVisibleCards();
    index = (index > 0) ? index - 1 : cards.length - visibleCards;
    moveSlider();
  }

  nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
  }
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  window.addEventListener('resize', () => {
    updateVisibleCards();
    moveSlider();
  });

  // Submit button
  document.querySelectorAll('.submit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Submitted';
      btn.disabled = true;
    });
  });

  // Initial setup
  updateVisibleCards();
  moveSlider();
  startAutoSlide();
}

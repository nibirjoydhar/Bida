export function initHistogram() {
  const bars = document.querySelectorAll('.histogram-container .bar');
  if (!bars.length) return;

  bars.forEach(bar => {
    const value = parseInt(bar.dataset.value);
    // Calculate height as percentage of max (let’s take 120 as max)
    const max = 120;
    const heightPercent = (value / max) * 100;
    bar.style.height = heightPercent + '%';
  });
}

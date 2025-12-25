export function initStickyHeader() {
  const header = document.querySelector("#header");
  if (!header) return;

  const initialOffset = header.offsetTop;

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      if (window.scrollY > initialOffset) {
        header.style.position = "fixed";
        header.style.marginTop = "0px";
        header.style.top = "0px";

      }
    } else if (currentScrollY < lastScrollY) {
      if (window.scrollY < initialOffset) {
        header.style.position = "absolute";
        header.style.marginTop = `${initialOffset}px`;
      } else {
        // header.style.position = "absolute";
        // header.style.top = "0px";
      }
    }

    lastScrollY = currentScrollY;
  });
}

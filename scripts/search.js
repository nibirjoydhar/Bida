let searchBtn, searchOverlay, searchClose, searchInput;

export function initSearch() {
  searchBtn = document.getElementById("search-btn");
  searchOverlay = document.getElementById("search-overlay");
  searchClose = document.getElementById("search-close");
  searchInput = document.getElementById("search-input");

  if (!searchBtn || !searchOverlay || !searchClose || !searchInput) return;

  searchBtn.addEventListener("click", () => {
    searchOverlay.style.display = "flex";
    searchInput.focus();
  });

  searchClose.addEventListener("click", () => {
    searchOverlay.style.display = "none";
  });

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) searchOverlay.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") searchOverlay.style.display = "none";
  });
}

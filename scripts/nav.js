export function initNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");

  if (!hamburger || !nav) return;

  const isMobile = () => window.innerWidth <= 1039;

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    nav.classList.toggle("nav-collapsed", nav.classList.contains("show"));
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      nav.classList.remove("nav-collapsed");
    });
  });

  // Dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector("span");
    const menu = dropdown.querySelector(".dropdown-menu");
    let hoverTimer;

    // CLICK → toggle dropdown
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAll(dropdown);
      menu.classList.toggle("open");
    });

    // HOVER → works on all screens, auto-close after 3s
    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimer);
      closeAll(dropdown);
      menu.classList.add("open");
      hoverTimer = setTimeout(() => {
        menu.classList.remove("open");
      }, 3000);
    });

    dropdown.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });
  });

  // Click outside → close all
  document.addEventListener("click", () => closeAll());

  function closeAll(except = null) {
    document.querySelectorAll(".dropdown-menu.open").forEach((menu) => {
      if (!except || !except.contains(menu)) {
        menu.classList.remove("open");
      }
    });
  }
}

// GSDF CLAIR WEBSITE

document.addEventListener("DOMContentLoaded", () => {
  const config = window.COMPANY;

  if (!config) {
    console.error(
      "COMPANY config is missing. Make sure js/config.js is loaded before js/main.js"
    );
    return;
  }

  // WHATSAPP LINKS
  const whatsappElements = document.querySelectorAll(
    ".whatsapp-btn, .footer-whatsapp, .floating-whatsapp, .whatsapp-link"
  );

  whatsappElements.forEach((element) => {
    element.href = config.whatsappLink;
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  });

  // FACEBOOK / COMMUNITY LINKS
  const facebookElements = document.querySelectorAll(
    ".facebook-group, .community-btn"
  );

  facebookElements.forEach((element) => {
    element.href = config.facebookGroup;
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  });

  // MOBILE MENU
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      menuBtn.textContent = navMenu.classList.contains("active") ? "×" : "☰";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
      });
    });
  }

  // SCROLL ANIMATIONS
  const elements = document.querySelectorAll(
    ".card, .service-box, .phone-mockup, .awareness-section, .blog-preview, .final-cta"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add("show"));
  }

  // BACK TO TOP BUTTON
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

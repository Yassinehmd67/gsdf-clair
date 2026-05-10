// GSDF CLAIR WEBSITE

document.addEventListener("DOMContentLoaded", () => {
  const config = window.COMPANY

  const whatsappElements = document.querySelectorAll(
    ".whatsapp-btn, .footer-whatsapp, .floating-whatsapp, .whatsapp-link"
  );

  whatsappElements.forEach((element) => {
    element.href = config.whatsappLink;
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  });

  const facebookElements = document.querySelectorAll(
    ".facebook-group, .community-btn"
  );

  facebookElements.forEach((element) => {
    element.href = config.facebookGroup;
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  });

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
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add("show"));
  }

  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

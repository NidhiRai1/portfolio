// script.js
// Initialize GSAP
gsap.from(".hero-title", { y: -50, opacity: 0, duration: 1.5 });
gsap.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1.5, delay: 0.5 });
gsap.from(".btn", { scale: 0.8, opacity: 0, duration: 1, delay: 1 });

// Scroll-triggered animations
const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 1,
  });
});

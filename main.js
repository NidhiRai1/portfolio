// Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Animate sections as they scroll into view
gsap.from(".hero-title", {
  scrollTrigger: {
    trigger: ".hero-title",
    start: "top 90%",
  },
  opacity: 0,
  y: -50,
  duration: 1.5
});

gsap.from(".about", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 1
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 90%",
  },
  opacity: 0,
  y: 50,
  duration: 1.5
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        // markers: true
      },
    })
    .to(".image-container img", {
      scale: 2,
      transform: "translateZ(250px)",
      transformOrigin: "center center",
    })
    .to(
      ".section.hero-section",
      {
        scale: 1.4,
        boxShadow: "10000px 0 0 0 rgba(0, 0, 0, 0.5) inset",
        transformOrigin: "center center",
      },
      "<"
    )
    .to(".image-container", {
      autoAlpha: 0,
    })
    .to([".section.hero-section", ".intro"], {
      autoAlpha: 0,
    }) // 🔥 Desaparece ambos
    .to([".section.hero-section", ".intro"], {
      height: 400,
    });
});

gsap.utils.toArray(".gallery-item").forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    scale: 1,
    duration: 0.8,
    delay: i * 0.02,
    ease: "power2.out"
  });
});
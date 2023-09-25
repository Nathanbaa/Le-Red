// --- Card Artist Appear ---
const cards = gsap.utils.toArray(".card-artist");
cards.forEach((card, i) => {
  const anim = gsap.fromTo(
    card,
    {
      autoAlpha: 0,
      y: 80,
    },
    {
      duration: 1,
      autoAlpha: 1,
      y: 0,
    }
  );
  ScrollTrigger.create({
    trigger: card,
    animation: anim,
    toggleActions: "play none none reverse",
  });
});
gsap.registerPlugin(ScrollTrigger);

// Hero section Scroll Animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    scrub: true,
    pin: true,
    autoKill: false,
    
    start: "50% 50%",
    end: "+=200%"
  }
})

.to("#headline", {
  scale: 1.1, 
  ease: "none"
}, 0.4)

.to("#my-wheel", {
  scale: 1.3,
  xPercent: 55,
  ease: Power4,
}, 0.2)

.to("#dates", {
  opacity: 1,
  xPercent: 10,
  ease:Power4,
}, 0.6)

.to("#background-hero", {
  opacity: 0,
  ease: "none"
}, 0)
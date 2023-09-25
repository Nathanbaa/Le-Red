gsap.registerPlugin(ScrollTrigger);

// Presentation section Scroll Animation
const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#artistes",
    scrub: true,
    autoKill: false,
    
    start: "10% 50%",
    end: "+=30%"
  }
})

.from(".title2", {
  opacity: 0,
  xPercent: 10,
  ease:Power2,
},0)

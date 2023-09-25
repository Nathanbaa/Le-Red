gsap.registerPlugin(ScrollTrigger);

// Presentation section Scroll Animation
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#presentation",
    scrub: true,
    autoKill: false,
    
    start: "50% 50%",
    end: "+=30%"
  }
})

.from(".title", {
  opacity: 0,
  xPercent: 10,
  ease:Power2,
},0)

.from(".description", {
  opacity: 0,
},1)

.from("#video", {
  opacity: 0,
  yPercent: 10,
  ease:Power2,
},1.5)
// Split text animation
let splitText;
function runSplit() {
  splitText = new SplitType("[stagger-link]", {
    types: "words, chars",
  });
}
runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    splitText.revert();
    runSplit();
  }
});

// Stagger link animations
const staggerLinks = document.querySelectorAll("[stagger-link]");
staggerLinks.forEach((link) => {
  const letters = link.querySelectorAll("[stagger-link-text] .char");
  link.addEventListener("mouseenter", function () {
    gsap.to(letters, {
      yPercent: -100,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "start" },
      overwrite: true,
    });
  });
  link.addEventListener("mouseleave", function () {
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.4,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "random" },
    });
  });
});

// GSAP ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

const bodyAnimation = gsap.to("body", {
  backgroundColor: "#D9D9D9",
  color: "#000000",
  paused: true,
});

const dividerAnimation = gsap.to(".animated-divider", {
  backgroundColor: "#000000",
  paused: true,
});

// ScrollTrigger for section-services
ScrollTrigger.create({
  trigger: ".section-services",
  start: "top center",
  onEnter: () => {
    bodyAnimation.play();
    dividerAnimation.play();
  },
  onLeaveBack: () => {
    bodyAnimation.reverse();
    dividerAnimation.reverse();
  },
});

 
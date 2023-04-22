import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const horizontalSection = gsap.utils.toArray(
  '.horizontal-wrapper .child-horizontal-view'
);

gsap.registerPlugin(ScrollTrigger);

// marker text
gsap.utils.toArray('span').forEach((span) => {
  ScrollTrigger.create({
    trigger: span,
    start: 'top center',
    onEnter: () => span.classList.add('selected-text-active'),
  });
});

// Horizontal view
let scrollTween = gsap.to(horizontalSection, {
  xPercent: -100 * (horizontalSection.length - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.container-horizontal-view',
    pin: true,
    scrub: 1,
    end: '+=3000',
  },
});

// img stager
const timeline = gsap
  .timeline({
    scrollTrigger: {
      trigger: '.img',
      scrub: true,
    },
  })
  .to('.img', {
    stagger: 0.2,
    y: -700,
    scrub: true,
  });

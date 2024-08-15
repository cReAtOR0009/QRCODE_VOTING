// animations.js
import { gsap } from 'gsap';

export const animateFormFields = () => {
  gsap.to('.relative label', {
    y: -6,
    scale: 0.75,
    duration: 0.5,
    ease: 'power3.out',
  });
};

export const animateButtonHover = () => {
  gsap.to('.w-full', {
    scale: 1.05,
    duration: 0.2,
    ease: 'power3.out',
  });
};

export const animateFeedbackForm = () => {
  gsap.fromTo(
    '#feedbackForm',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
  );
};

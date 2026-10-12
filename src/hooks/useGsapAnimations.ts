import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // Only run animations if user doesn't prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline (Only on the hero header elements)
      const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      heroTl
        .fromTo(
          '.gsap-hero-badge',
          { y: -14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.05 }
        )
        .fromTo(
          '.gsap-hero-title',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-pillars',
          { scale: 0.97, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-author',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.gsap-hero-lead',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.gsap-hero-quote',
          { x: -18, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-cta',
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        );

      // 2. Animate Section Headers smoothly on Scroll
      const sectionHeaders = document.querySelectorAll('section > div > .max-w-3xl, section > div > .text-center');
      sectionHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 95%', // Trigger as soon as header enters viewport
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Animate Feature & KPI Cards with gentle stagger
      const cardGrids = document.querySelectorAll('.grid');
      cardGrids.forEach((grid) => {
        if (grid.closest('#modal-root') || grid.closest('header') || grid.closest('nav')) return;

        const cards = grid.children;
        if (cards.length > 1 && cards.length <= 12) {
          gsap.fromTo(
            cards,
            { y: 18, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    });

    return () => {
      ctx.revert(); // Clean up all GSAP timelines & ScrollTriggers on unmount
    };
  }, []);
};


import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP if in browser
if (typeof window !== 'undefined') {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch (e) {
    console.warn('ScrollTrigger registration deferred:', e);
  }
}

export const useGsapAnimations = () => {
  useEffect(() => {
    try {
      const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
      if (prefersReducedMotion) return;

      const ctx = gsap.context(() => {
        // 1. Hero Entrance Timeline
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
            { y: 16, opacity: 0.2 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // 3. Animate Feature & KPI Cards with gentle stagger (starting with visible 0.3 opacity so never blank)
        const cardGrids = document.querySelectorAll('.grid');
        cardGrids.forEach((grid) => {
          if (grid.closest('#modal-root') || grid.closest('header') || grid.closest('nav')) return;

          const cards = grid.children;
          if (cards.length > 1 && cards.length <= 12) {
            gsap.fromTo(
              cards,
              { y: 14, opacity: 0.3 },
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

        // Refresh triggers once all DOM & images settle
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      });

      return () => {
        ctx.revert();
      };
    } catch (err) {
      console.warn('Animation timeline initialization skipped:', err);
    }
  }, []);
};

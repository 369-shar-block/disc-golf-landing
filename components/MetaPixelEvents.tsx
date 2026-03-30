'use client';

import { useEffect, useRef } from 'react';

function fbtrack(event: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', event, params);
  }
}

export function MetaPixelEvents() {
  const scrollMilestones = useRef(new Set<number>());
  const timeStarted = useRef(Date.now());

  useEffect(() => {
    // --- Scroll Depth Tracking ---
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of [25, 50, 75, 100]) {
        if (percent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          fbtrack('ScrollDepth', { percent: milestone });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Time on Page Tracking ---
    const timeIntervals = [30, 60, 120, 300]; // seconds
    const timeFired = new Set<number>();

    const timeInterval = setInterval(() => {
      const elapsed = Math.round((Date.now() - timeStarted.current) / 1000);
      for (const t of timeIntervals) {
        if (elapsed >= t && !timeFired.has(t)) {
          timeFired.add(t);
          fbtrack('TimeOnPage', { seconds: t });
        }
      }
    }, 5000);

    // --- Section View Tracking (via Intersection Observer) ---
    const sectionsFired = new Set<string>();
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const name = el.dataset.section;
            if (name && !sectionsFired.has(name)) {
              sectionsFired.add(name);
              fbtrack('SectionView', { section: name });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section, i) => {
      const names = ['hero', 'problem', 'solution', 'features', 'analysis-preview', 'social-proof', 'faq', 'final-cta'];
      if (names[i]) {
        section.setAttribute('data-section', names[i]);
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
      observer.disconnect();
    };
  }, []);

  return null;
}

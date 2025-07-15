"use client";

import { useEffect, useRef } from 'react';

interface UseSectionTrackingProps {
  sectionName: string;
  threshold?: number;
}

export const useSectionTracking = ({ sectionName, threshold = 0.3 }: UseSectionTrackingProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Track section view with Google Analytics
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'section_view', {
                section_name: sectionName,
                page_path: window.location.pathname,
                timestamp: new Date().toISOString()
              });
            }
            
            // Also track as a custom event
            if (typeof window !== 'undefined' && window.dataLayer) {
              window.dataLayer.push({
                event: 'section_view',
                section_name: sectionName,
                page_path: window.location.pathname
              });
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px' // Trigger when 10% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName, threshold]);

  return sectionRef;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 
'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const animationClass = isVisible ? `animate-${animation}` : '';

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
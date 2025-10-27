'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const keyNumbers = [
  {
    value: 5,
    suffix: 'M€',
    label: 'de chiffre d\'affaires',
    color: '#3e9dd3'
  },
  {
    value: 38,
    suffix: '',
    label: 'collaborateurs',
    color: '#2a7ba8'
  },
  {
    value: 80,
    suffix: '',
    label: 'clients',
    color: '#4ba8d8'
  }
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.ceil(increment * currentStep), value));
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold">
      {count}{suffix}
    </div>
  );
};

const KeyNumbers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              FCR en <span style={{ color: '#3e9dd3' }}>Chiffres Clés</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des résultats qui témoignent de notre expertise et de la confiance de nos clients
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {keyNumbers.map((item, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 150}>
              <div className="text-center group">
                <div className="relative inline-block">
                  <div
                    className="absolute inset-0 blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="relative">
                    <div style={{ color: item.color }} className="transition-transform duration-300 group-hover:scale-110">
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </div>
                    <div className="mt-4 text-xl font-semibold text-gray-700">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={500}>
          <div className="mt-16 text-center">
            <div className="inline-block bg-white rounded-lg shadow-lg p-6 max-w-2xl">
              <p className="text-gray-700 text-lg">
                <span className="font-semibold" style={{ color: '#3e9dd3' }}>Depuis 2012</span>,
                FCR accompagne les professionnels dans leurs projets de second œuvre avec une équipe qualifiée et une expertise reconnue.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default KeyNumbers;

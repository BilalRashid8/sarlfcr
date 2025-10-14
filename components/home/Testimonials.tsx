'use client';

import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';

const Testimonials = () => {
  const cityLogos = [
    { name: 'Montmorency', logo: '/Logotype_Montmorency_2014.png' },
    { name: 'Cergy', logo: '/Logo_Cergy_(2022).svg.png' },
    { name: 'Les Pavillons-sous-Bois', logo: '/Logo_Les_Pavillons-sous-Bois.svg.png' },
    { name: 'Rueil-Malmaison', logo: '/Logo_Rueil-Malmaison.svg.png' },
    { name: 'Saint-Denis', logo: '/Logo_Saint_Denis_93.svg.png' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Section */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils Nous Font <span style={{ color: '#3e9dd3' }}>Confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Nos partenaires et clients nous font confiance pour leurs projets 
            de construction et rénovation en Île-de-France.
          </p>
          </div>
        </ScrollAnimation>

        {/* Scrolling Logos */}
        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="relative overflow-hidden overflow-x-auto">
          <div className="flex space-x-12 animate-scroll hover:animate-none items-center">
            {/* First set of logos */}
            {cityLogos.map((city, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300 p-4"
              >
                <img
                  src={city.logo}
                  alt={city.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {cityLogos.map((city, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300 p-4"
              >
                <img
                  src={city.logo}
                  alt={city.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          </div>
        </ScrollAnimation>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
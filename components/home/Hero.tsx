'use client';

import { useState, useEffect } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const Hero = () => {
  const images = [
    '/Meudon/Chantier Meudon - prise de vue 29 09 2025 (2).jpg',
    '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (2).jpg',
    '/Peinture/Peinture_Rueil.jpg',
    '/Platerie/Platerie_Meudon (15).jpg',
    '/Menuserie/Menuserie_Rueil.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative isolate overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background with sliding images */}
      <div className="absolute inset-0 pointer-events-none">
        {images.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              opacity: currentImageIndex === index ? 1 : 0,
            }}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-sky-900/70 to-sky-700/80" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-6 sm:mb-8">
              <h1
                className="mb-6 leading-tight text-[clamp(28px,7vw,56px)] text-balance font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ensemble, créons les espaces qui vous ressemblent
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8" />

              {/* Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 uppercase tracking-wide">
                Service aux collectivités second œuvre
              </h2>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white text-base sm:text-lg font-medium">Réhabilitation</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white text-base sm:text-lg font-medium">Rénovation</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                  <span className="text-white text-base sm:text-lg font-medium">Construction neuve</span>
                </div>
              </div>

              <p className="text-base sm:text-xl text-white/95 leading-relaxed max-w-4xl mx-auto">
               Depuis 2012, FCR réalise en Île-de-France des travaux de second œuvre, spécialisés en rénovation et aménagement intérieur, exclusivement dans le cadre de marchés publics.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;


'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight, X, ChevronLeft } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useState } from 'react';

export default function HalleGourmandeRueilProject() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Remplace ces chemins par tes visuels de la Halle gourmande
  const projectImages = [
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (2).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (8).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (13).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (72).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (76).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (78).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (80).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (82).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
    { src: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (88).jpg', alt: "Halle gourmande de Rueil-Malmaison – Hall d'accueil" },
  ];

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? projectImages.length - 1 : selectedImageIndex - 1);
    }
  };
  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === projectImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') goToPrevious();
    else if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Réaménagement complet de la halle gourmande de Rueil-Malmaison
            </h1>
            <p className="text-xl mb-4 text-white">Rueil-Malmaison (92)</p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description courte */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                <span style={{ color: '#3e9dd3' }}>Réaménagement complet</span> des espaces publics et marchands
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Réaménagement global de la halle gourmande de Rueil-Malmaison : création d'espaces d'accueil, zones de restauration, stands/étals et arrière-cuisines. Intervention sur les cloisonnements, menuiseries, sols, plafonds, peintures, éclairage, ventilation/extraction et réseaux (plomberie/électricité), avec intégration de mobilier sur-mesure, optimisation des flux et amélioration du confort acoustique et de l'accessibilité.
              </p>
            </div>
          </ScrollAnimation>

          {/* Galerie Photos */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-modal="true"
          role="dialog"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={projectImages[selectedImageIndex].src}
              alt={projectImages[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {selectedImageIndex + 1} / {projectImages.length}
          </div>
        </div>
      )}

      {/* Back to Projects */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projets">
            <Button variant="outline" className="hover:bg-gray-100">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux réalisations
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ChevronRight } from 'lucide-react';

export default function PlatrerieService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">
              SARL FCR : spécialiste plâtrerie second œuvre pour<br /> les professionnels d'Île-de-France
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <img src="/plastering copy.png" alt="Plâtrerie" className="h-8 w-8" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
            Plâtrerie et isolation
          </h2>
          <span className="text-sm font-medium" style={{ color: '#3e9dd3' }}>
            Cloisons / isolation
          </span>
        </div>
      </div>

      <div className="space-y-4 text-gray-700">
        <p className="text-gray-700">
          Travaux de plâtrerie second œuvre, alliant isolation, durabilité et finitions de qualité.
        </p>
      </div>
    </div>

    <div>
      <img
        src="/Platerie/Platerie_Rueil (13).jpg"
        alt="Travaux de plâtrerie professionnels"
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Platerie/Platerie_Meudon (20).jpg"
                alt="Cloisons placo modernes"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>
                Cloisons placo
              </h3>
              <p className="text-gray-700">
                Pose de cloisons placo adaptées aux besoins acoustiques, thermiques et coupe-feu des espaces professionnels.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>
                Isolation et doublage
              </h3>
              <p className="text-gray-700">
                Solutions d’isolation performantes et conformes aux normes, garantissant confort thermique et acoustique.
              </p>
            </div>
            <div>
              <img
                src="/Platerie/Platerie_Rueil (59).jpg"
                alt="Isolation et doublage"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Platerie/Platerie_Meudon (35).jpg"
                alt="Faux plafonds et finitions"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>
                Faux plafonds et finitions
              </h3>
              <p className="text-gray-700">
                Réalisation de faux plafonds et finitions soignées, intégrant acoustique, technique et esthétique.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 p-8 rounded-lg border-2 text-center" style={{ borderColor: '#3e9dd3' }}>
            <h3 className="text-xl font-bold mb-4">Un projet de plâtrerie à venir ?</h3>
            <p className="text-gray-700 mb-6">
              Contactez <strong>FCR</strong> pour vos travaux de <strong style={{ color: '#3e9dd3' }}>plâtrerie et isolation</strong> en Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 px-8 py-3 font-bold"
                  style={{ color: '#3e9dd3', border: '2px solid #3e9dd3' }}
                >
                  Nous Contacter
                </Button>
              </Link>
              <Link href="tel:0955475101">
                <Button size="lg" className="px-8 py-3 text-white" style={{ backgroundColor: '#3e9dd3' }}>
                  <Phone className="mr-2 h-4 w-4" />
                  09 55 47 51 01
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

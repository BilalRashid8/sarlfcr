'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ChevronRight } from 'lucide-react';

export default function PeintureService() {
  return (
      
      <div className="min-h-screen bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Peinture Bâtiment',
              provider: {
                '@type': 'LocalBusiness',
                name: 'SARL FCR',
                telephone: '+33955475101',
                areaServed: 'Île-de-France'
              },
              description: 'Services de peinture bâtiment : peinture intérieure et extérieure, décoration professionnelle.'
            })
          }}
        />
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">FCR : la peinture qui valorise vos projets</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <img src="/paint-roller copy.png" alt="Peinture" className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
                    Peinture & décoration professionnelles
                  </h2>
                  <span className="text-sm font-medium" style={{ color: '#3e9dd3' }}>
                    Bureaux, commerces, ERP, santé, éducation
                  </span>
                </div>
              </div>
              <p className="text-gray-700">
                Solutions complètes de peinture et décoration, alliant esthétique, durabilité et conformité.
              </p>

            </div>
            <div>
              <img
                src="/Peinture/Peinture_Rueil.jpg"
                alt="Travaux de peinture professionnels"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* 1. Peinture traditionnelle */}
          <div id="peinture-traditionnelle" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Peinture/Peinture_Rueil (50).jpg"
                alt="Peinture traditionnelle"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Peinture traditionnelle</h3>
              <p className="text-gray-700">
                Peintures classiques pour murs, plafonds et boiseries, avec finitions soignées et durables.
              </p>
            </div>
          </div>

          {/* 2. Vernis & vitrification */}
          <div id="vernis-vitrification" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Vernis & vitrification</h3>
              <p className="text-gray-700">
                Vernis protecteurs pour parquets et menuiseries, assurant résistance et entretien facile.
              </p>
            </div>
            <div>
              <img
                src="/WhatsApp Image 2025-09-22 at 17.58.52.jpeg"
                alt="Vernis et vitrification"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* 3. Revêtements muraux */}
          <div id="revetements-muraux" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Peinture/Peinture_StOuen (2).jpeg"
                alt="Revêtements muraux"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Revêtements muraux</h3>
              <p className="text-gray-700">
                Revêtements décoratifs et techniques pour murs, offrant confort acoustique et esthétique haut de gamme.
              </p>
            </div>
          </div>

         {/* 4. Peintures décoratives */}
          <div id="peintures-decoratives" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Peintures décoratives</h3>
              <p className="text-gray-700">
                Peintures décoratives sur mesure, créant des effets uniques pour halls, showrooms et espaces d’image.
              </p>
            </div>
            <div>
              <img
                src="/Peinture/Peinture_StOuen.jpeg"
                alt="Peintures décoratives"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* 5. Peintures sols & résines */}
          <div id="peintures-sols-resines" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Peinture/Peinture_Rueil (35).jpg"
                alt="Peintures de sols et résines"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Peintures de sols & résines</h3>
              <p className="text-gray-700">
                Revêtements de sols résistants pour parkings, ateliers et ERP, assurant sécurité et durabilité.
              </p>
            </div>
          </div>

          {/* 6. Structures métalliques */}
          <div id="structures-metalliques" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#3e9dd3' }}>Structures métalliques</h3>
              <p className="text-gray-700">
                Traitements anticorrosion et protections ignifuges pour structures métalliques, conformes aux normes.
              </p>
            </div>
            <div>
              <img
                src="/Peinture/Peinture_Rueil (81).jpg"
                alt="Traitement des structures métalliques"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          {/* CTA */}
          <div className="bg-gray-100 p-8 rounded-lg border-2 text-center" style={{ borderColor: '#3e9dd3' }}>
            <h3 className="text-xl font-bold mb-4">Un projet peinture à venir ?</h3>
            <p className="text-gray-700 mb-6">
              Contactez <strong>FCR</strong> pour des solutions professionnelles de peinture et décoration adaptées à vos besoins.
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

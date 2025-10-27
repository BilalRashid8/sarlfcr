'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function DiversService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Services Divers Second Œuvre',
            provider: {
              '@type': 'LocalBusiness',
              name: 'SARL FCR',
              telephone: '+33955475101',
              areaServed: 'Île-de-France'
            },
            description: 'Services divers en second œuvre : métallerie, charpente, structures extérieures.'
          })
        }}
      />

      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Services Divers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Expertises complémentaires en métallerie, charpente et ouvrages extérieurs
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700">
              Au-delà de nos expertises principales en second œuvre, FCR met à disposition
              des compétences spécialisées pour accompagner vos projets les plus techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#3e9dd3' }}>
                Métallerie
              </h2>
              <p className="text-gray-700 mb-4">
                Conception et réalisation d'ouvrages métalliques pour vos projets professionnels.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Structures métalliques (Qualibat 4421)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Métallerie technicité confirmée (Qualibat 4412)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Garde-corps et rampes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Traitement anticorrosion</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/Peinture/Peinture_Rueil (81).jpg"
                alt="Travaux de métallerie"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Menuserie/Menuserie_Meudon (4).jpg"
                alt="Travaux de charpente"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#3e9dd3' }}>
                Charpente & Ouvrages Extérieurs
              </h2>
              <p className="text-gray-700 mb-4">
                Réalisation de charpentes et ouvrages bois pour l'extérieur de vos bâtiments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Charpente traditionnelle (Qualibat 2312)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Ouvrages extérieurs en bois (Qualibat 4381)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Efficacité énergétique - Travaux isolés</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Restauration menuiseries patrimoine (Qualibat 4392)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#3e9dd3' }}>
              Certifications Qualibat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="bg-white p-4 rounded-lg">
                <strong style={{ color: '#3e9dd3' }}>4421</strong> - Structures métalliques
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong style={{ color: '#3e9dd3' }}>4412</strong> - Métallerie (technicité confirmée)
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong style={{ color: '#3e9dd3' }}>2312</strong> - Charpente traditionnelle
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong style={{ color: '#3e9dd3' }}>4381</strong> - Ouvrages extérieurs en bois
              </div>
              <div className="bg-white p-4 rounded-lg">
                <strong style={{ color: '#3e9dd3' }}>4392</strong> - Restauration menuiseries patrimoine
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg border-2 text-center" style={{ borderColor: '#3e9dd3' }}>
            <h3 className="text-xl font-bold mb-4">Un projet spécifique à réaliser ?</h3>
            <p className="text-gray-700 mb-6">
              Contactez <strong>FCR</strong> pour échanger sur votre projet et nos solutions adaptées.
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

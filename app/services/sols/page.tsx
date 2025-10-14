'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function SolsMursService() {
  return (
      
      <div className="min-h-screen bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Revêtements Sols et Murs',
              provider: {
                '@type': 'LocalBusiness',
                name: 'SARL FCR',
                telephone: '+33955475101',
                areaServed: 'Île-de-France'
              },
              description: 'Services de revêtements sols et murs : carrelage, parquet, moquette, faïence.'
            })
          }}
        />
      {/* Hero Section */}
      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">
                SARL FCR : spécialiste sols et murs second œuvre pour<br />
                les professionnels d'Île-de-France
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <img src="/floor copy.png" alt="Sols et Murs" className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
                    Revêtements de sols & murs
                  </h2>
                  <span className="text-sm font-medium" style={{ color: '#3e9dd3' }}>
                    Bureaux, commerces, ERP, santé, éducation
                  </span>
                </div>
              </div>

              <p className="text-gray-700">
                Solutions complètes de revêtements, de la préparation aux finitions, alliant durabilité, sécurité et esthétique.
              </p>

              <div className="mt-6">
              </div>
            </div>

            <div>
              <img
                src="/Sols/Sols_Meudon.jpg"
                alt="Travaux de sols et murs professionnels"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Catégorie 1 : Sol dur */}
          <div id="sol-dur" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Sols/Sols_Rueil (30).jpg"
                alt="Sol dur : carrelage et pierre"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div
                  className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#3e9dd3' }}
                />
                <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Sol dur</h3>
              </div>
              <p className="text-gray-700">
                Carrelage, grès cérame, pierre et terrazzo pour zones à fort passage, offrant haute résistance, sécurité et finitions soignées.
              </p>
            </div>
          </div>

          {/* Catégorie 2 : Sol souple */}
          <div id="sol-souple" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div
                  className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#3e9dd3' }}
                />
                <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Sol souple</h3>
              </div>
              <p className="text-gray-700">
                PVC/LVT, linoléum, caoutchouc et moquettes techniques pour confort, acoustique maîtrisée et entretien facilité, conformes aux normes ERP.
              </p>
            </div>
            <div>
              <img
                src="/Sols/Sols_Rueil (35).jpg"
                alt="Sol souple : LVT et linoléum"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 p-8 rounded-lg border-2 text-center" style={{ borderColor: '#3e9dd3' }}>
            <h3 className="text-xl font-bold mb-4">
              Un projet de sols à venir ?
            </h3>
            <p className="text-gray-700 mb-6">
              Contactez <strong>FCR</strong> pour des solutions professionnelles en
              <strong style={{ color: '#3e9dd3' }}> sol dur</strong> et
              <strong style={{ color: '#3e9dd3' }}> sol souple</strong>.
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

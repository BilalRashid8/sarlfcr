'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export default function RevetementsService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Revêtements Murs et Sols',
            provider: {
              '@type': 'LocalBusiness',
              name: 'SARL FCR',
              telephone: '+33955475101',
              areaServed: 'Île-de-France'
            },
            description: 'Services de revêtements murs et sols : peinture, carrelage, parquet, sols souples.'
          })
        }}
      />

      <section
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Revêtements murs & sols
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solutions complètes de peinture et revêtements pour murs et sols
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#3e9dd3' }}>
                Peinture & Décoration
              </h2>
              <p className="text-gray-700 mb-4">
                Solutions complètes de peinture et décoration, alliant esthétique, durabilité et conformité.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Peinture traditionnelle (murs, plafonds, boiseries)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Vernis & vitrification</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Revêtements muraux décoratifs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Peintures décoratives sur mesure</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Peintures de sols & résines</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="/Peinture/Peinture_Rueil.jpg"
                alt="Travaux de peinture professionnels"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/Sols/Sols_Meudon.jpg"
                alt="Travaux de sols professionnels"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#3e9dd3' }}>
                Revêtements de Sols
              </h2>
              <p className="text-gray-700 mb-4">
                De la préparation aux finitions, solutions durables alliant sécurité et esthétique.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Sol dur (carrelage, grès cérame, pierre, terrazzo)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Sol souple (PVC/LVT, linoléum, caoutchouc)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Moquettes techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2" style={{ color: '#3e9dd3' }}>•</span>
                  <span>Conformité normes ERP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg border-2 text-center" style={{ borderColor: '#3e9dd3' }}>
            <h3 className="text-xl font-bold mb-4">Un projet de revêtements à venir ?</h3>
            <p className="text-gray-700 mb-6">
              Contactez <strong>FCR</strong> pour des solutions professionnelles adaptées à vos besoins.
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

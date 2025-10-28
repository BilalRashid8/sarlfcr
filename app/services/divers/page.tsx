'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';

export default function DiversService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">SARL FCR : spécialiste en services divers pour<br />
              les professionnels d'Île-de-France</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <img src="/workspace.png" alt="Services Divers" className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
                      En quoi consistent nos services divers ?
                    </h2>
                    <span className="text-sm font-medium" style={{ color: '#3e9dd3' }}>Services Divers</span>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Expertises complémentaires pour accompagner tous vos besoins en second œuvre.
                  </p>
                </div>
              </div>
              <div>
                <ImageCarousel
                  images={[
                    '/Peinture/Peinture_Rueil (81).jpg',
                    '/Menuserie/Menuserie_Meudon (4).jpg',
                    '/Peinture/Peinture_Rueil (50).jpg'
                  ]}
                  alt="Services divers professionnels"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <ImageCarousel
                  images={[
                    '/Menuserie/Menuserie_Meudon (4).jpg',
                    '/Menuserie/Menuserie_Meudon (87).jpg'
                  ]}
                  alt="Serrurerie garde-corps"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Serrurerie</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Garde-corps main courante</li>
                    <li>Garde-corps anti-chute pour sécuriser vos espaces</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Signalétiques</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Installation de signalétiques personnalisées pour orienter et informer vos visiteurs.
                  </p>
                </div>
              </div>
              <div>
                <ImageCarousel
                  images={[
                    '/Peinture/Peinture_Rueil (50).jpg',
                    '/Peinture/Peinture_Rueil (35).jpg'
                  ]}
                  alt="Signalétiques"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <ImageCarousel
                  images={[
                    '/Menuserie/Menuserie_Meudon (87).jpg',
                    '/Menuserie/Menuserie_Rueil.jpg'
                  ]}
                  alt="Menuiserie extérieure"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Menuiserie extérieure</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Solutions de menuiserie pour vos façades et espaces extérieurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Électricité & Plomberie</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Interventions en électricité et plomberie pour compléter vos projets de second œuvre.
                  </p>
                </div>
              </div>
              <div>
                <ImageCarousel
                  images={[
                    '/Peinture/Peinture_Rueil (35).jpg',
                    '/Peinture/Peinture_Rueil (81).jpg'
                  ]}
                  alt="Électricité et plomberie"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg border-2" style={{ borderColor: '#3e9dd3' }}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                Envie de réalisation sur mesure pour votre futur projet ?
              </h3>
              <p className="text-gray-700 mb-6">
                Contactez FCR, société BTP spécialisée en Île-de-France pour vos travaux
                <strong style={{ color: '#3e9dd3' }}> divers</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white hover:bg-gray-100 px-8 py-3 font-bold" style={{ color: '#3e9dd3', border: '2px solid #3e9dd3' }}>
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
        </div>
      </section>
    </div>
  );
}

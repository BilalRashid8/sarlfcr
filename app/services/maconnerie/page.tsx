'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Phone,
  Award,
  Clock,
  Euro,
  ChevronRight
} from 'lucide-react';

export default function MaconnerieService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Maçonnerie Second Œuvre',
            provider: {
              '@type': 'LocalBusiness',
              name: 'SARL FCR',
              telephone: '+33955475101',
              areaServed: 'Île-de-France'
            },
            description: 'Services de maçonnerie second œuvre : ouverture de murs, réparation, rénovation et maçonnerie décorative.'
          })
        }}
      />
      {/* Hero Section */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">SARL FCR : spécialiste maçonnerie second œuvre pour<br />
              les professionnels d'Île-de-France</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: En quoi consiste la maçonnerie - Image à droite */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <img src="/brickwork (1).png" alt="Maçonnerie" className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
                      En quoi consiste la maçonnerie en second œuvre ?
                    </h2>
                    <span className="text-sm font-medium" style={{ color: '#3e9dd3' }}>Maçonnerie et gros œuvre</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Maçonnerie de second œuvre fiable et durable, réalisée par un spécialiste en Île-de-France depuis 13 ans.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Travaux de maçonnerie professionnels"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Ouverture et fermeture de murs - Image à gauche */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/Maconnerie.png"
                  alt="Ouverture de mur porteur"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Ouverture et fermeture de murs</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
<p className="text-gray-700">
  Ouvertures et fermetures de murs porteurs réalisées avec sécurité, durabilité et intégration soignée.
</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Réparation et rénovation - Image à droite */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Réparation et rénovation</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
<p className="text-gray-700">
  Réparations et rénovations de maçonnerie durables, traitant toutes pathologies du bâtiment avec respect architectural.
</p>

                </div>
              </div>

              <div>
                <img
                  src="https://images.pexels.com/photos/5691617/pexels-photo-5691617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Réparation maçonnerie"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Maçonnerie décorative - Image à gauche */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Maçonnerie décorative"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Maçonnerie décorative et finitions</h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
<p className="text-gray-700">
  Éléments décoratifs et finitions sur mesure, alliant tradition, modernité et respect des normes.
</p>

                </div>
              </div>
            </div>
          </div>

          {/* Three columns section */}
          {/* Bottom CTA Box */}
          <div className="bg-gray-100 p-8 rounded-lg border-2" style={{ borderColor: '#3e9dd3' }}>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">
                Envie de réalisation sur mesure pour votre futur projet ?
              </h3>
              <p className="text-gray-700 mb-6">
                Contactez FCR, société BTP spécialisée en Île-de-France pour vos travaux de 
                <strong style={{ color: '#3e9dd3' }}> maçonnerie et gros œuvre</strong>.
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
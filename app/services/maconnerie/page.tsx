'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';

export default function MaconnerieService() {
  return (
    <div className="min-h-screen bg-gray-50">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                <ImageCarousel
                  images={[
                    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                    'https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  ]}
                  alt="Travaux de maçonnerie professionnels"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <ImageCarousel
                  images={[
                    'https://images.pexels.com/photos/5691598/pexels-photo-5691598.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                    'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  ]}
                  alt="Réalisation de chappe"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Réalisation de chappe</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Réalisation de chappes de qualité pour assurer une base parfaitement plane et stable pour vos revêtements de sol.
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
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Reprise en sous-œuvre</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Reprise en sous-œuvre sécurisée pour renforcer les fondations et garantir la stabilité structurelle de votre bâtiment.
                  </p>
                </div>
              </div>
              <div>
                <ImageCarousel
                  images={[
                    'https://images.pexels.com/photos/5691617/pexels-photo-5691617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                    '/Maconnerie.png'
                  ]}
                  alt="Reprise en sous-œuvre"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <ImageCarousel
                  images={[
                    'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                    'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  ]}
                  alt="Pose de renfort"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: '#3e9dd3' }}></div>
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Pose de renfort</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Installation de renforts structurels pour améliorer la résistance et la durabilité de vos ouvrages maçonnés.
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
                  <h3 className="text-xl font-bold" style={{ color: '#3e9dd3' }}>Ouverture de mur porteur</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-gray-700">
                    Ouverture de murs porteurs réalisée en toute sécurité avec étude structurelle et pose de poutres de soutien adaptées.
                  </p>
                </div>
              </div>
              <div>
                <ImageCarousel
                  images={[
                    '/Maconnerie.png',
                    'https://images.pexels.com/photos/5691617/pexels-photo-5691617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
                  ]}
                  alt="Ouverture de mur porteur"
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

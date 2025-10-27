'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* SEO + JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'SARL FCR',
            image: '/FCR_Logo_Mono_500x500.png',
            telephone: '+33955475101',
            email: 'sarlfcr93700@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '54 rue de la Bongarde',
              postalCode: '92390',
              addressLocality: 'Gennevilliers',
              addressCountry: 'FR',
            },
            areaServed: 'Île-de-France',
            openingHours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-12:00'],
            url: typeof window !== 'undefined' ? window.location.href : undefined,
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="text-white py-16"
        style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center texte-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white !text-white">Contact</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white !text-white">
              Besoin d'un devis, d'un conseil ou d'une intervention ? Contactez-nous directement par téléphone ou par email.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne infos principales */}
            <div className="space-y-8 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    
                    Coordonnées
                  </CardTitle>
                 
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-0.5" style={{ color: '#3e9dd3' }} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        <a href="tel:+33955475101" className="underline-offset-2 hover:underline">09 55 47 51 01</a>
                      </p>
                      <p className="text-sm text-gray-600">Lun–Ven : 7h–18h · Sam : 8h–12h</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-0.5" style={{ color: '#3e9dd3' }} />
                    <div>
                      <p className="font-semibold text-gray-900">
                        <a href="mailto:contact@sarlfcr.fr" className="underline-offset-2 hover:underline">contact@sarlfcr.fr</a>
                      </p>
                      <p className="text-sm text-gray-600">Réponse sous 2h en moyenne</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-0.5" style={{ color: '#3e9dd3' }} />
                    <div>
                      <p className="font-semibold text-gray-900">54 rue de la Bongarde</p>
                      <p className="text-gray-900">92390 Gennevilliers</p>
                      <p className="text-sm text-gray-600 mt-1">Zone d'intervention : Toute l'Île-de-France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" style={{ color: '#3e9dd3' }} /> Nous trouver
                  </CardTitle>
                  <CardDescription>54 rue de la Bongarde, 92390 Gennevilliers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border">
                    <iframe
                      title="Plan d'accès FCR Gennevilliers"
                      src={`https://www.google.com/maps?q=54%20rue%20de%20la%20Bongarde%2C%2092390%20Gennevilliers&output=embed`}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Colonne horaires & CTA */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <Clock className="h-5 w-5 mr-2" style={{ color: '#3e9dd3' }} />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-700">Lundi – Vendredi</span><span className="font-semibold text-gray-900">7h00 – 18h00</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Samedi</span><span className="font-semibold text-gray-900">8h00 – 12h00</span></div>
                    <div className="flex justify-between"><span className="text-gray-700">Dimanche</span><span className="text-gray-500">Fermé</span></div>
                    <div className="pt-2 border-t"><p className="text-xs text-gray-600">* Interventions urgentes 24h/7j sur demande</p></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-gray-900">Intervention urgente ?</CardTitle>
                  <CardDescription>Appelez-nous directement, c'est le plus rapide.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+33955475101"
                    className="w-full inline-flex items-center justify-center rounded-xl px-4 py-3 bg-[#3e9dd3] text-white font-medium hover:opacity-90 transition"
                  >
                    <Phone className="h-5 w-5 mr-2" /> Appeler maintenant
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}

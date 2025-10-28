'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  MapPin,
  ArrowRight,
  Phone,
  Building,
  Users,
  Home
} from 'lucide-react';

export default function ProjetsPage() {
  const projects = [
    {
      id: 7,
      title: 'Aménagement complet d\'un Club House – TC Ménil',
      category: 'Sport',
      location: 'Asnières-sur-Seine (92)',
      date: '2024',
      image: '/WhatsApp Image 2025-09-22 at 17.58.53 (2).jpeg',
      description: 'Aménagement complet du club house du Tennis Club de Ménil avec espaces d\'accueil, vestiaires et zones de détente.',
      tags: ['Aménagement', 'Menuiserie', 'Sols', 'Plafonds'],
      surface: '300m²',
      duration: '8 semaines',
      client: 'Tennis Club de Ménil',
      details: 'Rénovation complète avec création d\'espaces modernes et fonctionnels pour les membres du club.'
    },
    {
      id: 8,
      title: 'Réaménagement de la Police Municipale et de la médiathèque de Meudon-la-Fôret',
      category: 'Culture',
      location: 'Meudon-la-Fôret (92)',
      date: '2024',
      image: '/Peinture/Peinture_Meudon.jpg',
      description: 'Réaménagement de la Police Municipale  complet de la médiathèque de Meudon avec création d\'espaces d\'accueil, d\'espaces de lecture et de zones de détente.',
      tags: ['Aménagement', 'Menuiserie', 'Sols', 'Plafonds'],
      surface: '300m²',
      duration: '8 semaines',
      client: 'Médiathèque de Meudon',
      details: 'Rénovation complète avec création d\'espaces modernes et fonctionnels pour les citoyen de la ville.'
    },
    {
      id: 9,
      title: 'Aménagement de la Hall Gourmande à Rueil-Malmaison',
      category: 'Restauration',
      location: 'Rueil-Malmaion (92)',
      date: '2024',
      image: '/Rueil/Chantier Rueil - Prise de vue 29 09 2025 (2).jpg',
      description: 'Réaménagement complet de la halle gourmande de Rueil-Malmaison avec création d\'espaces d\'accueil, d\'espaces de restauration et de zones de dégustation.',
      tags: ['Aménagement', 'Menuiserie', 'Sols', 'Plafonds'],
      surface: '300m²',
      duration: '8 semaines',
      client: 'Tennis Club de Ménil',
      details: 'Rénovation complète avec création d\'espaces modernes et fonctionnels pour les membres du club.'
    },
    {
      id: 10,
      title: 'Projet 10 - À compléter',
      category: 'À définir',
      location: 'Île-de-France',
      date: '2024',
      image: '/placeholder-project.jpg',
      description: 'Description du projet à compléter.',
      tags: ['Tag1', 'Tag2'],
      surface: 'À définir',
      duration: 'À définir'
    },
    {
      id: 11,
      title: 'Projet 11 - À compléter',
      category: 'À définir',
      location: 'Île-de-France',
      date: '2024',
      image: '/placeholder-project.jpg',
      description: 'Description du projet à compléter.',
      tags: ['Tag1', 'Tag2'],
      surface: 'À définir',
      duration: 'À définir'
    },
    {
      id: 12,
      title: 'Projet 12 - À compléter',
      category: 'À définir',
      location: 'Île-de-France',
      date: '2024',
      image: '/placeholder-project.jpg',
      description: 'Description du projet à compléter.',
      tags: ['Tag1', 'Tag2'],
      surface: 'À définir',
      duration: 'À définir'
    }
  ];


  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="text-white py-20" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Nos Réalisations</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
              Projets de rénovation en Île-de-France.
            </p>
          </div>
        </div>
      </section>


      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span style={{ color: '#3e9dd3' }}>Projets</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <Link key={project.id} href={`/projets/${project.id}`} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block cursor-pointer">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    quality={75}
                  />
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-white mb-2 font-medium">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="rounded-2xl p-12 shadow-2xl text-gray-900" style={{ background: 'linear-gradient(135deg, #3e9dd3 0%, #ffffff 100%)' }}>
            <h2 className="text-3xl font-bold mb-4">
              Un Projet ?
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#3e9dd3' }}>
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>

  );
}
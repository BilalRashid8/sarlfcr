import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const projects = [

  {
    id: 7,
    title: 'Aménagement Club House TC Ménil de Asnières-sur-Seine',
    category: 'Sport',
    location: 'Asnières-sur-Seine (92)',
    date: '2024',
    image: '/WhatsApp Image 2025-09-22 at 17.58.53 (2).jpeg',
    description: 'Aménagement complet du club house : espaces d\'accueil, vestiaires et zones de détente.',
    tags: ['Aménagement', 'Menuiserie', 'Sols'],
    surface: '300m²',
    duration: '8 semaines'
  },

    {
id: 8,
      title: 'Réaménagement de la Police Municipale et de la médiathèque de Meudon-la-Fôret',
      category: 'Culture',
      location: 'Meudon-la-Fôret (92)',
      date: '2024',
      image: '/Peinture/Peinture_Meudon.jpg',
      description: 'Réaménagement complet de la médiathèque de Meudon avec création d’espaces d’accueil, d’espaces de lecture et de zones de détente.',
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
      description: 'Réaménagement complet de la halle gourmande de Rueil-Malmaison avec création d’espaces d’accueil, d’espaces de restauration et de zones de dégustation.',
      tags: ['Aménagement', 'Menuiserie', 'Sols', 'Plafonds'],
      surface: '300m²',
      duration: '8 semaines',
      client: 'Tennis Club de Ménil',
      details: 'Rénovation complète avec création d\'espaces modernes et fonctionnels pour les membres du club.'
    }


];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span style={{ color: '#3e9dd3' }}>Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents. Chaque chantier est unique 
            et bénéficie de toute notre expertise technique et notre savoir-faire.
          </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ScrollAnimation key={project.id} animation="scale-in" delay={(project.id - 1) * 100}>
              <div className="group relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.title}
                    </h3>
                    <Link href={`/projets/${project.id}`}>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-6 py-2">
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fade-up" delay={400}>
          <div className="text-center">
          <Link href="/projets">
            <Button size="lg" className="hover:opacity-90 text-white px-8 py-3" style={{ backgroundColor: '#3e9dd3' }}>
              Voir Toutes Nos Réalisations
            </Button>
          </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from '@/components/ScrollAnimation';
import {
  ThumbsUp,
  Award,
  Users,
  Calendar,
  Shield,
  CheckCircle,
  Target,
  Heart,
  Leaf,
  Clock
} from 'lucide-react';

export default function AboutPage() {
  const certifications = [
    {
      name: 'Qualibat 4342',
      description: 'Parquets collés (technicité confirmée)',
      color: 'text-white'
    },
    {
      name: 'Qualibat 4312',
      description: 'Fourniture et pose de menuiserie intérieure en bois',
      color: 'text-white'
    },
    {
      name: '4381',
      description: 'Fabrication et pose d\'ouvrages extérieurs en bois.',
      color: 'text-white'
    },
        {
      name: '2312',
      description: 'Fourniture et pose de charpente traditionnelle (technicité confirmée) (Mention : Efficacité énergétique - Travaux isolés)',
      color: 'text-white'
    },
        {
      name: '4392',
      description: 'Restauration des menuiseries du patrimoine.',
      color: 'text-white'
    },
        {
      name: '4421',
      description: 'Structures métalliques.',
      color: 'text-white'
    },
     {
      name: '4412',
      description: 'Métallerie (technicité confirmée).',
      color: 'text-white'
    },
    
  ];

  const values = [
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: 'Fiabilité',
      description: 'Une expertise reconnue dans le BTP et des interventions fiables sur tous vos projets.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Qualité',
      description: 'Certification Qualibat pour garantir des prestations de qualité irréprochable.'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Délais',
      description: 'Respect des plannings garantis et livraison de vos projets dans les temps impartis.'
    }
  ];

  const milestones = [
    {
      year: '2012',
      title: 'Création de FCR',
      description: 'Création de FCR par Jamil Akhtar à Villeneuve-la-Garenne (92), spécialisée dans les travaux de finition et revêtements de sols.'
    },
    {
      year: '2015',
      title: 'Diversification des activités',
      description: 'Extension aux métiers du second œuvre (maçonnerie, plâtrerie, peinture, menuiserie).'
    },
    {
      year: '2018',
      title: 'Développement réhabilitation',
      description: 'Développement de l\'activité en réhabilitation de sites occupés, devenant une expertise clé de l\'entreprise.'
    },
    {
      year: '2021',
      title: 'Croissance soutenue',
      description: 'Effectif porté à 17 salariés, chiffre d\'affaires de 3,6 M€.'
    },
    {
      year: '2022',
      title: 'Structuration renforcée',
      description: 'Création de départements techniques (Aménagement intérieur, Création d\'espaces, Rénovation intérieure).'
    },
    {
      year: '2023',
      title: 'Expansion de l\'équipe',
      description: 'Recrutement de nouveaux profils (bureau d\'études, conducteurs de travaux) et élargissement du réseau de sous-traitants. Effectif porté à 28 collaborateurs.'
    },
    {
      year: '2024',
      title: 'Consolidation du leadership',
      description: 'FCR franchit le cap des 38 salariés et réalise un chiffre d\'affaires de 4,5 M€, confirmant sa position d\'acteur incontournable du second œuvre en Île-de-France.'
    }
  ];

  return (
      <div className="min-h-screen bg-gray-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SARL FCR',
              foundingDate: '2012',
              numberOfEmployees: 38,
              areaServed: 'Île-de-France',
              description: 'Expert en second œuvre BTP depuis 2012. Spécialiste de la réhabilitation en site occupé.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '54 rue de la Bongarde',
                postalCode: '92390',
                addressLocality: 'Gennevilliers',
                addressCountry: 'FR'
              },
              telephone: '+33955475101',
              email: 'contact@sarlfcr.fr'
            })
          }}
        />
        {/* Hero Section */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #3e9dd3 50%, #2980b9 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">À Propos de</span> <span className="text-white">SARL FCR</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-white">
                13 ans d'expertise en construction et rénovation. Notre histoire et nos valeurs.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Notre <span style={{ color: '#3e9dd3' }}>Histoire</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Fondée en <strong style={{ color: '#3e9dd3' }}>2012</strong>, 
                    FCR est spécialisée dans le <strong style={{ color: '#3e9dd3' }}>second œuvre</strong> en Île-de-France. 
                    Organisation performante et <strong>solutions économiques</strong>.
                  </p>
                  <p>
                    Expertise complète : <span style={{ color: '#3e9dd3' }}>maçonnerie, plâtrerie, peinture, menuiserie, sols</span>. 
                    Spécialité : <strong style={{ color: '#3e9dd3' }}>réhabilitation en site occupé</strong>.
                  </p>
                  <p>
                    <strong style={{ color: '#3e9dd3' }}>38 collaborateurs qualifiés</strong>. 
                    <strong style={{ color: '#3e9dd3' }}> Acteur incontournable en Île-de-France</strong> pour vos projets complexes.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="relative lg:pl-8">
                <img
                  src="/About_us.png"
                  alt="Équipe FCR au travail"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-8 -right-8 text-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300" style={{ backgroundColor: '#3e9dd3' }}>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">13+</div>
                    <div className="text-sm font-medium">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nos <span style={{ color: '#3e9dd3' }}>Valeurs</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos valeurs guident chaque projet de construction et rénovation.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white" style={{ backgroundColor: '#3e9dd3' }}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Notre <span style={{ color: '#3e9dd3' }}>Parcours</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Étapes clés de notre croissance en Île-de-France.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: '#3e9dd3', opacity: 0.3 }}></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <ScrollAnimation key={index} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} delay={index * 100}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3' }}>
                              {milestone.year}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-gray-600">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-lg" style={{ backgroundColor: '#3e9dd3' }}>
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="w-1/2"></div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>



      {/* Commitments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <img
                  src="/FCR_Logo_Color_Environnement_500x500.png"
                  alt="FCR - Engagement Environnemental"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-left" delay={200}>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nos <span style={{ color: '#3e9dd3' }}>Engagements</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Matériaux écologiques</h3>
                      <p className="text-gray-600">
                        Sélection de matériaux respectueux de l'environnement et durables.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Gestion responsable des déchets</h3>
                      <p className="text-gray-600">
                        Tri sélectif et recyclage systématique sur tous nos chantiers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Efficacité énergétique</h3>
                      <p className="text-gray-600">
                        Solutions d'isolation et d'aménagement optimisant la performance énergétique.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Réduction de l'empreinte carbone</h3>
                      <p className="text-gray-600">
                        Circuits courts, optimisation des transports et techniques éco-responsables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      </div>

  );
}
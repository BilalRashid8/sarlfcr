import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/ScrollAnimation';

const services = [
  {
    icon: <img src="/brickwork (1).png" alt="Maçonnerie" className="h-12 w-12" />,
    title: 'Maçonnerie',
    description: 'Construction, réparation et rénovation de murs, cloisons et structures maçonnées.',
    features: ['Murs porteurs', 'Cloisons', 'Réparations', 'Enduits'],
    href: '/services/maconnerie',
    image: '/FCR_MACONNERIE.png',
    color: '#3e9dd3'
  },
  {
    icon: <img src="/plastering copy.png" alt="Plâtrerie" className="h-12 w-12" />,
    title: 'Plâtrerie',
    description: 'Pose et finition de placo, isolation et aménagement intérieur.',
    features: ['Placo BA13', 'Isolation', 'Faux plafonds', 'Cloisons amovibles'],
    href: '/services/platrerie',
    image: '/FCR_PLATRE.png',
    color: '#2a7ba8'
  },
  {
    icon: <img src="/paint-roller copy.png" alt="Peinture" className="h-12 w-12" />,
    title: 'Peinture',
    description: 'Peinture intérieure et extérieure, décorative et de protection.',
    features: ['Peinture murale', 'Façades', 'Décorative', 'Anti-humidité'],
    href: '/services/peinture',
    image: '/Peinture/Peinture_StOuen.jpeg',
    color: '#4ba8d8'
  },
  {
    icon: <img src="/floor copy.png" alt="Sols et Murs" className="h-12 w-12" />,
    title: 'Sols',
    description: 'Pose de revêtements : carrelage, parquet, faïence et papier peint.',
    features: ['Carrelage', 'Parquet', 'Faïence', 'Papier peint'],
    href: '/services/sols',
    image: '/FCR_sols.png',
    color: '#5bb3e3'
  },
  {
    icon: <img src="/hand-saw copy.png" alt="Menuiserie" className="h-12 w-12" />,
    title: 'Menuiserie',
    description: 'Installation et rénovation de menuiseries intérieures et extérieures.',
    features: ['Portes', 'Fenêtres', 'Placards', 'Escaliers'],
    href: '/services/menuiserie',
    image: '/Menuserie/Menuserie_Rueil.jpg',
    color: '#6cbeed'
  },
    {
    icon: <img src="/workspace.png" alt="Agencement" className="h-12 w-12" />,
    title: 'Agencement',
    description: 'Installation et rénovation de menuiseries intérieures et extérieures.',
    features: ['Mobilier', 'Placards', 'Escaliers'],
    href: '/services/agencement',
    image: '/Agancement.jpg',
    color: '#6cbeed'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Nos Expertises en <span style={{ color: '#3e9dd3' }}>Second Œuvre</span>
          </h2>
          <p className="text-xl font-medium text-gray-600 mb-4">Chaque projet est unique !</p>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Nous offrons une gamme complète de <strong>services de second œuvre</strong>, adaptés aux 
            <strong className="text-gray-800">besoins des professionnels</strong> partout en France.  
            Découvrez nos métiers et des solutions sur-mesure pour transformer vos espaces de travail, 
            dans le respect des plus hautes normes de qualité.
          </p>

          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="scale-in" delay={index * 100}>
              <div className="group relative">
              <Card className="h-80 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden relative">
                {/* Background image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
                
                {/* Content overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {service.title}
                    </CardTitle>
                    <Link href={service.href} className="mt-6">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                        En savoir plus
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
              </div>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
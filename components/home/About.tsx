import { Card, CardContent } from '@/components/ui/card';
import { 
  ThumbsUp,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const About = () => {
  const values = [
    {
      icon: <ThumbsUp className="h-12 w-12" />,
      title: 'Fiabilité',
      description: 'Une expertise reconnue dans le BTP'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Qualité',
      description: 'Certification RGE et Qualibat'
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: 'Délais',
      description: 'Respect des plannings garantis'
    }
  ];

  const certifications = [
    {
      number: '2312',
      description: 'Fourniture et pose de charpente traditionnelle (technicité confirmée) (Mention : Efficacité énergétique - Travaux isolés)'
    },
    {
      number: '4312',
      description: 'Fourniture et pose de menuiserie en bois. (technicité confirmée).'
    },
    {
      number: '4342',
      description: 'Parquets collés (technicité confirmée)'
    },
    {
      number: '4381',
      description: 'Fabrication et pose d\'ouvrages extérieurs en bois.'
    },
    {
      number: '4392',
      description: 'Restauration des menuiseries du patrimoine.'
    },
    {
      number: '4412',
      description: 'Métallerie (technicité confirmée).'
    },
    {
      number: '4421',
      description: 'Structures métalliques.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values Section */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos <span style={{ color: '#3e9dd3' }}>Valeurs Fondamentales</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            FCR se distingue par sa fiabilité, la qualité de ses interventions et le respect des délais.
            Nos équipes qualifiées travaillent avec rigueur, en privilégiant la sécurité, la transparence et le respect de l'environnement, afin d'apporter des solutions techniques adaptées et durables à chaque projet.
          </p>
          </div>
        </ScrollAnimation>

        {/* Three Values Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-orange-600">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>


      </div>
    </section>
  );
};

export default About;
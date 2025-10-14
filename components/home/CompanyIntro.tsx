import { Award, Calendar, MapPin } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const CompanyIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center max-w-4xl mx-auto">
         <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Depuis <strong style={{ color: '#3e9dd3' }}>2012</strong>, <strong style={{ color: '#3e9dd3' }}>FCR</strong> réalise en <strong style={{ color: '#3e9dd3' }}>Île-de-France</strong> des travaux de <strong style={{ color: '#3e9dd3' }}>second œuvre</strong>.  
          Spécialisés en rénovation et aménagement intérieur, nous créons des <strong style={{ color: '#3e9dd3' }}>espaces modernes, durables et fonctionnels</strong>.  
          De la maçonnerie à la peinture, en passant par la menuiserie et les sols, nous garantissons <strong style={{ color: '#3e9dd3' }}>qualité, sécurité et respect des délais</strong>.
        </p>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CompanyIntro;
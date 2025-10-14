import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Clock, CheckCircle } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const CTA = () => {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(to right, #3e9dd3, #2a7ba8)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un Devis ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir votre devis gratuit et personnalisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="tel:0955475101">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                09 55 47 51 01
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTA;
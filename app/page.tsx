import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Projects from '@/components/home/Projects';
import CTA from '@/components/home/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FCR - Second Œuvre BTP en Île-de-France | Maçonnerie, Plâtrerie, Peinture',
  description: 'Expert en second œuvre BTP depuis 2012 en Île-de-France. Maçonnerie, plâtrerie, peinture, sols, menuiserie et agencement. 38 collaborateurs qualifiés. Devis gratuit sous 24h. Certification Qualibat.',
  keywords: 'second œuvre, BTP Île-de-France, maçonnerie Paris, plâtrerie 92, peinture bâtiment, rénovation intérieure, FCR, travaux second œuvre, menuiserie, sols, agencement, réhabilitation site occupé',
  openGraph: {
    title: 'FCR - Expert Second Œuvre BTP en Île-de-France',
    description: 'Spécialiste du second œuvre depuis 2012. Maçonnerie, plâtrerie, peinture, sols, menuiserie. 38 collaborateurs qualifiés. Certification Qualibat.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SARL FCR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCR - Second Œuvre BTP en Île-de-France',
    description: 'Expert en second œuvre BTP. Maçonnerie, plâtrerie, peinture, sols, menuiserie. Certification Qualibat.',
  },
  alternates: {
    canonical: '/'
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />

      {/* Separator */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-6 w-12 h-1 rounded-full" style={{ backgroundColor: '#3e9dd3' }}></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <Services />

      {/* Separator */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-6 w-12 h-1 rounded-full" style={{ backgroundColor: '#3e9dd3' }}></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <Projects />

      {/* Separator */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-6 w-12 h-1 rounded-full" style={{ backgroundColor: '#3e9dd3' }}></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Separator */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-6 w-12 h-1 rounded-full" style={{ backgroundColor: '#3e9dd3' }}></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <About />

      {/* Separator */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="mx-6 w-12 h-1 rounded-full" style={{ backgroundColor: '#3e9dd3' }}></div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
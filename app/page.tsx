import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import Projects from '@/components/home/Projects';
import CTA from '@/components/home/CTA';

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
      
      <CTA />
    </>
  );
}
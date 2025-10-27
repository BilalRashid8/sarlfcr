import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-400 to-sky-700 bg-scroll md:bg-fixed bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-6 sm:mb-8">
              <h1
                className="mb-6 leading-tight text-[clamp(28px,7vw,56px)] text-balance font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ensemble, créons les espaces qui vous ressemblent
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8" />
              <p className="text-base sm:text-xl text-white/95 leading-relaxed max-w-4xl mx-auto">
                Depuis <strong>2012</strong>, <strong>FCR</strong> réalise en <strong>Île-de-France</strong> des travaux de <strong>second œuvre</strong>. Spécialisés en rénovation et aménagement intérieur, nous créons des <strong>espaces modernes, durables et fonctionnels</strong>. De la maçonnerie à la peinture, en passant par la menuiserie et les sols, nous garantissons <strong>qualité, sécurité et respect des délais</strong>.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';

const Hero = () => {
  return (
    <section className="relative isolate flex flex-col justify-between min-h-[100svh] md:min-h-screen overflow-hidden pt-20 sm:pt-24 pb-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-400 to-sky-700 bg-scroll md:bg-fixed bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-6 sm:mb-8">
              <h1
                className="mb-3 leading-tight text-[clamp(28px,7vw,56px)] text-balance font-bold text-white"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ensemble, créons les espaces qui vous ressemblent
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-6 sm:mb-8" />
              <p className="text-base sm:text-lg text-white/95 mb-8 max-w-2xl mx-auto">
                FCR, c'est plus de 13 ans d'expertise dans le second œuvre en Île-de-France.
              </p>
            </div>
          </ScrollAnimation>

          {/* CTA intro */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div className="mb-8">
              <h2 className="text-lg sm:text-2xl font-normal text-white">
                Découvrez nos expertises
              </h2>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Services — grille sans scroll, s’ajuste au nombre d’items */}
      <div className="relative z-10 mt-4 sm:mt-8 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="scale-in" delay={300}>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fit,minmax(7.5rem,1fr))]">
              <Link href="/services/maconnerie" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/brickwork (1).png"
                    alt="Maçonnerie"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">Maçonnerie</span>
                </div>
              </Link>

              <Link href="/services/platrerie" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/plastering copy.png"
                    alt="Plâtrerie"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">Plâtrerie</span>
                </div>
              </Link>

              <Link href="/services/peinture" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/paint-roller copy.png"
                    alt="Peinture"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">Peinture</span>
                </div>
              </Link>

              <Link href="/services/sols" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/floor copy.png"
                    alt="Sols"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">Sols</span>
                </div>
              </Link>

              <Link href="/services/menuiserie" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/hand-saw copy.png"
                    alt="Menuiserie"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                    <span className="text-white text-xs sm:text-sm font-medium">Menuiserie</span>
                </div>
              </Link>

              <Link href="/services/agencement" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-all duration-300 text-center h-24 flex flex-col items-center justify-center">
                  <img
                    src="/workspace.png"
                    alt="Agencement"
                    className="h-10 w-10 sm:h-12 sm:w-12 mb-2 filter brightness-0 invert"
                  />
                  <span className="text-white text-xs sm:text-sm font-medium">Agencement</span>
                </div>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;


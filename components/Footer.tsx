import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#3e9dd3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/FCR_Logo_Mono_500x500.png" 
                alt="SARL FCR Logo" 
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <div className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>SARL FCR</div>
                <div className="text-sm opacity-80">Ensemble, créons les espaces qui vous ressemblent</div>
              </div>
            </div>
            <p className="mb-4">
              <span className="text-white">Expert en second œuvre et rénovation depuis 2012, FCR intervient sur tous vos projets de rénovation et d'aménagement intérieur en Île-de-France.</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact</h3>
            <div className="space-y-3 texte-white">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3" style={{ color: 'var(--secondary)' }} />
                <span className="texte-white">09 55 47 51 01</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" style={{ color: 'var(--secondary)' }} />
                <span>contact@sarlfcr.fr</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 mt-1" style={{ color: 'var(--secondary)' }} />
                <span>ZI Gennevilliers</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>Nos Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/maconnerie" className="text-white opacity-80 hover:opacity-100 transition-opacity">Maçonnerie</Link></li>
              <li><Link href="/services/platrerie" className="text-white opacity-80 hover:opacity-100 transition-opacity">Plâtrerie</Link></li>
              <li><Link href="/services/peinture" className="text-white opacity-80 hover:opacity-100 transition-opacity">Peinture</Link></li>
              <li><Link href="/services/sols" className="text-white opacity-80 hover:opacity-100 transition-opacity">Sols</Link></li>
              <li><Link href="/services/menuiserie" className="text-white opacity-80 hover:opacity-100 transition-opacity">Menuiserie</Link></li>
              <li><Link href="/services/agencement" className="text-white opacity-80 hover:opacity-100 transition-opacity">agencement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="opacity-80 text-sm">
              © 2024 SARL FCR. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="opacity-80 hover:opacity-100 text-sm transition-opacity hover:text-current" style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}>
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="opacity-80 hover:opacity-100 text-sm transition-opacity hover:text-current" style={{ '--hover-color': 'var(--secondary)' } as React.CSSProperties}>
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';


export const metadata: Metadata = {
  title: {
    default: 'FCR - Second Œuvre BTP en Île-de-France | Maçonnerie, Plâtrerie, Peinture',
    template: '%s | FCR - Second Œuvre BTP'
  },
  description: 'Expert en second œuvre BTP depuis 2012 en Île-de-France. Maçonnerie, plâtrerie, peinture, sols, menuiserie et agencement. 38 collaborateurs qualifiés. Certification Qualibat. Devis gratuit sous 24h.',
  keywords: 'second œuvre, BTP Île-de-France, maçonnerie Paris, plâtrerie 92, peinture bâtiment, rénovation intérieure, FCR, travaux second œuvre, menuiserie, sols, agencement, certification Qualibat',
  authors: [{ name: 'SARL FCR' }],
  creator: 'SARL FCR',
  publisher: 'SARL FCR',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SARL FCR',
    title: 'FCR - Expert Second Œuvre BTP en Île-de-France',
    description: 'Spécialiste du second œuvre depuis 2012. Maçonnerie, plâtrerie, peinture, sols, menuiserie. 38 collaborateurs qualifiés. Certification Qualibat.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCR - Second Œuvre BTP en Île-de-France',
    description: 'Expert en second œuvre BTP. Maçonnerie, plâtrerie, peinture, sols, menuiserie. Certification Qualibat.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'SARL FCR',
              image: '/FCR_Logo_Color_500x500.png',
              '@id': 'https://www.fcr-construction.fr',
              url: 'https://www.fcr-construction.fr',
              telephone: '+33955475101',
              email: 'contact@sarlfcr.fr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'ZI Gennevilliers',
                addressLocality: 'Gennevilliers',
                addressRegion: 'Île-de-France',
                postalCode: '92390',
                addressCountry: 'FR'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.9333,
                longitude: 2.3
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '07:00',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '12:00'
                }
              ],
              sameAs: [],
              priceRange: '€€',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 48.8566,
                  longitude: 2.3522
                },
                geoRadius: '50000'
              },
              description: 'Expert en second œuvre BTP depuis 2012 en Île-de-France. Maçonnerie, plâtrerie, peinture, sols, menuiserie et agencement.',
              foundingDate: '2012',
              numberOfEmployees: 38,
              slogan: 'Ensemble, créons les espaces qui vous ressemblent',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services Second Œuvre',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Maçonnerie',
                      description: 'Services de maçonnerie second œuvre'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Plâtrerie',
                      description: 'Services de plâtrerie et isolation'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Peinture',
                      description: 'Services de peinture bâtiment'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Sols',
                      description: 'Revêtements de sols et murs'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Menuiserie',
                      description: 'Services de menuiserie intérieure'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Agencement',
                      description: 'Agencement intérieur sur mesure'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        <PageTransition>
          <main>
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
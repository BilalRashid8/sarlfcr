import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';


export const metadata: Metadata = {
  title: 'SARL FCR | Construction & Rénovation | Second Œuvre BTP | Ensemble, créons les espaces qui vous ressemblent',
  description: 'Expert en construction et rénovation dans toute l\'Île-de-France. Maçonnerie, plâtrerie, peinture, sols, menuiserie et agencement. Devis gratuit sous 24h.',
  keywords: 'construction, rénovation, second œuvre, BTP, Île-de-France, maçonnerie, plâtrerie, peinture, menuiserie',
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
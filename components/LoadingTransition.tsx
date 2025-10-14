'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    // Simuler le début du chargement
    handleStart();
    
    // Simuler la fin du chargement
    let innerTimer: NodeJS.Timeout;
    const timer = setTimeout(() => {
      innerTimer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 500);

    return () => {
      clearTimeout(timer);
      if (innerTimer) {
        clearTimeout(innerTimer);
      }
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Background avec gradient animé */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #3e9dd3, #2a7ba8, #4ba8d8, #5bb3e3)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 3s ease infinite'
        }}
      />
      
      {/* Contenu de chargement */}
      <div className="relative z-10 text-center">
        {/* Logo animé */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <img 
              src="/FCR_Logo_Mono_500x500.png" 
              alt="SARL FCR Logo" 
              className="w-full h-full object-contain animate-pulse"
            />
            {/* Cercle de chargement autour du logo */}
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Texte de chargement */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#3e9dd3', fontFamily: 'Montserrat, sans-serif' }}>
            SARL FCR
          </h2>
          <p className="text-gray-600 animate-pulse">
            Chargement en cours...
          </p>
        </div>

        {/* Barre de progression animée */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full animate-loading-bar"
              style={{ backgroundColor: '#3e9dd3' }}
            />
          </div>
        </div>

        {/* Points de chargement animés */}
        <div className="flex justify-center space-x-2 mt-6">
          <div 
            className="w-3 h-3 rounded-full animate-bounce"
            style={{ backgroundColor: '#3e9dd3', animationDelay: '0ms' }}
          />
          <div 
            className="w-3 h-3 rounded-full animate-bounce"
            style={{ backgroundColor: '#2a7ba8', animationDelay: '150ms' }}
          />
          <div 
            className="w-3 h-3 rounded-full animate-bounce"
            style={{ backgroundColor: '#4ba8d8', animationDelay: '300ms' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0%); }
          100% { width: 100%; transform: translateX(100%); }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
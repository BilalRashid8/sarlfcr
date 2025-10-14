'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingTransition from './LoadingTransition';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, children]);

  return (
    <>
      {isLoading && <LoadingTransition />}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {displayChildren}
      </div>
    </>
  );
}
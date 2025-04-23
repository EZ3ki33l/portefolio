'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CyberpunkButton } from './ui/cyberpunk-button';

export default function CookieConsent() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowNotification(true);
      localStorage.removeItem('lastContactSent');
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowNotification(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowNotification(false);
  };

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="relative mt-4 p-4 rounded-lg shadow-lg border-2 border-[#038C8C] bg-white/90 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-800 font-mono text-center">
            Ce site utilise des cookies pour améliorer votre expérience. 
            <Link href="/confidentialite" className="text-[#038C8C] hover:underline ml-1">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-4">
            <CyberpunkButton 
              variant="rounded" 
              size="small"
              onClick={handleAccept}
            >
              Accepter
            </CyberpunkButton>
            <CyberpunkButton 
              variant="rounded" 
              size="small"
              onClick={handleReject}
            >
              Refuser
            </CyberpunkButton>
          </div>
        </div>
      </div>
    </div>
  );
} 
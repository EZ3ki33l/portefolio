"use client";

import Image from "next/image";
import Link from "next/link";
import { CyberpunkButton } from "./ui/cyberpunk-button";
import { CyberpunkGlitch } from "./ui/cyberpunk-glitch";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-[100]" role="navigation" aria-label="Menu principal">
      <div className="mx-auto px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-8">
        <div className="flex justify-between items-center h-12 sm:h-16">
          <Link href="/" className="text-xl font-bold text-gray-800" aria-label="Retour à l'accueil">
            <Image
              src="/images/logo.png"
              alt="Logo Romain Rousset"
              width={32}
              height={32}
              className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
              priority
            />
          </Link>
          <div className="relative">
            <CyberpunkButton 
              onClick={handleMenuClick}
              ref={buttonRef}
              aria-expanded={isMenuOpen}
              aria-controls="menu-list"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              size="small"
              className="text-sm sm:text-base"
            >
              MENU
            </CyberpunkButton>
            {isMenuOpen && (
              <div 
                ref={menuRef}
                id="menu-list"
                className="cyberpunk-menu fixed sm:absolute top-16 sm:top-12 right-0 w-full sm:w-64"
                role="menu"
                aria-orientation="vertical"
              >
                <CyberpunkGlitch />
                <Link
                  href="/"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Accueil
                </Link>
                <Link
                  href="/a-propos"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  A propos
                </Link>
                <Link
                  href="/cv"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  CV
                </Link>
                <Link
                  href="/projets"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Projets
                </Link>
                <Link
                  href="/contact"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Contact
                </Link>
                <Link
                  href="/confidentialite"
                  className="cyberpunk-menu-link text-sm sm:text-base"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Confidentialité
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

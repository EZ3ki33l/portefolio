"use client";

import Image from "next/image";
import Link from "next/link";
import { CyberpunkButton } from "./ui/cyberpunk-button";
import { CyberpunkGlitch } from "./ui/cyberpunk-glitch";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="mx-auto px-16 py-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <div className="relative">
            <CyberpunkButton onClick={handleMenuClick}>
              MENU
            </CyberpunkButton>
            {isMenuOpen && (
              <div className="cyberpunk-menu">
                <CyberpunkGlitch />
                <Link
                  href="/"
                  className="cyberpunk-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/cv"
                  className="cyberpunk-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CV
                </Link>
                <Link
                  href="/projets"
                  className="cyberpunk-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projets
                </Link>
                <Link
                  href="/contact"
                  className="cyberpunk-menu-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Mon Portfolio
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/"
                className={`py-2 px-3 rounded-md text-sm font-medium ${
                  pathname === '/'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/cv"
                className={`py-2 px-3 rounded-md text-sm font-medium ${
                  pathname === '/cv'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                CV
              </Link>
              <Link
                href="/projets"
                className={`py-2 px-3 rounded-md text-sm font-medium ${
                  pathname === '/projets'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Projets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 
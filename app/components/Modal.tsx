'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus sur le bouton de fermeture quand la modal s'ouvre
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex min-h-full items-end justify-center p-2 sm:p-4 text-center sm:items-center">
          <div 
            ref={modalRef}
            className="relative overflow-hidden rounded-lg bg-white px-3 py-4 text-left shadow-xl sm:my-8 sm:w-full sm:max-w-[90vw] sm:p-4"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-0 top-0 z-[250] text-[#BF0404] hover:text-[#038C8C] focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 bg-transparent border-0 p-0 m-0"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Fermer la modal"
            >
              <span className="sr-only">Fermer</span>
              <svg className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 id="modal-title" className="text-2xl sm:text-4xl font-bold text-[#038C8C] text-center py-2 sm:py-4 mb-4 sm:mb-6 relative">
                  <span className="relative z-10">{title}</span>
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#BF0404]"></span>
                </h3>
                <div className="mt-2 overflow-y-auto max-h-[80vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
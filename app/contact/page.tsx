"use client";

import React, { useState } from "react";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CyberpunkNotification } from "../components/ui/cyberpunk-notification";

export default function ContactPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    setNotificationType('success');
    setNotificationMessage('Message envoyé avec succès !');
    setShowNotification(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6"/>
        <section className="h-[calc(100%-80px)] flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 w-full max-w-2xl">
            <h1 className="text-4xl font-bold text-center">
              <div className="space-y-2">
                <div className="font-sans text-5xl font-black tracking-tight">
                  <span className="text-transparent [-webkit-text-stroke:2px_#038C8C] [text-stroke:2px_#038C8C]">CONTACTEZ-MOI</span>
                </div>
                <div className="font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">PRÊT À COLLABORER</div>
              </div>
            </h1>
            
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    placeholder="Nom *" 
                    required
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    placeholder="Prénom *" 
                    required
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cyberpunk-input">
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    required
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    placeholder="Société"
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="cyberpunk-input">
                <select 
                  required
                  defaultValue=""
                  className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none bg-transparent text-gray-800"
                >
                  <option value="" disabled>Motif de contact *</option>
                  <option value="projet">Proposition de projet</option>
                  <option value="emploi">Offre d'emploi</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="cyberpunk-input">
                <textarea 
                  placeholder="Votre message *" 
                  rows={6}
                  required
                  className="w-full px-4 py-2 border-2 border-[#038C8C] rounded-lg focus:outline-none placeholder-gray-400 text-gray-800"
                />
              </div>
              
              <div className="flex justify-center">
                <CyberpunkButton variant="rounded">
                  Envoyer le message
                </CyberpunkButton>
              </div>
              {showNotification && (
                <CyberpunkNotification
                  message={notificationMessage}
                  type={notificationType}
                  onClose={() => setShowNotification(false)}
                />
              )}
            </form>
            
            <div className="flex justify-center items-center space-x-8 mt-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-4xl text-[#038C8C] hover:text-[#038C8C]/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-4xl text-[#038C8C] hover:text-[#038C8C]/80 transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

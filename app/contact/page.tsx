"use client";

import React, { useState } from "react";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CyberpunkNotification } from "../components/ui/cyberpunk-notification";

/**
 * Page de contact
 * 
 * Cette page permet aux visiteurs de me contacter via un formulaire.
 * Les données du formulaire sont envoyées à l'API `/api/send-email`.
 * Si l'envoi est réussi, un message de confirmation est affiché.
 * Si une erreur survient, un message d'erreur est affiché.
 * La page inclut également des liens vers mon profil LinkedIn et GitHub.
 * 
 * @returns {React.ReactElement} Le JSX de la page
 */
export default function ContactPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Vérifier si c'est l'IP de test
    const isTestIP = process.env.NEXT_PUBLIC_TEST_IP === 'true';
    
    if (!isTestIP) {
      const lastSent = localStorage.getItem('lastContactSent');
      if (lastSent) {
        const lastSentDate = new Date(lastSent);
        const now = new Date();
        const hoursSinceLastSent = (now.getTime() - lastSentDate.getTime()) / (1000 * 60 * 60);
        
        if (hoursSinceLastSent < 12) {
          const remainingHours = Math.ceil(12 - hoursSinceLastSent);
          setNotificationType('error');
          setNotificationMessage(`Veuillez attendre ${remainingHours} heure(s) avant d'envoyer un nouveau message.`);
          setShowNotification(true);
          return;
        }
      }
    }

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.get('nom'),
          prenom: formData.get('prenom'),
          email: formData.get('email'),
          societe: formData.get('societe'),
          motif: formData.get('motif'),
          message: formData.get('message'),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }

      // Enregistrer la date d'envoi
      localStorage.setItem('lastContactSent', new Date().toISOString());
      
      setNotificationType('success');
      setNotificationMessage('Message envoyé avec succès !');
      form.reset();
    } catch (error) {
      setNotificationType('error');
      setNotificationMessage(error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message.');
    } finally {
      setShowNotification(true);
      setIsSubmitting(false);
    }
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
                <div className="page-title">
                  <span className="page-title-gradient">CONTACTEZ-MOI</span>
                </div>
                <div className="page-subtitle">PRÊT À COLLABORER</div>
              </div>
            </h1>
            
            <form className="w-full space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Nom *" 
                    required
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="prenom"
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
                    name="email"
                    placeholder="Email *" 
                    required
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="societe"
                    placeholder="Société"
                    className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800"
                  />
                </div>
              </div>
              
              <div className="cyberpunk-input">
                <select 
                  name="motif"
                  required
                  defaultValue=""
                  className="w-full px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none bg-transparent text-gray-800"
                >
                  <option value="" disabled>Motif de contact *</option>
                  <option value="projet">Proposition de projet</option>
                  <option value="emploi">Offre d&apos;emploi</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="cyberpunk-input">
                <textarea 
                  name="message"
                  placeholder="Votre message *" 
                  rows={6}
                  required
                  className="w-full px-4 py-2 border-2 border-[#038C8C] rounded-lg focus:outline-none placeholder-gray-400 text-gray-800"
                />
              </div>
              
              <div className="flex justify-center">
                <CyberpunkButton variant="rounded" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </CyberpunkButton>
              </div>
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
        {showNotification && (
          <CyberpunkNotification
            message={notificationMessage}
            type={notificationType}
            onClose={() => setShowNotification(false)}
            duration={5000}
          />
        )}
      </div>
    </main>
  );
}

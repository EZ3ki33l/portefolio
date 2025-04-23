"use client";

import React, { useState, useEffect } from "react";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CyberpunkNotification } from "../components/ui/cyberpunk-notification";
import Link from "next/link";

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
  const [notificationMessage, setNotificationMessage] = useState<React.ReactNode>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      setNotificationType('success');
      setNotificationMessage(
        <span>
          Par défaut, nous autorisons le traitement de vos données pour le formulaire de contact. 
          Si vous ne souhaitez pas que vos données soient traitées, vous pouvez modifier vos préférences dans la 
          <Link href="/confidentialite" className="text-[#038C8C] hover:underline ml-1">
            page de confidentialité
          </Link>
        </span>
      );
      setShowNotification(true);
      localStorage.setItem('cookieConsent', 'true');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Vérifier si c'est l'IP de test
    const isTestIP = process.env.NEXT_PUBLIC_TEST_IP === 'true';
    
    if (!isTestIP) {
      // Vérifier le consentement des cookies
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (cookieConsent === null) {
        setNotificationType('error');
        setNotificationMessage('Veuillez accepter ou refuser les cookies pour pouvoir envoyer un message.');
        setShowNotification(true);
        return;
      }
      
      if (cookieConsent === 'false') {
        setNotificationType('error');
        setNotificationMessage(
          <span>
            Vous devez accepter le traitement de vos données pour pouvoir envoyer un message. 
            <Link href="/confidentialite" className="text-[#038C8C] hover:underline ml-1">
              Modifier vos préférences
            </Link>
          </span>
        );
        setShowNotification(true);
        return;
      }
    }

    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validation des champs
    const nom = formData.get('nom') as string;
    const prenom = formData.get('prenom') as string;
    const email = formData.get('email') as string;
    const societe = formData.get('societe') as string;
    const motif = formData.get('motif') as string;
    const message = formData.get('message') as string;

    // Validation des longueurs maximales
    if (nom.length > 100 || prenom.length > 100 || email.length > 255 || 
        (societe && societe.length > 100) || message.length > 2000) {
      setNotificationType('error');
      setNotificationMessage('Certains champs dépassent la longueur maximale autorisée.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    // Validation du format d'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setNotificationType('error');
      setNotificationMessage('Veuillez entrer une adresse email valide.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    // Validation des caractères autorisés
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    if (!nameRegex.test(nom) || !nameRegex.test(prenom)) {
      setNotificationType('error');
      setNotificationMessage('Le nom et le prénom ne doivent contenir que des lettres, espaces, tirets et apostrophes.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    // Validation du message contre les injections
    const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s.,!?()'"-]+$/;
    if (!messageRegex.test(message)) {
      setNotificationType('error');
      setNotificationMessage('Le message contient des caractères non autorisés. Veuillez utiliser uniquement des lettres, chiffres et caractères de ponctuation standards.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    // Validation des motifs autorisés
    const allowedMotifs = ['projet', 'emploi', 'collaboration', 'autre'];
    if (!allowedMotifs.includes(motif)) {
      setNotificationType('error');
      setNotificationMessage('Le motif de contact sélectionné n\'est pas valide.');
      setShowNotification(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          societe,
          motif,
          message,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi du message');
      }
      
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-2 md:mr-6"/>
        <section className="h-[calc(100%-80px)] flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              <div className="space-y-1 md:space-y-2">
                <div className="page-title">
                  <span className="page-title-gradient">CONTACTEZ-MOI</span>
                </div>
                <div className="page-subtitle text-sm md:text-base">PRÊT À COLLABORER</div>
              </div>
            </h1>
            
            <form className="w-full space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Nom *" 
                    required
                    className="w-full px-3 md:px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800 text-sm md:text-base"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="prenom"
                    placeholder="Prénom *" 
                    required
                    className="w-full px-3 md:px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800 text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="cyberpunk-input">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email *" 
                    required
                    className="w-full px-3 md:px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800 text-sm md:text-base"
                  />
                </div>
                <div className="cyberpunk-input">
                  <input 
                    type="text" 
                    name="societe"
                    placeholder="Société"
                    className="w-full px-3 md:px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none placeholder-gray-400 text-gray-800 text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div className="cyberpunk-input">
                <select 
                  name="motif"
                  required
                  defaultValue=""
                  className="w-full px-3 md:px-4 py-2 border-b-2 border-[#038C8C] focus:outline-none bg-transparent text-gray-800 text-sm md:text-base"
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
                  rows={4}
                  required
                  className="w-full px-3 md:px-4 py-2 border-2 border-[#038C8C] rounded-lg focus:outline-none placeholder-gray-400 text-gray-800 text-sm md:text-base"
                />
              </div>
              
              <div className="flex justify-center">
                <CyberpunkButton variant="rounded" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </CyberpunkButton>
              </div>
            </form>
            
            <div className="flex justify-center items-center space-x-6 md:space-x-8 mt-4 md:mt-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-[#038C8C] hover:text-[#038C8C]/80 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-[#038C8C] hover:text-[#038C8C]/80 transition-colors duration-300"
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

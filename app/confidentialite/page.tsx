"use client";

import React, { useEffect, useState } from "react";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import Navbar from "../components/Navbar";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";
import { CyberpunkNotification } from "../components/ui/cyberpunk-notification";

export default function ConfidentialitePage() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    setCookieConsent(localStorage.getItem('cookieConsent'));
  }, []);

  const handleCookieConsent = (consent: boolean) => {
    localStorage.setItem('cookieConsent', consent.toString());
    setCookieConsent(consent.toString());
    setNotificationMessage(consent 
      ? 'Vos préférences ont été enregistrées. Vous pouvez maintenant utiliser le formulaire de contact.' 
      : 'Vous avez refusé le traitement de vos données. Le formulaire de contact ne sera pas accessible. Vous pouvez nous contacter via LinkedIn.');
    setNotificationType('success');
    setShowNotification(true);
    
    if (!consent) {
      localStorage.removeItem('lastContactSent');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6"/>
        <section className="h-[calc(100%-80px)] overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-8 sm:text-5xl text-xl">
              <div className="space-y-1">
                <div className="page-title">
                  <span className="page-title-gradient text-3xl sm:text-5xl">POLITIQUE DE CONFIDENTIALITÉ</span>
                </div>
                <div className="page-subtitle text-lg sm:text-4xl">PROTECTION DE VOS DONNÉES</div>
              </div>
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">1. Introduction</h2>
                <p>
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">2. Gestion du Consentement</h2>
                <div className="bg-gray-50 p-6 rounded-lg border border-[#038C8C]">
                  <h3 className="text-xl font-semibold text-[#038C8C] mb-4">Vos préférences actuelles</h3>
                  <p className="mb-4">
                    {cookieConsent === 'true' 
                      ? 'Vous avez accepté l\'utilisation des données.'
                      : cookieConsent === 'false'
                      ? 'Vous avez refusé l\'utilisation des données.'
                      : 'Vous n\'avez pas encore fait de choix concernant l\'utilisation des données.'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <CyberpunkButton 
                      variant="rounded" 
                      size="small"
                      onClick={() => handleCookieConsent(true)}
                      disabled={cookieConsent === 'true'}
                    >
                      Accepter
                    </CyberpunkButton>
                    <CyberpunkButton 
                      variant="rounded" 
                      size="small"
                      onClick={() => handleCookieConsent(false)}
                      disabled={cookieConsent === 'false'}
                    >
                      Refuser
                    </CyberpunkButton>
                  </div>
                </div>
                <p className="mt-4">
                  Notre site utilise le stockage local du navigateur (localStorage) uniquement pour :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Mémoriser votre choix concernant l&apos;utilisation de vos données personnelles</li>
                </ul>
                <p className="mt-4">
                  Cette donnée est stockée uniquement sur votre appareil et n&apos;est pas transmise à nos serveurs.
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-[#038C8C]">
                  <h4 className="text-lg font-semibold text-[#038C8C] mb-2">Conséquences du refus</h4>
                  <p>
                    Si vous refusez le traitement de vos données :
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Vous ne pourrez pas utiliser le formulaire de contact</li>
                    <li>Vous ne pourrez pas nous envoyer de messages directement via le site</li>
                    <li>Vous pourrez toujours nous contacter via LinkedIn</li>
                  </ul>
                  <p className="mt-2">
                    Vous pouvez modifier votre choix à tout moment en revenant sur cette page.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">3. Protection contre les abus</h2>
                <p>
                  Pour protéger notre formulaire de contact contre les abus et les attaques, nous utilisons un service de rate limiting (Upstash) qui :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Limite le nombre de messages qu&apos;une adresse IP peut envoyer dans un délai donné</li>
                  <li>Protège contre les tentatives de spam et d&apos;attaques par force brute</li>
                  <li>Assure la disponibilité du service pour tous les utilisateurs légitimes</li>
                </ul>
                <p className="mt-4">
                  Les données de rate limiting sont stockées de manière sécurisée sur les serveurs d&apos;Upstash et sont automatiquement supprimées après une période définie.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">4. Formulaire de Contact</h2>
                <p>
                  Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Nom de la société (optionnel)</li>
                  <li>Motif de contact</li>
                  <li>Message</li>
                </ul>
                <p className="mt-4">
                  Ces données sont utilisées uniquement pour répondre à votre demande et ne sont pas conservées au-delà de ce qui est nécessaire.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">5. Vos Droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Droit d&apos;accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l&apos;effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">6. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter via le formulaire de contact disponible sur notre site.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-[#038C8C] mb-4 sm:text-2xl text-xl">7. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
                </p>
              </section>
            </div>
          </div>
        </section>
        {showNotification && (
          <CyberpunkNotification
            message={notificationMessage}
            type={notificationType}
            onClose={() => setShowNotification(false)}
            duration={3000}
          />
        )}
      </div>
    </main>
  );
} 
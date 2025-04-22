"use client";

import React from "react";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import Navbar from "../components/Navbar";

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6"/>
        <section className="h-[calc(100%-80px)] overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">
              <div className="space-y-2">
                <div className="page-title">
                  <span className="page-title-gradient">POLITIQUE DE CONFIDENTIALITÉ</span>
                </div>
                <div className="page-subtitle">PROTECTION DE VOS DONNÉES</div>
              </div>
            </h1>

            <div className="space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">1. Introduction</h2>
                <p>
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">2. Stockage Local</h2>
                <p>
                  Notre site utilise le stockage local du navigateur (localStorage) pour :
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Mémoriser la date de votre dernier message envoyé via le formulaire de contact</li>
                  <li>Limiter l&apos;envoi de messages à une fréquence raisonnable (1 message toutes les 12 heures)</li>
                </ul>
                <p className="mt-4">
                  Ces données sont stockées uniquement sur votre appareil et ne sont pas transmises à nos serveurs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">3. Formulaire de Contact</h2>
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
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">4. Vos Droits</h2>
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
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">5. Contact</h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter via le formulaire de contact disponible sur notre site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#038C8C] mb-4">6. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 
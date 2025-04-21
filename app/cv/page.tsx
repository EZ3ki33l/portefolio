"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SkillBar from "../components/SkillBar";
import Modal from "../components/Modal";
import { experiences } from "../data/experiences";
import { formations } from "../data/formations";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import { GlitchBackground } from "../components/ui/glitch-background";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";
import { CyberpunkTimeline, CyberpunkTimelineFormation } from "../components/ui/cyberpunk-timeline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CV() {
  const [showExperiences, setShowExperiences] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6" />
        <div className="overflow-y-auto h-[calc(100%-80px)] p-8">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-12 relative">
              <div className="relative z-10 py-12">
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#038C8C] via-[#025959] to-[#038C8C] animate-border-rotate"></div>
                    <div className="absolute inset-[3px] rounded-full bg-white"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/profile.png"
                        alt="Romain ROUSSET"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                        style={{ imageRendering: "crisp-edges" }}
                        priority
                      />
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-[#038C8C] mb-4 relative">
                  <span className="relative z-10">Romain ROUSSET</span>
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#BF0404]"></span>
                </h1>

                <div className="text-lg md:text-xl text-[#BF0404] mb-8">
                  <p className="font-medium">Développeur Front-End spécialisé en Angular et React/Next.js</p>
                  <p className="mt-2">Passionné par la création d&apos;interfaces utilisateur modernes et performantes</p>
                </div>

                <div className="flex justify-center space-x-8 text-base mb-8">
                  <Link
                    href="/contact"
                    className="text-[#038C8C] hover:text-[#BF0404] transition-colors group"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Contact
                    </span>
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/romain-rousset-100bb8114/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#038C8C] hover:text-[#BF0404] transition-colors group"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.google.fr/maps/place/46090+Maxou/@44.4700935,1.4156045,11.75z/data=!4m6!3m5!1s0x12ac8e00ac612823:0x2f52955f55af6983!8m2!3d44.536493!4d1.443615!16s%2Fm%2F03mgngp?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-[#038C8C] hover:text-[#BF0404] transition-colors group"
                    target="_blank"
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Maxou, France
                    </span>
                  </a>
                </div>

                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-[#038C8C] mb-6 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 mr-3 text-[#BF0404]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    À propos de moi
                  </h2>
                  <div className="border border-[#025959] rounded-xl p-8">
                    <p className="text-lg text-[#038C8C] leading-relaxed">
                      Je suis un développeur front-end passionné par la création
                      d&apos;interfaces utilisateur modernes et intuitives. Je mets à
                      profit mes compétences en HTML, CSS et JavaScript pour
                      concevoir des sites web et des applications web performantes
                      et esthétiques.
                    </p>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-8">
              <section className="bg-white border border-[#025959] rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <h2 className="text-3xl font-bold text-[#038C8C] mb-6 flex items-center">
                  <svg
                    className="w-8 h-8 mr-3 text-[#BF0404]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Mes Compétences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#038C8C] mb-4">
                      Compétences Techniques
                    </h3>
                    <div className="space-y-4">
                      <SkillBar skill="Angular / Nest.js" level={50} />
                      <SkillBar skill="React / Next.js" level={70} />
                      <SkillBar skill="TypeScript" level={60} />
                      <SkillBar skill="HTML/CSS" level={95} />
                      <SkillBar skill="JavaScript" level={80} />
                      <SkillBar skill="Tailwind CSS" level={90} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#038C8C] mb-4">
                      Soft Skills
                    </h3>
                    <div className="space-y-4">
                      <SkillBar skill="Résolution de problèmes" level={90} />
                      <SkillBar skill="Travail en équipe" level={85} />
                      <SkillBar skill="Communication" level={80} />
                      <SkillBar skill="Gestion de projet" level={75} />
                      <SkillBar skill="Mentorat" level={70} />
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white border border-[#025959] rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-[#038C8C] flex items-center">
                    <svg
                      className="w-7 h-7 mr-3 text-[#BF0404]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    Formation
                  </h2>
                </div>
                <CyberpunkTimelineFormation formations={formations} />
              </section>

              <section className="bg-white border border-[#025959] rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-[#038C8C] flex items-center">
                    <svg
                      className="w-7 h-7 mr-3 text-[#BF0404]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Expérience Professionnelle
                  </h2>
                  <CyberpunkButton variant="rounded" size="extra-small" onClick={() => setShowExperiences(true)}>
                    Voir plus
                  </CyberpunkButton>
                </div>
                <CyberpunkTimeline experiences={experiences} />
              </section>
            </div>
          </div>
        </div>

        <Modal
          isOpen={showExperiences}
          onClose={() => setShowExperiences(false)}
          title="Toutes mes expériences"
        >
          <CyberpunkTimeline experiences={experiences} />
        </Modal>
      </div>
    </main>
  );
}

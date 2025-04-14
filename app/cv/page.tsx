"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SkillBar from "../components/SkillBar";
import Modal from "../components/Modal";
import { experiences } from "../data/experiences";
import { formations } from "../data/formations";

export default function CV() {
  const [showExperiences, setShowExperiences] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <header className="text-center mb-12 border-b border-gray-200 pb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="relative w-32 h-32 md:w-40 md:h-40 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 animate-border-rotate"></div>
                <div className="absolute inset-[3px] rounded-full bg-white"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Romain ROUSSET"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "crisp-edges" }}
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Romain ROUSSET
            </h1>
            <div className="text-sm text-gray-600">
              <p>Développeur Front-End spécialisé en Angular et React/Next.js</p>
              <p>Passionné par la création d&apos;interfaces utilisateur modernes et performantes</p>
            </div>
            <div className="mt-4 flex justify-center space-x-6 text-sm">
              <a
                href="mailto:r.rousset31@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  r.rousset31@gmail.com
                </span>
              </a>
              <a
                href="tel:+33627480610"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +33 6 27 48 06 10
                </span>
              </a>
              <span className="text-gray-600 flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
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
                <a
                  href="https://www.google.fr/maps/place/46090+Maxou/@44.4700935,1.4156045,11.75z/data=!4m6!3m5!1s0x12ac8e00ac612823:0x2f52955f55af6983!8m2!3d44.536493!4d1.443615!16s%2Fm%2F03mgngp?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"
                  className="text-gray-600 hover:text-blue-600 transition-colors" target="_blank"
                >
                  Maxou, France
                </a>
              </span>
            </div>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
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
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
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
            <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-8 h-8 mr-3 text-blue-600"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
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

            <section className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-7 h-7 mr-3 text-blue-600"
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
              <div className="space-y-6">
                {formations.map((formation) => (
                  <div
                    key={formation.id}
                    className="border-l-4 border-blue-600 pl-4 hover:border-blue-700 transition-colors"
                  >
                    <h3 className="text-xl font-medium text-gray-900">
                      {formation.title}
                    </h3>
                    <p className="text-gray-600">
                      {formation.school} | {formation.period}
                    </p>
                    <p className="mt-2 text-gray-600">
                      {formation.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formation.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <svg
                    className="w-7 h-7 mr-3 text-blue-600"
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
                <button
                  onClick={() => setShowExperiences(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <span className="text-sm font-medium">Voir plus</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-8">
                {experiences.slice(0, 3).map((exp) => (
                  <div
                    key={exp.id}
                    className="border-l-4 border-blue-600 pl-4 hover:border-blue-700 transition-colors"
                  >
                    <h3 className="text-xl font-medium text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600">
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                      {exp.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showExperiences}
        onClose={() => setShowExperiences(false)}
        title="Toutes mes expériences"
      >
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border-l-4 border-blue-600 pl-4 hover:border-blue-700 transition-colors"
            >
              <h3 className="text-xl font-medium text-gray-900">{exp.title}</h3>
              <p className="text-gray-600">
                {exp.company} | {exp.period}
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </main>
  );
}

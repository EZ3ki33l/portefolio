"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import { GlitchBackground } from "../components/ui/glitch-background";
import useEmblaCarousel from "embla-carousel-react";

interface GitHubLanguages {
  [key: string]: number;
}

interface Language {
  name: string;
  percentage: number;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  languages_url: string;
  image?: string;
}

interface RepoWithLanguages extends GitHubRepo {
  languages: Language[];
}

export default function Projets() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<RepoWithLanguages[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposResponse = await fetch(
          "https://api.github.com/users/EZ3ki33l/repos"
        );
        if (!reposResponse.ok) {
          throw new Error("Erreur lors de la récupération des repositories");
        }

        const reposData = await reposResponse.json();
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo: GitHubRepo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData: GitHubLanguages =
              await languagesResponse.json();

            const totalBytes = Object.values(languagesData).reduce(
              (sum, bytes) => sum + bytes,
              0
            );
            const languages = Object.entries(languagesData).map(
              ([name, bytes]) => ({
                name,
                percentage: Math.round((bytes / totalBytes) * 100),
              })
            );

            return {
              ...repo,
              languages,
            } as RepoWithLanguages;
          })
        );

        setRepos(reposWithLanguages);
        setLoading(false);
      } catch (error) {
        console.error("Erreur:", error);
        setError("Erreur lors de la récupération des projets");
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const renderProjects = () => {
    if (repos.length <= 3) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div key={`grid-${repo.name}`} className="p-2">
              {renderProjectCard(repo)}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="relative px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {repos.map((repo, index) => (
              <div 
                key={`carousel-${repo.name}-${index}`} 
                className="flex-[0_0_calc(100%/3)] min-w-0 p-2"
              >
                {renderProjectCard(repo)}
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 -left-4 -translate-y-1/2 bg-[#038C8C] text-white p-2 rounded-full hover:bg-[#BF0404] transition-colors z-10"
          onClick={scrollPrev}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#038C8C] text-white p-2 rounded-full hover:bg-[#BF0404] transition-colors z-10"
          onClick={scrollNext}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  const renderProjectCard = (repo: RepoWithLanguages) => (
    <div className="bg-white border-2 border-[#025959] rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-xl font-semibold text-[#038C8C] mb-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#BF0404] transition-colors"
        >
          {repo.name.toUpperCase()}
        </a>
      </h2>
      
      <div className="relative w-full h-36 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
        <Image
          src={repo.image || "/images/logo.png"}
          alt={repo.name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      <p className="text-[#038C8C] mb-4">
        {repo.description || "Pas de description"}
      </p>
      
      <div className="space-y-2 mb-4">
        <h3 className="text-sm font-medium text-[#038C8C]">
          LANGAGES UTILISÉS :
        </h3>
        {repo.languages.map((lang) => (
          <div key={lang.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#038C8C]">{lang.name}</span>
              <span className="text-[#BF0404]">
                {lang.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-[#038C8C] h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${lang.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6" />
        <div className="h-[calc(100%-80px)] p-8 flex items-center">
          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            <h1 className="text-4xl font-bold text-[#038C8C] mb-6 text-center relative">
              <span className="relative z-10">MES PROJETS</span>
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#BF0404]"></span>
            </h1>

            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-lg text-[#038C8C]">
                Voici quelques-uns de mes projets. Cliquez sur les titres pour
                voir le code source, et découvrez les technologies utilisées
                dans chaque projet.
              </p>
            </div>
            
            {loading ? (
              <div className="text-center">
                <p className="text-[#038C8C]">Chargement des projets...</p>
              </div>
            ) : error ? (
              <div className="text-center text-[#BF0404]">
                <p>{error}</p>
              </div>
            ) : (
              <div className="w-full">
                {renderProjects()}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

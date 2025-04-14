'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

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
}

interface RepoWithLanguages extends GitHubRepo {
  languages: Language[];
}

export default function Projets() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<RepoWithLanguages[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const reposResponse = await fetch("https://api.github.com/users/EZ3ki33l/repos");
        if (!reposResponse.ok) {
          throw new Error("Erreur lors de la récupération des repositories");
        }

        const reposData = await reposResponse.json();
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo: GitHubRepo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData: GitHubLanguages = await languagesResponse.json();
            
            // Calculer les pourcentages
            const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
            const languages = Object.entries(languagesData).map(([name, bytes]) => ({
              name,
              percentage: Math.round((bytes / totalBytes) * 100)
            }));

            return {
              ...repo,
              languages
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Mes Projets</h1>
        
        {loading ? (
          <div className="text-center">
            <p className="text-gray-600">Chargement des projets...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:scale-[1.02] duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {repo.name}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{repo.description || 'Pas de description'}</p>
                
                <div className="space-y-2 mb-4">
                  <h3 className="text-sm font-medium text-gray-700">Langages utilisés :</h3>
                  {repo.languages.map((lang) => (
                    <div key={lang.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">{lang.name}</span>
                        <span className="text-gray-500">{lang.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${lang.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                    {repo.stargazers_count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 
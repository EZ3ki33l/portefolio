import Image from "next/image";
import Link from "next/link";
import { GlitchBackground } from "../components/ui/glitch-background";
import Navbar from "../components/Navbar";
import { CyberpunkClock } from "../components/ui/cyberpunk-clock";
import { FlipWords } from "../components/ui/flip-words";
import { CyberpunkButton } from "../components/ui/cyberpunk-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6" />
        <section className="h-[calc(100%-80px)] overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-8 sm:text-5xl text-xl">
              <div className="space-y-1">
                <div className="page-title text-center">
                  <span className="page-title-gradient text-3xl sm:text-5xl">
                    A PROPOS DE MOI
                  </span>
                </div>
                <div className="page-subtitle text-lg sm:text-4xl text-center">
                  QUI SUIS-JE ?
                </div>
              </div>
            </h1>
          </div>
        </section>
      </div>
    </main>
  );
}

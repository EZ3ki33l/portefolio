import Image from "next/image";
import Navbar from "./components/Navbar";
import { FlipWords } from "./components/ui/flip-words";
import Link from "next/link";
import { CyberpunkButton } from "./components/ui/cyberpunk-button";
import { CyberpunkClock } from "./components/ui/cyberpunk-clock";
import { GlitchBackground } from "./components/ui/glitch-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative cyberpunk-border">
        <GlitchBackground />
        <Navbar />
        <CyberpunkClock position="bottom-right" className="mr-6" />
        <section className="h-[calc(100%-80px)] flex items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              <div className="space-y-2">
                <div className="page-subtitle text-lg md:text-xl">
                  BUONGIORNO !
                </div>
                <div className="page-title">
                  <span className="page-title-gradient">
                    ROMAIN
                  </span>{" "}
                  <span className="page-title-gradient">
                    ROUSSET
                  </span>
                </div>
                <div className="page-subtitle text-lg md:text-xl">
                  WELCOME ON MY PORTFOLIO !
                </div>
              </div>
            </h1>
            <h2 className="text-base md:text-xl text-gray-600 flex items-center gap-1">
              <span>Full Stack Developer</span>
              <span className="w-20 md:w-24">
                <FlipWords words={["React", "Angular", "Next.JS", "Nest.JS"]} />
              </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/projets" className="w-full md:w-auto">
                <CyberpunkButton variant="rounded" className="w-full md:w-auto">
                  Voir mes projets
                </CyberpunkButton>
              </Link>
              <Link href="/cv" className="w-full md:w-auto">
                <CyberpunkButton variant="rounded" className="w-full md:w-auto">Voir mon CV</CyberpunkButton>
              </Link>
              <Link href="/contact" className="w-full md:w-auto">
                <CyberpunkButton variant="rounded" className="w-full md:w-auto">
                  Me contacter
                </CyberpunkButton>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

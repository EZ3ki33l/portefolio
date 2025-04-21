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
        <CyberpunkClock position="bottom-right" className="mr-6"/>
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
            <h1 className="text-4xl font-bold text-center">
              <div className="space-y-2">
                <div className="font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">BUONGIORNO !</div>
                <div className="font-sans text-5xl font-black tracking-tight">
                  <span className="text-transparent [-webkit-text-stroke:2px_#038C8C] [text-stroke:2px_#038C8C]">ROMAIN</span>{" "}
                  <span className="text-transparent [-webkit-text-stroke:2px_#038C8C] [text-stroke:2px_#038C8C]">ROUSSET</span>
                </div>
                <div className="font-mono tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">WELCOME ON MY PORTFOLIO !</div>
              </div>
            </h1>
            <h2 className="text-xl text-gray-600 flex items-center gap-1">
              <span>Full Stack Developer</span>
              <span className="w-24">
                <FlipWords words={["React", "Angular", "Next.JS", "Nest.JS"]} />
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-4">
              <CyberpunkButton variant="rounded">
                Voir mes projets
              </CyberpunkButton>
              <CyberpunkButton variant="rounded">Voir mon CV</CyberpunkButton>
              <CyberpunkButton variant="rounded">Me contacter</CyberpunkButton>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

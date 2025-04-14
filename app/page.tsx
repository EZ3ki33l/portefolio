import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900">
            Bienvenue sur mon portfolio
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Je suis un développeur Front-End passionné par la création d&apos;interfaces utilisateur modernes et performantes.
          </p>
          <p className="mt-2 text-xl text-gray-600">
            Spécialisé en Angular et React/Next.js, je m&apos;efforce de créer des expériences utilisateur exceptionnelles.
          </p>
          <p className="mt-2 text-xl text-gray-600">
            Découvrez mes projets et mon parcours professionnel.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/cv"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Voir mon CV
            </a>
            <a
              href="/projets"
              className="bg-white text-gray-900 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Mes Projets
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Compétences</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Next.js & React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Expérience</h2>
            <p className="text-gray-600">
              Plusieurs années d&apos;expérience dans le développement web moderne
              et la création d&apos;applications performantes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              N&apos;hésitez pas à me contacter pour discuter de vos projets
              ou pour toute opportunité de collaboration.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

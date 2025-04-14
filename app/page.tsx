import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Je suis un développeur passionné par la création d'applications web modernes
            et innovantes. Découvrez mon parcours, mes compétences et mes projets.
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
              Plusieurs années d'expérience dans le développement web moderne
              et la création d'applications performantes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              N'hésitez pas à me contacter pour discuter de vos projets
              ou pour toute opportunité de collaboration.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

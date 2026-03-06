export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] p-4 text-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gray-900 mb-6">
          The Frontier of <span className="text-blue-600">Agentic Discovery</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
          The first directory designed for dual consumption. High-fidelity UI for human developers, structured JSON endpoints for autonomous minds.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/library" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore Resources
          </a>
          <a href="/submit" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-all focus:ring-2'>
            Submit an Agent
          </a>
        </div>
      </div>
    </div>
  );
}

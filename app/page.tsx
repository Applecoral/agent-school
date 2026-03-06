export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
        Agent School
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        The unified directory for human developers and Objective-Oriented Minds.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/library" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
          Browse Library
        </a>
        <a href="/submit" className="px-6 py-3 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
          Submit Resource
        </a>
      </div>
    </div>
  );
}

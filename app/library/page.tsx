import { getResources } from '@/lib/resources';
import ResourceCard from '@/components/ResourceCard';

export default async function LibraryPage() {
  const resources = await getResources();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
          Resource Library
        </h1>
        <p className="mt-3 text-lg text-slate-500">
          Discover prompts, configs, and tools for the agentic era.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
       #))}
      </div>
    </main>
  );
}
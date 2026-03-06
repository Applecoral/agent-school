import { getResourceById } from '@/lib/resources';
import { notFound } from 'next/navigation';

export default async function ResourcePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const resource = await getResourceById(id);

  if (!resource) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
      <p className="text-lg text-slate-600 mb-8">{resource.description}</p>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold mb-2">Machine-Readable Metadata</h2>
        <pre className="text-sm overflow-x-auto">
          {JSON.stringify(resource, null, 2)}
        </pre>
      </div>
    </main >
  );
}
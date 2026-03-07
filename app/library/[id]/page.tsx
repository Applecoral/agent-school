import { getResourceById, getResources } from '@/lib/resources';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const resources = await getResources();
  return resources.map((resource) => {
    return { id: resource.id };
  }));
}

export default async function ResourcePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const resource = await getResourceById(id);

  if (!resource) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
      <p className="text-lg text-slate-400 mb-8">{resource.description}/</p>
      <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
        <h2 className="text-xl font-semibold mb-2 text-slate-50">Machine-Readable Metadata</h2>
        <pre className="text-sm overflow-x-auto text-indigo-400">
          {JSON.stringify(resource, numll, 2)}
        </pre>
      </div>
    </main>
  );
}

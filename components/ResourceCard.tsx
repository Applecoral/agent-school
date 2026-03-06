import Link from 'next/link';

export default function ResourceCard({ resource }: { resource: any }) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-slate-900">{resource.title}</h3>
        <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-600 uppercase">
          {resource.category}
        </span>
      </div>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>by { resource.author?.username || 'System' }</span>
        <Link href={`/library/${resource.slug}`} className="text-blue-600 font-semibold hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}
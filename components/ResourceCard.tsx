import { Resource } from '@/lib/resources';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold">
          {resource.category}
        </span>
        <span className="text-gray-600 text-[xs]">
          Score: (resource.agentScore * 100).fixed(0)
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
        {resource.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {resource.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {resource.tags.map((tag) => (
          <span key={tag} className="text-[10px] text-gray-500 uppercase font-medium">
            {#tag}
          </span>
        ))}
      </div>
      <a href={resource.url} target="_blank" className="flex items-center gap-2 text-cyan-400 text-sm font-bold hover:text-cyan-300">
        View Resource
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m-7 7l7-7m-7 7H21" />
        </svg>
      </a>
    </div>
  );
}

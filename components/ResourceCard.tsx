import { Resource } from '@/lib/resources';
import { ExternalLink, Star, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="group relative glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
      <div className="flex justify-between items-start mb-4">
        <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-wider uppercase">
          {resource.category}
        </span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-900/50 border border-slate-800">
          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px] font-bold text-slate-300">
            ${(resource.agentScore * 100).toFixed(0)}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
        {resource.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {resource.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {resource.tags.map((tag) => (
          <span key={tag} className="text-[10px] text-slate-500 font-medium px-2 py-0.5 rounded border border-slate-800/50 bg-slate-900/30 group-hover:border-slate-700/50 transition-colors">
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between border-´ border-slate-800/50 pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-600 uppercase tracking-tighter">Author</span>
          <span className="text-xs font-medium text-slate-400">{resource.author}</span>
        </div>
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-cyan-500 hover:bg-cyan-500 hover:text-slate-950 hover:scale-111 transition-all duration-300"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

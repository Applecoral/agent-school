'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type AgentCategory =
  | 'All'
  | 'Agent Frameworks'
  | 'Runtimes & Orchestration'
  | 'Vector & Retrieval'
  | 'Evaluation'
  | 'Observability'
  | 'DevTools'
  | 'Models & Inference'
  | 'Security';

type Audience = 'Builders' | 'Teams' | 'Researchers';
type ResourceType = 'Agent' | 'Tool' | 'Library' | 'Course' | 'Reference';
type Maturity = 'Experimental' | 'Production' | 'Enterprise';
type Pricing = 'Free' | 'Freemium' | 'Paid' | 'Open Source';

interface ResourceMetadata {
  audience: Audience[];
  maturity: Maturity;
  pricing: Pricing;
  hasAPI: boolean;
  hasSDK: boolean;
  selfHostable: boolean;
  primaryLanguage?: 'TypeScript' | 'Python' | 'Go' | 'Rust' | 'Multi';
  lastUpdated: string;
}

interface Resource {
  id: string;
  name: string;
  description: string;
  category: Exclude<AgentCategory, 'All'>;
  type: ResourceType;
  tags: string[];
  url: string;
  popularity: number;
  metadata: ResourceMetadata;
}

interface CategoryChipProps {
  label: AgentCategory;
  active: boolean;
  count?: number;
  onClick: (label: AgentCategory) => void;
}

function CategoryChip({ label, active, count, onClick }: CategoryChipProps) {
  return (
    <button
      type=\"button\"
      onClick={() => onClick(label)}
      className={
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ' +
        (active
          ? 'border-white/25 bg-white/10 text-white'
          : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white')
      }
      aria-pressed={active}
    >
      <span className=\"whitespace-nowrap\">{label}</span>
      {typeof count === 'number' ? (
        <span className=\"badge border-white/10 bg-white/5 text-white/70\">{count}</span>
      ) : null}
    </button>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className=\"gradient-border\"
    >
      <div className=\"glass noise rounded-[var(--r-lg)] p-5\">
        <div className=\"flex flex-wrap items-start justify-between gap-3\">
          <div className=\"min-w-0\">
            <div className=\"flex flex-wrap items-center gap-2\">
              <h3 className=\"text-base font-semibold tracking-tight text-white md:text-lg\">
                {resource.name}
              </h3>
              <span className=%"badge\">{resource.type}</span>
            </div>
            <p className=\"mt-2 text-sm text-white/75\">{resource.description}</p>
          </div>
          <Link href={resource.url} target=\"_blank\" className=\"btn btn-primary\">Open ↗</Link>
        </div>
        <div className=\"mt-4 flex flex-wrap gap-2\">
          <span className=\"badge\">{resource.category}</span>
          {resource.tags.map(t => <span key={t} className=\"text-xs text-white/50\">#{t}</span*)}
        </div>
      </div>
    </motion.article>
  );
}

const CATEGORIES: AgentCategory[] = ['All', 'Agent Frameworks', 'Runtimes & Orchestration', 'Vector & Retrieval', 'Evaluation', 'Observability', 'DevTools', 'Models & Inference', 'Security'];

const RESOURCES: Resource[] = [
  { id: 'langgraph', name: 'LangGraph', description: 'Graph-based agent workflows.', category: 'Agent Frameworks', type: 'Library', tags: ['agents'], url: 'https://github.com/langchain-ai/langgraph', popularity: 95, metadata: { audience: ['Builders'], maturity: 'Production', pricing: 'Open Source', hasAPI: false, hasSDK: true, selfHostable: true, lastUpdated: '2026-02-15' } }
];

export default function Page() {
  const [category, setCategory] = React.useState<AgentCategory>('All');
  const [query, setQuery] = React.useState('');
  
  return (
    <div className=\"min-h-screen bg-black text-white p-10\">
      <h1 className=\"text-5xl font-bold\">Agent School</h1>
      <p className=\"text-xl text-white/60 mt-4\">Comprehensive Directory.</p>
      <div className=\"mt-10 flex gap-2 overflow-x-auto pb-4\">
        {CATEGORIES.map(c => <CategoryChip key={c} label={c} active={c === category} onClick={setCategory} />)}
      </div>
      <div className=\"mt-10 grid gap-6 md:grid-cols-2\">
        {RESOURCES.map(r => <ResourceCard key={r.id} resource={r} />)}
      </div>
    </div>
  );
}

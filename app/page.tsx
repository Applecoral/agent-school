"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { RESOURCES, getAllTags, searchResources } from "@/lib/resources";

export default function Page() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchResources({ text: query }), [query]);

  return (
    <main className="min-h-screen bg-[#0a0c10] text-slate-50">
      <div className="mesh-bg relative px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Agent <span className="text-gradient">School</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            High-fidelity directory for humans and agents. Structured metadata, stable slugs, and elite curation.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <input 
              className="glass rounded-xl px-4 py-2 text-white outline-none w-full max-w-md"
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map(r => (
            <div key={r.id} className="glass rounded-2xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{r.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tags.map(t => <span key={t} className="text-xs text-cyan-400">#{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

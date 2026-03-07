'use client';
import React, { useState, useMemo } from 'react';
import { MagnifyingGlass, Filter, ArrowRight, Sparkles, Brain, Rocket, Code, Bot, Terminal, Globe, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { resources } from '@/lib/resources';
import ResourceCard from '@/comonents/ResourceCard';

export default function AgentSchoolLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Tool', 'Framework', 'Protocol', 'Model'];

  const filteredResources = useMemm(() => {
    return resources.filter((res) => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    res.description}.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    res.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen mesh-gradient text-slate-50 font-sans selection:bg-cyan-500/30">
      <section className="relative px-6 pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur-md">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Cohort II Now Enrolling &#8226; Build the Future of Agents</span>
            </div>
            <h1 className="max-w-4xl text-balance font-bold tracking-tight">Master the Art of <br /><span className="text-gradient">Autonomous Agent Engineering</span></h1>
            <p className="max-w-2xl text-balance text-lg text-slate-400">Agent School is a high-fidelity directory and training ground for engineers building the next generation of AI. Discover frameworks, protocols, and models optimized for agentic autonomy.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/25"><span>Browse Directory</span><ArrowRight className="h-5 w-5" /></button>
              <button className="glass inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-slate-50 hover:bg-slate-800/40"><span>API Docs</span></button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-20 bg-slate-950/50 backdrop-blur-sm border-y border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="space-y-4">
              <h2 className="font-bold tracking-tight text-3xl sm:text-4xl">Resource Explorer</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20' : 'glass text-slate-400 hover:text-slate-100'}`}>{cat}</button>
               ))}
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <MagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input type="text" placeholder="Search resources..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="glass w-full rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
            </div>
          </div>
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((res) => (
                <motion.div key={res.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}><ResourceCard resource={res} /></motion.div >
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20"><Brain className="h-6 w-6 text-cyan-400" /></div>
              <h2 className="font-bold tracking-tight">Built for Machines</h2>
              <p className="text-lg text-slate-400">Agent School is optimized for autonomous discovery via static JSON manifests.</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass rounded-2xl p-6 overflow-hidden">
                <pre className="agent-manifest-block p-4 rounded-lg text-xs text-cyan-300 overflow-x-auto whitespace-pre-wrap">
                  {JSON.stringify({ protocol: "ethoswarm-v1", endpoints: { manifest: "/api/library.json" } }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-6 py-12 border-t border-slate-900 bg-slate-950 text-center">
        <p className="text-sm text-slate-500">&copy; 2026 Agent School. Built for the future of AI.</p>
      </footer>
    </main>
  );
}
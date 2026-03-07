import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm*pb-32 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-600/10">
                    What's New
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-400">
                    <span>v1.0 Alpha Released</span>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-50 sm:text-6xl">
                The Resource Directory for <span className="text-indigo-400">Humans & Agents</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Agent School is a high-fidelity directory of AI freworks, models, and evaluation tools. 
                Built with a dual-audience architecture: beautiful UI for humans, machine-readable JSON for autonomous agents.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                 href="/library"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Browse Library
                </Link>
                <Link href="/api/browse" className="text-sm font-semibold leading-6 text-slate-100">
                  View API Schema <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2zl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="rounded-xl bg-slate-800/5 p-2 ring-1 ring-inset ring-slate-800/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <div className="w-full h-64 md:h-96 rounded-lg bg-slate-900 shadow-2xl flex items-center justify-center text-indigo-400 font-mono text-sm overflow-hidden p-8">
                    <div className="w-full">
                      <p className="text-slate-500 mb-2">// Fetching resources for agent consumption</p>
                      <p><span className="text-pink-400">GET</span> /api/browse</p>
                      <p className="mt-4 text-slate-300">{"{"}</p>
                      <p className="ml-4 text-slate-300">"status": "success",</p>
                      <p className="ml-4 text-slate-300">"resources": [</p>
                      <p className="ml-8 text-slate-300">{"{"}</p>
                      <p className="ml-12 text-slate-300">"name": "Agent School",</p>
                      <p className="ml-12 text-slate-300">"type": "Directory",</p>
                      <p className="ml-12 text-slate-300">"audience": ["human", "agent"]</p>
                      <p className="ml-8 text-slate-300">{"}"}</p>
                      <p className="ml-4 text-slate-300">]</p>
                      <p className="text-slate-300">{"}"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

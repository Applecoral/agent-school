'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <span className="text-lg font-bold">AS</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Agent School</span>
          </div>
          <div className="hidden space-x-8 md:flex">
            <Link href="/library" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
              Directory
            </Link>
            <Link href="/submit" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
              Submit Resource
            </Link>
            <Link href="/api/browse" className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600">
              Agent API
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/library" 
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    What's New
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-600">
                    <span>v1.0 Alpha Released</span>
                  </span>
                </a>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                The Resource Directory for <span className="text-indigo-600">Humans & Agents</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Agent School is a high-fidelity directory of AI frameworks, models, and evaluation tools. 
                Built with a dual-audience architecture: beautiful UI for humans, machine-readable JSON for autonomous agents.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/library"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Browse Library
                </Link>
                <Link href="/api/browse" className="text-sm font-semibold leading-6 text-slate-900">
                  View API Schema <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {/* Placeholder for code/terminal mockup */}
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

      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="text-sm text-slate-500">Built for Monolith Solana Mobile Hackathon</span>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-slate-500">
              &copy; 2026 Agent School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

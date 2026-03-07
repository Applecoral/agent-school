'use client';

import { useState } from 'react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: 'foundation',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Resource submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-100">Submission Received!</h1>
        <p className="mt-4 text-slate-400">
          Thank you for contributing to the Agent School directory. Our curators (human and autonomous) will review your submission shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100">Submit a Resource</h1>
        <p className="mt-4 text-lg text-slate-400">
          Help expand the world's most comprehensive directory for human and agent discovery.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-300">Resource Title</label>
          <input
            type="text"
            id="title"
            required
            value={formData.title}
            onChange={(e) => setFormData( { ...formData, title: e.target.value })}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="e.g., OpenAI Swarm"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-slate-300">Endpoint / URL</label>
          <input
            type="url"
            id="url"
            required
            value={formData.url}
            onChange={(e) => setFormData( { ...formData, url: e.target.value })}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="https://github.com/openai/swarm"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-300">Category</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="foundation">Foundation Model</option>
            <option value="framework">Framework / SDK</option>
            <option value="agent">Autonomous Agent</option>
            <option value="tool">Developer Tool</option>
            <option value="dataset">Dataset / Benchmarks</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300">Description</label>
          <textarea
            id="description"
            rows={4}
            required
            value={formData.description}
            onChange={(e) => setFormData( { ...formData, description: e.target.value })}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Describe how this resource serves both human and machine audiences..."
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Publish Submission
          </button>
        </div>
      </form>

      <footer className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">
        <p>By submitting, you agree that this resource is public and accessible for automated indexing.</p>
      </footer>
    </div>
  );

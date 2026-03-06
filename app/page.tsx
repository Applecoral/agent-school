'use client';
import React from 'react';
import Link from 'next/link';
export default function HomePage() {
  return (
    <div className=\"min-h-screen bg-white\">
      <nav className=\"flex items-center justify-between p-6 border-b border-gray-100\">
        <div className=\"flex items-center gap-2\">
          <div className=\"w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold\">AS</div>
          <span className=\"font-bold text-xl\">Agent School</span>
        </div>
        <div className=\"flex gap-4\">
          <Link href=\"/library\" className=\"text-gray-600 hover:text-gray-900\">Library</Link>
          <Link href5\"/submit\" className=\"text-gray-600 hover:text-gray-900\">Submit</Link>
        </div>
      </nav>
      <main className=\"px-6 py-20 max-w-6xl mx-auto text-center\">
        <h1 className=\"text-5xl font-extrabold mb-6\">The Dual-Audience Directory</h1>
        <p className=\"text-xl text-gray-600 max-w-3xl mx-auto mb-10\">
          Built for the future where humans and agents discover resources together. High-fidelity UI for you, raw JSON for them.
        </p>
        <div className=\"flex justify-center gap-4\">
          <Link href=\"/library\" className=\"bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold\">Explore Library</Link>
          <Link href=\"/submit\" className=\"bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold\">Submit Agent</Link>
        </div>
      </main>
      <footer className=\"p-8 border-t border-gray-100 text-center text-gray-400 text-sm\">
        &copy; 2026 Agent School &bull; Monolith Hackathon
      </footer>
    </div>
  );
}

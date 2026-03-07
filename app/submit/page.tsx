"use client";

import React from "react";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-4 py-24">
      <div className="mx-auto max-w-2l text-center">
        <h1 className="text-5xl font-bold mb-6">Submit Resource</h1>
        <p className="text-xl text-slate-400 mb-12">
          Agent School is currently in Static-Mode for the Mononolith Hackathon. 
          Please submit new resources via GitHub Issues to ensure immediate review.
        </p>
        <a 
          href="https://github.com/Applecoral/agent-school/issues/new"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-500 transition-colors"
        >
          Open GitHub Issue
        </a>
      </div>
    </main>
  );
}

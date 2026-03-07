"use client";

import React, { useState } from "react";

export default function SubmitPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: "", desc: "" });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-3l bg-white p-8 rounded.xl shadow-sm">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-slate-900">Submit Resource</h1>
          <p className="text-slate-600">Share your agent or human profile with the developer community.</p>
        </header>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Display Name</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-300 p-2"
              value={formData.name}
              onchange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Description</label>
            <textarea
              className="mt-1 w-full rounded-md border border-slate-300 p-2"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
            />
          </div>
          <button className="w-full bg-sky-600 text-white py-3 rounded-md font-semibold">Submit</button>
        </div>
      </div>
    </main>
  );
}

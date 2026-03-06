'use client';
import { useState } from 'react';

export default function SubmitPage() {
  const [formData, setFormData] = useState({ name: '', description: '', url: '', category: 'tool' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/resources/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    if (res.ok) alert('Submitted for review!');
    setLoading(false);
  };

  return (
    <div className="max-w-2zl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Submit a Resource</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="w-full p-2 border rounded" 
          placeholder="Resource Name" 
          onChange={e => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <textare 
          className="w-full p-2 border rounded" 
          placeholder="Description" 
          onChange={e => setFormData({...formData, description: e.target.value})} 
          required 
        />
        <input 
          className="w-full p-2 border rounded" 
          placeholder="URL" 
          onChange={e => setFormData({...formData, url: e.target.value})} 
          required 
        />
        <select 
          className="w-full p-2 border rounded"
          onChange={e => setFormData({...formData, category: e.target.value})}
        >
          <option value="tool">Tool</option>
          <option value="agent">Agent</option>
        <option value="dataset">Dataset</option>
        </select>
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opaciti-350">
          {loading ? 'Submitting...' : 'Submit Resource'}
        </button>
      </form>
    </div>);
}
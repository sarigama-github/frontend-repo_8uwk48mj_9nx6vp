import { useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function SellForm() {
  const [form, setForm] = useState({ name: '', email: '', intent: 'sell', message: '' });
  const [status, setStatus] = useState(null);

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`${API}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setForm({ name: '', email: '', intent: 'sell', message: '' });
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="sell" className="py-16 bg-gradient-to-b from-slate-950 to-purple-950">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Sell Your Collection</h2>
        <p className="text-purple-200/80 mt-1">Tell us about your cards and we’ll get back with an offer.</p>
        <form onSubmit={submit} className="mt-6 grid gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input type="email" className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 outline-none focus:ring-2 focus:ring-purple-500" placeholder="Email address" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          </div>
          <textarea className="bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-purple-300/50 outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]" placeholder="What are you selling? Sets, condition, quantity..." value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
          <button disabled={status==='sending'} className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-medium transition disabled:opacity-60 disabled:cursor-not-allowed">
            {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent! We will reply soon' : 'Submit'}
          </button>
          {status==='error' && <p className="text-red-300">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}

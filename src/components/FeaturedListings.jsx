import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

function ListingCard({ item }) {
  return (
    <div className="group bg-purple-900/30 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-400/40 transition">
      <div className="aspect-video bg-black/30 overflow-hidden">
        {item.images?.[0] ? (
          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="w-full h-full grid place-items-center text-purple-300">No Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-white font-semibold truncate">{item.name}</h3>
          <span className="text-purple-300 font-bold">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-purple-200/80 text-sm mt-1 truncate">
          {item.set_name || 'Vintage'} {item.year ? `• ${item.year}` : ''} {item.condition ? `• ${item.condition}` : ''}
        </p>
        {item.is_collection && (
          <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
            Collection
          </span>
        )}
      </div>
    </div>
  );
}

export default function FeaturedListings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API}/listings?featured=true`);
        const json = await res.json();
        setData(Array.isArray(json) ? json : []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section id="listings" className="relative py-14 md:py-20 bg-gradient-to-b from-purple-950 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Finds</h2>
            <p className="text-purple-200/80 mt-1">Curated vintage singles and overlooked collections</p>
          </div>
          <button
            onClick={async () => {
              try {
                setLoading(true);
                await fetch(`${API}/seed`, { method: 'POST' });
                const res = await fetch(`${API}/listings?featured=true`);
                const json = await res.json();
                setData(Array.isArray(json) ? json : []);
              } catch (e) {
                console.error(e);
              } finally {
                setLoading(false);
              }
            }}
            className="px-3 py-2 text-xs rounded-lg bg-purple-500 hover:bg-purple-400 text-white transition"
          >
            Seed demo data
          </button>
        </div>

        {loading ? (
          <div className="text-purple-200">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, idx) => (
              <ListingCard key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Purple gradient overlay for theme tint - doesn't block interactions */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-purple-900/70 via-purple-900/40 to-purple-950/80" />

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Rediscover Vintage Pokemon Cards
          </h1>
          <p className="mt-4 text-purple-100/90 text-lg md:text-xl">
            Buy forgotten gems and curated collections from the WOTC era and beyond.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#listings" className="px-5 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-medium transition">
              Browse Listings
            </a>
            <a href="#sell" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/20 transition">
              Sell Your Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

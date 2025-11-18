import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import SellForm from './components/SellForm';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">RetroTCG</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-purple-200">
            <a href="#listings" className="hover:text-white">Listings</a>
            <a href="#sell" className="hover:text-white">Sell</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <FeaturedListings />
        <SellForm />
        <footer className="py-10 text-center text-purple-300/70">
          © {new Date().getFullYear()} RetroTCG • Vintage Pokemon marketplace
        </footer>
      </main>
    </div>
  )
}

export default App

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏚️</span>
            <span className="text-xl font-bold">
              <span className="text-gradient">ShedCraft</span>
            </span>
          </div>

          <nav className="flex gap-6 text-sm text-gray-400">
            <a href="#materials" className="hover:text-yellow-400 transition-colors">
              Materials
            </a>
            <a href="#tools" className="hover:text-yellow-400 transition-colors">
              Tools
            </a>
            <a href="#steps" className="hover:text-yellow-400 transition-colors">
              Steps
            </a>
            <a href="#tips" className="hover:text-yellow-400 transition-colors">
              Tips
            </a>
          </nav>

          <p className="text-sm text-gray-500">
            Built with ♥ for DIY enthusiasts
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
          <p>
            Always consult local building codes and regulations. This guide is
            for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

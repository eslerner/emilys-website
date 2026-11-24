import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { profileData } from '../data/siteData';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-clay">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-espresso hover:text-terracotta transition"
        >
          <Sparkles className="w-5 h-5 text-terracotta" />
          <span>{profileData.fullName}</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-taupe">
          {isHome ? (
            <>
              <a href="#about" className="hover:text-terracotta transition">
                About
              </a>
              <a href="#portfolio" className="hover:text-terracotta transition">
                Portfolio
              </a>
              <a href="#blog" className="hover:text-terracotta transition">
                Blog
              </a>
            </>
          ) : (
            <Link to="/" className="hover:text-terracotta transition">
              ← Back to Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

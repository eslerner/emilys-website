import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import BlogPostPage from './components/BlogPostPage';
import { profileData } from './data/siteData';

function HomePage() {
  return (
    <>
      <About />
      <Portfolio />
      <Blog />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-cream text-espresso selection:bg-blush">
        <Navbar />
        
        <main className="max-w-4xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
          </Routes>
        </main>

        <footer className="border-t border-clay py-8 mt-12 text-center text-sm text-taupe">
          © {new Date().getFullYear()} {profileData.fullName}. Built with React & Tailwind CSS.
        </footer>
      </div>
    </HashRouter>
  );
}

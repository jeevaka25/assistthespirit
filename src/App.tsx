import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import AboutYou from './pages/AboutYou';
import Sessions from './pages/Sessions';
import Events from './pages/Events';
import Retreats from './pages/Retreats';
import Teachings from './pages/Teachings';
import Podcasts from './pages/Podcasts';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on load
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/about-you" element={<AboutYou />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/teachings" element={<Teachings />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

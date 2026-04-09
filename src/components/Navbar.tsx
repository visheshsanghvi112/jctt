import { Link, useLocation } from 'react-router-dom';
import { Trophy, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => `relative px-3 py-2 text-sm font-medium transition-colors ${isActive(path) ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`pointer-events-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/20 rounded-full px-4 py-2.5 transition-all duration-300 w-full max-w-4xl ${scrolled ? 'bg-white/90 shadow-xl shadow-slate-200/30' : ''}`}
        >
          <Link to="/" className="flex items-center gap-2 pl-2 pr-4">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden border border-slate-200">
              <img src="/logo.jpg" alt="JCTT Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-slate-900">JCTT</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50/50 p-1 rounded-full border border-slate-100">
            {['/', '/about', '/event', '/sponsors'].map((path) => {
              const labels: Record<string, string> = {
                '/': 'Home',
                '/about': 'About',
                '/event': 'Event',
                '/sponsors': 'Sponsors'
              };
              return (
                <Link key={path} to={path} className={linkClass(path)}>
                  {isActive(path) && (
                    <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/50" style={{ zIndex: -1 }} />
                  )}
                  <span className="relative z-10">{labels[path]}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center pl-4">
            <Link to="/contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-md hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.nav>
      </div>
      
      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl rounded-3xl p-6 flex flex-col gap-4"
          >
            <Link to="/" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive('/') ? 'text-amber-600' : 'text-slate-600'}`}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive('/about') ? 'text-amber-600' : 'text-slate-600'}`}>About</Link>
            <Link to="/event" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive('/event') ? 'text-amber-600' : 'text-slate-600'}`}>Event Details</Link>
            <Link to="/sponsors" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${isActive('/sponsors') ? 'text-amber-600' : 'text-slate-600'}`}>Sponsors</Link>
            <div className="h-px bg-slate-100 my-2" />
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-900 flex items-center justify-between">
              Contact Us <Trophy className="w-5 h-5 text-amber-500" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

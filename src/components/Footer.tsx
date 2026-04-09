import { Trophy, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-amber-500" />
              <span className="font-bold text-xl tracking-tight text-white">JCTT</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              Jain Community Turf Tournament. Fostering unity, sportsmanship, and excellence through cricket.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/jctt_turf_tournament/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
              <Link to="/event" className="hover:text-amber-500 transition-colors">Tournament Details</Link>
              <Link to="/sponsors" className="hover:text-amber-500 transition-colors">Sponsorship</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <p>Wilson Gymkhana, Marine Drive, Mumbai</p>
              <p>info@jctt.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} Jain Community Turf Tournament. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { brandLogoFallbackPath, brandLogoPath, tournament } from '../data/tournamentData';

const navLinks = [
  { to: '/about', label: 'Teams' },
  { to: '/event', label: 'Schedule' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #06090f 0%, #020408 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 600,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand Block */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="h-12 w-12 rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.95)', boxShadow: '0 0 20px rgba(251,191,36,0.25)' }}
              >
                <img
                  src={brandLogoPath}
                  alt="JCTT Logo"
                  className="w-full h-full object-contain p-1"
                  onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = brandLogoFallbackPath; }}
                />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-xl tracking-wide">JCTT 2026</p>
                <p className="text-xs text-amber-400/70 uppercase tracking-widest mt-0.5">Mega Cricket Turf Tournament</p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5 max-w-xs"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Not just a local tournament — a full-scale cricket spectacle with premium turf action, packed matchdays, and a championship finale.
            </p>

            {/* Venue pill */}
            <div
              className="inline-flex items-start gap-2 px-4 py-2.5 rounded-xl text-xs"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
              <span>{tournament.venue}</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 text-sm font-medium transition-all duration-200"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/40 group-hover:bg-amber-400 transition-colors duration-200" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/jctt_turf_tournament/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.65)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(225,48,108,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(225,48,108,0.3)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                }}
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span className="flex-1">@jctt_turf_tournament</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.65)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                }}
              >
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span className="flex-1">WhatsApp Group</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          <span>© {new Date().getFullYear()} {tournament.name}. All rights reserved.</span>
          <span
            className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{ background: 'rgba(251,191,36,0.1)', color: 'rgba(251,191,36,0.6)' }}
          >
            {tournament.dates}
          </span>
        </div>
      </div>
    </footer>
  );
}

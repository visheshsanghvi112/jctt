import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { brandLogoFallbackPath, brandLogoPath, tournament } from '../data/tournamentData';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Teams' },
  { path: '/event', label: 'Schedule' },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      {/* ── Navbar Bar ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10, 15, 30, 0.92)'
            : 'rgba(10, 15, 30, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

          {/* ── Logo + Brand ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="h-9 w-9 rounded-xl overflow-hidden flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.4)]"
              style={{ background: '#fff', padding: '4px' }}
            >
              <img
                src={brandLogoPath}
                alt="JCTT"
                className="w-full h-full object-contain"
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = brandLogoFallbackPath; }}
              />
            </div>
            <div className="leading-none">
              <p className="text-white font-heading font-bold text-[15px] tracking-wide leading-none">JCTT</p>
              <p className="text-[10px] tracking-widest uppercase mt-0.5" style={{ color: 'rgba(245,158,11,0.7)' }}>
                {tournament.season}
              </p>
            </div>
          </Link>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200"
                  style={{
                    color: active ? '#fff' : 'rgba(255,255,255,0.55)',
                    background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                >
                  {item.label}
                  {active && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: '#f59e0b' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200"
              style={{
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#fbbf24',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.25)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(245,158,11,0.15)';
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)';
              }}
            >
              Join Now
            </a>

            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ── */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-16 z-40 md:hidden"
          style={{
            background: 'rgba(8, 13, 25, 0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-150"
                  style={{
                    background: active ? 'rgba(245,158,11,0.1)' : 'transparent',
                    color: active ? '#fbbf24' : 'rgba(255,255,255,0.7)',
                    border: active ? '1px solid rgba(245,158,11,0.15)' : '1px solid transparent',
                  }}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 pb-1">
              <a
                href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold"
                style={{
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  color: '#fbbf24',
                }}
              >
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

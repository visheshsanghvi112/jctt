import { Instagram, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';
import { tournament } from '../data/tournamentData';

export default function Contact() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] mb-3"
            style={{ color: 'rgba(245,158,11,0.75)' }}>Get Involved</p>
          <h1 className="font-heading font-black uppercase mb-4"
            style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', color: '#fff', lineHeight: 0.9 }}>
            Contact
          </h1>
          <p className="text-base max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            For registrations, sponsorship inquiries, and tournament operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Event Desk */}
          <div className="rounded-3xl p-6 sm:p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="font-heading font-bold text-white text-2xl uppercase mb-6">Event Desk</h2>

            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, label: 'Venue', val: tournament.venue, accent: 'rgba(245,158,11,0.1)', iconColor: 'text-amber-400' },
                { icon: null,   label: 'Dates', val: tournament.dates, accent: 'rgba(245,158,11,0.07)', iconColor: '' },
                { icon: null,   label: 'Format', val: tournament.format, accent: 'rgba(255,255,255,0.04)', iconColor: '' },
              ].map(({ icon: Icon, label, val, accent }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: accent, border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="shrink-0 mt-0.5 h-8 w-8 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(245,158,11,0.1)' }}>
                    {Icon ? <Icon className="w-4 h-4 text-amber-400" />
                      : <span className="text-amber-400 text-xs font-bold">{label[0]}</span>}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1"
                      style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</p>
                    <p className="text-sm leading-snug" style={{ color: label === 'Dates' ? '#fbbf24' : 'rgba(255,255,255,0.7)' }}>
                      {val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="rounded-3xl p-6 sm:p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="font-heading font-bold text-white text-2xl uppercase mb-6">Connect</h2>

            <div className="flex flex-col gap-4">
              {/* WhatsApp */}
              <a href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-250"
                style={{ background: 'rgba(37,211,102,0.07)', border: '1px solid rgba(37,211,102,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.13)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.07)'; e.currentTarget.style.borderColor = 'rgba(37,211,102,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div className="shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(37,211,102,0.12)' }}>
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-0.5">Join WhatsApp Group</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Tournament updates & announcements</p>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-30 group-hover:opacity-80 transition-opacity shrink-0 text-green-400" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/jctt_turf_tournament/"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-250"
                style={{ background: 'rgba(225,48,108,0.07)', border: '1px solid rgba(225,48,108,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(225,48,108,0.13)'; e.currentTarget.style.borderColor = 'rgba(225,48,108,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(225,48,108,0.07)'; e.currentTarget.style.borderColor = 'rgba(225,48,108,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div className="shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(225,48,108,0.12)' }}>
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm mb-0.5">Follow on Instagram</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>@jctt_turf_tournament</p>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-30 group-hover:opacity-80 transition-opacity shrink-0 text-pink-400" />
              </a>

              <div className="p-4 rounded-2xl text-center mt-1"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.07)' }}>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  For sponsorship enquiries, team registration & volunteer opportunities —
                  reach us via WhatsApp or DM on Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue card */}
        <div className="mt-5 rounded-3xl flex flex-col items-center justify-center gap-3 py-12"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="h-12 w-12 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(245,158,11,0.1)' }}>
            <MapPin className="w-6 h-6 text-amber-400" />
          </div>
          <div className="text-center">
            <p className="font-heading font-bold text-white text-lg">Wilson Gymkhana</p>
            <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Marine Drive, Mumbai</p>
          </div>
          <a href="https://maps.google.com/?q=Wilson+Gymkhana+Marine+Drive+Mumbai"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#fbbf24' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(245,158,11,0.1)')}>
            Open in Maps <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

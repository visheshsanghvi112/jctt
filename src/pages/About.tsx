import { useState } from 'react';
import { Search, Users, Star } from 'lucide-react';
import { teams, teamLogoPath } from '../data/tournamentData';

export default function About() {
  const [query, setQuery] = useState('');

  const filtered = teams.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.owners.some(o => o.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.24em] mb-3"
            style={{ color: 'rgba(245,158,11,0.75)' }}>Season 2026</p>
          <h1 className="font-heading font-black uppercase mb-4"
            style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', color: '#fff', lineHeight: 0.9 }}>
            Team Lineup
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            All {teams.length} squads with owner and icon player details for JCTT 2026.
          </p>

          {/* Search */}
          <div className="relative mt-6 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              style={{ color: 'rgba(255,255,255,0.3)' }} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search teams or owners…"
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,158,11,0.35)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((team, i) => {
            const isMunot = team.name.toLowerCase().includes('munot');
            return (
              <article key={team.name}
                className="card-hover rounded-3xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>

                {/* Logo */}
                <div
                  className="relative h-52 sm:h-56 flex items-center justify-center p-5"
                  style={{
                    background: isMunot
                      ? 'radial-gradient(circle at 50% 40%, rgba(245,158,11,0.12), transparent 65%), rgba(255,255,255,0.03)'
                      : 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.08), transparent 65%), rgba(255,255,255,0.03)',
                  }}>
                  <span className="absolute top-3 left-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}>
                    {i + 1}
                  </span>
                  <img src={teamLogoPath(team.file)} alt={team.name}
                    className="max-h-full max-w-full object-contain"
                    style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }} />
                </div>

                {/* Info */}
                <div className="p-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <h2 className="font-heading font-bold text-white text-xl leading-tight mb-4">
                    {team.name}
                  </h2>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Users className="w-3 h-3 text-amber-400" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: 'rgba(245,158,11,0.7)' }}>Owners</p>
                      </div>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {team.owners.join(', ')}
                      </p>
                    </div>

                    <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Star className="w-3 h-3 text-blue-400" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em]"
                          style={{ color: 'rgba(96,165,250,0.7)' }}>Icon Players</p>
                      </div>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        {team.icons.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.3)' }}>
              No teams match "<span style={{ color: 'rgba(255,255,255,0.6)' }}>{query}</span>"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

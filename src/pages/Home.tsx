import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, Users, Zap, Trophy } from 'lucide-react';
import {
  brandLogoFallbackPath,
  brandLogoPath,
  sponsorLogoPath,
  sponsors,
  teamLogoPath,
  teams,
  tournament,
} from '../data/tournamentData';

const gallery = {
  stumps:      '/assets/gallery/cricket-stumps.jpg',
  cricketNets: '/assets/gallery/cricket-nets.jpg',
  cricketBalls:'/assets/gallery/cricket-balls.jpg',
  tennisBall:  '/assets/gallery/tennis-ball.jpg',
};

const tierClass: Record<string, string> = {
  'Title Sponsor':    'tier-title',
  'Auction Sponsor':  'tier-auction',
  'Jersey Sponsor':   'tier-jersey',
  'Equipment Sponsor':'tier-equipment',
  'Cap Sponsor':      'tier-cap',
  'YouTube Sponsor':  'tier-youtube',
  'Man of the Match': 'tier-motm',
  'Toss Ka Boss':     'tier-toss',
  'Water Sponsor':    'tier-water',
};

export default function Home() {
  return (
    <div style={{ background: '#080d1a' }}>

      {/* ══════════════════════════════════
          1. HERO — FULL SCREEN
      ══════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100dvh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <img
          src={gallery.stumps}
          alt="Cricket turf"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />

        {/* Dark overlay — strong at bottom, subtle at top */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,13,26,0.25) 0%, rgba(8,13,26,0.5) 40%, rgba(8,13,26,0.97) 100%)',
        }} />

        {/* Amber glow from bottom */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 40% at 30% 100%, rgba(245,158,11,0.09) 0%, transparent 60%)',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 24px 56px' }}>

          {/* Season pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 18px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(10px)',
            marginBottom: 28,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#f59e0b',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#fcd34d' }}>
              {tournament.hashtag} · {tournament.season}
            </span>
          </div>

          {/* Main title */}
          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 0.88,
              marginBottom: 24,
              fontSize: 'clamp(3rem, 9vw, 7.5rem)',
            }}
          >
            Cricket<br />
            Weekend<br />
            <span style={{
              background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Reimagined.
            </span>
          </h1>

          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 500, lineHeight: 1.65, marginBottom: 36 }}>
            Not just another local tournament. JCTT is built like a cricket spectacle —
            premium turf, packed matchdays, championship finale.{' '}
            <strong style={{ color: '#fff' }}>May 23–24, 2026.</strong>
          </p>

          {/* CTA row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 48 }}>
            <Link to="/about"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', borderRadius: 14,
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#0a0500', fontWeight: 700, fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                textDecoration: 'none', boxShadow: '0 0 32px rgba(245,158,11,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              Meet the Teams <ArrowRight size={16} />
            </Link>
            <Link to="/event"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', borderRadius: 14,
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', fontWeight: 700, fontSize: 13,
                textTransform: 'uppercase', letterSpacing: '0.08em',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.09)')}
            >
              View Schedule
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10, maxWidth: 620 }}>
            {[
              { icon: Users,        value: `${teams.length}`,  label: 'Teams' },
              { icon: Zap,          value: '8',                label: 'Overs/Side' },
              { icon: CalendarDays, value: '2 Days',            label: 'Tournament' },
              { icon: Trophy,       value: '9+',               label: 'Sponsors' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 16,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(245,158,11,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={16} color="#f59e0b" />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: '#fff', fontSize: 16, lineHeight: 1 }}>{value}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 3 }}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          2. BRAND / IDENTITY
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '96px 24px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>

          {/* On wide screens: side-by-side */}
          <div className="lg-grid-2">

            {/* Text side */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.75)', marginBottom: 12 }}>
                The Crest
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900,
                textTransform: 'uppercase', color: '#fff',
                fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 0.9, marginBottom: 20,
              }}>
                One Crest.<br />
                <span style={{
                  background: 'linear-gradient(135deg, #fcd34d, #f59e0b)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  One Championship.
                </span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 28, maxWidth: 440 }}>
                The JCTT crest represents royal blue ambition, athletic gold excellence, and the kinetic energy of Mumbai's cricket community.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['16 Teams', '8 Overs', 'League + Knockout', 'Wilson Gymkhana'].map(tag => (
                  <span key={tag} style={{
                    padding: '7px 16px', borderRadius: 999,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 500,
                  }}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Logo side */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: 300, height: 300,
                borderRadius: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'radial-gradient(circle at 40% 35%, rgba(245,158,11,0.1), transparent 60%), rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 80px rgba(245,158,11,0.06)',
              }}>
                <div className="animate-slow-spin" style={{
                  position: 'absolute', inset: 20, borderRadius: '50%',
                  border: '1px dashed rgba(245,158,11,0.15)',
                }} />
                <div className="animate-counter-spin" style={{
                  position: 'absolute', inset: 50, borderRadius: '50%',
                  border: '1px dashed rgba(59,130,246,0.1)',
                }} />
                <img src={brandLogoPath} alt="JCTT Crest"
                  className="animate-float"
                  style={{
                    position: 'relative', width: '62%', objectFit: 'contain',
                    filter: 'drop-shadow(0 0 24px rgba(245,158,11,0.25))',
                  }}
                  onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = brandLogoFallbackPath; }} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          3. PHOTO FEATURE CARDS
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.75)', marginBottom: 10 }}>
              Atmosphere
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900,
              textTransform: 'uppercase', color: '#fff',
              fontSize: 'clamp(2rem,4vw,3rem)',
            }}>
              Feel the Ground.
            </h2>
          </div>

          {/* Big + small grid — simple explicit grid */}
          <div className="gallery-grid">
            {/* Big hero image — left, spans 2 rows */}
            <div className="gallery-big" style={{
              borderRadius: 24, overflow: 'hidden',
              position: 'relative',
            }}>
              <img src={gallery.cricketNets} alt="Cricket nets"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', display: 'block' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,13,26,0.85) 0%, transparent 55%)',
              }} />
              <div style={{ position: 'absolute', bottom: 20, left: 22, right: 22 }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#fcd34d', marginBottom: 5 }}>Live Energy</p>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: '#fff', fontSize: 22, lineHeight: 1.2 }}>
                  Built For Matchday Drama
                </h3>
              </div>
            </div>

            {/* Top right — cricket balls */}
            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
              <img src={gallery.cricketBalls} alt="Cricket balls"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%', display: 'block', transition: 'transform 0.6s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,13,26,0.82) 0%, transparent 55%)',
              }} />
              <div style={{ position: 'absolute', bottom: 16, left: 18 }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#fcd34d', marginBottom: 4 }}>Competition</p>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: '#fff', fontSize: 17 }}>
                  16 Teams. One Trophy.
                </h3>
              </div>
            </div>

            {/* Bottom right — tennis ball */}
            <div style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
              <img src={gallery.tennisBall} alt="Tennis ball on turf"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%', display: 'block', transition: 'transform 0.6s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,13,26,0.82) 0%, transparent 55%)',
              }} />
              <div style={{ position: 'absolute', bottom: 16, left: 18 }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#93c5fd', marginBottom: 4 }}>Premium Turf</p>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, color: '#fff', fontSize: 17 }}>
                  Wilson Gymkhana
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          4. VENUE HIGHLIGHT STRIP
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="venue-split" style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
            {/* Image */}
            <div style={{ position: 'relative', minHeight: 180 }}>
              <img src={gallery.stumps} alt="JCTT turf"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, rgba(8,13,26,0.95) 100%)' }} />
            </div>

            {/* Text */}
            <div style={{
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.15)',
              padding: '40px 36px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <MapPin size={20} color="#f59e0b" style={{ marginBottom: 12 }} />
              <h3 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
                textTransform: 'uppercase', color: '#fff',
                fontSize: 'clamp(1.4rem,3vw,2.2rem)', lineHeight: 1, marginBottom: 10,
              }}>
                Wilson Gymkhana.<br />
                <span style={{ color: '#f59e0b' }}>Marine Drive.</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                {tournament.dates} · Mumbai's iconic waterfront sports venue hosts the JCTT championship weekend.
              </p>
              <Link to="/event"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 22px', borderRadius: 12, width: 'fit-content',
                  background: 'rgba(245,158,11,0.15)',
                  border: '1px solid rgba(245,158,11,0.3)',
                  color: '#fbbf24', fontWeight: 600, fontSize: 13, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(245,158,11,0.15)')}
              >
                Full Schedule <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          5. TEAM MARQUEE
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '0 0 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.75)', marginBottom: 8 }}>
              The Contenders
            </p>
            <h2 style={{
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900,
              textTransform: 'uppercase', color: '#fff',
              fontSize: 'clamp(2rem,4vw,3rem)',
            }}>
              All {teams.length} Teams
            </h2>
          </div>
          <Link to="/about"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: '#f59e0b', fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>
            Full Lineup <ArrowRight size={16} />
          </Link>
        </div>

        {/* Row 1 */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '8px 0' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #080d1a, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #080d1a, transparent)', zIndex: 10 }} />
          <div className="animate-marquee" style={{ display: 'flex', gap: 14, width: 'max-content', padding: '0 14px' }}>
            {[...teams, ...teams].map((team, i) => (
              <div key={`r1-${i}`} style={{
                flexShrink: 0, width: 104, height: 104,
                borderRadius: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 10,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'transform 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img src={teamLogoPath(team.file)} alt={team.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — reversed */}
        <div style={{ position: 'relative', overflow: 'hidden', padding: '8px 0', marginTop: 10 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, #080d1a, transparent)', zIndex: 10 }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, #080d1a, transparent)', zIndex: 10 }} />
          <div className="animate-marquee-reverse" style={{ display: 'flex', gap: 14, width: 'max-content', padding: '0 14px' }}>
            {[...teams.slice(8), ...teams.slice(0, 8), ...teams.slice(8), ...teams.slice(0, 8)].map((team, i) => (
              <div key={`r2-${i}`} style={{
                flexShrink: 0, width: 104, height: 104,
                borderRadius: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 10,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'transform 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img src={teamLogoPath(team.file)} alt={team.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          6. SPONSORS
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.75)', marginBottom: 8 }}>
                Backed By
              </p>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(2rem,4vw,3rem)' }}>
                Official Partners
              </h2>
            </div>
            <Link to="/sponsors"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#f59e0b', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              All Partners <ArrowRight size={16} />
            </Link>
          </div>

          {/* Title sponsor — wide feature card */}
          {sponsors.filter(s => s.tier === 'Title Sponsor').map(s => (
            <div key={s.file} style={{
              position: 'relative', overflow: 'hidden',
              borderRadius: 24,
              padding: '28px 32px',
              marginBottom: 16,
              display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24,
              background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.04) 100%)',
              border: '1px solid rgba(245,158,11,0.22)',
            }}>
              <div className="animate-shimmer" style={{ position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none' }} />
              <div style={{
                height: 100, width: 160, borderRadius: 16, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              }}>
                <img src={sponsorLogoPath(s.file)} alt={s.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ position: 'relative' }}>
                <span className="tier-badge tier-title" style={{ marginBottom: 8, display: 'inline-block' }}>★ {s.tier}</span>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, color: '#fff', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginTop: 4, lineHeight: 1 }}>
                  {s.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>{s.note}</p>
              </div>
            </div>
          ))}

          {/* Grid of rest */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12,
          }}>
            {sponsors.filter(s => s.tier !== 'Title Sponsor').map(s => (
              <div key={s.file}
                className="card-hover"
                style={{
                  borderRadius: 20, overflow: 'hidden',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                <div style={{
                  height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
                  background: s.name === 'UDE' ? '#04070e' : 'rgba(255,255,255,0.02)',
                }}>
                  <img src={sponsorLogoPath(s.file)} alt={s.name}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>
                <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className={`tier-badge ${tierClass[s.tier] ?? 'tier-title'}`} style={{ marginBottom: 6, display: 'inline-block' }}>
                    {s.tier}
                  </span>
                  <p style={{ fontWeight: 600, color: '#fff', fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════
          7. CTA BANNER
      ══════════════════════════════════ */}
      <section className="reveal-on-scroll" style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            position: 'relative', overflow: 'hidden', borderRadius: 28,
            padding: '64px 40px', textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(29,78,216,0.07) 50%, rgba(245,158,11,0.07) 100%)',
            border: '1px solid rgba(245,158,11,0.15)',
          }}>
            {/* subtle bg */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
              <img src={gallery.cricketBalls} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.75)', marginBottom: 14 }}>
                May 23–24, 2026
              </p>
              <h2 style={{
                fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900,
                textTransform: 'uppercase', color: '#fff',
                fontSize: 'clamp(2.2rem,5vw,4rem)', lineHeight: 0.9, marginBottom: 18,
              }}>
                Own The Weekend.
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.65 }}>
                Be at Wilson Gymkhana for Mumbai's biggest cricket turf championship.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
                <Link to="/event"
                  style={{
                    padding: '14px 30px', borderRadius: 14,
                    background: 'linear-gradient(135deg,#f59e0b,#d97706)',
                    color: '#0a0500', fontWeight: 700, fontSize: 13,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    textDecoration: 'none',
                    boxShadow: '0 0 28px rgba(245,158,11,0.3)',
                  }}>
                  See Schedule
                </Link>
                <Link to="/contact"
                  style={{
                    padding: '14px 30px', borderRadius: 14,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff', fontWeight: 700, fontSize: 13,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}>
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

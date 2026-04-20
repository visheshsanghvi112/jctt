import { useRef } from 'react';
import { sponsorLogoPath, sponsors } from '../data/tournamentData';
import type { Sponsor } from '../data/tournamentData';

/* ── tier config ── */
const TIERS: Record<string, { label: string; color: string; glow: string; bg: string; class: string }> = {
  'Title Sponsor':    { label: '★ Title',     color: '#f59e0b', glow: 'rgba(245,158,11,0.35)', bg: 'rgba(245,158,11,0.08)', class: 'tier-title'     },
  'Auction Sponsor':  { label: 'Auction',     color: '#818cf8', glow: 'rgba(129,140,248,0.3)', bg: 'rgba(99,102,241,0.07)', class: 'tier-auction'   },
  'Jersey Sponsor':   { label: 'Jersey',      color: '#34d399', glow: 'rgba(52,211,153,0.3)',  bg: 'rgba(5,150,105,0.07)',  class: 'tier-jersey'    },
  'Equipment Sponsor':{ label: 'Equipment',   color: '#fb923c', glow: 'rgba(251,146,60,0.3)',  bg: 'rgba(234,88,12,0.07)', class: 'tier-equipment' },
  'Cap Sponsor':      { label: 'Cap',         color: '#38bdf8', glow: 'rgba(56,189,248,0.3)',  bg: 'rgba(2,132,199,0.07)', class: 'tier-cap'       },
  'YouTube Sponsor':  { label: 'YouTube',     color: '#f87171', glow: 'rgba(248,113,113,0.3)', bg: 'rgba(220,38,38,0.07)', class: 'tier-youtube'   },
  'Man of the Match': { label: 'MOM',         color: '#c084fc', glow: 'rgba(192,132,252,0.3)', bg: 'rgba(147,51,234,0.07)', class: 'tier-motm'     },
  'Toss Ka Boss':     { label: 'Toss',        color: '#a3e635', glow: 'rgba(163,230,53,0.3)',  bg: 'rgba(101,163,13,0.07)', class: 'tier-toss'     },
  'Water Sponsor':    { label: 'Water',       color: '#22d3ee', glow: 'rgba(34,211,238,0.3)',  bg: 'rgba(8,145,178,0.07)', class: 'tier-water'     },
};

const TIER_ORDER = Object.keys(TIERS);

/* ── spotlight canvas effect ── */
function SpotlightCard({ sponsor, children }: { sponsor: Sponsor; children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card || !spot) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spot.style.left = `${x}px`;
    spot.style.top = `${y}px`;
    spot.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (spotRef.current) spotRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* spotlight circle */}
      <div ref={spotRef} style={{
        position: 'absolute',
        width: 280, height: 280,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.25s',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
    </div>
  );
}

/* ── animated border ring ── */
function GlowBorder({ color }: { color: string }) {
  return (
    <div style={{
      position: 'absolute',
      inset: -1,
      borderRadius: 'inherit',
      padding: 1,
      background: `linear-gradient(135deg, ${color}, transparent, ${color})`,
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      animationName: 'border-spin',
      animationDuration: '4s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      opacity: 0.6,
      pointerEvents: 'none',
    }} />
  );
}

export default function Sponsors() {
  const sorted = [...sponsors].sort(
    (a, b) => (TIER_ORDER.indexOf(a.tier) ?? 99) - (TIER_ORDER.indexOf(b.tier) ?? 99)
  );

  const titleSponsor = sorted.find(s => s.tier === 'Title Sponsor')!;
  const premium = sorted.filter(s =>
    ['Auction Sponsor', 'Jersey Sponsor', 'Equipment Sponsor'].includes(s.tier)
  );
  const associate = sorted.filter(s =>
    ['Cap Sponsor', 'YouTube Sponsor', 'Man of the Match'].includes(s.tier)
  );
  const supporting = sorted.filter(s =>
    ['Toss Ka Boss', 'Water Sponsor'].includes(s.tier)
  );

  return (
    <div style={{ background: '#080d1a', minHeight: '100vh', paddingTop: 64 }}>

      {/* ══ HERO HEADER ══ */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '72px 24px 60px', textAlign: 'center' }}>

        {/* background grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        {/* glow orbs */}
        <div style={{
          position: 'absolute', top: -60, left: '30%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: -40, right: '20%',
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* tier strips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, marginBottom: 28 }}>
            {Object.entries(TIERS).map(([, cfg]) => (
              <span key={cfg.label} className={`tier-badge ${cfg.class}`}>{cfg.label}</span>
            ))}
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9,
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            marginBottom: 16,
            background: 'linear-gradient(135deg, #fff 0%, #fcd34d 45%, #f59e0b 80%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The Wall of<br />Champions.
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            {sponsors.length} official partners fuelling every run, every wicket,
            every moment of JCTT 2026.
          </p>

          {/* sponsor count pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 28 }}>
            {[
              { n: '1', label: 'Title Partner' },
              { n: '3', label: 'Premium Partners' },
              { n: '3', label: 'Associate Partners' },
              { n: '2', label: 'Support Partners' },
            ].map(({ n, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 18px', borderRadius: 999,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: '#f59e0b', fontSize: 16 }}>{n}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ══ TITLE SPONSOR — MEGA CARD ══ */}
      <div style={{ padding: '0 24px 24px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 10 }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'rgba(245,158,11,0.6)' }}>
            Presenting Sponsor
          </p>
        </div>

        {titleSponsor && (
          <SpotlightCard sponsor={titleSponsor}>
            <div style={{
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              border: '1px solid rgba(245,158,11,0.25)',
              background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(8,13,26,0.8) 40%, rgba(245,158,11,0.05) 100%)',
            }}>
              {/* Shimmer sweep */}
              <div className="animate-shimmer" style={{ position: 'absolute', inset: 0, borderRadius: 28, pointerEvents: 'none' }} />

              {/* Top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2,
                background: 'linear-gradient(90deg, transparent, #f59e0b, #fcd34d, #f59e0b, transparent)',
              }} />

              {/* Corner accents */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: 20, height: 20,
                  borderColor: 'rgba(245,158,11,0.5)',
                  borderStyle: 'solid',
                  borderWidth: 0,
                  ...(i === 0 ? { top: 16, left: 16, borderTopWidth: 2, borderLeftWidth: 2 } :
                      i === 1 ? { top: 16, right: 16, borderTopWidth: 2, borderRightWidth: 2 } :
                      i === 2 ? { bottom: 16, left: 16, borderBottomWidth: 2, borderLeftWidth: 2 } :
                                { bottom: 16, right: 16, borderBottomWidth: 2, borderRightWidth: 2 }),
                }} />
              ))}

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 0, minHeight: 260,
              }}
                className="max-sm:block"
              >
                {/* Logo */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '48px 40px',
                  borderRight: '1px solid rgba(245,158,11,0.1)',
                }}>
                  <div style={{
                    position: 'relative',
                    width: 220, height: 140,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <div style={{
                      position: 'absolute', inset: -20, borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(245,158,11,0.15), transparent 70%)',
                      animation: 'pulse-ring 3s ease-in-out infinite',
                    }} />
                    <img
                      src={sponsorLogoPath(titleSponsor.file)}
                      alt={titleSponsor.name}
                      style={{
                        position: 'relative',
                        maxWidth: '100%', maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 24px rgba(245,158,11,0.3))',
                      }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="tier-badge tier-title" style={{ marginBottom: 16, display: 'inline-block', fontSize: 11, padding: '5px 14px' }}>
                    ★ &nbsp; Title Sponsor · JCTT 2026
                  </span>
                  <h2 style={{
                    fontFamily: "'Space Grotesk',sans-serif",
                    fontWeight: 900, textTransform: 'uppercase', color: '#fff',
                    fontSize: 'clamp(2.2rem,4vw,3.5rem)', lineHeight: 0.9, marginBottom: 14,
                  }}>
                    {titleSponsor.name}
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 340 }}>
                    {titleSponsor.note} — the primary presenting partner powering JCTT's championship weekend.
                  </p>
                  <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
                    <div style={{ padding: '10px 18px', borderRadius: 12, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                      <p style={{ fontSize: 10, color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 2 }}>Status</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#fbbf24' }}>Presenting Partner</p>
                    </div>
                    <div style={{ padding: '10px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 2 }}>Season</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        )}
      </div>


      {/* ══ PREMIUM TIER ══ */}
      <PartnerSection
        label="Premium Partners"
        sponsors={premium}
        cardSize="large"
      />


      {/* ══ ASSOCIATE TIER ══ */}
      <PartnerSection
        label="Associate Partners"
        sponsors={associate}
        cardSize="medium"
      />


      {/* ══ SUPPORTING TIER ══ */}
      <PartnerSection
        label="Support Partners"
        sponsors={supporting}
        cardSize="medium"
      />


      {/* ══ BECOME A PARTNER CTA ══ */}
      <div style={{ padding: '40px 24px 80px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          borderRadius: 24,
          padding: '48px 36px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.03)',
          border: '1px dashed rgba(255,255,255,0.1)',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.24em', color: 'rgba(245,158,11,0.7)', marginBottom: 12 }}>
            Grow With JCTT
          </p>
          <h3 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800, color: '#fff', textTransform: 'uppercase',
            fontSize: 'clamp(1.4rem,3vw,2rem)', lineHeight: 1, marginBottom: 12,
          }}>
            Interested in becoming a partner?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, marginBottom: 24, maxWidth: 380, margin: '0 auto 24px' }}>
            Get your brand in front of Mumbai's cricket community. Reach out via WhatsApp or Instagram.
          </p>
          <a
            href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 14,
              background: 'linear-gradient(135deg,#f59e0b,#d97706)',
              color: '#0a0500', fontWeight: 700, fontSize: 13,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              textDecoration: 'none',
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

    </div>
  );
}

/* ── reusable section + cards ── */
function PartnerSection({
  label, sponsors: list, cardSize,
}: {
  label: string;
  sponsors: Sponsor[];
  cardSize: 'large' | 'medium';
}) {
  if (!list.length) return null;

  return (
    <div style={{ padding: '8px 24px 24px', maxWidth: 1280, margin: '0 auto' }}>
      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.26em', color: 'rgba(255,255,255,0.3)', marginBottom: 14 }}>
        {label}
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: cardSize === 'large'
          ? 'repeat(auto-fill, minmax(280px, 1fr))'
          : 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 12,
      }}>
        {list.map(s => (
          <PartnerCard key={s.file} sponsor={s} size={cardSize} />
        ))}
      </div>
    </div>
  );
}

function PartnerCard({ sponsor, size }: { sponsor: Sponsor; size: 'large' | 'medium' }) {
  const cfg = TIERS[sponsor.tier] ?? TIERS['Title Sponsor'];
  const logoH = size === 'large' ? 130 : 100;

  return (
    <div
      className="card-hover"
      style={{
        borderRadius: 22, overflow: 'hidden',
        background: cfg.bg,
        border: `1px solid ${cfg.color}22`,
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${cfg.color}, transparent 80%)` }} />

      {/* Logo area */}
      <div style={{
        height: logoH,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
        background: sponsor.name === 'UDE' ? '#04070e' : 'rgba(255,255,255,0.02)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* glow behind logo */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at center, ${cfg.glow.replace('0.3)', '0.12)')} 0%, transparent 65%)`,
          opacity: 0.6,
        }} />
        <img
          src={sponsorLogoPath(sponsor.file)}
          alt={sponsor.name}
          style={{
            position: 'relative',
            maxWidth: '80%', maxHeight: '80%',
            objectFit: 'contain',
            filter: `drop-shadow(0 4px 14px ${cfg.glow})`,
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '14px 18px 18px', borderTop: `1px solid ${cfg.color}18` }}>
        <span className={`tier-badge ${cfg.class}`} style={{ marginBottom: 8, display: 'inline-block' }}>
          {cfg.label}
        </span>
        <h3 style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontWeight: 700, color: '#fff',
          fontSize: size === 'large' ? 19 : 16,
          marginBottom: 4, lineHeight: 1.2,
        }}>
          {sponsor.name}
        </h3>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
          {sponsor.note}
        </p>
      </div>
    </div>
  );
}

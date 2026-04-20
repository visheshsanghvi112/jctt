import { CalendarDays, Clock3, MapPin, Trophy, Zap, ChevronRight } from 'lucide-react';
import { tournament } from '../data/tournamentData';

const days = [
  {
    day: 'Day 1',
    date: 'Saturday, 23 May 2026',
    time: '8:00 AM – 10:00 PM',
    label: 'League Stage',
    color: '#f59e0b',
    colorRgb: '245,158,11',
    description: 'Opening ceremony, league stage matches across both turfs. All 16 teams battle for knockout spots in an intense round-robin format.',
    events: [
      { time: '08:00 AM', event: 'Opening Ceremony & Coin Toss' },
      { time: '08:30 AM', event: 'League Matches Begin' },
      { time: '01:00 PM', event: 'Mid-Day Break' },
      { time: '02:00 PM', event: 'Afternoon League Matches' },
      { time: '07:00 PM', event: 'Evening Matches + Dinner Round' },
      { time: '10:00 PM', event: 'Day 1 Wrap & Standings Update' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, 24 May 2026',
    time: '9:00 AM – 9:00 PM',
    label: 'Playoffs & Final',
    color: '#60a5fa',
    colorRgb: '96,165,250',
    description: 'Quarter-finals, semi-finals, and the grand finale. Championship trophy presentation and closing ceremony.',
    events: [
      { time: '09:00 AM', event: 'Quarter-Finals' },
      { time: '12:00 PM', event: 'Semi-Finals' },
      { time: '03:30 PM', event: 'Break & Pre-Final Show' },
      { time: '05:00 PM', event: 'Grand Final' },
      { time: '07:30 PM', event: 'Trophy & Awards Ceremony' },
      { time: '09:00 PM', event: 'Closing & Celebration' },
    ],
  },
];

export default function Event() {
  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] mb-3"
            style={{ color: 'rgba(245,158,11,0.75)' }}>{tournament.dates}</p>
          <h1 className="font-heading font-black uppercase mb-4"
            style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', color: '#fff', lineHeight: 0.9 }}>
            Tournament<br />Schedule
          </h1>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Two packed matchdays at Wilson Gymkhana — from opening ceremony to grand finale.
          </p>
        </div>

        {/* Day cards */}
        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {days.map(d => (
            <div key={d.day} className="rounded-3xl overflow-hidden"
              style={{
                background: `rgba(${d.colorRgb}, 0.05)`,
                border: `1px solid rgba(${d.colorRgb}, 0.18)`,
              }}>
              {/* accent top */}
              <div style={{ height: 3, background: `linear-gradient(90deg, ${d.color}, transparent)` }} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <h2 className="font-heading font-black text-white uppercase"
                      style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1 }}>
                      {d.day}
                    </h2>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mt-2"
                      style={{
                        background: `rgba(${d.colorRgb}, 0.12)`,
                        color: d.color,
                        border: `1px solid rgba(${d.colorRgb}, 0.22)`,
                      }}>
                      {d.label}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CalendarDays className="w-4 h-4 shrink-0" style={{ color: d.color }} />
                    {d.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <Clock3 className="w-4 h-4 shrink-0" style={{ color: d.color }} />
                    {d.time}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {d.description}
                </p>

                {/* Timeline */}
                <div className="flex flex-col gap-0">
                  {d.events.map((ev, i) => (
                    <div key={i} className="flex items-start gap-3.5 relative pb-4 last:pb-0">
                      {i < d.events.length - 1 && (
                        <div className="absolute left-[13px] top-5 bottom-0 w-px"
                          style={{ background: `rgba(${d.colorRgb}, 0.15)` }} />
                      )}
                      <div className="relative mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ background: `rgba(${d.colorRgb}, 0.12)`, border: `1px solid rgba(${d.colorRgb}, 0.25)` }}>
                        <ChevronRight className="w-3 h-3" style={{ color: d.color }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                          style={{ color: d.color }}>{ev.time}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>{ev.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="rounded-3xl p-6 sm:p-8"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <h2 className="font-heading font-bold text-white uppercase text-2xl mb-5">Core Details</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { icon: MapPin,  val: tournament.venue },
              { icon: Trophy,  val: '16 Teams | 8 Overs per side' },
              { icon: Zap,     val: 'League stage + knockout rounds' },
            ].map(({ icon: Icon, val }) => (
              <div key={val} className="flex items-start gap-3 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="mt-0.5 shrink-0 h-8 w-8 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(245,158,11,0.1)' }}>
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>{val}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

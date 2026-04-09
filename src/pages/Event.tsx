import { MapPin, Calendar, Clock, Trophy, Users, AlertCircle } from 'lucide-react';

export default function Event() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Tournament Details</h1>
          <p className="text-xl text-slate-500 font-light">
            Everything you need to know about the upcoming JCTT Mega Cricket Turf Tournament 2026.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6 tracking-tight">Event Overview</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Get ready for the most thrilling cricket event of the year! The 2026 edition of JCTT brings together 16 elite teams from across the community to battle it out for the ultimate championship trophy.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 bg-white shadow-sm text-amber-500 rounded-xl"><Trophy className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-slate-900 mb-1">Format</h4>
                    <p className="text-sm text-slate-500">Knockout & League stages. 8 overs per side.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-3 bg-white shadow-sm text-amber-500 rounded-xl"><Users className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-slate-900 mb-1">Teams</h4>
                    <p className="text-sm text-slate-500">16 Teams. 11 playing, 4 substitutes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-8 tracking-tight">Schedule</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-amber-500 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1.5 border-4 border-white shadow-sm"></div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-1">Day 1: League Matches</h3>
                  <p className="text-amber-600 font-medium mb-3 text-sm tracking-wide uppercase">Saturday, 23rd May 2026 | 8:00 AM - 10:00 PM</p>
                  <p className="text-slate-600 leading-relaxed">Opening ceremony followed by the group stage matches. Food stalls and entertainment zones will be open throughout the day.</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-amber-500 rounded-full -left-[9px] top-1.5 border-4 border-white shadow-sm"></div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-1">Day 2: Playoffs & Finals</h3>
                  <p className="text-amber-600 font-medium mb-3 text-sm tracking-wide uppercase">Sunday, 24th May 2026 | 9:00 AM - 9:00 PM</p>
                  <p className="text-slate-600 leading-relaxed">Quarter-finals, Semi-finals, and the Grand Finale. Followed by the prize distribution and closing ceremony.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-950 text-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <h3 className="font-heading text-2xl font-bold mb-8 flex items-center gap-3"><MapPin className="w-6 h-6 text-amber-400" /> Venue Info</h3>
              <p className="font-heading text-3xl font-bold mb-2">Wilson Gymkhana</p>
              <p className="text-slate-400 text-sm mb-8">Marine Drive, Mumbai, Maharashtra 400002</p>
              
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Calendar className="w-5 h-5 text-amber-400" /> 
                  <span className="font-medium">23-24 May 2026</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Clock className="w-5 h-5 text-amber-400" /> 
                  <span className="font-medium">Gates open at 7:30 AM</span>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-100/80 leading-relaxed">
                  Ample parking available. Outside food and beverages are not permitted. Premium turf shoes required for players.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 h-[280px] relative group border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cricket Match Action" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white font-heading text-xl font-bold">High-Octane Action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

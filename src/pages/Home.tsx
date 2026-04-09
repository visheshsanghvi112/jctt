import { motion } from 'motion/react';
import { MapPin, Calendar, Trophy, ChevronRight, Users, Star, Activity, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100/50 via-slate-50 to-slate-50 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-green-200 shadow-sm text-sm font-semibold text-green-700 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Registrations Open Now
              </div>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.15]">
                JCTT Mega Cricket <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Turf Tournament
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The premier Jain Community Turf Tournament in Mumbai. Experience two days of fast-paced cricket, community bonding, and fierce competition on premium turf.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                  Join WhatsApp Group <ChevronRight className="w-4 h-4" />
                </a>
                <Link to="/event" className="px-7 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
                  Tournament Details
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Cricket Action" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-amber-400 font-semibold mb-2">Season 2026</p>
                <h3 className="font-heading text-3xl font-bold text-white">Where Champions Are Made</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800">
            <div className="flex flex-col items-center text-center px-4">
              <Calendar className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-heading text-2xl font-bold mb-1">May 23-24</h4>
              <p className="text-slate-400 text-sm">2026 Weekend</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <MapPin className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-heading text-2xl font-bold mb-1">Wilson Gymkhana</h4>
              <p className="text-slate-400 text-sm">Marine Drive, Mumbai</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Users className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-heading text-2xl font-bold mb-1">16 Teams</h4>
              <p className="text-slate-400 text-sm">8 Overs per side</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Trophy className="w-8 h-8 text-amber-500 mb-4" />
              <h4 className="font-heading text-2xl font-bold mb-1">₹1,00,000+</h4>
              <p className="text-slate-400 text-sm">Prize Pool</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-4">Experience the Best</h2>
            <p className="text-lg text-slate-500">
              We are bringing premium facilities and professional management to community cricket. Here is what you can expect at JCTT 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-amber-200 transition-colors">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Premium Turf</h3>
              <p className="text-slate-600 leading-relaxed">
                Play on top-quality artificial turf under professional floodlights, ensuring a perfect bounce and a safe playing environment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-amber-200 transition-colors">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Live Scoring</h3>
              <p className="text-slate-600 leading-relaxed">
                Follow the action from anywhere with digital scoreboards and live match updates available directly on your mobile device.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-amber-200 transition-colors">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Pro Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Certified umpires, professional commentators, and dedicated event staff to ensure the tournament runs smoothly and fairly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


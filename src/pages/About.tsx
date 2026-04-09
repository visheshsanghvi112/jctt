import { Users, Target, Shield, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">About JCTT</h1>
          <p className="text-xl text-slate-500 font-light">
            The Jain Community Turf Tournament is a premier sporting event dedicated to bringing our community together through the spirit of cricket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 h-[400px] md:h-[500px] relative group">
             <img 
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Cricket Stadium" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Founded with the vision of fostering unity, health, and sportsmanship, JCTT provides a professional platform for cricket enthusiasts within the Jain community to showcase their talent.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that sports have the unique power to bridge generational gaps, build lasting friendships, and promote a healthy lifestyle. Our tournament is designed to be a family-friendly festival of cricket.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "Community First", desc: "Building stronger bonds within the Jain community." },
            { icon: Target, title: "Excellence", desc: "Providing a premium, professional turf experience." },
            { icon: Shield, title: "Sportsmanship", desc: "Promoting fair play and mutual respect on and off the field." },
            { icon: Heart, title: "Passion", desc: "Celebrating our shared love for the game of cricket." }
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center hover:shadow-xl hover:shadow-slate-200/40 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <val.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-500">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

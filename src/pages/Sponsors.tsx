import { ChevronRight, Send } from 'lucide-react';

export default function Sponsors() {
  const tiers = [
    {
      name: "Title Sponsor",
      price: "₹5,00,000",
      color: "bg-slate-950 text-white",
      features: [
        "Tournament named after your brand (e.g., [Brand] JCTT 2026)",
        "Premium logo placement on all jerseys",
        "Center pitch branding",
        "VIP seating for 10 guests",
        "Dedicated promotional booth at venue",
        "Social media & PR dominance"
      ]
    },
    {
      name: "Platinum Sponsor",
      price: "₹2,50,000",
      color: "bg-slate-100 text-slate-900",
      features: [
        "Logo on team jerseys (sleeve/back)",
        "Boundary rope branding (4 boards)",
        "VIP seating for 5 guests",
        "Mentions during live commentary",
        "Social media shoutouts"
      ]
    },
    {
      name: "Gold Sponsor",
      price: "₹1,00,000",
      color: "bg-amber-50 text-amber-900 border border-amber-200",
      features: [
        "Boundary rope branding (2 boards)",
        "Logo on tournament banners",
        "VIP seating for 2 guests",
        "Social media mentions"
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Partner With Us</h1>
          <p className="text-xl text-slate-500 font-light">
            Align your brand with the most anticipated community sports event of the year. We offer various sponsorship tiers to maximize your visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`rounded-[2.5rem] p-10 ${tier.color} relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50`}>
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-sm">
                  Exclusive
                </div>
              )}
              <h3 className="font-heading text-3xl font-bold mb-3">{tier.name}</h3>
              <div className="font-heading text-4xl font-extrabold mb-10 tracking-tight">{tier.price}</div>
              <ul className="space-y-5 mb-8">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <ChevronRight className={`w-5 h-5 shrink-0 ${idx === 0 ? 'text-amber-400' : 'text-amber-500'}`} />
                    <span className="text-sm opacity-90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="contact" className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/40 border border-slate-100 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Sponsor Inquiry Form</h3>
            <p className="text-slate-500 text-lg">
              Interested in sponsoring or looking for a custom package? Fill out the form below and our team will get back to you.
            </p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
              btn.disabled = true;
              btn.innerHTML = 'Sending...';
              setTimeout(() => {
                form.innerHTML = '<div class="bg-green-50 text-green-800 p-8 rounded-[2rem] text-center border border-green-100"><h4 class="font-heading text-2xl font-bold mb-2">Thank You!</h4><p>Your inquiry has been received. We will contact you shortly.</p></div>';
              }, 1000);
            }} 
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="companyName" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input required type="text" id="companyName" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter company name" />
              </div>
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-semibold text-slate-700 mb-2">Contact Person</label>
                <input required type="text" id="contactPerson" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input required type="email" id="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="john@company.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input required type="tel" id="phone" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message / Requirements</label>
              <textarea required id="message" rows={4} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none" placeholder="Tell us about your sponsorship interests..."></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/20 flex items-center justify-center gap-2 disabled:opacity-70">
              Submit Inquiry <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { MapPin, Phone, Mail, Send, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600">
            Have questions about the tournament, team registrations, or general inquiries? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><MapPin className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Venue Address</h4>
                    <p className="text-slate-600">Wilson Gymkhana, Marine Drive<br/>Mumbai, Maharashtra 400002</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Phone className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210<br/>+91 91234 56789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Mail className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@jctt.com<br/>sponsor@jctt.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp Group</h4>
                    <p className="text-slate-600">
                      <a href="https://chat.whatsapp.com/FQ7KRaK7NWRGeOmDP7LEQo" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Join Official Group</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 h-[300px] bg-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.805273574239!2d72.8184493153724!3d18.940026987165977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0e2c8a0001%3A0x8e8e8e8e8e8e8e8e!2sWilson%20Gymkhana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Wilson Gymkhana Map"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                btn.disabled = true;
                btn.innerHTML = 'Sending...';
                setTimeout(() => {
                  form.innerHTML = '<div class="bg-green-50 text-green-800 p-6 rounded-xl text-center"><h4 class="text-xl font-bold mb-2">Message Sent!</h4><p>We will get back to you as soon as possible.</p></div>';
                }, 1000);
              }} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select required id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white">
                  <option value="">Select a subject</option>
                  <option value="registration">Team Registration</option>
                  <option value="sponsorship">Sponsorship Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea required id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="p-3 bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/jctt_turf_tournament/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-slate-50 text-slate-600 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

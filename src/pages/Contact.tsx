import React, { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MessageCircle, Send, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Kontakta oss | Prio Sanering AB - Akut hjälp dygnet runt</title>
        <meta name="description" content="Kontakta Prio Sanering AB för akut hjälp vid trauma eller dödsfall. Vi har jour dygnet runt och svarar snabbt på alla förfrågningar." />
        <meta name="keywords" content="kontakta sanering, akut sanering telefon, jour sanering, prio sanering kontakt" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Kontakta oss</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi finns här för dig dygnet runt. Kontakta oss för omedelbar hjälp, rådgivning eller en kostnadsfri offert.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Contact Form */}
        <motion.div 
          className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border-2 border-midnight/5"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Skicka ett meddelande</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">Namn</label>
              <input 
                type="text" 
                required
                className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-6 py-4 focus:border-cyan-accent outline-none transition-all"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">E-post</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-6 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">Telefon</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-6 py-4 focus:border-cyan-accent outline-none transition-all"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-midnight/60 uppercase tracking-widest">Meddelande</label>
              <textarea 
                rows={5} 
                required
                className="w-full bg-white border-2 border-midnight/5 rounded-2xl px-6 py-4 focus:border-cyan-accent outline-none transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-midnight text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-midnight/90 transition-all shadow-xl shadow-midnight/10"
            >
              <Send className="w-6 h-6" />
              Skicka meddelande
            </button>
            {isSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-accent font-bold text-center flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-5 h-5" />
                Tack! Vi kontaktar dig så snart som möjligt.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info & Direct Buttons */}
        <div className="space-y-12">
          <motion.div 
            className="bg-midnight text-white p-12 rounded-[3rem]"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-8">Direktkontakt</h2>
            <div className="space-y-8">
              <a 
                href="tel:0101234567" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-cyan-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-40 uppercase tracking-widest">Journummer 24/7</p>
                  <p className="text-2xl font-bold">010-XXX XX XX</p>
                </div>
              </a>
              <a 
                href="https://wa.me/46101234567" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-40 uppercase tracking-widest">WhatsApp Business</p>
                  <p className="text-2xl font-bold">Chatta med oss</p>
                </div>
              </a>
              <a 
                href="mailto:info@priosanering.se" 
                className="flex items-center gap-6 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-40 uppercase tracking-widest">E-post</p>
                  <p className="text-2xl font-bold">info@priosanering.se</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="p-12 border-2 border-midnight/5 rounded-[3rem]"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Diskretion garanteras</h3>
            <p className="text-midnight/60 font-light leading-relaxed">
              Vi hanterar alla förfrågningar med absolut tystnadsplikt. Inga uppgifter delas med tredje part utan ditt uttryckliga samtycke.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

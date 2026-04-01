import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Activity, Phone, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function TraumaSanitization() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Traumasanering | Prio Sanering AB - Akut hjälp dygnet runt</title>
        <meta name="description" content="Akut traumasanering efter olyckor, våldshändelser och kriminalteknisk rengöring. Vi återställer miljöer snabbt, säkert och diskret." />
        <meta name="keywords" content="traumasanering, kriminalteknisk rengöring, sanering efter olycka, sanering brottsplats, sanering våldshändelse" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Activity className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Traumasanering</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          När en olycka, ett brott eller en våldshändelse inträffar krävs en snabb och professionell insats för att återställa miljön. Vi erbjuder kriminalteknisk rengöring med fokus på säkerhet och diskretion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Kriminalteknisk återställning</h2>
          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Vårt team är specialutbildat för att hantera miljöer efter brottsplatser och olyckor. Vi arbetar ofta i samråd med polismyndigheten och försäkringsbolag för att säkerställa att inga bevis förstörs innan saneringen påbörjas.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Snabb insats dygnet runt för att minimera skador och exponering.</p>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Fullständig sanering av blodburna patogener och biologiska risker.</p>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Diskretion genom omärkta fordon och personal i civila kläder.</p>
            </div>
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light"><strong>Teknisk rengöring (Tillval):</strong> Specialiserad rengöring av tekniska miljöer, maskiner och övriga ytor i bostaden för en komplett återställning.</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="rounded-3xl overflow-hidden shadow-2xl"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000" 
            alt="Professionellt återställd miljö" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <motion.div 
        className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] text-center"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8">Behöver du omedelbar hjälp?</h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Vårt traumateam är redo att rycka ut dygnet runt. Vi hanterar situationen med den respekt och professionalism som krävs.
        </p>
        <a 
          href="tel:0101234567" 
          className="inline-flex items-center gap-3 bg-cyan-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all"
        >
          <Phone className="w-6 h-6" />
          Ring journummer: 010-XXX XX XX
        </a>
      </motion.div>
    </motion.div>
  );
}

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
        <title>Traumasanering | Prio Sanering AB</title>
        <meta
          name="description"
          content="Snabb och diskret traumasanering efter olyckor, blodspill, våldshändelser och andra akuta biologiska föroreningar. Vi arbetar säkert, respektfullt och med tydliga rutiner."
        />
        <meta
          name="keywords"
          content="traumasanering, sanering efter blodspill, sanering efter olycka, biologisk sanering, akut sanering"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Activity className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Traumasanering
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          När en olycka, en våldshändelse eller annan akut biologisk förorening
          inträffar krävs en snabb, säker och diskret insats. Vi sanerar miljön
          med fokus på biologiska risker, dokumentation och respektfull hantering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Snabb och säker återställning</h2>
          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Traumasanering kan bli aktuell efter blodspill, olyckor,
            våldshändelser eller andra situationer där biologiskt material måste
            hanteras korrekt. Vi arbetar enligt tydliga rutiner för att minska
            risker, sanera påverkade ytor och återställa miljön på ett tryggt sätt.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Snabb insats för att minska exponering, begränsa skador och påbörja sanering utan onödigt dröjsmål.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Säker hantering av blod, biologiskt material och andra föroreningar enligt tydliga skydds- och arbetsrutiner.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Diskret hantering med omärkta fordon och respektfull närvaro på plats.
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                <strong>Teknisk rengöring (tillval):</strong> Specialiserad rengöring av tekniska miljöer, maskiner och andra ytor för en mer komplett återställning.
              </p>
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
        <h2 className="text-4xl font-bold mb-8">Behöver du snabb hjälp?</h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Kontakta oss för snabb rådgivning och bedömning. Vi hanterar situationen
          med den säkerhet, diskretion och professionalism som krävs.
        </p>
        <a
          href="tel:0101234567"
          className="inline-flex items-center gap-3 bg-cyan-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all"
        >
          <Phone className="w-6 h-6" />
          Ring: 010-XXX XX XX
        </a>
      </motion.div>
    </motion.div>
  );
}

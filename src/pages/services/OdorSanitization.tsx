import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Wind, ShieldCheck, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function OdorSanitization() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Luktsanering | Prio Sanering AB - Ozon & Termisk Dimning</title>
        <meta name="description" content="Effektiv luktsanering med avancerad teknik. Vi eliminerar lukt från rök, mögel, djur och biologiska källor på molekylär nivå." />
        <meta name="keywords" content="luktsanering, ozonsanering, termisk dimning, ta bort röklukt, sanera mögellukt, luktneutralisering" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Wind className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Luktsanering</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi maskerar inte lukter – vi förintar källan på molekylär nivå. Vår tekniska luktsanering tar bort de mest svåra och envisa dofterna permanent.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Teknisk neutralisering</h2>
          <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
            Vår process bygger på avancerad vetenskaplig metodik. Vi använder en kombination av tekniker för att säkerställa att lukten inte återvänder.
          </p>
          <div className="space-y-12">
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-cyan-accent">
              <h3 className="text-2xl font-bold mb-4">Ozonbehandling</h3>
              <p className="text-midnight/70 font-light leading-relaxed">
                Ozon är en kraftfull oxidant som bryter ner luktmolekyler och dödar bakterier och mögelsporer. Vi använder industriella ozongeneratorer för att nå in i porösa material där lukten sitter fast.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-cyan-accent">
              <h3 className="text-2xl font-bold mb-4">Thermal Fogging</h3>
              <p className="text-midnight/70 font-light leading-relaxed">
                Genom att skapa en fin dimma av luktneutraliserande medel kan vi penetrera samma områden som lukten har gjort. Denna metod är extremt effektiv mot brandlukt och tobaksrök.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-midnight text-white p-12 rounded-3xl sticky top-32"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">När behövs luktsanering?</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Efter brandskador och rökutveckling.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Vid obevakade dödsfall och biologiskt förfall.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Sanering av tobaksrök och nikotin.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Vid extrema fall av djurhållning eller "hoarding".</p>
            </li>
          </ul>
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="opacity-60 mb-6 font-medium">Boka en teknisk bedömning</p>
            <a 
              href="tel:0101234567" 
              className="flex items-center justify-center gap-3 bg-cyan-accent text-white py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              010-XXX XX XX
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

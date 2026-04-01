import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Ghost, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const protocol = [
  { step: "1", title: "Teknisk bedömning", desc: "Noggrann analys av miljön och riskfaktorer." },
  { step: "2", title: "Luftneutralisering", desc: "Omedelbar behandling för att neutralisera luftburna patogener." },
  { step: "3", title: "Sanering av biologiskt material", desc: "Noggrann borttagning av biologiska spår enligt strikta protokoll." },
  { step: "4", title: "Skadedjursbekämpning", desc: "Vid behov, eliminering av insekter och skadedjur." },
  { step: "5", title: "Deodorisering", desc: "Teknisk luktsanering på molekylär nivå." },
  { step: "6", title: "Minneshantering", desc: "Respektfull identifiering och hantering av personliga tillhörigheter." },
  { step: "7", title: "Certifierad återställning", desc: "Slutlig kontroll och utfärdande av saneringsintyg." }
];

export default function DeathSanitization() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Sanering vid dödsfall | Prio Sanering AB</title>
        <meta name="description" content="Professionell och respektfull sanering vid obevakade dödsfall. Vi hanterar hela processen från sanering till luktneutralisering och minneshantering." />
        <meta name="keywords" content="sanering vid dödsfall, dödsfallssanering, sanering efter dödsfall, sanering liklukt, sanering avlopp dödsfall" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Ghost className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Sanering vid dödsfall</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Ett obevakat dödsfall kräver en kombination av teknisk expertis och djup respekt. Vi följer ett strikt 7-stegs protokoll för att säkerställa en fullständig och säker återställning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          {protocol.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex gap-6"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-accent text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-accent/20">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-midnight/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-slate-50 p-12 rounded-3xl border-2 border-midnight/5 sticky top-32"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Varför välja Prio Sanering?</h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Fullständig dekontaminering enligt internationella standarder.</p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Diskretion med omärkta fordon och personal i civila kläder vid ankomst.</p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">Hjälp med försäkringsärenden och dokumentation.</p>
            </li>
          </ul>
          <div className="mt-12 pt-12 border-t border-midnight/10">
            <p className="text-midnight/60 mb-6 font-medium">Behöver du akut rådgivning?</p>
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

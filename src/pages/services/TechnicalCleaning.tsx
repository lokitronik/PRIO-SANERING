import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield, ShieldCheck, Phone, Settings, Zap, HardDrive } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const features = [
  { icon: <Settings className="w-8 h-8 text-cyan-accent" />, title: "Industriell rengöring", desc: "Sanering av produktionslinjer och industrilokaler med minimalt driftstopp." },
  { icon: <Zap className="w-8 h-8 text-cyan-accent" />, title: "Elektroniksanering", desc: "Specialiserad rengöring av känslig elektronik och serverrum." },
  { icon: <HardDrive className="w-8 h-8 text-cyan-accent" />, title: "Tekniska anläggningar", desc: "Underhåll och sanering av komplexa tekniska system och infrastruktur." }
];

export default function TechnicalCleaning() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Teknisk rengöring | Prio Sanering AB - Industri & Teknik</title>
        <meta name="description" content="Specialiserad teknisk rengöring för industri och känsliga miljöer. Vi sanerar maskiner, elektronik och tekniska anläggningar med hög precision." />
        <meta name="keywords" content="teknisk rengöring, industrisanering, elektroniksanering, sanering serverrum, maskinrengöring" />
      </Helmet>
      
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Shield className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Teknisk rengöring</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          När kraven på renhet är extrema och miljön är tekniskt komplex krävs specialister. Vi erbjuder teknisk rengöring för industri, IT och infrastruktur.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-10 rounded-3xl border-2 border-midnight/5 hover:border-cyan-accent/20 transition-all text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-midnight/60 font-light leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Precision i varje detalj</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            Teknisk rengöring handlar om mer än bara visuell renhet. Det handlar om att bibehålla funktionalitet och säkerhet i komplexa system. Vi använder metoder som kolsyreisblästring och specialiserade lösningsmedel för att avlägsna föroreningar utan att skada underlaget.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Minimerar risk för driftstopp och maskinfel.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Ökar livslängden på teknisk utrustning.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Säkerställer en hälsosam arbetsmiljö i industrilokaler.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Offertförfrågan</h3>
          <p className="opacity-60 mb-10 font-light">Varje tekniskt uppdrag är unikt. Kontakta oss för en genomgång av era behov och en skräddarsydd offert.</p>
          <a 
            href="tel:0101234567" 
            className="inline-flex items-center gap-3 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            Kontakta oss
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

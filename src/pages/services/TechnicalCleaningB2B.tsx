import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Phone, Hotel, Building2, UserCheck, Zap, Microscope } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const features = [
  { icon: <Hotel className="w-8 h-8 text-cyan-accent" />, title: "Hotell & Airbnb", desc: "Säkerställ en smittfri miljö för dina gäster med medicinsk sterilisering och Biosäkerhetsintyg." },
  { icon: <Microscope className="w-8 h-8 text-cyan-accent" />, title: "ATP-mätning", desc: "Vetenskaplig verifiering av renhetsgraden för att garantera en biologiskt säker miljö." },
  { icon: <ShieldCheck className="w-8 h-8 text-cyan-accent" />, title: "Biosäkerhetsintyg", desc: "Vi utfärdar ett intyg efter varje uppdrag som garanterar säkerheten för gäster och personal." }
];

export default function TechnicalCleaningB2B() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Technical Cleaning B2B | Prio Sanering AB - Biosäkerhet</title>
        <meta name="description" content="Medicinsk sterilisering med VHP och vetenskaplig verifiering genom ATP-mätning för hotell och Airbnb. Vi utfärdar Biosäkerhetsintyg." />
        <meta name="keywords" content="technical cleaning b2b, biosäkerhet hotell, VHP sterilisering, ATP-mätning, sanering airbnb, smittskydd företag" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <ShieldCheck className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Technical Cleaning B2B</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Biosäkerhet för Hotell & Airbnb. Vi använder medicinsk sterilisering med VHP (Vaporized Hydrogen Peroxide) för att garantera en biologiskt säker miljö.
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
          <h2 className="text-4xl font-bold mb-8">Varför Technical Cleaning B2B?</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            Vi erbjuder en vetenskapligt verifierad metod för att säkerställa biosäkerhet i kommersiella lokaler. Varje timme en hotellsvit eller en industrilokal står oanvänd är en förlust.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-cyan-accent">Ekonomi & Stillestånd</h4>
                <p className="font-light opacity-80">Vår metod med VHP och laser kräver ingen torktid och lämnar inga kemiska rester. Lokalen kan återställas till full drift omedelbart efter verifiering.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-cyan-accent">Verifierad Biosäkerhet (Vetenskaplig trygghet)</h4>
                <p className="font-light opacity-80">Vi gissar inte om det är rent. Vi använder ATP-mätning för att ge ett objektivt kvitto på att ytan är kliniskt ren. Detta är ett krav för försäkringsbolag och för att garantera personalens hälsa enligt Arbetsmiljöverkets riktlinjer.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <div>
                <h4 className="font-bold text-cyan-accent">Biosäkerhetsintyg</h4>
                <p className="font-light opacity-80">Vi utfärdar ett Biosäkerhetsintyg efter varje uppdrag som garanterar en biologiskt säker miljö.</p>
              </div>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Boka en konsultation</h3>
          <p className="opacity-60 mb-10 font-light">Låt oss hjälpa dig att skapa en tryggare miljö för dina gäster och personal.</p>
          <a 
            href="tel:0101234567" 
            className="inline-flex items-center gap-3 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            Kontakta oss idag
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

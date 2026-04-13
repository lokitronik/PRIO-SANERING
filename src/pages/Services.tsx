import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Activity, Ghost, Wind, Droplets, ArrowRight, Maximize, Bird, Box, Shield, Zap, ShieldCheck, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const coreServices = [
  {
    title: "Sanering vid dödsfall",
    description: "Respektfull och tekniskt avancerad hantering av obevakade dödsfall. Inkluderar teknisk rengöring som en extra tjänst för resten av bostadens ytor.",
    icon: <Ghost className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall"
  },
  {
    title: "Traumasanering",
    description: "Professionell återställning efter olyckor eller våldshändelser. Inkluderar teknisk rengöring som en extra tjänst för resten av bostadens ytor.",
    icon: <Activity className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering"
  },
  {
    title: "Luktsanering",
    description: "Teknisk neutralisering av svåra lukter på molekylär nivå.",
    icon: <Wind className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/luktsanering"
  },
  {
    title: "Minneshantering",
    description: "Respektfull hantering och sanering av personliga tillhörigheter.",
    icon: <Box className="w-8 h-8 text-cyan-accent" />,
    link: "/om-oss#minneshantering"
  },
  {
    title: "Lasersanering",
    description: "Avancerad pulsad laser för selektiv sanering utan kontakt, vatten eller kemikalier. Metoden vaporiserar omedelbart bakterier, mögel och virus i porösa material. Den är oumbärlig för sanering av sot efter brand, rökansamling i skorstenar samt för skonsam restaurering av gravstenar, fasader och historiska monument.",
    icon: <Zap className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/lasersanering"
  },
  {
    title: "Technical Cleaning B2B (Biosäkerhet för Hotell & Airbnb)",
    description: "Medicinsk sterilisering med VHP (Vaporized Hydrogen Peroxide), inspektion med violett ljus och vetenskaplig verifiering genom ATP-mätning. Vi utfärdar ett Biosäkerhetsintyg efter varje uppdrag som garanterar en biologiskt säker miljö för gäster och personal samt förlänger inventariernas livslängd.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b"
  }
];

const preventativeServices = [
  {
    title: "Svåråtkomliga ytor",
    description: "Specialiserad desinfektion av dolda och svåråtkomliga utrymmen.",
    icon: <Maximize className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/svaratkomliga-ytor"
  },
  {
    title: "Bird Blocker",
    description: "Förebyggande installationer för att skydda fastigheter mot fåglar.",
    icon: <Bird className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/bird-blocker"
  }
];

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Våra Tjänster | Prio Sanering AB - Specialistsanering</title>
        <meta name="description" content="Utforska våra specialiserade saneringstjänster: Traumasanering, sanering vid dödsfall, luktsanering och premium desinfektion för företag." />
        <meta name="keywords" content="saneringstjänster, traumasanering, luktsanering, dödsfallssanering, desinfektion, sanering företag" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Våra Tjänster</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light">
          Vi erbjuder specialiserade saneringstjänster med fokus på teknisk precision, säkerhet och absolut diskretion.
        </p>
      </motion.div>

      {/* Core Services Section */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-12 border-b border-midnight/10 pb-4">Kärntjänster</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-10 rounded-3xl border-l-8 border-cyan-accent hover:translate-y-[-8px] transition-transform duration-300 flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-8">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
              <p className="text-lg text-midnight/70 font-light leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              <Link to={service.link} className="text-cyan-accent font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                Läs mer om tjänsten <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preventative Services Section */}
      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-12 border-b border-midnight/10 pb-4">Förebyggande tjänster & Tillval</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preventativeServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-10 rounded-3xl border-l-8 border-midnight/30 hover:border-cyan-accent transition-colors hover:translate-y-[-8px] transition-transform duration-300 flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-8 opacity-60">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-6 text-midnight/80">{service.title}</h2>
              <p className="text-lg text-midnight/60 font-light leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              <Link to={service.link} className="text-midnight/40 hover:text-cyan-accent font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                Läs mer om tjänsten <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Prio Sanering Section */}
      <section className="bg-midnight text-white p-12 md:p-20 rounded-[3rem]">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <Users className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Varför Prio Sanering? (Trippelstyrka)</h2>
          <p className="text-xl font-light leading-relaxed opacity-90 mb-12">
            Vi är tre certifierade partner som alltid arbetar tillsammans på fältet. Vår Trippelstyrka gör att vi slutför komplexa uppdrag på halva tiden jämfört med branschstandarden, vilket minimerar kundens driftstopp.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Certifierade</h4>
              <p className="text-sm opacity-60">Tre experter med fullständiga certifieringar.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Samarbetande</h4>
              <p className="text-sm opacity-60">Vi arbetar alltid tillsammans för maximal effektivitet.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Snabbhet</h4>
              <p className="text-sm opacity-60">Halverad tid vid komplexa saneringsuppdrag.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

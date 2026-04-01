import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Phone, Activity, Ghost, Droplets, ArrowRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const pillars = [
  {
    title: "Traumasanering",
    description: "Professionell återställning efter olyckor eller våldshändelser.",
    icon: <Activity className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering"
  },
  {
    title: "Sanering vid dödsfall",
    description: "Respektfull hantering av obevakade dödsfall med teknisk precision.",
    icon: <Ghost className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall"
  },
  {
    title: "Smittskydd & Desinfektion",
    description: "Avancerad eliminering av virus, bakterier och biologiska risker.",
    icon: <Droplets className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/invisible-cleaning"
  }
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Helmet>
        <title>Prio Sanering AB | Specialistsanering vid Trauma & Dödsfall</title>
        <meta name="description" content="Prio Sanering AB erbjuder professionell traumasanering, sanering vid dödsfall och luktsanering med absolut diskretion och dygnet-runt-jour i hela Sverige." />
        <meta name="keywords" content="traumasanering, sanering vid dödsfall, luktsanering, kriminalteknisk rengöring, mikrobiologisk dekontaminering, sanering dygnet runt" />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Perfekt återställd och trygg miljö" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>

        <motion.div 
          className="relative z-10 max-w-3xl"
          {...fadeInUp}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-midnight leading-[1.1] mb-6">
            Expertis och diskretion vid extrema situationer.
          </h1>
          <p className="text-xl md:text-2xl text-midnight/80 font-light mb-10 leading-relaxed">
            Specialistsanering av trauma, dödsfall och biologiska risker med jour dygnet runt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:0101234567" 
              className="inline-block bg-cyan-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-colors shadow-lg shadow-cyan-accent/20 text-center"
            >
              Akut hjälp: 010-XXX XX XX
            </a>
            <Link 
              to="/tjanster" 
              className="inline-block bg-midnight text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-midnight/90 transition-colors text-center"
            >
              Våra Tjänster
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Service Pillars Preview */}
      <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Våra Kärntjänster</h2>
          <p className="text-lg text-midnight/60 max-w-2xl mx-auto font-light">
            Vi använder avancerad teknik för att återställa miljöer till ett garanterat säkert och smittfritt tillstånd.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border-l-4 border-cyan-accent hover:translate-y-[-8px] transition-transform duration-300 flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-midnight/70 font-light leading-relaxed mb-6 flex-grow">
                {pillar.description}
              </p>
              <Link to={pillar.link} className="text-cyan-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Läs mer <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emotional Connection Section */}
      <section className="py-24 px-6 md:px-12 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Shield className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Trygghet i svåra stunder</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 mb-12">
              När det ofattbara händer finns vi här. Vi hanterar varje situation med djup empati, teknisk precision och absolut diskretion.
            </p>
            <Link to="/om-oss" className="inline-block border-2 border-white/20 hover:border-white/50 px-8 py-4 rounded-full font-bold transition-all">
              Läs om vårt arbetssätt
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

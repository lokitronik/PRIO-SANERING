import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Activity,
  HeartHandshake,
  ArrowRight,
  Wind,
  Zap,
  ShieldCheck,
  Box
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
};

const pillars = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall med fokus på biologiskt material, lukt och återställande åtgärder.",
    icon: <HeartHandshake className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall"
  },
  {
    title: "Traumasanering",
    description:
      "Snabb och säker sanering efter blodspill, olyckor, våldshändelser och andra akuta biologiska föroreningar.",
    icon: <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering"
  },
  {
    title: "Luktsanering",
    description:
      "Teknisk behandling av svåra och kvarvarande lukter i bostäder, lokaler och andra miljöer där vanlig rengöring inte räcker.",
    icon: <Wind className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/luktsanering"
  },
  {
    title: "Lasersanering",
    description:
      "Skonsam och precis lasersanering för gravstenar, sotpåverkade ytor och utvalda tekniska miljöer där traditionell rengöring riskerar att vara för grov.",
    icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/lasersanering"
  },
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien och dokumentation.",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b"
  },
  {
    title: "Hantering av personliga tillhörigheter",
    description:
      "Respektfull identifiering, sortering och hantering av personliga tillhörigheter efter överenskommelse.",
    icon: <Box className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-accent" />,
    link: "/om-oss#minneshantering"
  }
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <Helmet>
        <title>Prio Sanering AB | Traumasanering, sanering vid dödsfall och luktsanering</title>
        <meta
          name="description"
          content="Prio Sanering AB erbjuder specialiserade tjänster inom traumasanering, sanering vid dödsfall, luktsanering, lasersanering och teknisk rengöring."
        />
        <meta
          name="keywords"
          content="traumasanering, sanering vid dödsfall, luktsanering, lasersanering, teknisk rengöring, biologisk sanering"
        />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center px-4 sm:px-6 md:px-12 py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            alt="Trygg och väl återställd miljö"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70 md:to-transparent" />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-3xl"
          {...fadeInUp}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-midnight leading-tight mb-5 sm:mb-6 text-balance">
            Traumasanering, sanering vid dödsfall och luktsanering
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-midnight/80 font-light mb-8 sm:mb-10 leading-relaxed max-w-2xl">
            Vi arbetar med säker, diskret och tekniskt noggrann sanering i känsliga
            och krävande miljöer för privatpersoner, fastighetsägare och verksamheter.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="tel:0101234567"
              className="inline-flex items-center justify-center bg-cyan-accent text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-accent/90 transition-colors shadow-lg shadow-cyan-accent/20 text-center w-full sm:w-auto"
            >
              Kontakta oss
            </a>

            <Link
              to="/tjanster"
              className="inline-flex items-center justify-center bg-midnight text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-midnight/90 transition-colors text-center w-full sm:w-auto"
            >
              Våra tjänster
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Service Pillars Preview */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Våra kärntjänster
            </h2>
            <p className="text-base sm:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
              Vi arbetar med specialiserade metoder för att hantera biologiska risker,
              luktproblem, känsliga material och miljöer där vanlig rengöring inte räcker.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl border-l-4 border-cyan-accent hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              >
                <div className="mb-4 sm:mb-6">{pillar.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed mb-5 sm:mb-6 flex-grow">
                  {pillar.description}
                </p>

                <Link
                  to={pillar.link}
                  className="text-cyan-accent font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                >
                  Läs mer <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-6 sm:mb-8" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Trygg hantering i känsliga situationer
            </h2>

            <p className="text-base sm:text-lg md:text-2xl font-light leading-relaxed opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Vi arbetar strukturerat och med respekt i varje uppdrag, med fokus på
              säkerhet, diskret hantering och så liten påverkan som möjligt för
              boende, verksamhet och omgivning.
            </p>

            <Link
              to="/om-oss"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all text-sm sm:text-base"
            >
              Läs om vårt arbetssätt
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
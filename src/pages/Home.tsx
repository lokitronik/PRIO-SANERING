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
  initial: { opacity: 0, y: 36 },
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
      className="overflow-x-hidden bg-white"
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

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
            alt="Trygg och väl återställd miljö"
            className="w-full h-full object-cover object-center opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.10),transparent_35%)]" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-14">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-24 sm:py-28 md:py-32">
              <motion.div
                {...fadeInUp}
                className="lg:col-span-7 max-w-3xl"
              >
                <span className="inline-flex items-center rounded-full border border-cyan-accent/20 bg-cyan-accent/10 text-cyan-accent px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide mb-6 sm:mb-8">
                  Diskret · Säker · Professionell sanering
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-midnight leading-tight tracking-tight mb-5 sm:mb-6">
                  Specialiserad sanering för känsliga och krävande miljöer
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-midnight/75 leading-relaxed font-light max-w-2xl mb-8 sm:mb-10">
                  Vi hjälper privatpersoner, fastighetsägare och verksamheter med
                  traumasanering, sanering vid dödsfall, luktsanering och teknisk
                  rengöring med fokus på trygghet, respekt och noggrannhet.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="tel:0101234567"
                    className="inline-flex items-center justify-center rounded-full bg-midnight text-white px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:bg-midnight/90 transition-colors w-full sm:w-auto"
                  >
                    Kontakta oss
                  </a>

                  <Link
                    to="/tjanster"
                    className="inline-flex items-center justify-center rounded-full border border-midnight/15 bg-white text-midnight px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold hover:border-midnight/30 transition-colors w-full sm:w-auto"
                  >
                    Se våra tjänster
                  </Link>
                </div>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.12 }}
                className="lg:col-span-5"
              >
                <div className="bg-white/85 backdrop-blur-sm border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-5 sm:p-6 md:p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="shrink-0 rounded-2xl bg-cyan-accent/10 p-3">
                      <Shield className="w-6 h-6 text-cyan-accent" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-midnight mb-1">
                        Trygg hantering i svåra situationer
                      </h2>
                      <p className="text-sm sm:text-base text-midnight/65 leading-relaxed">
                        Strukturerat arbete med diskretion, respekt och tydligt fokus på säkerhet.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Traumasanering och biologisk sanering",
                      "Sanering vid obevakat dödsfall",
                      "Luktsanering i bostäder och lokaler",
                      "Teknisk rengöring och hygienkontroll"
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-accent shrink-0" />
                        <p className="text-sm sm:text-base text-midnight/80">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <Link
                      to="/om-oss"
                      className="inline-flex items-center gap-2 text-cyan-accent font-semibold hover:gap-3 transition-all"
                    >
                      Läs om vårt arbetssätt <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-midnight">
              Våra kärntjänster
            </h2>
            <p className="text-base sm:text-lg text-midnight/60 max-w-2xl mx-auto font-light leading-relaxed">
              Specialiserade tjänster för miljöer där vanlig rengöring inte räcker
              och där precision, säkerhet och diskretion är avgörande.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="group bg-slate-50 p-5 sm:p-6 md:p-8 rounded-3xl border border-slate-200 hover:border-cyan-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: index * 0.08 }}
              >
                <div className="mb-4 sm:mb-6">{pillar.icon}</div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-midnight leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-midnight/70 font-light leading-relaxed mb-6 flex-grow">
                  {pillar.description}
                </p>

                <Link
                  to={pillar.link}
                  className="text-cyan-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm sm:text-base"
                >
                  Läs mer <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 bg-midnight text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Shield className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-cyan-accent mx-auto mb-6 sm:mb-8" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
              Respektfullt arbete med så liten påverkan som möjligt
            </h2>

            <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Varje uppdrag planeras med fokus på säkerhet, diskret hantering och
              tydlig struktur för att skapa trygghet för boende, verksamheter och
              fastighetsägare.
            </p>

            <Link
              to="/om-oss"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm sm:text-base"
            >
              Läs om oss
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
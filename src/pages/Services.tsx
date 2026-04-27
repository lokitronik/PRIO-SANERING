import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Activity,
  HeartHandshake,
  Wind,
  ArrowRight,
  Maximize,
  Bird,
  Box,
  Sparkles,
  ShieldCheck,
  Users
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const coreServices = [
  {
    title: "Sanering vid obevakat dödsfall",
    description:
      "Diskret och professionell sanering efter obevakade dödsfall. Vi hanterar biologiskt material, lukt, dokumentation och återställande åtgärder med respekt och säkerhet.",
    icon: <HeartHandshake className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/sanering-dodstall"
  },
  {
    title: "Traumasanering",
    description:
      "Snabb och säker sanering efter blodspill, olyckor, våldshändelser och andra akuta biologiska föroreningar. Vid behov kan teknisk rengöring läggas till för övriga ytor.",
    icon: <Activity className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/traumasanering"
  },
  {
    title: "Luktsanering",
    description:
      "Teknisk behandling av svåra och kvarvarande lukter i bostäder, lokaler och andra miljöer där vanlig rengöring inte räcker.",
    icon: <Wind className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/luktsanering"
  },
  {
    title: "Hantering av personliga tillhörigheter",
    description:
      "Respektfull identifiering, sortering och hantering av personliga tillhörigheter efter överenskommelse.",
    icon: <Box className="w-8 h-8 text-cyan-accent" />,
    link: "/om-oss#minneshantering"
  },
  {
    title: "Förebyggande hygienbehandling",
    description:
      "Förebyggande behandling med torrånga och ozon i utrymmen med kvarvarande lukt, stillastående luft eller behov av teknisk hygieninsats i utvalda ytor.",
    icon: <Sparkles className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/forebyggande-hygienbehandling"
  },
  {
    title: "Teknisk rengöring & hygienkontroll",
    description:
      "Diskret och noggrant utförd teknisk rengöring för hotell, konferensmiljöer och andra verksamheter med höga krav på hygien, dokumentation och återställning.",
    icon: <ShieldCheck className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/technical-cleaning-b2b"
  }
];

const preventativeServices = [
  {
    title: "Svåråtkomliga ytor",
    description:
      "Specialiserad rengöring och desinfektion av dolda eller svåråtkomliga utrymmen där standardinsatser inte räcker.",
    icon: <Maximize className="w-8 h-8 text-cyan-accent" />,
    link: "/tjanster/svaratkomliga-ytor"
  },
  {
    title: "Bird Blocker",
    description:
      "Förebyggande installationer som skyddar fastigheter och solpaneler mot fåglar och följdproblem i utsatta miljöer.",
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
        <title>Våra tjänster | Prio Sanering AB</title>
        <meta
          name="description"
          content="Utforska våra specialiserade tjänster inom biologisk sanering, traumasanering, luktsanering, förebyggande hygienbehandling med torrånga och ozon, teknisk rengöring och förebyggande fastighetsskydd."
        />
        <meta
          name="keywords"
          content="saneringstjänster, traumasanering, luktsanering, dödsfallssanering, förebyggande hygienbehandling, torrånga, ozonbehandling, teknisk rengöring, bird blocker"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Våra tjänster
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi erbjuder specialiserade saneringstjänster med fokus på säkerhet,
          teknisk noggrannhet, dokumentation och diskret hantering.
        </p>
      </motion.div>

      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-12 border-b border-midnight/10 pb-4">
          Kärntjänster
        </h2>
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
              <Link
                to={service.link}
                className="text-cyan-accent font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all"
              >
                Läs mer om tjänsten <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-32">
        <h2 className="text-3xl font-bold mb-12 border-b border-midnight/10 pb-4">
          Förebyggande tjänster & tillval
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preventativeServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 p-10 rounded-3xl border-l-8 border-midnight/30 hover:border-cyan-accent transition-colors hover:translate-y-[-8px] duration-300 flex flex-col"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="mb-8 opacity-70">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-6 text-midnight/90">
                {service.title}
              </h2>
              <p className="text-lg text-midnight/60 font-light leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="text-midnight/50 hover:text-cyan-accent font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all"
              >
                Läs mer om tjänsten <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="bg-midnight text-white p-12 md:p-20 rounded-[3rem]">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <Users className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Varför välja Prio Sanering?
          </h2>
          <p className="text-xl font-light leading-relaxed opacity-90 mb-12">
            Vi arbetar strukturerat och med tydliga rutiner i varje uppdrag.
            Målet är att genomföra saneringen med så liten påverkan som möjligt
            för boende, verksamhet och omgivning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Struktur</h4>
              <p className="text-sm opacity-70">
                Tydliga arbetsmoment, dokumentation och planering i varje uppdrag.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Diskretion</h4>
              <p className="text-sm opacity-70">
                Respektfull och lågmäld hantering i känsliga eller utsatta situationer.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2 text-cyan-accent">Noggrannhet</h4>
              <p className="text-sm opacity-70">
                Metodval och utförande anpassas efter miljö, material och behov.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

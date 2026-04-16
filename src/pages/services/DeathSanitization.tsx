import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Shield, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const protocol = [
  {
    step: "1",
    title: "Teknisk bedömning",
    desc: "Noggrann genomgång av miljön, skadans omfattning och relevanta riskfaktorer inför saneringsinsatsen."
  },
  {
    step: "2",
    title: "Inledande lukt- och miljöåtgärder",
    desc: "Tidiga åtgärder för att stabilisera miljön och minska luktbelastningen inför fortsatt sanering."
  },
  {
    step: "3",
    title: "Sanering av biologiskt material",
    desc: "Säker borttagning av kontaminerat material enligt fastställda arbetsrutiner och skyddsprotokoll."
  },
  {
    step: "4",
    title: "Skadedjursåtgärder vid behov",
    desc: "Vid behov hanteras insekter eller annan sekundär påverkan som uppstått i samband med händelsen."
  },
  {
    step: "5",
    title: "Luktsanering",
    desc: "Teknisk behandling för att minska kvarvarande lukt i luft, ytor och påverkade material."
  },
  {
    step: "6",
    title: "Hantering av personliga tillhörigheter",
    desc: "Respektfull identifiering och hantering av personliga tillhörigheter efter överenskommelse."
  },
  {
    step: "7",
    title: "Slutkontroll och dokumentation",
    desc: "Genomgång av utfört arbete samt dokumentation av saneringsinsatsen."
  },
  {
    step: "8",
    title: "Teknisk rengöring (tillval)",
    desc: "Specialiserad rengöring av tekniska miljöer, maskiner och övriga ytor i bostaden för en mer komplett återställning."
  }
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
        <title>Sanering vid obevakat dödsfall | Prio Sanering AB</title>
        <meta
          name="description"
          content="Diskret och professionell sanering vid obevakade dödsfall. Vi hanterar biologiskt material, lukt, dokumentation och återställande åtgärder med respekt och säkerhet."
        />
        <meta
          name="keywords"
          content="sanering vid obevakat dödsfall, dödsfallssanering, sanering efter dödsfall, luktsanering dödsfall, biologisk sanering"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Shield className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Sanering vid obevakat dödsfall
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Ett obevakat dödsfall kräver säker, diskret och noggrant planerad sanering.
          Vi arbetar enligt en tydlig process för att hantera biologiskt material,
          lukt och återställande åtgärder på ett tryggt och respektfullt sätt.
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
                <p className="text-midnight/60 font-light leading-relaxed">
                  {item.desc}
                </p>
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
              <p className="text-midnight/70 font-light">
                Noggrann sanering med fokus på säkerhet, dokumentation och korrekt hantering av biologiskt material.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Diskret insats med omärkta fordon och respektfull hantering på plats.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="text-midnight/70 font-light">
                Hjälp med dokumentation och underlag i samband med försäkringsärenden.
              </p>
            </li>
          </ul>

          <div className="mt-12 pt-12 border-t border-midnight/10">
            <p className="text-midnight/60 mb-6 font-medium">
              Behöver du snabb hjälp eller rådgivning vid ett obevakat dödsfall?
            </p>
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

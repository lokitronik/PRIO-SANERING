import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield, Heart, Microscope, Truck, UserCheck, Box } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const values = [
  {
    icon: <Shield className="w-8 h-8 text-cyan-accent" />,
    title: "Diskretion",
    desc: "Vi arbetar med omärkta fordon, låg profil vid ankomst och respektfull hantering genom hela uppdraget."
  },
  {
    icon: <Heart className="w-8 h-8 text-cyan-accent" />,
    title: "Respekt",
    desc: "Vi bemöter varje situation med lugn, respekt och förståelse för att uppdraget ofta sker i en känslig situation."
  },
  {
    icon: <Microscope className="w-8 h-8 text-cyan-accent" />,
    title: "Teknisk noggrannhet",
    desc: "Våra metoder bygger på tydliga rutiner, skyddsprotokoll och ett strukturerat arbetssätt."
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Om oss | Prio Sanering AB</title>
        <meta
          name="description"
          content="Lär känna Prio Sanering AB. Vi arbetar med specialiserad sanering i krävande och känsliga miljöer, med fokus på diskretion, respekt och teknisk noggrannhet."
        />
        <meta
          name="keywords"
          content="om prio sanering, saneringsföretag sverige, specialiserad sanering, diskret sanering"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Om Prio Sanering AB
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi är ett specialiserat saneringsföretag med fokus på krävande och känsliga
          miljöer. Vår verksamhet bygger på tre grundpelare: diskretion, respekt och
          teknisk noggrannhet.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-10 rounded-3xl border-2 border-midnight/5 text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-6 flex justify-center">{value.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
            <p className="text-midnight/60 font-light leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Unmarked Vehicles Section */}
      <div className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <motion.div {...fadeInUp}>
          <Truck className="w-16 h-16 text-cyan-accent mb-8" />
          <h2 className="text-4xl font-bold mb-8">Diskret hantering</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            Vi vet att integritet ofta är en viktig del av uppdraget. Därför arbetar vi
            med omärkta fordon, låg profil vid ankomst och ett respektfullt bemötande
            genom hela processen.
          </p>
          <div className="flex items-center gap-4">
            <UserCheck className="w-6 h-6 text-cyan-accent" />
            <span className="font-bold">
              Utbildad personal med fokus på säkerhet, diskretion och respekt
            </span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
            alt="Trygg och professionell miljö"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Personal belongings / respectful handling */}
      <section
        id="minneshantering"
        className="py-24 bg-slate-50 rounded-[3rem] px-12 md:px-20"
      >
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <Box className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8">
            Personliga tillhörigheter och respektfull hantering
          </h2>
          <p className="text-xl font-light text-midnight/70 leading-relaxed mb-12">
            Vid sanering efter dödsfall eller trauma handlar arbetet inte bara om miljön
            i sig. Personliga tillhörigheter kan ha stort praktiskt och emotionellt värde.
            Vi arbetar därför med en respektfull process för att identifiera, hantera och
            vid behov säkra föremål efter överenskommelse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-4 text-cyan-accent">Identifiering</h4>
              <p className="text-sm text-midnight/60 font-light">
                Vi hjälper till att identifiera dokument, fotografier och personliga
                föremål som bör tas om hand separat.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-4 text-cyan-accent">Säkring</h4>
              <p className="text-sm text-midnight/60 font-light">
                Vid behov hanteras och rengörs tillhörigheter med målet att de ska kunna
                återlämnas eller tas om hand på ett tryggt sätt.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

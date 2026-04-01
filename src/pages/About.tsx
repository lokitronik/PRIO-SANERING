import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Shield, Heart, Microscope, Truck, UserCheck, Box } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const values = [
  { icon: <Shield className="w-8 h-8 text-cyan-accent" />, title: "Diskretion", desc: "Vi anländer i omärkta fordon och personal i civila kläder för att skydda din integritet." },
  { icon: <Heart className="w-8 h-8 text-cyan-accent" />, title: "Empati", desc: "Vi bemöter varje situation med den respekt och medkänsla som krävs i svåra stunder." },
  { icon: <Microscope className="w-8 h-8 text-cyan-accent" />, title: "Teknisk precision", desc: "Våra metoder bygger på vetenskaplig grund och certifierad expertis." }
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
        <title>Om Oss | Prio Sanering AB - Expertis & Diskretion</title>
        <meta name="description" content="Lär känna Prio Sanering AB. Vi är specialister på traumasanering och sanering vid dödsfall med fokus på empati, professionalism och absolut diskretion." />
        <meta name="keywords" content="om prio sanering, saneringsföretag sverige, experter på traumasanering, diskret sanering" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Om Prio Sanering AB</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi är Sveriges ledande specialister på sanering av extrema miljöer. Vår verksamhet vilar på tre grundpelare: diskretion, empati och teknisk rigorositet.
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
          <h2 className="text-4xl font-bold mb-8">Garanterad diskretion</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            Vi förstår att våra kunders integritet är av yttersta vikt. Därför använder vi uteslutande omärkta fordon som inte drar till sig onödig uppmärksamhet från grannar eller förbipasserande. Vår personal bär civila kläder vid ankomst och byter om till skyddsutrustning först när de befinner sig inne i den aktuella lokalen.
          </p>
          <div className="flex items-center gap-4">
            <UserCheck className="w-6 h-6 text-cyan-accent" />
            <span className="font-bold">Certifierade tekniker med tystnadsplikt</span>
          </div>
        </motion.div>
        <motion.div 
          className="rounded-3xl overflow-hidden shadow-2xl"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
            alt="Trygg och professionell kontorsmiljö" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Caja Emocional / Minneshantering */}
      <section id="minneshantering" className="py-24 bg-slate-50 rounded-[3rem] px-12 md:px-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <Box className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8">Minneshantering & Den emotionella processen</h2>
          <p className="text-xl font-light text-midnight/70 leading-relaxed mb-12">
            Vid sanering efter dödsfall eller trauma är det inte bara miljön som ska återställas. Vi förstår det emotionella värdet i personliga tillhörigheter. Vår process för minneshantering innebär att vi varsamt identifierar, rengör och säkrar föremål som bär på minnen. Vi hjälper anhöriga att återfå det som är värdefullt, mitt i det svåra.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-4 text-cyan-accent">Identifiering</h4>
              <p className="text-sm text-midnight/60 font-light">Vi letar aktivt efter fotografier, dokument och personliga föremål som kan ha ett affektionsvärde.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h4 className="font-bold mb-4 text-cyan-accent">Säkring</h4>
              <p className="text-sm text-midnight/60 font-light">Föremålen rengörs och saneras med specialmetoder för att de ska kunna återlämnas i ett säkert tillstånd.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

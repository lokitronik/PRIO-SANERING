import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Zap, Shield, Target, Leaf, CheckCircle2, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function LaserSanitization() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Lasersanering | Prio Sanering AB - Framtidens saneringsteknik</title>
        <meta name="description" content="Lasersanering: Framtidens teknik för sanering och restaurering. Icke-invasiv, miljövänlig och extremt precis fotodisruptionsteknik." />
        <meta name="keywords" content="lasersanering, fotodisruption, sanering sot, teknisk rengöring laser, miljövänlig sanering" />
      </Helmet>

      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Zap className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Lasersanering: Framtidens teknik för sanering och restaurering
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi använder högintensiva laserpulser som skapar en fotodestruktion av smuts, sot och biologiska agenser. 
          En metod som revolutionerar hur vi återställer ytor utan att skada underlaget.
        </p>
      </motion.div>

      {/* Main Benefits - Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div 
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <Shield className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Icke-invasiv</h3>
          <p className="text-midnight/60 font-light">
            Inga kemikalier, inget vatten, ingen sand. Tekniken vaporiserar föroreningar utan att röra eller skada underlaget.
          </p>
        </motion.div>

        <motion.div 
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <Target className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Extrem precision</h3>
          <p className="text-midnight/60 font-light">
            Perfekt för historiska byggnader, känsliga trästrukturer och industriella maskiner där traditionella metoder är för grova.
          </p>
        </motion.div>

        <motion.div 
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <Leaf className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Hållbarhet</h3>
          <p className="text-midnight/60 font-light">
            100% miljövänlig metod som inte skapar sekundärt avfall (inget slam eller damm). Endast föroreningen tas bort.
          </p>
        </motion.div>
      </div>

      {/* Technical Explanation */}
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 text-midnight">Teknisk förklaring</h2>
          <div className="prose prose-lg text-midnight/70 font-light leading-relaxed mx-auto">
            <p className="mb-6">
              Vi använder högintensiva laserpulser som skapar en fotodestruktion av smuts, sot och biologiska agenser. 
              När laserstrålen träffar föroreningen (t.ex. sot efter brand), absorberas energin och ämnet omvandlas omedelbart till gas (sublimering).
            </p>
            <p>
              Detta lämnar ytan helt ren och steriliserad. Eftersom olika material absorberar laserljus vid olika våglängder kan vi ställa in lasern så att den tar bort sotet men lämnar det underliggande materialet (trä, sten, metall) helt opåverkat.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Laser? */}
      <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] mb-24">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Varför välja laser framför traditionell sanering?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="flex gap-6"
            {...fadeInUp}
          >
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Varför Laser vid Brandsanering? (Sot & Lukt)</h4>
              <p className="text-midnight/60 font-light">
                Traditionell rengöring sprider ofta ut sotpartiklar djupare i materialet. Lasern vaporiserar sotet omedelbart. Detta eliminerar lukten vid källan och tar bort cancerframkallande PAH-föreningar som annars blir kvar i väggarna.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
          >
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Skydd av Fastighetsvärde (Investering vs Kostnad)</h4>
              <p className="text-midnight/60 font-light">
                Istället för att byta ut dyra träbalkar eller blästra sönder historisk sten, bevarar lasern originalmaterialet. Vi sanerar utan slitage. Detta sparar fastighetsägaren miljonbelopp i framtida renoveringskostnader.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Ingen torktid</h4>
              <p className="text-midnight/60 font-light">
                Eftersom metoden är helt torr behövs ingen torktid – ytan är klar för nästa steg (t.ex. målning) omedelbart.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="flex gap-6"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
          >
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Bättre arbetsmiljö</h4>
              <p className="text-midnight/60 font-light">
                Säkerställer en arbetsmiljö fri från cancerframkallande partiklar genom att binda och suga upp de vaporiserade ämnena direkt.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div 
        className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] text-center"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8">Behöver du en teknisk bedömning eller en demonstration på plats?</h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Kontakta oss för expertis inom lasersanering och låt oss visa hur vi kan lösa dina mest utmanande saneringsbehov.
        </p>
        <a 
          href="tel:0101234567" 
          className="inline-flex items-center gap-3 bg-cyan-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all shadow-xl shadow-cyan-accent/20"
        >
          <Phone className="w-6 h-6" />
          Kontakta oss för expertis
        </a>
      </motion.div>
    </motion.div>
  );
}

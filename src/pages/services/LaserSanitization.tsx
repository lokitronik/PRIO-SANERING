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
          Vi erbjuder specialiserad lasersanering med fokus på tre huvudområden: 
          <span className="font-bold text-midnight"> Fasadrestaurering</span>, 
          <span className="font-bold text-midnight"> Gravvård</span> och 
          <span className="font-bold text-midnight"> Skorstenssanering</span>. 
          En icke-invasiv metod som återställer ytor till nyskick utan att skada underlaget.
        </p>
      </motion.div>

      {/* Primary Service 1: Facade Restoration */}
      <div className="mb-24">
        <motion.div 
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight">
              FASADSANERING & LASERRESTAURERING
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Target className="w-8 h-8 text-cyan-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Precisionsteknik</h4>
                    <p className="text-midnight/60 font-light">Eliminerar ingrodd smuts utan att skada underlaget (sten, tegel eller betong).</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Leaf className="w-8 h-8 text-cyan-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">100% Miljövänlig</h4>
                    <p className="text-midnight/60 font-light">En helt torr process utan kemikalier eller slipmedel. Inget farligt avfall genereras.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Zap className="w-8 h-8 text-cyan-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Vinteroptimering</h4>
                    <p className="text-midnight/60 font-light">Perfekt för att sanera skador orsakade av vägsalt, fukt och urbana föroreningar.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Shield className="w-8 h-8 text-cyan-accent flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Minimal Störning</h4>
                    <p className="text-midnight/60 font-light">En ren och tyst metod som inte påverkar de boendes vardag eller närmiljön.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">Specialtjänster</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-cyan-accent mb-1">Fasad- & Ytrestaurering</h5>
                    <p className="text-sm text-midnight/60 font-light">Djuprengöring av socklar, pelare och fasader. Vi tar bort svarta beläggningar ("skorpor"), atmosfäriska föroreningar, graffiti och färgspår.</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-cyan-accent mb-1">Sanering & Hygien</h5>
                    <p className="text-sm text-midnight/60 font-light">Effektiv eliminering av biologiska föroreningar som mögel, mossa, urin och fuktfläckar på alla typer av ytor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Primary Service 2: Gravestone Restoration */}
      <div className="mb-24">
        <motion.div 
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight">
              LASERSANERING GRAVSTENAR — RESTAURERING & GRAVVÅRD
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl font-light text-midnight/80 leading-relaxed">
                  Vår laserteknik är den mest skonsamma metoden för restaurering av gravstenar och historiska monument. 
                  Vi återställer stenens ursprungliga lyster utan att använda högtryckstvätt, kemikalier eller blästring.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Eliminerar mossa, lav och alger på molekylär nivå</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Skyddar känsliga inskriptioner och förgyllningar</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Ingen risk för frostsprängning (helt torr metod)</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Bevarar stenens naturliga patina och struktur</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">Varför välja laser för gravvård?</h4>
                <p className="font-light text-midnight/60 leading-relaxed">
                  Traditionella metoder som kemisk rengöring eller mekanisk borstning kan lämna rester eller orsaka mikrosprickor i stenen där ny påväxt snabbt får fäste. 
                  Lasern steriliserar ytan och tar bort rötterna till lav och mossa, vilket ger ett resultat som varar betydligt längre.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Primary Service 3: Chimney Restoration */}
      <div className="mb-24">
        <motion.div 
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight uppercase">
              Skorstenssanering & Sotsanering
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl font-light text-midnight/80 leading-relaxed">
                  Lasersanering är den mest effektiva metoden för att ta bort glanssot och rökansamlingar i skorstenar och rökkanaler. 
                  Vi återställer brandsäkerheten utan att skada murstocken eller skapa damm i fastigheten.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Vaporiserar glanssot omedelbart (sublimering)</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Eliminerar brandfarliga beläggningar helt</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Ingen mekanisk nötning på murstocken</p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">Tar bort röklukt vid källan</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">Säkerhet och effektivitet</h4>
                <p className="font-light text-midnight/60 leading-relaxed">
                  Traditionell sotning tar inte alltid bort de mest brandfarliga beläggningarna (glanssot). 
                  Vår laserteknik når in i materialets porer och tar bort allt brännbart material, vilket minimerar risken för skorstensbrand och förbättrar draget avsevärt.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

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

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
        <title>Lasersanering | Prio Sanering AB</title>
        <meta
          name="description"
          content="Specialiserad lasersanering för gravstenar, sotpåverkade ytor och utvalda tekniska miljöer. En torr och skonsam metod med hög precision."
        />
        <meta
          name="keywords"
          content="lasersanering, lasersanering gravsten, sotsanering laser, teknisk rengöring laser, gravvård laser"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Zap className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Lasersanering
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi erbjuder specialiserad lasersanering med fokus på gravstenar,
          sotpåverkade ytor och utvalda tekniska miljöer. Metoden är torr,
          precis och särskilt lämpad där traditionell rengöring riskerar att
          vara för grov.
        </p>
      </motion.div>

      {/* Primary Service 1: Gravestone Restoration */}
      <div className="mb-24">
        <motion.div
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight">
              Lasersanering av gravstenar — restaurering & gravvård
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl font-light text-midnight/80 leading-relaxed">
                  Lasersanering är en mycket skonsam metod för rengöring och
                  restaurering av gravstenar och känsliga stenytor. Vi arbetar
                  utan högtryckstvätt, blästring eller aggressiva kemikalier.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Minskar påväxt av mossa, lav och alger på känsliga ytor
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Skonsam metod för inskriptioner, detaljer och äldre sten
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Torr process utan vattenmättnad av stenen
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Bevarar ytan bättre än många mer mekaniska metoder
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">
                  Varför välja laser för gravvård?
                </h4>
                <p className="font-light text-midnight/60 leading-relaxed">
                  Traditionella metoder som hård borstning, högtryck eller
                  kraftigare kemisk rengöring kan vara för aggressiva på äldre
                  eller känsliga gravstenar. Lasersanering ger bättre kontroll
                  och kan därför vara ett mer varsamt alternativ i utvalda fall.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Primary Service 2: Chimney Restoration */}
      <div className="mb-24">
        <motion.div
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight">
              Skorstenssanering och sotsanering
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl font-light text-midnight/80 leading-relaxed">
                  Lasersanering kan användas för att behandla sotpåverkade ytor
                  och vissa typer av beläggningar i tekniskt krävande miljöer.
                  Metoden är särskilt intressant där man vill arbeta torrt och
                  med hög precision.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Noggrann behandling av sot och svåra beläggningar
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Torr metod utan onödig spridning av vatten eller slam
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Kan minska behovet av grov mekanisk påverkan på underlaget
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Bedöms från fall till fall beroende på material och omfattning
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">
                  Säkerhet och metodval
                </h4>
                <p className="font-light text-midnight/60 leading-relaxed">
                  Alla sot- och skorstensrelaterade miljöer lämpar sig inte för
                  samma behandling. Därför gör vi alltid en teknisk bedömning av
                  yta, material och beläggning innan vi rekommenderar lasersanering.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <Shield className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Skonsam metod</h3>
          <p className="text-midnight/60 font-light">
            Lasersanering kan vara ett bra alternativ där traditionell rengöring
            riskerar att bli för grov eller svår att kontrollera.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <Target className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Hög precision</h3>
          <p className="text-midnight/60 font-light">
            Metoden lämpar sig för utvalda ytor och miljöer där precision och
            kontroll är viktigare än snabb grovrengöring.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <Leaf className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Torr process</h3>
          <p className="text-midnight/60 font-light">
            Ingen vattenbaserad rengöring behövs, vilket kan vara en fördel i
            känsliga material och miljöer.
          </p>
        </motion.div>
      </div>

      {/* Technical Explanation */}
      <div className="max-w-4xl mx-auto mb-24 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 text-midnight">
            Teknisk förklaring
          </h2>
          <div className="prose prose-lg text-midnight/70 font-light leading-relaxed mx-auto">
            <p className="mb-6">
              Vid lasersanering används koncentrerad energi för att påverka och
              avlägsna föroreningar eller beläggningar från ytan. Metoden kan
              justeras beroende på material, typ av påväxt eller förorening och
              vilket resultat som eftersträvas.
            </p>
            <p>
              Eftersom olika material reagerar olika krävs alltid en teknisk
              bedömning innan arbete påbörjas. Målet är att välja en metod som
              ger så god rengöring som möjligt med så liten påverkan på
              underlaget som möjligt.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Laser */}
      <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          När kan laser vara rätt metod?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="flex gap-6" {...fadeInUp}>
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Känsliga ytor</h4>
              <p className="text-midnight/60 font-light">
                Där underlaget är känsligt och man vill undvika grov mekanisk
                påverkan kan laser vara ett mer kontrollerat alternativ.
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
              <h4 className="text-xl font-bold mb-2">Torr rengöring behövs</h4>
              <p className="text-midnight/60 font-light">
                I miljöer där vatten eller slam är olämpligt kan en torr metod
                vara en tydlig fördel.
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
              <h4 className="text-xl font-bold mb-2">Svåråtkomliga beläggningar</h4>
              <p className="text-midnight/60 font-light">
                Laser kan vara relevant vid vissa typer av sot, påväxt eller
                föroreningar som är svåra att behandla med traditionella metoder.
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
              <h4 className="text-xl font-bold mb-2">Bedömning från fall till fall</h4>
              <p className="text-midnight/60 font-light">
                Lasersanering är inte rätt lösning i alla situationer. Därför
                gör vi alltid en teknisk bedömning innan vi rekommenderar metoden.
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
        <h2 className="text-4xl font-bold mb-8">
          Behöver du en teknisk bedömning?
        </h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Kontakta oss för rådgivning om lasersanering och om metoden är rätt
          för den aktuella ytan eller miljön.
        </p>
        <a
          href="tel:0101234567"
          className="inline-flex items-center gap-3 bg-cyan-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-cyan-accent/90 transition-all shadow-xl shadow-cyan-accent/20"
        >
          <Phone className="w-6 h-6" />
          Kontakta oss
        </a>
      </motion.div>
    </motion.div>
  );
}

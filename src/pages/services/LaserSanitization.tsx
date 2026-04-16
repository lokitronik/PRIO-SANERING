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
        <title>Lasersanering av gravstenar | Prio Sanering AB</title>
        <meta
          name="description"
          content="Skonsam lasersanering av gravstenar och utvalda sotpåverkade ytor. En torr och precis metod för känsliga material där traditionell rengöring kan vara för grov."
        />
        <meta
          name="keywords"
          content="lasersanering gravsten, gravvård laser, rengöring gravsten, sotsanering laser, teknisk rengöring laser"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Zap className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Lasersanering av gravstenar
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Vi erbjuder specialiserad lasersanering med fokus på gravstenar och andra
          känsliga stenytor. Metoden är torr, precis och särskilt lämpad där
          traditionell rengöring riskerar att vara för grov eller svår att kontrollera.
        </p>
      </motion.div>

      {/* Primary Service: Gravestone Restoration */}
      <div className="mb-24">
        <motion.div
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] overflow-hidden relative border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-midnight">
              Restaurering & gravvård med laser
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-xl font-light text-midnight/80 leading-relaxed">
                  Lasersanering är en mycket skonsam metod för rengöring och
                  restaurering av gravstenar, äldre stenytor och detaljer där
                  kontroll och varsamhet är avgörande. Vi arbetar utan högtryck,
                  blästring eller aggressiva kemikalier.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Skonsam rengöring av mossa, lav, alger och annan påväxt
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Passar känsliga inskriptioner, detaljer och äldre sten
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Torr metod utan vattenmättnad av materialet
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                    <p className="text-midnight/70 font-light">
                      Noggrann metod där underlaget kan bevaras bättre än vid mer mekanisk rengöring
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
                <h4 className="text-2xl font-bold mb-6 text-midnight">
                  Varför välja laser för gravstenar?
                </h4>
                <p className="font-light text-midnight/60 leading-relaxed">
                  Gravstenar och äldre stenmaterial kan vara känsliga för hård
                  borstning, högtryck eller kraftigare kemisk rengöring.
                  Lasersanering ger bättre kontroll och kan därför vara ett mer
                  varsamt alternativ i utvalda fall där ytan kräver särskild hänsyn.
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
            Lämplig där traditionell rengöring riskerar att vara för grov eller
            svår att kontrollera på känsliga ytor.
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
            Metoden lämpar sig för utvalda ytor där precision och kontroll är
            viktigare än snabb grovrengöring.
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
            sten och andra material där fukt är olämplig.
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
              avlägsna föroreningar eller påväxt från ytan. Metoden kan justeras
              beroende på material, typ av beläggning och vilket resultat som
              eftersträvas.
            </p>
            <p>
              Eftersom olika material reagerar olika krävs alltid en teknisk
              bedömning innan arbetet påbörjas. Målet är att välja en metod som
              ger så god rengöring som möjligt med så liten påverkan på underlaget
              som möjligt.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Secondary Use Case */}
      <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] mb-24">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Andra användningsområden
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-midnight/70 font-light leading-relaxed mb-8">
              I vissa fall kan lasersanering även vara relevant för sotpåverkade
              ytor eller andra tekniska miljöer där en torr och kontrollerad metod
              är önskvärd. Dessa uppdrag bedöms alltid från fall till fall beroende
              på material, omfattning och förutsättningar på plats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div className="flex gap-6" {...fadeInUp}>
              <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Sotpåverkade ytor</h4>
                <p className="text-midnight/60 font-light">
                  Kan vara ett alternativ i utvalda miljöer där traditionella
                  metoder inte är optimala och där hög precision behövs.
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
                <h4 className="text-xl font-bold mb-2">Teknisk bedömning först</h4>
                <p className="text-midnight/60 font-light">
                  Vi rekommenderar alltid metod utifrån material, skick och målbild,
                  inte utifrån en standardlösning.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
          för den aktuella gravstenen, ytan eller miljön.
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

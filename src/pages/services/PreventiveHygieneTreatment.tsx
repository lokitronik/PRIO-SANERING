import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Sparkles, Shield, Wind, CheckCircle2, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

export default function PreventiveHygieneTreatment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Förebyggande hygienbehandling | Prio Sanering AB</title>
        <meta
          name="description"
          content="Förebyggande hygienbehandling med torrånga och ozon för utrymmen med luktproblem, stillastående miljöer och behov av teknisk hygieninsats."
        />
        <meta
          name="keywords"
          content="förebyggande hygienbehandling, torrånga, ozonbehandling, luktproblem, hygieninsats, teknisk rengöring"
        />
      </Helmet>

      <motion.div className="text-center mb-20" {...fadeInUp}>
        <Sparkles className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">
          Förebyggande hygienbehandling
        </h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          En teknisk och förebyggande behandling med torrånga och ozon för
          utvalda utrymmen där lukt, stillastående miljöer eller behov av
          hygieninsats kräver mer än vanlig rengöring.
        </p>
      </motion.div>

      <div className="mb-24">
        <motion.div
          className="bg-slate-50 p-12 md:p-20 rounded-[3rem] border border-midnight/5 shadow-sm"
          {...fadeInUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-midnight">
                Torrånga och ozon i kombination
              </h2>
              <p className="text-xl font-light text-midnight/80 leading-relaxed">
                Behandlingen kombinerar torrånga på utvalda ytor med ozon som
                kompletterande metod för luktbehandling och kontroll av
                inomhusmiljön. Insatsen används i utrymmen där man vill arbeta
                förebyggande och tekniskt, utan att presentera det som vanlig
                städning.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                  <p className="text-midnight/70 font-light">
                    Torrånga används på utvalda ytor, textilier, kontaktpunkter
                    och svåråtkomliga områden där vanlig rengöring inte räcker.
                  </p>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                  <p className="text-midnight/70 font-light">
                    Ozon används som kompletterande behandling av lukt och luft
                    i tomma utrymmen, alltid under kontrollerade former.
                  </p>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-accent flex-shrink-0" />
                  <p className="text-midnight/70 font-light">
                    Behandlingen anpassas efter miljö, användning, material och
                    behov av förebyggande hygieninsats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-midnight/5">
              <h3 className="text-2xl font-bold mb-6 text-midnight">
                Typiska användningsområden
              </h3>
              <div className="space-y-5">
                <p className="text-midnight/60 font-light leading-relaxed">
                  Sommarstugor och bostäder som stått stängda under längre perioder
                </p>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Utrymmen med kvarvarande lukt av instängd luft, fukt, djur eller rök
                </p>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Tillfälligt boende, uthyrningsmiljöer och rum med återkommande användning
                </p>
                <p className="text-midnight/60 font-light leading-relaxed">
                  Utvalda professionella miljöer där förebyggande hygien och luktkontroll är viktiga
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          <Shield className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Kontrollerad metod</h3>
          <p className="text-midnight/60 font-light">
            Behandlingen utförs metodiskt och anpassas efter utrymme, material
            och risknivå.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <Wind className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Luktbehandling</h3>
          <p className="text-midnight/60 font-light">
            Ozon används som ett komplement när luktproblem kräver mer än vanlig rengöring.
          </p>
        </motion.div>

        <motion.div
          className="bg-slate-50 p-10 rounded-3xl border-b-4 border-cyan-accent"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          <Sparkles className="w-10 h-10 text-cyan-accent mb-6" />
          <h3 className="text-2xl font-bold mb-4">Förebyggande fokus</h3>
          <p className="text-midnight/60 font-light">
            En teknisk insats för utrymmen där man vill minska lukt, smutsbelastning
            och hygieniska problem innan de växer vidare.
          </p>
        </motion.div>
      </div>

      <div className="bg-slate-50 p-12 md:p-20 rounded-[3rem] mb-24">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          Viktigt att känna till
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="flex gap-6" {...fadeInUp}>
            <CheckCircle2 className="w-8 h-8 text-cyan-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold mb-2">Ozon används endast i tomma utrymmen</h4>
              <p className="text-midnight/60 font-light">
                Behandlingen genomförs utan personer eller djur i rummet och med
                tydlig hantering av vädring och återgång.
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
              <h4 className="text-xl font-bold mb-2">Bedömning från fall till fall</h4>
              <p className="text-midnight/60 font-light">
                Metoden anpassas efter utrymmets storlek, material, luktbild och
                behov av kompletterande behandling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] text-center"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8">
          Behöver du en förebyggande hygieninsats?
        </h2>
        <p className="text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto">
          Kontakta oss för en första bedömning av utrymme, behov och lämplig metod.
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

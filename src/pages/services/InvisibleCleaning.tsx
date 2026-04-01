import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Droplets, ShieldCheck, Phone, Hotel, Building2, UserCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
};

const features = [
  { icon: <Hotel className="w-8 h-8 text-cyan-accent" />, title: "Hotell & Hospitality", desc: "Säkerställ en smittfri miljö för dina gäster med våra premium desinfektionsprotokoll." },
  { icon: <Building2 className="w-8 h-8 text-cyan-accent" />, title: "Offentliga Miljöer", desc: "Effektiv sanering av kontor, skolor och andra ytor med hög genomströmning." },
  { icon: <UserCheck className="w-8 h-8 text-cyan-accent" />, title: "Certifierad Trygghet", desc: "Vi utfärdar intyg som visar att lokalen har genomgått en professionell sanering." }
];

export default function InvisibleCleaning() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <Helmet>
        <title>Invisible Cleaning | Prio Sanering AB - Premium Desinfektion</title>
        <meta name="description" content="Premium desinfektionstjänster för hotell och B2B. Vi använder elektrostatisk sprutning för att eliminera 99,9% av alla patogener." />
        <meta name="keywords" content="invisible cleaning, desinfektion hotell, elektrostatisk sprutning, sanering hotellrum, smittskydd företag" />
      </Helmet>
      <motion.div 
        className="text-center mb-20"
        {...fadeInUp}
      >
        <Droplets className="w-16 h-16 text-cyan-accent mx-auto mb-8" />
        <h1 className="text-5xl md:text-6xl font-extrabold text-midnight mb-6">Invisible Cleaning</h1>
        <p className="text-xl text-midnight/60 max-w-3xl mx-auto font-light leading-relaxed">
          Premium desinfektion för B2B och hotellsektorn. Vi eliminerar det osynliga hotet – virus, bakterier och osynliga patogener.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-10 rounded-3xl border-2 border-midnight/5 hover:border-cyan-accent/20 transition-all text-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-midnight/60 font-light leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-midnight text-white p-12 md:p-20 rounded-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8">Varför Invisible Cleaning?</h2>
          <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
            I en värld där hygienkraven ständigt ökar räcker det inte med vanlig städning. Vår "Invisible Cleaning" går djupare och eliminerar risker som det blotta ögat inte kan se. Vi använder avancerad teknik som elektrostatisk sprutning och UV-C-desinfektion för att nå alla ytor.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">99.99% eliminering av virus och bakterier.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Snabbt och effektivt – lokalerna kan tas i bruk kort efter behandling.</p>
            </li>
            <li className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-cyan-accent flex-shrink-0" />
              <p className="font-light opacity-80">Miljövänliga och godkända desinfektionsmedel.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Boka en konsultation</h3>
          <p className="opacity-60 mb-10 font-light">Låt oss hjälpa dig att skapa en tryggare miljö för dina anställda och gäster.</p>
          <a 
            href="tel:0101234567" 
            className="inline-flex items-center gap-3 bg-cyan-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-cyan-accent/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            Kontakta oss idag
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

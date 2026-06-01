import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { Briefcase, GraduationCap, MapPin, Rocket, Shield, Terminal } from 'lucide-react';
import profileImg from '@/assets/Ateh.jpg';

const story = {
  en: [
    "I'm Ateh Frank Ateh, a full-stack developer and computer networks engineering student at SUP'PTIC in Yaounde, Cameroon. I build web platforms, mobile apps, APIs, payment flows, network labs, and infrastructure projects.",
    "My curiosity started early, after fixing a locked Android phone through weeks of research, trial, and error. That moment taught me to look beneath the surface of technology and understand systems deeply.",
    "Since then, I have built school management platforms, Android apps, AI-assisted learning tools, multi-server Linux environments, OpenStack cloud deployments, NoSQL systems, cybersecurity labs, and client websites.",
    "Professionally, I have worked on Zenorva Support's web presence, Terra Talent Hub's skills verification platform, CAMTEL production IP networks, Dewise Energy's website, and Cam e-guide / Skolarr's education platform.",
    "I describe myself as a vibe coder because I build with instinct, speed, and experimentation, but I pair that energy with careful engineering: clean interfaces, practical architecture, security awareness, and reliable deployment.",
    "Beyond code, I care about building communities and opportunities from Africa. I founded Absurd Geeks, contributed to student representation initiatives, and keep learning across software, networks, cybersecurity, and cloud infrastructure.",
  ],
  fr: [
    "Je suis Ateh Frank Ateh, developpeur full-stack et etudiant ingenieur en reseaux informatiques a SUP'PTIC, Yaounde. Je construis des plateformes web, applications mobiles, API, systemes de paiement, labs reseau et projets d'infrastructure.",
    "Ma curiosite a commence tres tot, apres avoir repare un telephone Android bloque grace a des semaines de recherche, d'essais et d'erreurs. Cette experience m'a appris a comprendre la technologie en profondeur.",
    "Depuis, j'ai realise des plateformes de gestion scolaire, applications Android, outils d'apprentissage avec IA, environnements Linux multi-serveurs, deploiements cloud OpenStack, systemes NoSQL, labs cybersecurite et sites clients.",
    "Professionnellement, j'ai travaille sur la presence web de Zenorva Support, la plateforme Terra Talent Hub, les reseaux IP de production de CAMTEL, le site Dewise Energy et la plateforme educative Cam e-guide / Skolarr.",
    "Je me decris comme vibe coder parce que je construis avec instinct, vitesse et experimentation, tout en gardant une base d'ingenierie solide : interfaces propres, architecture pratique, securite et deploiement fiable.",
    "Au-dela du code, je veux creer des communautes et des opportunites depuis l'Afrique. J'ai fonde Absurd Geeks, participe a des initiatives de representation et je continue d'apprendre en logiciel, reseaux, cybersecurite et cloud.",
  ],
};

const About = () => {
  const { language, t } = useLanguage();

  const facts = [
    { icon: <MapPin size={18} />, label: t('Location', 'Localisation'), value: t('Yaounde, Cameroon', 'Yaounde, Cameroun') },
    { icon: <GraduationCap size={18} />, label: t('Education', 'Formation'), value: "SUP'PTIC - Computer Networks & Software Engineering" },
    { icon: <Terminal size={18} />, label: t('Focus', 'Specialite'), value: t('Full-Stack Developer, Network Engineer, Vibe Coder', 'Developpeur Full-Stack, Ingenieur Reseaux, Vibe Coder') },
    { icon: <Rocket size={18} />, label: t('Mission', 'Mission'), value: t('Building impactful tech from Africa', "Construire une tech utile depuis l'Afrique") },
    { icon: <Shield size={18} />, label: t('Passion', 'Passion'), value: t('Cybersecurity & Network Defense', 'Cybersecurite & defense reseau') },
    { icon: <Briefcase size={18} />, label: t('Status', 'Statut'), value: t('Available for collaboration', 'Disponible pour collaboration') },
  ];

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="About Ateh Frank Ateh - Network & Software Engineer from Cameroon" description="Learn about Ateh Frank Ateh: full-stack developer, network engineer, cybersecurity builder, and SUP'PTIC student from Cameroon." path="/about" type="profile" />
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('About', 'A propos de')} <span className="text-primary text-glow">{t('Me', 'moi')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; cat ~/about.md</p>
        </motion.div>

        <AnimatedSection className="mb-12">
          <div className="flex justify-center mb-8">
            <img src={profileImg} alt="Ateh Frank Ateh" className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/30 box-glow" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {facts.map(fact => (
              <div key={fact.label} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 font-mono-game text-sm">
                <span className="text-primary">{fact.icon}</span>
                <div>
                  <span className="text-primary text-xs">{fact.label}</span>
                  <p className="text-muted-foreground">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="prose prose-invert max-w-none space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                {t('My', 'Mon')} <span className="text-primary">{t('Story', 'histoire')}</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                {story[language].map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;

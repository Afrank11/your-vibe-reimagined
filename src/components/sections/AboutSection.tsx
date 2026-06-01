import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, MapPin, Rocket, Shield, Terminal } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import profileImg from '@/assets/Ateh.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: <MapPin size={16} />, value: t('Yaounde, Cameroon', 'Yaounde, Cameroun') },
    { icon: <GraduationCap size={16} />, value: "SUP'PTIC - Computer Networks & Software Engineering" },
    { icon: <Terminal size={16} />, value: t('Full-Stack Developer & Vibe Coder', 'Developpeur Full-Stack & Vibe Coder') },
    { icon: <Shield size={16} />, value: t('Cybersecurity & Network Defense', 'Cybersecurite & defense reseau') },
    { icon: <Rocket size={16} />, value: t('Entrepreneur building useful tech from Africa', "Entrepreneur qui construit de la tech utile depuis l'Afrique") },
  ];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10" delay={0.1}>
      <div className="container mx-auto max-w-5xl" id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('About', 'A propos de')} <span className="text-primary text-glow">{t('Me', 'moi')}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; whoami</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src={profileImg} alt="Ateh Frank Ateh" className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/30 box-glow" />
          </div>
          <div>
            <div className="space-y-3 mb-6">
              {facts.map((fact) => (
                <div key={fact.value} className="flex items-center gap-3 font-mono-game text-sm">
                  <span className="text-primary">{fact.icon}</span>
                  <span className="text-muted-foreground">{fact.value}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {t(
                "I'm Ateh Frank Ateh, a full-stack developer and computer networks engineering student at SUP'PTIC in Yaounde. I build with curiosity, instinct, and a strong systems mindset.",
                "Je suis Ateh Frank Ateh, developpeur full-stack et etudiant ingenieur en reseaux informatiques a SUP'PTIC, Yaounde. Je construis avec curiosite, instinct et une vraie culture systeme."
              )}
            </p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {t(
                'My work spans web platforms, mobile apps, APIs, payment flows, network infrastructure, cybersecurity labs, databases, and cloud deployments.',
                'Mon travail couvre les plateformes web, applications mobiles, API, paiements, infrastructures reseau, laboratoires de cybersecurite, bases de donnees et deploiements cloud.'
              )}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-mono-game text-sm hover:gap-4 transition-all">
              {t('Read My Full Story', 'Lire mon histoire')} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;

import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Download, FileText, GraduationCap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageProvider';
import { contactInfo } from '@/data/portfolio';

const sectionTitle = (left: string, right: string) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
    {left} <span className="text-primary text-glow">{right}</span>
  </h2>
);

export const EducationSection = () => {
  const { t } = useLanguage();
  const schools = [
    {
      name: "SUP'PTIC",
      degree: t('Engineering Degree - Computer Networks', 'Diplome d Ingenieur - Reseaux Informatiques'),
      detail: t('PFE: Intelligent digital relay for bandwidth optimization in limited-connectivity companies.', 'PFE : relais numerique intelligent pour optimiser la bande passante dans les entreprises a connectivite limitee.'),
      period: '2023 - 2026',
    },
    {
      name: 'Franky Comprehensive Secondary School',
      degree: t('Scientific Baccalaureate', 'Baccalaureat serie scientifique'),
      detail: t('Average: 16.03/20 | SAT: 1340', 'Moyenne : 16.03/20 | SAT : 1340'),
      period: '2018 - 2020',
    },
  ];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"><span className="text-primary text-glow">{t('Education', 'Formation')}</span></h2>
        <div className="space-y-6">
          {schools.map((school, i) => (
            <motion.div key={school.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors">
              <GraduationCap size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">{school.name}</h3>
              <p className="text-primary font-mono-game text-sm">{school.degree}</p>
              <p className="text-muted-foreground text-sm mt-2">{school.detail}</p>
              <p className="text-muted-foreground text-xs mt-2">Yaounde, Cameroon - {school.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const ImpactSection = () => {
  const { t } = useLanguage();
  const items = [
    ['Zenorva Support', t('Web Developer', 'Developpeur Web'), t('Building the company web presence, CMS, support workflows, and production deployment.', 'Creation de la presence web, CMS, workflows support et deploiement production.')],
    ['Terra Talent Hub', t('Full-Stack Developer', 'Developpeur Full-Stack'), t('Skills verification platform for African talents and employers.', 'Plateforme de verification des competences pour talents et employeurs africains.')],
    ['CAMTEL CESIR-IP', t('Network Systems Engineer', 'Ingenieur Systemes Reseaux'), t('Production IP network monitoring, diagnostics, traffic analysis, and routing support.', 'Supervision reseau IP, diagnostic, analyse trafic et support routage.')],
    ['Dewise Energy', t('Web Developer', 'Developpeur Web'), t('Responsive website, content architecture, and production configuration.', 'Site responsive, architecture de contenu et configuration production.')],
    ['Absurd Geeks', t('Founder & Technical Lead', 'Fondateur & Lead Technique'), t('Digital community and training initiative for young builders.', 'Communaute digitale et initiative de formation pour jeunes createurs.')],
  ];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {sectionTitle(t('Impact &', 'Impact &'), t('Work', 'travail'))}
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; git log --impact</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map(([title, role, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              <Briefcase size={20} className="text-primary mb-3" />
              <h3 className="font-bold mb-1">{title}</h3>
              <p className="text-primary font-mono-game text-xs mb-2">{role}</p>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const AccomplishmentsSection = () => {
  const { t, language } = useLanguage();
  const accomplishments = {
    en: ['Built a 7-server Linux enterprise infrastructure', 'Designed and deployed an enterprise cybersecurity lab', 'Built Terra Talent Hub with skills assessments and verified certificates', 'Completed 50,000+ lines of code across 19+ projects', 'Selected founder, U.S. Embassy accelerator', 'Bronze mention, ODSA Hackathon and International Youth Math Challenge'],
    fr: ['Infrastructure Linux d entreprise de 7 serveurs', 'Conception et deploiement d un lab cybersecurite', 'Creation de Terra Talent Hub avec evaluations et certificats verifies', '50 000+ lignes de code sur 19+ projets', 'Fondateur selectionne, accelerateur Ambassade des Etats-Unis', 'Mention bronze, Hackathon ODSA et International Youth Math Challenge'],
  };

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"><span className="text-primary text-glow">{t('Accomplishments', 'Realisations')}</span></h2>
        <div className="space-y-4 mb-8">
          {accomplishments[language].map((item, i) => (
            <motion.div key={item} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors">
              <Trophy size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a href={contactInfo.cv} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-opacity">
            <Download size={16} /> {t('Download CV', 'Telecharger le CV')}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export const CaseStudiesSection = () => {
  const { t } = useLanguage();
  const cases = [
    ['Terra Talent Hub', t('Skills verification platform with assessments, ranking, QR certificates, payments, and employer dashboards.', 'Plateforme de verification des competences avec evaluations, classement, certificats QR, paiements et tableaux employeur.')],
    [t('Enterprise Security Lab', 'Lab cybersecurite entreprise'), t('Multi-OS lab with monitoring and attack/defense tooling.', 'Lab multi-OS avec supervision et outils attaque/defense.')],
    [t('7-Server Linux Infrastructure', 'Infrastructure Linux 7 serveurs'), t('DHCP, DNS, Apache, Postfix, NFS, SSH, Samba, and client service consumption.', 'DHCP, DNS, Apache, Postfix, NFS, SSH, Samba et consommation par clients.')],
  ];

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {sectionTitle(t('Case', 'Etudes de'), t('Studies', 'cas'))}
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; cat case_studies/</p>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(([title, desc], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-[1.02] group">
              <FileText size={24} className="text-primary mb-4" />
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const BlogsSection = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {sectionTitle(t('Blogs &', 'Blog &'), t('Insights', 'idees'))}
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; cat blog/latest</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[t('OpenStack private cloud infrastructure', 'Infrastructure cloud prive OpenStack'), t('Enterprise security lab build', 'Construction d un lab cybersecurite'), t('The future of African tech', 'Le futur de la tech africaine')].map((title, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Link to="/blog" className="block bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group">
              <BookOpen size={20} className="text-primary mb-3" />
              <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{title}</h3>
              <p className="text-muted-foreground text-xs">{t('Short technical notes from my engineering journey.', 'Notes techniques courtes issues de mon parcours.')}</p>
            </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8"><Link to="/blog" className="text-primary font-mono-game text-sm hover:underline">{t('View All Posts ->', 'Voir tous les articles ->')}</Link></div>
      </div>
    </AnimatedSection>
  );
};

export const GitHubSection = () => {
  const { t } = useLanguage();
  const repos = ['cybersecurity-lab', 'linux-infrastructure', 'nosql-social-db', 'parking-robot', 'portfolio-v2', 'school-management'];
  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        {sectionTitle('GitHub', t('Activity', 'Activite'))}
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm"><a href={contactInfo.githubRepos} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">&gt; github.com/Afrank11?tab=repositories</a></p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a key={repo} href={contactInfo.githubRepos} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-2 mb-2"><div className="w-3 h-3 rounded-full bg-primary" /><span className="font-mono-game text-sm text-primary">{repo}</span></div>
              <p className="text-muted-foreground text-xs">{t('Open my GitHub profile to browse public repositories.', 'Ouvrir mon profil GitHub pour parcourir les depots publics.')}</p>
            </motion.a>
          ))}
        </div>
        <div className="text-center mt-8"><a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-primary font-mono-game text-sm hover:underline">{t('View Full GitHub Profile ->', 'Voir le profil GitHub ->')}</a></div>
      </div>
    </AnimatedSection>
  );
};

export const BeyondTerminalSection = () => {
  const { t, language } = useLanguage();
  const hobbies = {
    en: ['Chess', 'Football', 'Gaming', 'Side Projects', 'CTF Challenges', 'Learning'],
    fr: ['Echecs', 'Football', 'Jeux video', 'Projets perso', 'Defis CTF', 'Apprentissage'],
  };
  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        {sectionTitle(t('Beyond the', 'Au-dela du'), t('Terminal', 'terminal'))}
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; life --outside-code</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {hobbies[language].map((hobby, i) => (
            <motion.div key={hobby} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all hover:scale-105">
              <Award size={24} className="text-primary mx-auto mb-3" />
              <h3 className="font-bold text-sm">{hobby}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export const GuestbookCTA = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('Sign the', 'Signer le')} <span className="text-primary text-glow">{t('Guestbook', "livre d'or")}</span></h2>
        <p className="text-muted-foreground mb-8 font-mono-game text-sm">{t('Leave a message, say hello, or share your thoughts!', 'Laissez un message, dites bonjour ou partagez vos pensees !')}</p>
        <Link to="/guestbook" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-all hover:scale-105">{t('Sign the Guestbook', 'Signer le livre')}</Link>
      </div>
    </AnimatedSection>
  );
};

export const MarqueeTicker = () => {
  const { language } = useLanguage();
  const items = language === 'fr'
    ? ['7 serveurs Linux', 'Lab cybersecurite', 'Robot autonome', 'Base NoSQL multi-paradigme', 'Terra Talent Hub', '50 000+ lignes de code', "Etudiant ingenieur SUP'PTIC", 'Cloud prive OpenStack']
    : ['7-server Linux infrastructure', 'Enterprise security lab', 'Autonomous parking robot', '4-paradigm NoSQL database', 'Terra Talent Hub', '50,000+ lines of code', "SUP'PTIC engineering student", 'OpenStack private cloud'];

  return (
    <div className="py-8 overflow-hidden border-y border-border relative z-10">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => <span key={`${item}-${i}`} className="mx-8 text-muted-foreground font-mono-game text-sm">{item}</span>)}
      </div>
    </div>
  );
};

export const CTASection = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("Let's Build", 'Construisons')} <span className="text-primary text-glow">{t('Something Together', 'quelque chose ensemble')}</span></h2>
        <p className="text-muted-foreground mb-8 text-sm">{t("Got an idea, a project, or just want to chat about tech? Let's connect.", 'Une idee, un projet ou juste envie de parler tech ? Connectons-nous.')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-all hover:scale-105">{t('Contact Me', 'Me contacter')}</Link>
          <a href={contactInfo.cv} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-primary text-primary rounded-lg font-mono-game text-sm hover:bg-primary/10 transition-all hover:scale-105">{t('Download CV', 'Telecharger le CV')}</a>
        </div>
      </div>
    </AnimatedSection>
  );
};

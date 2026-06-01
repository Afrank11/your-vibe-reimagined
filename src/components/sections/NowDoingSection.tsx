import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { useLanguage } from '../LanguageProvider';
import { Code2, Shield, Globe, Network } from 'lucide-react';

const activities = [
  {
    icon: <Code2 size={24} />,
    title: { en: 'Building Web Platforms', fr: 'Plateformes web' },
    desc: { en: 'Full-stack websites, APIs, CMS workflows, and production deployments', fr: 'Sites full-stack, API, workflows CMS et deploiements en production' },
  },
  {
    icon: <Shield size={24} />,
    title: { en: 'Cybersecurity Lab', fr: 'Lab cybersecurite' },
    desc: { en: 'Expanding virtual security labs with attack and defense scenarios', fr: 'Extension de labs virtuels avec scenarios attaque et defense' },
  },
  {
    icon: <Globe size={24} />,
    title: { en: 'Terra Talent Hub', fr: 'Terra Talent Hub' },
    desc: { en: 'Improving skills verification experiences for African talents and employers', fr: 'Amelioration de la verification des competences pour talents et employeurs africains' },
  },
  {
    icon: <Network size={24} />,
    title: { en: 'Network Architecture', fr: 'Architecture reseau' },
    desc: { en: 'Designing enterprise network and infrastructure solutions', fr: 'Conception de solutions reseau et infrastructure d entreprise' },
  },
];

const NowDoingSection = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('Now', 'En ce')} <span className="text-primary text-glow">{t('Doing', 'moment')}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">&gt; ps aux | grep current</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all hover:scale-105"
            >
              <div className="text-primary mb-4 flex justify-center">{activity.icon}</div>
              <h3 className="font-bold text-sm mb-2">{activity.title[language]}</h3>
              <p className="text-muted-foreground text-xs">{activity.desc[language]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default NowDoingSection;

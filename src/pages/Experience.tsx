import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { experienceTimeline } from '@/data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Experience - Ateh Frank Ateh | Full-Stack Developer & Network Engineer" description="Career timeline of Ateh Frank Ateh: Zenorva Support, Terra Talent Hub, CAMTEL CESIR-IP, Dewise Energy, and Cam e-guide / Skolarr Cameroon." path="/experience" />
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">{t('Experience', 'Experience')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; git log --career</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12">
            {experienceTimeline.map((item, i) => (
              <AnimatedSection key={`${item.company}-${item.period}`} delay={i * 0.15}>
                <div className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 box-glow" />
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar size={14} className="text-primary" />
                        <span className="text-primary font-mono-game text-xs">{language === 'fr' ? item.periodFr : item.period}</span>
                      </div>
                      <h3 className="font-bold text-lg">{language === 'fr' ? item.titleFr : item.title}</h3>
                      <p className="text-primary font-mono-game text-sm mb-2">{item.company}</p>
                      <div className={`flex items-center gap-2 mb-3 text-muted-foreground text-xs ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <MapPin size={13} className="text-primary" />
                        <span>{language === 'fr' ? item.locationFr : item.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{language === 'fr' ? item.descriptionFr : item.description}</p>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {item.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

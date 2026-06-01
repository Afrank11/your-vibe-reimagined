import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { allProjects, pick } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Projects - Ateh Frank Ateh | Network, Security & Software Portfolio" description="Projects by Ateh Frank Ateh: live demos, cybersecurity labs, Linux infrastructure, NoSQL databases, autonomous robotics, and full-stack apps." path="/projects" />
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('My', 'Mes')} <span className="text-primary text-glow">{t('Projects', 'Projets')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; ls ~/projects --all ({allProjects.length} {t('projects', 'projets')})</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {allProjects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.04}>
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-all hover:scale-[1.01] group">
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game mb-3 inline-block">{p.category}</span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {language === 'fr' ? p.titleFr : p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{pick(language, { en: p.description, fr: p.descriptionFr })}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono-game text-xs">
                      <ExternalLink size={18} /> {t('Live demo', 'Demo en ligne')}
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono-game text-xs">
                    <Github size={18} /> GitHub
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { useLanguage } from '../LanguageProvider';
import { featuredProjects, pick } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('Featured', 'Projets')} <span className="text-primary text-glow">{t('Projects', 'phares')}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
          &gt; ls ~/projects --featured
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${p.color} border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:scale-[1.02] group`}
            >
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game mb-3 inline-block">{p.category}</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {language === 'fr' ? p.titleFr : p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{pick(language, { en: p.description, fr: p.descriptionFr })}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">
                    {tag}
                  </span>
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
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;

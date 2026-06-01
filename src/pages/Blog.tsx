import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { BookOpen } from 'lucide-react';

const posts = [
  {
    title: { en: 'Building OpenStack Private Cloud Infrastructure', fr: 'Construire une infrastructure cloud privee OpenStack' },
    excerpt: {
      en: 'A deep dive into deploying a private cloud using OpenStack, from architecture planning to compute, networking, and storage services.',
      fr: "Un apercu du deploiement d'un cloud prive avec OpenStack, de l'architecture aux services de calcul, reseau et stockage.",
    },
    date: '2024',
    tag: 'Cloud',
    readTime: { en: '8 min read', fr: '8 min de lecture' },
  },
  {
    title: { en: 'How I Built an Enterprise Security Lab', fr: "Comment j'ai construit un lab de securite d'entreprise" },
    excerpt: {
      en: 'A practical look at creating a cybersecurity lab environment for penetration testing and defense training.',
      fr: "Un retour pratique sur la creation d'un laboratoire cybersecurite pour les tests d'intrusion et l'entrainement defense.",
    },
    date: '2024',
    tag: 'Security',
    readTime: { en: '12 min read', fr: '12 min de lecture' },
  },
  {
    title: { en: 'The Future of African Tech', fr: 'Le futur de la tech africaine' },
    excerpt: {
      en: 'Exploring the growing African tech ecosystem, the challenges we face, and why the continent is ready for global impact.',
      fr: "Exploration de l'ecosysteme tech africain, des defis actuels et du potentiel d'impact mondial du continent.",
    },
    date: '2024',
    tag: 'Opinion',
    readTime: { en: '6 min read', fr: '6 min de lecture' },
  },
];

const Blog = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Blog & Insights - Ateh Frank Ateh" description="Articles by Ateh Frank Ateh on OpenStack private clouds, enterprise security labs, African tech, networking and software engineering." path="/blog" />
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Blog &', 'Blog &')} <span className="text-primary text-glow">{t('Insights', 'idees')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; cat blog/*</p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title.en} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game">{post.tag}</span>
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                  <span className="text-muted-foreground text-xs">- {post.readTime[language]}</span>
                </div>
                <BookOpen size={20} className="text-primary mb-3" />
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title[language]}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt[language]}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

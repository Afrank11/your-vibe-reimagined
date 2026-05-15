import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { BookOpen } from 'lucide-react';

const posts = [
  {
    title: "Building OpenStack Private Cloud Infrastructure",
    excerpt: "A deep dive into deploying a private cloud using OpenStack, from architecture planning to production deployment. Learn how to set up compute, networking, and storage services.",
    date: "2024",
    tag: "Cloud",
    readTime: "8 min read",
  },
  {
    title: "How I Built an Enterprise Security Lab",
    excerpt: "Step-by-step guide to creating a professional cybersecurity lab environment with pfSense, Kali Linux, Security Onion, and Metasploitable for penetration testing and defense training.",
    date: "2024",
    tag: "Security",
    readTime: "12 min read",
  },
  {
    title: "The Future of African Tech",
    excerpt: "Exploring the rapidly growing tech ecosystem in Africa, the challenges we face, and why the continent is poised to become a major player in the global tech industry.",
    date: "2024",
    tag: "Opinion",
    readTime: "6 min read",
  },
];

const Blog = () => (
  <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blog & <span className="text-primary text-glow">Insights</span>
        </h1>
        <p className="font-mono-game text-muted-foreground text-sm">&gt; cat blog/*</p>
      </motion.div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game">{post.tag}</span>
                <span className="text-muted-foreground text-xs">{post.date}</span>
                <span className="text-muted-foreground text-xs">• {post.readTime}</span>
              </div>
              <BookOpen size={20} className="text-primary mb-3" />
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;

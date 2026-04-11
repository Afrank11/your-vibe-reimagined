import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { Code2, Shield, Globe, Network } from 'lucide-react';

const activities = [
  { icon: <Code2 size={24} />, title: "Building Portfolio", desc: "React + TypeScript gaming-themed portfolio with Framer Motion animations" },
  { icon: <Shield size={24} />, title: "Cybersecurity Lab", desc: "Expanding virtual security lab with new attack/defense scenarios" },
  { icon: <Globe size={24} />, title: "Web Development", desc: "Mastering React, Next.js, and Laravel for full-stack applications" },
  { icon: <Network size={24} />, title: "Network Architecture", desc: "Designing and implementing enterprise network solutions" },
];

const NowDoingSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Now <span className="text-primary text-glow">Doing</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; ps aux | grep current
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all hover:scale-105"
          >
            <div className="text-primary mb-4 flex justify-center">{a.icon}</div>
            <h3 className="font-bold text-sm mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-xs">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default NowDoingSection;

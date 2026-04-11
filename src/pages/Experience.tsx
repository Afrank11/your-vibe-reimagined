import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Briefcase, Calendar } from 'lucide-react';

const timeline = [
  {
    title: "Network Engineering Intern",
    company: "CAMTEL",
    period: "2023 — Present",
    description: "Network infrastructure management, maintenance, and monitoring at Cameroon's national telecommunications company.",
    tags: ["Cisco", "TCP/IP", "Network Monitoring"],
  },
  {
    title: "Co-Founder & Developer",
    company: "Terra Talent",
    period: "2023 — Present",
    description: "Building a talent marketplace to connect African professionals with global opportunities. Full-stack development with React and Laravel.",
    tags: ["React", "Laravel", "MySQL"],
  },
  {
    title: "Technical Lead",
    company: "Absurd Geeks",
    period: "2022 — Present",
    description: "Leading a tech community focused on fostering innovation, collaboration, and skill development among young developers in Cameroon.",
    tags: ["Community", "Mentoring", "Tech Events"],
  },
  {
    title: "Developer",
    company: "Terra Crowd Fund",
    period: "2023",
    description: "Developed a crowdfunding platform to empower African entrepreneurs and startups to raise funds for impactful projects.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
];

const Experience = () => (
  <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
    <div className="container mx-auto max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-primary text-glow">Experience</span>
        </h1>
        <p className="font-mono-game text-muted-foreground text-sm">&gt; git log --career</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 box-glow" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={14} className="text-primary" />
                      <span className="text-primary font-mono-game text-xs">{item.period}</span>
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-primary font-mono-game text-sm mb-2">{item.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {item.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">{t}</span>
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

export default Experience;

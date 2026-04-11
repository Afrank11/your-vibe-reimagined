import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

const allProjects = [
  {
    title: "Cybersecurity Virtual Security Lab",
    description: "Enterprise-grade virtual security lab with pfSense firewall, Kali Linux, Metasploitable, and Security Onion for penetration testing and network defense simulation.",
    tags: ["Kali Linux", "pfSense", "Security Onion", "Metasploitable", "VirtualBox"],
    category: "Cybersecurity",
  },
  {
    title: "Linux Enterprise Infrastructure",
    description: "7-server Linux infrastructure with DNS, DHCP, HTTP, FTP, NFS, Samba, and SSH services on Ubuntu and CentOS — complete enterprise network simulation.",
    tags: ["Linux", "Ubuntu", "CentOS", "DNS", "DHCP", "Apache"],
    category: "Infrastructure",
  },
  {
    title: "NoSQL Social Media Database",
    description: "Multi-paradigm NoSQL database system implementing document, key-value, column-family, and graph databases for a social media application.",
    tags: ["MongoDB", "Redis", "Cassandra", "Neo4j", "Python"],
    category: "Database",
  },
  {
    title: "Autonomous Parking Robot",
    description: "Autonomous parking robot using computer vision and machine learning for real-time parking space detection and automated vehicle positioning.",
    tags: ["Python", "OpenCV", "TensorFlow", "Arduino"],
    category: "AI/Robotics",
  },
  {
    title: "Terra Talent",
    description: "Talent marketplace platform connecting African professionals with global opportunities. Built with modern web technologies.",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    category: "Web App",
  },
  {
    title: "Terra Crowd Fund",
    description: "Crowdfunding platform empowering African entrepreneurs and startups to raise funds for their projects.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "Web App",
  },
];

const Projects = () => (
  <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-primary text-glow">Projects</span>
        </h1>
        <p className="font-mono-game text-muted-foreground text-sm">&gt; ls ~/projects --all</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {allProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-all hover:scale-[1.01] group">
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game mb-3 inline-block">{p.category}</span>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={18} /></a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;

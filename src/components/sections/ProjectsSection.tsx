import { motion } from 'framer-motion';
import AnimatedSection from '../AnimatedSection';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Cybersecurity Virtual Security Lab",
    description: "Enterprise-grade virtual security lab with pfSense firewall, Kali Linux, Metasploitable, and Security Onion for penetration testing and network defense simulation.",
    tags: ["Kali Linux", "pfSense", "Security Onion", "Metasploitable", "VirtualBox"],
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Linux Enterprise Infrastructure",
    description: "7-server Linux infrastructure with DNS, DHCP, HTTP, FTP, NFS, Samba, and SSH services on Ubuntu and CentOS — complete enterprise network simulation.",
    tags: ["Linux", "Ubuntu", "CentOS", "DNS", "DHCP", "Apache", "SSH"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "NoSQL Social Media Database",
    description: "Multi-paradigm NoSQL database system implementing document (MongoDB), key-value (Redis), column-family (Cassandra), and graph (Neo4j) databases.",
    tags: ["MongoDB", "Redis", "Cassandra", "Neo4j", "Python"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Autonomous Parking Robot",
    description: "Autonomous parking robot using computer vision and machine learning for real-time parking space detection and automated vehicle positioning.",
    tags: ["Python", "OpenCV", "TensorFlow", "Arduino", "Computer Vision"],
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const ProjectsSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Featured <span className="text-primary text-glow">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; ls ~/projects --featured
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-gradient-to-br ${p.color} border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:scale-[1.02] group`}
          >
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;

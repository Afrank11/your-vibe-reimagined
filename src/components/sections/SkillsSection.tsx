import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const categories = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "PHP", "C", "C++", "Java", "SQL", "Bash"],
  },
  {
    title: "Networking",
    items: ["TCP/IP", "DNS", "DHCP", "VPN", "Cisco IOS", "Wireshark", "Packet Tracer", "GNS3", "pfSense"],
  },
  {
    title: "Infrastructure & Sysadmin",
    items: ["Linux (Ubuntu/Debian/CentOS)", "Windows Server", "Active Directory", "Apache", "Nginx", "Docker", "Virtualization", "VMware", "Proxmox"],
  },
  {
    title: "Cybersecurity",
    items: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite", "OWASP", "Snort", "Firewall Config", "IDS/IPS", "Security Auditing"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Neo4j", "Firebase"],
  },
  {
    title: "Frameworks & Tools",
    items: ["React", "Next.js", "Laravel", "Node.js", "Express", "Tailwind CSS", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Data & AI",
    items: ["NumPy", "Pandas", "TensorFlow", "OpenCV", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Mastering Next 🔥",
    items: ["Rust", "Kubernetes", "AWS", "Terraform", "GraphQL"],
  },
];

const SkillsSection = () => {
  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Skills & <span className="text-primary text-glow">Technologies</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
          &gt; cat tech_arsenal.json
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono-game text-primary text-sm mb-4">{`// ${cat.title}`}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-mono-game hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;

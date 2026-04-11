import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Trophy, Download, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EducationSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-primary text-glow">Education</span>
      </h2>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
        >
          <GraduationCap size={40} className="text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">SUP'PTIC</h3>
          <p className="text-muted-foreground text-sm mb-1">École Nationale Supérieure des Postes, Télécommunications et TIC</p>
          <p className="text-primary font-mono-game text-sm">Engineering Degree — Computer Networks & Software Engineering</p>
          <p className="text-muted-foreground text-xs mt-2">Yaoundé, Cameroon • 2023 – 2026</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors"
        >
          <GraduationCap size={40} className="text-primary mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Franky Comprehensive Secondary School</h3>
          <p className="text-muted-foreground text-sm mb-1">High School Diploma</p>
          <p className="text-primary font-mono-game text-sm">Average: 16.03/20 | SAT: 1340</p>
          <p className="text-muted-foreground text-xs mt-2">Yaoundé, Cameroon • Graduated 2020</p>
        </motion.div>
      </div>
    </div>
  </AnimatedSection>
);

const impactItems = [
  { title: "Terra Talent", role: "Co-Founder & Developer", desc: "Talent marketplace connecting African professionals with global opportunities" },
  { title: "Absurd Geeks", role: "Founder & Technical Lead", desc: "Tech community for curiosity-driven builders fostering innovation among young developers" },
  { title: "Terra Crowd Fund", role: "Co-Founder & Developer", desc: "Crowdfunding platform empowering African entrepreneurs and startups" },
  { title: "CAMTEL", role: "Network Intern", desc: "Cameroon Telecommunications — network infrastructure management and maintenance" },
  { title: "Agripreneur Cameroon", role: "Web Developer", desc: "Built the official website for the Who Wants to Be an Agripreneur Cameroon program" },
];

export const ImpactSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Impact & <span className="text-primary text-glow">Work</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; git log --impact
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {impactItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <Briefcase size={20} className="text-primary mb-3" />
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-primary font-mono-game text-xs mb-2">{item.role}</p>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const accomplishments = [
  "Built a 7-server Linux enterprise infrastructure from scratch",
  "Designed and deployed enterprise cybersecurity virtual lab",
  "Developed multi-paradigm NoSQL social media database system",
  "Built autonomous parking robot with ultrasonic sensors",
  "Co-founded Terra Talent — connecting African talent globally",
  "Founded Absurd Geeks tech community",
  "Selected for U.S. Embassy entrepreneurship accelerator",
  "Red Feather Award 2017 — Best Child Actor in Cameroon",
  "Yale Model African Union delegate",
  "Gold Medalist — Nsyimeyong Soccer Tournament",
  "Top 15% — International Youth Math Challenge",
  "FETUC & UNIFAC Representative at SUP'PTIC",
  "Completed 50,000+ lines of production code across 19+ projects",
];

export const AccomplishmentsSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-primary text-glow">Accomplishments</span>
      </h2>
      <div className="space-y-4 mb-8">
        {accomplishments.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
          >
            <Trophy size={16} className="text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">{a}</span>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/Ateh_Frank_Ateh_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-opacity"
        >
          <Download size={16} /> Download CV
        </a>
      </div>
    </div>
  </AnimatedSection>
);

const caseStudies = [
  {
    title: "Enterprise Security Lab",
    desc: "Built a comprehensive multi-OS virtual security lab with MikroTik, Wazuh, Zabbix, and Metasploit for penetration testing training across two subnetworks.",
    tags: ["Cybersecurity", "Virtualization", "MikroTik"],
  },
  {
    title: "7-Server Linux Infrastructure",
    desc: "Deployed seven servers on a single Ubuntu host with DHCP, DNS, Apache, Postfix, NFS, SSH, and Samba with Active Directory — all clients consumed every service.",
    tags: ["Linux", "Networking", "Infrastructure"],
  },
  {
    title: "4-Paradigm NoSQL Database",
    desc: "Social media database using MongoDB, Cassandra, Redis, and Neo4j simultaneously. Flask and FastAPI frontend. Containerized with Docker.",
    tags: ["NoSQL", "Docker", "Flask"],
  },
];

export const CaseStudiesSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Case <span className="text-primary text-glow">Studies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; cat case_studies/
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:scale-[1.02] group"
          >
            <FileText size={24} className="text-primary mb-4" />
            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{cs.desc}</p>
            <div className="flex flex-wrap gap-2">
              {cs.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-secondary/50 text-xs rounded font-mono-game text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const blogs = [
  {
    title: "Building OpenStack Private Cloud Infrastructure",
    excerpt: "A deep dive into deploying a private cloud using OpenStack, from architecture planning to implementation.",
    date: "2024",
    tag: "Cloud",
  },
  {
    title: "How I Built an Enterprise Security Lab",
    excerpt: "Step-by-step guide to creating a professional cybersecurity lab environment for penetration testing.",
    date: "2024",
    tag: "Security",
  },
  {
    title: "The Future of African Tech",
    excerpt: "Exploring the rapidly growing tech ecosystem in Africa and what it means for the global industry.",
    date: "2024",
    tag: "Opinion",
  },
];

export const BlogsSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Blogs & <span className="text-primary text-glow">Insights</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; cat blog/latest
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded font-mono-game">{b.tag}</span>
              <span className="text-muted-foreground text-xs">{b.date}</span>
            </div>
            <BookOpen size={20} className="text-primary mb-3" />
            <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
            <p className="text-muted-foreground text-xs">{b.excerpt}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/blog" className="text-primary font-mono-game text-sm hover:underline">
          View All Posts →
        </Link>
      </div>
    </div>
  </AnimatedSection>
);

const repos = [
  { name: "cybersecurity-lab", desc: "Virtual security lab setup with Kali, pfSense, Wazuh", lang: "Shell", stars: 12 },
  { name: "linux-infrastructure", desc: "7-server enterprise network on Ubuntu", lang: "Bash", stars: 8 },
  { name: "nosql-social-db", desc: "4-paradigm NoSQL social media database", lang: "Python", stars: 15 },
  { name: "parking-robot", desc: "Autonomous parking with ultrasonic sensors", lang: "C++", stars: 6 },
  { name: "portfolio-v2", desc: "Gaming-themed portfolio in React+TS", lang: "TypeScript", stars: 10 },
  { name: "terra-talent", desc: "African talent marketplace platform", lang: "PHP", stars: 5 },
  { name: "school-management", desc: "Multi-user school admin system", lang: "PHP", stars: 4 },
  { name: "ai-network-assistant", desc: "AI-powered networking study app", lang: "Python", stars: 7 },
  { name: "weather-app", desc: "Android weather app with OpenWeather API", lang: "Java", stars: 3 },
];

export const GitHubSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        GitHub <span className="text-primary text-glow">Activity</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        <a href="https://github.com/Afrank11" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          &gt; github.com/Afrank11
        </a>
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r, i) => (
          <motion.a
            key={r.name}
            href={`https://github.com/Afrank11/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="font-mono-game text-sm text-primary">{r.name}</span>
            </div>
            <p className="text-muted-foreground text-xs mb-3">{r.desc}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{r.lang}</span>
              <span>⭐ {r.stars}</span>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="text-center mt-8">
        <a 
          href="https://github.com/Afrank11" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-mono-game text-sm hover:underline"
        >
          View Full GitHub Profile →
        </a>
      </div>
    </div>
  </AnimatedSection>
);

const hobbies = [
  { emoji: "♟️", title: "Chess", desc: "Strategic thinking on and off the board" },
  { emoji: "⚽", title: "Football", desc: "Gold medalist on the pitch" },
  { emoji: "🎮", title: "Gaming", desc: "FPS and strategy games enthusiast" },
  { emoji: "🔧", title: "Side Projects", desc: "Always building something new" },
  { emoji: "🏴‍☠️", title: "CTF Challenges", desc: "HackThisSite & capture the flag" },
  { emoji: "📚", title: "Learning", desc: "Continuous self-improvement" },
];

export const BeyondTerminalSection = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Beyond the <span className="text-primary text-glow">Terminal</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
        &gt; life --outside-code
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all hover:scale-105"
          >
            <span className="text-3xl mb-3 block">{h.emoji}</span>
            <h3 className="font-bold text-sm mb-1">{h.title}</h3>
            <p className="text-muted-foreground text-xs">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export const GuestbookCTA = () => (
  <AnimatedSection className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Sign the <span className="text-primary text-glow">Guestbook</span>
      </h2>
      <p className="text-muted-foreground mb-8 font-mono-game text-sm">
        Leave a message, say hello, or share your thoughts!
      </p>
      <Link
        to="/guestbook"
        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-all hover:scale-105"
      >
        ✍️ Sign the Guestbook
      </Link>
    </div>
  </AnimatedSection>
);

export const MarqueeTicker = () => {
  const items = [
    "🏆 7-Server Linux Infrastructure",
    "🔒 Enterprise Security Lab",
    "🤖 Autonomous Parking Robot",
    "💾 4-Paradigm NoSQL Database",
    "🌍 Terra Talent Platform",
    "👨‍💻 50,000+ Lines of Code",
    "🎓 SUP'PTIC Engineering Student",
    "☁️ OpenStack Private Cloud",
    "🏅 Red Feather Award Winner",
    "📱 19+ Projects Built",
  ];

  return (
    <div className="py-8 overflow-hidden border-y border-border relative z-10">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-muted-foreground font-mono-game text-sm">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export const CTASection = () => (
  <AnimatedSection className="py-24 px-4 relative z-10">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let's Build <span className="text-primary text-glow">Something Together</span>
      </h2>
      <p className="text-muted-foreground mb-8 text-sm">
        Got an idea? A project? Or just want to chat about tech? Let's connect and create something amazing.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-all hover:scale-105"
        >
          📬 Contact Me
        </Link>
        <a
          href="/Ateh_Frank_Ateh_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-primary text-primary rounded-lg font-mono-game text-sm hover:bg-primary/10 transition-all hover:scale-105"
        >
          📄 Download CV
        </a>
      </div>
    </div>
  </AnimatedSection>
);

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { ExternalLink, Github } from 'lucide-react';

const allProjects = [
  {
    title: "Cybersecurity Virtual Security Lab",
    description: "Multi-OS security lab integrating Windows, Ubuntu, Kali Linux, Metasploitable 3, and a LineageOS device across two subnetworks. Configured MikroTik routers as DHCP servers, set up VLANs and static routing, installed Wazuh and Zabbix for monitoring, implemented Active Directory, and executed controlled penetration tests using Metasploit. Simulated with VMware, VirtualBox, and GNS3.",
    tags: ["Kali Linux", "pfSense", "Security Onion", "Metasploitable", "VirtualBox", "Wazuh", "Zabbix"],
    category: "Cybersecurity",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Linux Enterprise Infrastructure (7 Servers)",
    description: "Deployed and configured seven servers on a single Ubuntu host with four client VMs connected via VMware internal network. Services include DHCP, DNS, Apache with virtual hosting (two sites), Postfix mail server, NFS, SSH, and Samba with Active Directory. All clients successfully consumed every service.",
    tags: ["Linux", "Ubuntu", "CentOS", "DNS", "DHCP", "Apache", "SSH", "Samba"],
    category: "Infrastructure",
    github: "https://github.com/Afrank11",
  },
  {
    title: "OpenStack Private Cloud Deployment",
    description: "Deployed a private cloud environment using MicroStack on Ubuntu. Configured virtual networks and a cloud router, created compute instances, attached storage volumes, and accessed machines remotely via SSH through terminal and PuTTY.",
    tags: ["OpenStack", "MicroStack", "Ubuntu", "Cloud", "SSH"],
    category: "Cloud",
    github: "https://github.com/Afrank11",
  },
  {
    title: "School Management System",
    description: "Multi-user web platform for school administration. Teachers input grades and view contracts; students access marks, payment status, and downloadable academic documents; administrators manage all accounts and data. Built with PHP, HTML, CSS, and MySQL on a WAMP stack.",
    tags: ["PHP", "HTML", "CSS", "MySQL", "WAMP"],
    category: "Web App",
    github: "https://github.com/Afrank11",
  },
  {
    title: "AI Network Assistant Application",
    description: "Lightweight AI-powered web app for networking students. Features include generating project ideas, explaining and analyzing code, debugging with Pylint integration, and teaching networking concepts interactively. Built with Python, Flask, and SQLite.",
    tags: ["Python", "Flask", "SQLite", "AI"],
    category: "AI/Web App",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Android Weather Application",
    description: "Mobile weather app built in Android Studio. Users search for any city with real-time autocomplete, receive accurate weather data from the OpenWeather API, and save favorite cities locally using SharedPreferences.",
    tags: ["Android Studio", "Java", "OpenWeather API"],
    category: "Mobile App",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Autonomous Parking Robot",
    description: "Physical robotic vehicle that autonomously detects free parking spaces using ultrasonic sensors and executes a full parking maneuver. Performs a 180° U-turn when the path ahead is blocked. An LCD screen displays the robot's current action in real time. Built with Arduino Mega and an L298N motor driver.",
    tags: ["Arduino", "C++", "Ultrasonic Sensors", "L298N"],
    category: "AI/Robotics",
    github: "https://github.com/Afrank11",
  },
  {
    title: "NoSQL Social Media Database (4-Paradigm)",
    description: "Social media database backend built simultaneously across four NoSQL paradigms: MongoDB for posts and profiles, Cassandra for time-series feeds, Redis for sessions and caching, and Neo4j for social connections. Flask and FastAPI frontend. Entire stack containerized with Docker.",
    tags: ["MongoDB", "Cassandra", "Redis", "Neo4j", "Docker", "Flask", "FastAPI"],
    category: "Database",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Package Delivery Agency Database",
    description: "Relational database system for an inter-city package delivery agency handling three package types, with full sender and recipient tracking. Designed the MCD and MLD models, implemented entirely in MySQL via command line, with triggers, transactions, and complex queries.",
    tags: ["MySQL", "SQL", "Database Design"],
    category: "Database",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Global Air Quality Analysis",
    description: "Analyzed a Kaggle dataset of approximately 3,600 records covering air pollutants across major global cities. Applied Principal Component Analysis (PCA) to identify patterns and correlations, and produced data-driven insights on pollution trends using Python.",
    tags: ["Python", "PCA", "Data Science", "Kaggle"],
    category: "Data Science",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Web Accessibility Audit & Remediation",
    description: "Audited a non-compliant website using axe DevTools, identified violations across WCAG, ergonomic, and heuristic standards, then rewrote the HTML and CSS to bring the site into full accessibility compliance.",
    tags: ["WCAG", "axe DevTools", "HTML", "CSS", "Accessibility"],
    category: "Web Dev",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Terra Talent Hub",
    description: "Web platform for assessing and showcasing the technical skills of Cameroonian talents. Features automated skills testing, grading, and candidate scoring. Backend powered by Supabase.",
    tags: ["React", "Supabase", "Tailwind CSS"],
    category: "Web App",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Agripreneur Cameroon Website",
    description: "Official website for the 'Who Wants to Be an Agripreneur Cameroon' program. Built to promote the brand, connect participants, and drive program visibility.",
    tags: ["Web Design", "HTML", "CSS", "JavaScript"],
    category: "Web Dev",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Handyman Marketplace Website",
    description: "Online marketplace connecting clients with local skilled tradespeople and handymen. Service providers list their offerings; clients browse and request help.",
    tags: ["Web Development", "PHP", "MySQL"],
    category: "Web App",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Coach Portfolio Website (Webflow)",
    description: "Professional website for a personal coach client, built with Webflow. Focused on lead generation, brand showcasing, and conversion — no code required on the client's end.",
    tags: ["Webflow", "Web Design", "No-Code"],
    category: "Web Dev",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Huawei eNSP Network Labs",
    description: "Series of professional networking labs on Huawei eNSP: deployed OSPF routing, captured and analyzed traffic with Wireshark, diagnosed and corrected network faults, configured VLANs, implemented MPLS, and set up NAT.",
    tags: ["Huawei eNSP", "OSPF", "Wireshark", "VLAN", "MPLS", "NAT"],
    category: "Networking",
    github: "https://github.com/Afrank11",
  },
  {
    title: "HackThisSite Security Challenges",
    description: "Completed all basic and several realistic challenge levels on HackThisSite.org, gaining hands-on experience with web vulnerabilities, server-side logic flaws, and cryptography challenges.",
    tags: ["CTF", "Web Security", "Cryptography"],
    category: "Cybersecurity",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Mobile App Static Security Analysis (MobSF)",
    description: "Performed static security analysis on multiple Android APK files using MobSF. Identified vulnerabilities, reviewed permissions, analyzed application code, and produced detailed security reports.",
    tags: ["MobSF", "Android Security", "Static Analysis"],
    category: "Cybersecurity",
    github: "https://github.com/Afrank11",
  },
  {
    title: "Docker Containerization & Hub Publish",
    description: "Built and configured a Docker image of a web application, wrote the Dockerfile and environment setup, and published the image to Docker Hub. Used Docker Compose for multi-container orchestration in the NoSQL project.",
    tags: ["Docker", "Docker Compose", "Docker Hub", "DevOps"],
    category: "DevOps",
    github: "https://github.com/Afrank11",
  },
];

const Projects = () => (
  <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-primary text-glow">Projects</span>
        </h1>
        <p className="font-mono-game text-muted-foreground text-sm">&gt; ls ~/projects --all ({allProjects.length} projects)</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {allProjects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.05}>
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
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github size={18} /></a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;

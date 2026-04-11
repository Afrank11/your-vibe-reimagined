import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import profileImg from '@/assets/Ateh.jpg';

const About = () => {
  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary text-glow">Me</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; cat ~/about.md</p>
        </motion.div>

        <AnimatedSection className="mb-12">
          <div className="flex justify-center mb-8">
            <img
              src={profileImg}
              alt="Ateh Frank Ateh"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/30 box-glow"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: "📍", label: "Location", value: "Cameroon" },
              { icon: "🎓", label: "Education", value: "SUP'PTIC — Network Engineering" },
              { icon: "💻", label: "Focus", value: "Full-Stack Dev & Cybersecurity" },
              { icon: "🌍", label: "Mission", value: "Building impactful tech for Africa" },
              { icon: "🔒", label: "Passion", value: "Cybersecurity & Network Defense" },
              { icon: "🚀", label: "Status", value: "Available for collaboration" },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-3 bg-card border border-border rounded-lg p-4 font-mono-game text-sm">
                <span>{f.icon}</span>
                <div>
                  <span className="text-primary text-xs">{f.label}</span>
                  <p className="text-muted-foreground">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="prose prose-invert max-w-none space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                My <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  I'm Ateh Frank Ateh — a network engineer, developer, and builder from Cameroon. My journey into tech started with a deep curiosity about how networks work, how systems communicate, and how security can protect them.
                </p>
                <p>
                  At SUP'PTIC (Higher Institute of Posts, Telecommunications & ICT), I dove deep into network engineering and cybersecurity. But I didn't stop there — I taught myself web development, databases, and software engineering because I believe the best engineers understand the full stack, from cable to cloud.
                </p>
                <p>
                  I've built enterprise Linux infrastructures with 7 servers running DNS, DHCP, HTTP, FTP, NFS, Samba, and SSH. I've designed cybersecurity virtual labs with pfSense, Kali Linux, and Security Onion. I've created multi-paradigm NoSQL databases and autonomous robots with computer vision.
                </p>
                <p>
                  Beyond the technical, I'm passionate about Africa's tech ecosystem. I co-founded Terra Talent to connect African professionals with global opportunities, and I lead the Absurd Geeks community to foster innovation among young developers.
                </p>
                <p>
                  When I'm not coding, you'll find me playing chess, watching football, gaming, or taking on CTF challenges. I believe in continuous learning, building in public, and creating technology that makes a real difference.
                </p>
                <p>
                  My goal is simple: to bridge the gap between infrastructure and software, to build secure and scalable systems, and to prove that world-class tech can come from anywhere — including Cameroon.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;

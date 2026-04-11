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
              { icon: "📍", label: "Location", value: "Yaoundé, Cameroon" },
              { icon: "🎓", label: "Education", value: "SUP'PTIC — Computer Networks & Software Engineering" },
              { icon: "💻", label: "Focus", value: "Developer, Vibe Coder & Entrepreneur" },
              { icon: "🌍", label: "Mission", value: "Building impactful tech from Africa" },
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
                  I'm Ateh Frank Ateh, a future Ingénieur Informatique et Réseaux (Computer Networks & Software Engineering) studying at SUP'PTIC, Yaoundé, Cameroon.
                </p>
                <p>
                  I'm a developer, vibe coder, and entrepreneur. A vibe coder is someone who builds with instinct, curiosity, and energy — not just following tutorials but actually feeling and understanding systems deeply. I don't just write code; I feel the architecture, debug by intuition, and ship things that shouldn't work but somehow do.
                </p>
                <p>
                  My journey started when my sister blocked my phone when I was 14. Everyone said it was dead. I said "let me try." That moment changed everything. From that point, I became the kid who took things apart to understand them — routers, computers, software, networks. That was over a decade ago, and I've never stopped building since.
                </p>
                <p>
                  Today, with over a decade of experience, I build websites, mobile apps, and network applications. I do security auditing and monitoring, and I have strong knowledge of cloud-based solutions and deployments. I build enterprise-grade security labs with Kali Linux and Metasploit, deploy 7-server Linux infrastructures, design NoSQL databases using 4 paradigms simultaneously, and program autonomous robots with Arduino. I also work with tools like Webflow for rapid web design and deployment.
                </p>
                <p>
                  I've interned at CAMTEL (Cameroon Telecommunications), co-founded Terra Talent and Terra Crowd Fund, and was selected for the U.S. Embassy's entrepreneurship accelerator.
                </p>
                <p>
                  Beyond tech, I was recognized with the Red Feather Award 2017 — Best Child Actor in Cameroon. I've served as a Yale Model African Union delegate, won a gold medal in a soccer tournament, and placed in the top 15% of the International Youth Math Challenge.
                </p>
                <p>
                  I represent my fellow students as FETUC Representative at SUP'PTIC and UNIFAC Representative. I believe in building communities, not just code. That's why I founded Absurd Geeks — a tech community for curiosity-driven builders.
                </p>
                <p>
                  I'm currently mastering React, TypeScript, Tailwind CSS, Laravel, and Next.js — adding modern web development to my already deep skillset in networking, cybersecurity, and infrastructure.
                </p>
                <p>
                  If you're looking for a network engineer, developer, security auditor, or someone who can do it all — I'm the one for you.
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

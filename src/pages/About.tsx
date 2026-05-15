import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import profileImg from '@/assets/Ateh.jpg';

const About = () => {
  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="About Ateh Frank Ateh — Network & Software Engineer from Cameroon" description="Learn about Ateh Frank Ateh (Frank Ateh, Ateh Frank Jr) — SUP'PTIC graduate, Network Engineer, Software Engineer and Cybersecurity builder from Cameroon." path="/about" type="profile" />
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
                  I'm Ateh Frank Ateh, a computer networks and software engineering student at SUP'PTIC in Yaoundé, Cameroon. I'm a developer, systems builder, and someone deeply fascinated by how technology works beneath the surface.
                </p>
                <p>
                  My journey with computers didn't begin in a classroom. It started with curiosity — and a small family problem.
                </p>
                <p>
                  When I was younger, my little sister accidentally locked an Android phone after entering the wrong password too many times. Everyone around me assumed the phone was finished. I wasn't so sure. I decided to try fixing it myself.
                </p>
                <p>
                  I didn't know exactly what I was doing at the time. I spent weeks researching, experimenting, breaking things and starting again. It took months of trial and error, but eventually I figured out how to factory reset the device and bring it back to life.
                </p>
                <p>
                  The feeling I had when that phone finally booted up again is something I've never forgotten. That moment changed everything.
                </p>
                <p>
                  From that day on, I became the person who wanted to understand how things worked — not just how to use them. I started exploring computers, networks, and software. I learned to code, experimented with systems, and slowly began building projects of my own.
                </p>
                <p>
                  Over the years I moved from simple programming experiments to building real systems. I've developed web and mobile applications, deployed cloud environments, designed complex databases, and built full network infrastructures in virtual labs. I've worked on cybersecurity environments using tools like Kali Linux and Metasploit, deployed monitoring systems such as Wazuh and Zabbix, and configured multi-server Linux environments providing services like DNS, DHCP, Apache, and mail.
                </p>
                <p>
                  I've also built autonomous robotics projects using Arduino, designed NoSQL database architectures across multiple paradigms, and deployed cloud infrastructure using OpenStack.
                </p>
                <p>
                  But beyond the tools and technologies, what really drives me is the process of building and understanding systems deeply. I often describe myself as a vibe coder — someone who builds through intuition, curiosity, and experimentation. I don't just write code; I feel the architecture, debug by intuition, and ship things that shouldn't work but somehow do.
                </p>
                <p>
                  Along the way I've had the opportunity to work beyond just personal projects. I interned at Cameroon Telecommunications, where I gained exposure to real telecommunications infrastructure and enterprise environments. I've co-founded projects like Terra Talent and Terra Crowd Fund, initiatives focused on empowering talent and supporting communities through technology.
                </p>
                <p>
                  Outside of engineering, my journey has taken me into many different spaces. I was honored with the Red Feather Award for Best Child Actor in Cameroon, represented students in leadership forums like UNIFAC and FETUC, and participated in international programs such as the Yale Model African Union through Open Dreams. Those experiences shaped how I see technology: not just as code, but as a tool for building systems, communities, and opportunities.
                </p>
                <p>
                  Today, I continue expanding my skills across software engineering, networking, cybersecurity, and cloud infrastructure, while mastering modern development tools like React, TypeScript, Tailwind CSS, and Next.js.
                </p>
                <p>
                  I'm always building, always experimenting, and always looking for the next problem worth solving.
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

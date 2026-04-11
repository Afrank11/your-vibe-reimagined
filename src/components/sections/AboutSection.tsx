import AnimatedSection from '../AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import profileImg from '@/assets/Ateh.jpg';

const AboutSection = () => {
  return (
    <AnimatedSection className="py-20 px-4 relative z-10" delay={0.1}>
      <div className="container mx-auto max-w-5xl" id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-primary text-glow">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-mono-game text-sm">
          &gt; whoami
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Ateh Frank Ateh"
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-primary/30 box-glow"
            />
          </div>
          <div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">📍</span>
                <span className="text-muted-foreground">Cameroon</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">🎓</span>
                <span className="text-muted-foreground">Network Engineering & Cybersecurity</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">💻</span>
                <span className="text-muted-foreground">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">🔒</span>
                <span className="text-muted-foreground">Cybersecurity Enthusiast</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              I'm Ateh Frank Ateh — a network engineer, developer, and builder from Cameroon. 
              I'm passionate about bridging the gap between infrastructure and software, 
              building secure systems, and crafting clean, impactful digital experiences.
            </p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Whether it's architecting a 7-server Linux infrastructure, building a cybersecurity virtual lab, 
              or developing full-stack web applications with React and Laravel — I bring a builder's mindset to everything I do.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-mono-game text-sm hover:gap-4 transition-all"
            >
              Read My Full Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;

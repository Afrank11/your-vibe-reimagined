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
                <span className="text-muted-foreground">Yaoundé, Cameroon</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">🎓</span>
                <span className="text-muted-foreground">SUP'PTIC — Computer Networks & Software Engineering</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">💻</span>
                <span className="text-muted-foreground">Developer & Vibe Coder</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">🔒</span>
                <span className="text-muted-foreground">Cybersecurity Enthusiast</span>
              </div>
              <div className="flex items-center gap-3 font-mono-game text-sm">
                <span className="text-primary">🚀</span>
                <span className="text-muted-foreground">Entrepreneur</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              I'm Ateh Frank Ateh — a future Ingénieur Informatique et Réseaux studying at SUP'PTIC, Yaoundé, Cameroon. 
              I'm a developer, vibe coder, and entrepreneur. A vibe coder is someone who builds with instinct, curiosity, 
              and energy — not just following tutorials but actually feeling and understanding systems deeply.
            </p>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              With over a decade of experience, I build websites, mobile apps, and network applications. 
              I do security auditing and monitoring, and I build enterprise-grade security labs, deploy multi-server Linux infrastructures, 
              and program autonomous robots.
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

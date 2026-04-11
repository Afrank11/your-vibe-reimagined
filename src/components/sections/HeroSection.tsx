import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Eye, BookOpen, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSound } from '../SoundEffects';
import profileImg from '@/assets/Ateh.jpg';

const titles = [
  "Network Engineer",
  "Developer",
  "Vibe Coder",
  "Builder",
  "Cybersecurity Enthusiast",
  "Entrepreneur",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-28 md:pt-16 px-4">
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <img
              src={profileImg}
              alt="Ateh Frank Ateh"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary box-glow mx-auto"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono-game whitespace-nowrap"
            >
              🟢 Available for collaboration
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          <span className="text-foreground">Ateh </span>
          <span className="text-primary text-glow hero-name-hover">Frank Ateh</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-mono-game text-lg md:text-xl text-muted-foreground mb-8 h-8"
        >
          <span className="text-primary">&gt; </span>
          <span className="hero-typing-text">{titles[titleIndex].slice(0, charIndex)}</span>
          <span className="animate-blink text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base"
        >
          Passionate about building secure networks, writing clean code, and creating impactful solutions.
          From enterprise infrastructure to full-stack web apps — I bring ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-all hover:scale-105"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <Eye size={16} /> View Projects
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-mono-game text-sm hover:bg-primary/10 transition-all hover:scale-105"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <BookOpen size={16} /> My Story
          </Link>
          <a
            href="/Ateh_Frank_Ateh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-mono-game text-sm hover:border-primary hover:text-primary transition-all hover:scale-105"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <Download size={16} /> CV
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-mono-game text-sm hover:border-primary hover:text-primary transition-all hover:scale-105"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            <Mail size={16} /> Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-orbitron text-sm font-bold hover:scale-105 transition-transform box-glow"
            onClick={playClick}
            onMouseEnter={playHover}
          >
            🚀 Hire Me Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

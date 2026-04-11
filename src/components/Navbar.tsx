import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX, Github, Linkedin, Download, Sun, Moon, Languages } from 'lucide-react';
import { useSound } from './SoundEffects';
import { useTheme } from './ThemeProvider';
import { useLanguage } from './LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', nameFr: 'Accueil', path: '/' },
  { name: 'About', nameFr: 'À propos', path: '/about' },
  { name: 'Projects', nameFr: 'Projets', path: '/projects' },
  { name: 'Experience', nameFr: 'Expérience', path: '/experience' },
  { name: 'Blog', nameFr: 'Blog', path: '/blog' },
  { name: 'Guestbook', nameFr: "Livre d'or", path: '/guestbook' },
  { name: 'Contact', nameFr: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { soundEnabled, toggleSound, playClick, playHover } = useSound();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-orbitron text-xl font-bold text-primary text-glow"
          onClick={playClick}
        >
          AFA
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-mono-game transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary text-glow' : 'text-muted-foreground'
              }`}
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {language === 'fr' ? link.nameFr : link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => { toggleLanguage(); playClick(); }}
            onMouseEnter={playHover}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary flex items-center gap-1 text-xs font-mono-game"
            title={language === 'en' ? 'Traduire en français' : 'Translate to English'}
          >
            <Languages size={16} />
            <span className="uppercase">{language}</span>
          </button>
          <button
            onClick={() => { toggleSound(); playClick(); }}
            onMouseEnter={playHover}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            onClick={() => { toggleTheme(); playClick(); }}
            onMouseEnter={playHover}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/Afrank11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            onMouseEnter={playHover}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/frank-ateh-ateh-98760321a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            onMouseEnter={playHover}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="/Ateh_Frank_Ateh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono-game text-sm hover:opacity-90 transition-opacity"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <Download size={14} /> CV
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => { toggleLanguage(); playClick(); }}
            className="p-2 text-muted-foreground hover:text-primary text-xs font-mono-game flex items-center gap-1"
          >
            <Languages size={16} />
            <span className="uppercase">{language}</span>
          </button>
          <button
            onClick={() => { toggleSound(); playClick(); }}
            className="p-2 text-muted-foreground hover:text-primary"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            onClick={() => { toggleTheme(); playClick(); }}
            className="p-2 text-muted-foreground hover:text-primary"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => { setMobileOpen(!mobileOpen); playClick(); }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-mono-game py-2 transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => { setMobileOpen(false); playClick(); }}
                >
                  {'> '}{language === 'fr' ? link.nameFr : link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <a href="https://github.com/Afrank11" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/frank-ateh-ateh-98760321a" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Linkedin size={18} />
                </a>
                <a
                  href="/Ateh_Frank_Ateh_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono-game text-sm"
                >
                  <Download size={14} /> CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

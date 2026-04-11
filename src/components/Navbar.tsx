import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX, Github, Linkedin, Download } from 'lucide-react';
import { useSound } from './SoundEffects';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Blog', path: '/blog' },
  { name: 'Guestbook', path: '/guestbook' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { soundEnabled, toggleSound, playClick, playHover } = useSound();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-orbitron text-xl font-bold text-primary text-glow"
          onClick={playClick}
        >
          FA
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
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => { toggleSound(); playClick(); }}
            onMouseEnter={playHover}
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <a
            href="https://github.com/FrankAteh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            onMouseEnter={playHover}
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ateh-frank-ateh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            onMouseEnter={playHover}
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-mono-game text-sm hover:opacity-90 transition-opacity"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <Download size={14} /> CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => { setMobileOpen(!mobileOpen); playClick(); }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                  {'> '}{link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <button onClick={() => { toggleSound(); playClick(); }} className="p-2 text-muted-foreground hover:text-primary">
                  {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <a href="https://github.com/FrankAteh" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/ateh-frank-ateh" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Linkedin size={18} />
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

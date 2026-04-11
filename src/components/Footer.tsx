import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/Afrank11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/frank-ateh-ateh-98760321a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/FrankAteh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="mailto:atehfrank11@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p className="font-mono-game text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary">Ateh Frank Ateh</span>
        </p>
        <p className="font-mono-game text-xs text-muted-foreground mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { contactInfo } from '@/data/portfolio';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={20} />
          </a>
          <a href={contactInfo.whatsappPrimary} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
        <p className="font-mono-game text-sm text-muted-foreground">
          {t('Designed & Built by', 'Concu et developpe par')} <span className="text-primary">Ateh Frank Ateh</span>
        </p>
        <p className="font-mono-game text-xs text-muted-foreground mt-2">
          &copy; {new Date().getFullYear()} {t('All rights reserved.', 'Tous droits reserves.')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

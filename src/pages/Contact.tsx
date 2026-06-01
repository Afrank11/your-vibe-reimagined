import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { contactInfo } from '@/data/portfolio';
import { Mail, Send, Github, Linkedin, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailTo = `mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailTo;
  };

  const contactCards = [
    { icon: <Mail size={20} />, label: t('Email', 'Email'), value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: <Phone size={20} />, label: t('Phone', 'Telephone'), value: contactInfo.phonePrimary, href: `tel:${contactInfo.phonePrimary.replace(/\s/g, '')}` },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: contactInfo.phoneSecondary, href: contactInfo.whatsappSecondary },
    { icon: <Github size={20} />, label: 'GitHub', value: 'Afrank11', href: contactInfo.github },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Ateh Frank Ateh', href: contactInfo.linkedin },
  ];

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Contact Ateh Frank Ateh - Hire a Network & Software Engineer" description="Get in touch with Ateh Frank Ateh for collaboration, hiring, or consulting on networking, cybersecurity and software projects." path="/contact" />
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('Get in', 'Entrer en')} <span className="text-primary text-glow">{t('Touch', 'Contact')}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; ssh contact@atehfrank.com</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {contactCards.map(card => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all hover:scale-105 block"
            >
              <div className="text-primary mb-2 flex justify-center">{card.icon}</div>
              <p className="text-xs text-muted-foreground font-mono-game">{card.label}</p>
              <p className="text-sm text-foreground break-words">{card.value}</p>
            </a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder={t('Your name', 'Votre nom')}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder={t('Your email', 'Votre email')}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            placeholder={t('Subject', 'Sujet')}
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none mb-4"
            required
          />
          <textarea
            placeholder={t('Your message...', 'Votre message...')}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            rows={5}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none mb-4"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-opacity"
          >
            <Send size={16} /> {t('Send Message', 'Envoyer le message')}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

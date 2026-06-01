import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { useLanguage } from '@/components/LanguageProvider';
import { MessageSquare, PenLine, Trash2 } from 'lucide-react';

type GuestbookMessage = {
  name: string;
  message: string;
  date: string;
};

const storageKey = 'afa-guestbook-messages';

const sampleMessages: GuestbookMessage[] = [
  { name: 'Visitor', message: 'Amazing portfolio! Love the gaming aesthetic.', date: '2024' },
  { name: 'Dev Friend', message: 'The terminal animations are so cool. Keep building.', date: '2024' },
  { name: 'Recruiter', message: "Impressive projects, especially the security lab. Let's connect!", date: '2024' },
];

const Guestbook = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<GuestbookMessage[]>(sampleMessages);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setMessages([
      {
        name: name.trim(),
        message: message.trim(),
        date: new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date()),
      },
      ...messages,
    ]);
    setName('');
    setMessage('');
  };

  const resetGuestbook = () => {
    setMessages(sampleMessages);
    window.localStorage.removeItem(storageKey);
  };

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Guestbook - Ateh Frank Ateh" description="Sign the guestbook of Ateh Frank Ateh and leave a message." path="/guestbook" />
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">{t('Guestbook', "Livre d'or")}</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; echo "{t('Leave a message!', 'Laissez un message !')}"</p>
        </motion.div>

        <AnimatedSection>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder={t('Your name', 'Votre nom')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                placeholder={t('Leave a message...', 'Laissez un message...')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
              />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-opacity"
                >
                  <PenLine size={16} /> {t('Sign Guestbook', 'Signer le livre')}
                </button>
                <button
                  type="button"
                  onClick={resetGuestbook}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-muted-foreground rounded-lg font-mono-game text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  <Trash2 size={16} /> {t('Reset', 'Reinitialiser')}
                </button>
              </div>
            </div>
          </form>
        </AnimatedSection>

        <div className="space-y-4">
          {messages.map((entry, i) => (
            <AnimatedSection key={`${entry.name}-${entry.date}-${i}`} delay={i * 0.08}>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={14} className="text-primary" />
                  <span className="font-bold text-sm">{entry.name}</span>
                  <span className="text-muted-foreground text-xs">- {entry.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{entry.message}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;

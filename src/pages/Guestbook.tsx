import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import SEO from '@/components/SEO';
import { MessageSquare } from 'lucide-react';

const sampleMessages = [
  { name: "Visitor", message: "Amazing portfolio! Love the gaming aesthetic 🎮", date: "2024" },
  { name: "Dev Friend", message: "The terminal animations are so cool! Keep building 🚀", date: "2024" },
  { name: "Recruiter", message: "Impressive projects, especially the security lab. Let's connect!", date: "2024" },
];

const Guestbook = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(sampleMessages);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setMessages([{ name, message, date: new Date().getFullYear().toString() }, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <SEO title="Guestbook — Ateh Frank Ateh" description="Sign the guestbook of Ateh Frank Ateh and leave a message." path="/guestbook" />
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Guestbook</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; echo "Leave a message!"</p>
        </motion.div>

        <AnimatedSection>
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 mb-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <textarea
                placeholder="Leave a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-mono-game text-sm hover:opacity-90 transition-opacity"
              >
                ✍️ Sign Guestbook
              </button>
            </div>
          </form>
        </AnimatedSection>

        <div className="space-y-4">
          {messages.map((m, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={14} className="text-primary" />
                  <span className="font-bold text-sm">{m.name}</span>
                  <span className="text-muted-foreground text-xs">• {m.date}</span>
                </div>
                <p className="text-muted-foreground text-sm">{m.message}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;

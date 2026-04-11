import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailTo = `mailto:atehfrankateh@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailTo);
  };

  return (
    <div className="pt-24 md:pt-20 pb-20 px-4 relative z-10 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary text-glow">Touch</span>
          </h1>
          <p className="font-mono-game text-muted-foreground text-sm">&gt; ssh contact@frankateh.dev</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: <Mail size={20} />, label: "Email", value: "atehfrank11@gmail.com", href: "mailto:atehfrank11@gmail.com" },
            { icon: <Github size={20} />, label: "GitHub", value: "Afrank11", href: "https://github.com/Afrank11" },
            { icon: <Linkedin size={20} />, label: "LinkedIn", value: "Ateh Frank Ateh", href: "https://linkedin.com/in/frank-ateh-ateh-98760321a" },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all hover:scale-105 block"
            >
              <div className="text-primary mb-2 flex justify-center">{c.icon}</div>
              <p className="text-xs text-muted-foreground font-mono-game">{c.label}</p>
              <p className="text-sm text-foreground">{c.value}</p>
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
              placeholder="Your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm font-mono-game text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none mb-4"
            required
          />
          <textarea
            placeholder="Your message..."
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
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;

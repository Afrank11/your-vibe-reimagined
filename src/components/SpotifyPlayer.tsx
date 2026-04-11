import { useState } from 'react';
import { Music, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SpotifyPlayer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-3 rounded-xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://open.spotify.com/embed/track/5g0YH8ubl5G5qHid3sNbbU?utm_source=generator&theme=0"
              width="300"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg box-glow hover:scale-110 transition-transform"
      >
        {open ? <X size={20} /> : <Music size={20} />}
      </button>
    </div>
  );
};

export default SpotifyPlayer;

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playHover: () => void;
  playNav: () => void;
}

const SoundContext = createContext<SoundContextType>({
  soundEnabled: true,
  toggleSound: () => {},
  playClick: () => {},
  playHover: () => {},
  playNav: () => {},
});

export const useSound = () => useContext(SoundContext);

const createOscillator = (frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.1) => {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {}
};

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = useCallback(() => setSoundEnabled(p => !p), []);

  const playClick = useCallback(() => {
    if (!soundEnabled) return;
    createOscillator(800, 0.1, 'square', 0.05);
  }, [soundEnabled]);

  const playHover = useCallback(() => {
    if (!soundEnabled) return;
    createOscillator(600, 0.05, 'sine', 0.03);
  }, [soundEnabled]);

  const playNav = useCallback(() => {
    if (!soundEnabled) return;
    createOscillator(1000, 0.15, 'sine', 0.06);
    setTimeout(() => createOscillator(1200, 0.1, 'sine', 0.04), 80);
  }, [soundEnabled]);

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, playHover, playNav }}>
      {children}
    </SoundContext.Provider>
  );
};

import { useEffect, useState, useRef } from 'react';
import AnimatedSection from '../AnimatedSection';
import { useLanguage } from '../LanguageProvider';

const stats = [
  { label: "Lines of Code", labelFr: "Lignes de code", value: 50000, suffix: "+" },
  { label: "Projects Built", labelFr: "Projets realises", value: 19, suffix: "+" },
  { label: "Years Experience", labelFr: "Annees d'experience", value: 10, suffix: "+" },
  { label: "Hours Coding", labelFr: "Heures de code", value: 5000, suffix: "+" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-5xl font-bold text-primary text-glow font-orbitron">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

const ExperienceNumbers = () => {
  const { language, t } = useLanguage();

  return (
    <AnimatedSection className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('Experience', 'Experience')} <span className="text-primary text-glow">{t('Numbers', 'en chiffres')}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <Counter target={s.value} suffix={s.suffix} />
              <p className="text-muted-foreground font-mono-game text-xs mt-2">{language === 'fr' ? s.labelFr : s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceNumbers;

import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t('Oops! Page not found', 'Oups ! Page introuvable')}</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t('Return to Home', "Retour a l'accueil")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

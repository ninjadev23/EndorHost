import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  ES: {
    'nav.home': 'Inicio',
    'nav.plans': 'Planes',
    'nav.hardware': 'Hardware',
    'nav.reviews': 'Reseñas',
    'nav.payment': 'Pago',
    'nav.discord': 'Discord',
    'hero.badge': 'Hardware de Última Generación',
    'hero.title.pre': 'Hosting Premium para Minecraft y ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost ofrece los mejores precios del mercado con hardware de última generación. Más de 32.000 clientes satisfechos y contando.',
    'hero.btn.plans': 'Ver Planes',
    'hero.btn.discord': 'Unirse al Discord',
    'login.title': 'EndorHost',
    'login.subtitle': 'Accede a tu panel de control',
    'login.userLabel': 'Usuario o correo electrónico',
    'login.passLabel': 'Contraseña',
    'login.btn': 'Entrar',
    'login.forgot': '¿Olvidaste tu contraseña?',
    'login.noServer': '¿No tienes un servidor? Consíguelo ahora',
    'login.error.email': 'Por favor, introduce un email válido',
    'login.error.password': 'Contraseña invalida',
    'login.noAccount': '¿Aún no tienes cuenta?',
    'login.signupLink': 'Crear una cuenta nueva',
    'signup.title': 'EndorHost',
    'signup.subtitle': '¡Crea tu cuenta!',
    'signup.userLabel': 'Nombre de usuario',
    'signup.emailLabel': 'Correo electrónico',
    'signup.passLabel': 'Contraseña',
    'signup.btn': 'Registrarse',
    'signup.error.email': 'Por favor, introduce un email válido',
    'signup.error.password': 'La contraseña debe tener al menos 6 caracteres',
    'signup.noServer': '¿No tienes un servidor? Consíguelo ahora',
    'signup.alreadyAccount': '¿Ya tienes una cuenta?',
    'signup.loginLink': 'Inicia sesión'
  },
  EN: {
    'nav.home': 'Home',
    'nav.plans': 'Plans',
    'nav.hardware': 'Hardware',
    'nav.reviews': 'Reviews',
    'nav.payment': 'Payment',
    'nav.discord': 'Discord',
    'hero.badge': 'Next-Gen Hardware',
    'hero.title.pre': 'Premium Hosting for Minecraft & ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost offers the best market prices with next-generation hardware. Over 32,000 satisfied customers and counting.',
    'hero.btn.plans': 'View Plans',
    'hero.btn.discord': 'Join Discord',
    'login.title': 'EndorHost',
    'login.subtitle': 'Access your control panel',
    'login.userLabel': 'Username or email address',
    'login.passLabel': 'Password',
    'login.btn': 'Login',
    'login.forgot': 'Forgot your password?',
    'login.noServer': "Don't have a server? Get it now",
    'login.error.email': 'Please enter a valid email',
    'login.error.password': 'Password must be at least 6 characters',
    'login.noAccount': "Don't have an account yet?",
    'login.signupLink': 'Create a new account',
    'signup.title': 'EndorHost',
    'signup.subtitle': 'Create your account!',
    'signup.userLabel': 'Username',
    'signup.emailLabel': 'Email address',
    'signup.passLabel': 'Password',
    'signup.btn': 'Register',
    'signup.error.email': 'Please enter a valid email',
    'signup.error.password': 'Password must be at least 6 characters',
    'signup.noServer': "Don't have a server? Get it now",
    'signup.alreadyAccount': 'Already have an account?',
    'signup.loginLink': 'Login'
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ES');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

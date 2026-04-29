/* eslint-disable react-refresh/only-export-components */
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
    // Nav
    'nav.home': 'Inicio', 'nav.plans': 'Planes', 'nav.hardware': 'Hardware',
    'nav.reviews': 'Reseñas', 'nav.payment': 'Pago', 'nav.discord': 'Discord',
    'nav.services': 'Servicios', 'nav.login': 'Iniciar Sesión',
    // Promo
    'promo.text': '¡Oferta de bienvenida!', 'promo.suffix': 'en tu primer mes usando el código',
    'promo.link': 'Ver planes →',
    // Hero
    'hero.badge': 'Hardware de Última Generación',
    'hero.title.pre': 'Hosting Premium para Minecraft y ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost ofrece los mejores precios del mercado con hardware de última generación. Más de 32.000 clientes satisfechos y contando.',
    'hero.btn.plans': '🚀 Ver Planes', 'hero.btn.discord': 'Discord',
    'hero.live': 'jugadores conectados ahora mismo',
    'hero.b1': 'Java & Bedrock.', 'hero.b2': 'Anti-DDoS Avanzado.',
    'hero.b3': '+5.000 clientes activos.', 'hero.b4': 'Slots ilimitados.',
    'hero.b5': 'Uptime 99.9%.', 'hero.b6': 'Soporte 24/7 Discord.',
    // Stats
    'stats.s1': '32.000+', 'stats.l1': 'Compras Satisfechas',
    'stats.s2': '99.9%',   'stats.l2': 'Uptime Garantizado',
    'stats.s3': '24/7',    'stats.l3': 'Soporte en Discord',
    'stats.s4': '5.000+',  'stats.l4': 'Clientes Activos',
    // Services section
    'svc.tag': 'Servicios',
    'svc.title1': 'Todo lo que Necesitas,', 'svc.title2': 'En Un Solo Lugar',
    'svc.sub': 'Hosting, bots, webs y dominios. Todo gestionado desde tu panel.',
    'svc.1.tag': 'HOSTING', 'svc.1.title': 'Servidores Minecraft',
    'svc.1.desc': 'Java & Bedrock. Instalación instantánea, panel Multicraft, backups automáticos y DDoS protection avanzada. Desde €4.99/mes.',
    'svc.1.badge': 'Más Popular', 'svc.1.cta': 'Ver Planes',
    'svc.2.tag': 'BOTS', 'svc.2.title': 'Bots de Discord',
    'svc.2.desc': 'Hosting 24/7 para tus bots. Sin caídas, sin límites. Compatible con Node.js, Python y más. Panel de control incluido.',
    'svc.2.badge': 'Nuevo', 'svc.2.cta': 'Más Info',
    'svc.3.tag': 'WEB', 'svc.3.title': 'Páginas Web',
    'svc.3.desc': 'Desarrollo profesional de landing pages, webs corporativas y e-commerce. Diseño moderno y optimizado para conversión.',
    'svc.3.badge': 'Premium', 'svc.3.cta': 'Solicitar',
    'svc.4.tag': 'DOMINIOS', 'svc.4.title': 'Dominios',
    'svc.4.desc': 'Registra tu dominio y gestiona tus DNS desde un solo panel. Disponible con o sin hosting. Precios competitivos.',
    'svc.4.cta': 'Ver Dominios',
    // Hardware section
    'hw.tag': 'Infraestructura',
    'hw.title1': 'Hardware de', 'hw.title2': 'Última Generación',
    'hw.sub': 'Los mejores componentes del mercado para garantizar el máximo rendimiento y estabilidad.',
    'hw.spec1.title': 'Procesadores', 'hw.spec1.l1': 'AMD EPYC 7003 Series', 'hw.spec1.l2': 'Intel Xeon Platinum Gen 4', 'hw.spec1.badge': 'Hasta 64 Cores',
    'hw.spec2.title': 'Memoria RAM', 'hw.spec2.l1': 'DDR5 ECC', 'hw.spec2.l2': 'Velocidad: 4800 MHz', 'hw.spec2.badge': 'Hasta 2 TB',
    'hw.spec3.title': 'Almacenamiento', 'hw.spec3.l1': 'NVMe SSD Gen 4', 'hw.spec3.l2': 'Lectura: 7.000 MB/s', 'hw.spec3.badge': 'RAID 10',
    'hw.spec4.title': 'Red & Seguridad', 'hw.spec4.l1': 'Conexión 10 Gbps', 'hw.spec4.l2': 'Protección DDoS Avanzada', 'hw.spec4.badge': 'Banda Ilimitada',
    'hw.why': '¿Por qué EndorHost?',
    'hw.p1': 'Instalación de servidor en menos de 60 segundos',
    'hw.p2': 'Panel de control intuitivo y potente',
    'hw.p3': 'Backups automáticos incluidos en todos los planes',
    'hw.p4': 'Migración gratuita desde cualquier proveedor',
    'hw.p5': 'IPs dedicadas disponibles',
    'hw.p6': 'Soporte técnico en español 24/7',
    'hw.dc.label': 'Infraestructura Propia', 'hw.dc.sub': 'Rendimiento. Estabilidad. Confianza.',
    'hw.btn1': 'VPS Dedicado +10€/mes', 'hw.btn2': 'Servidor Dedicado +10€/mes',
    // Reviews
    'rv.tag': 'Comunidad',
    'rv.title1': 'Lo Que Dicen', 'rv.title2': 'Nuestros Clientes',
    'rv.sub': 'Más de 5.000 clientes satisfechos confían en EndorHost.',
    'rv.rating': 'de 5 · más de 500 reseñas',
    'rv.cta': 'Únete a nuestra comunidad →',
    // Footer
    'ft.cta.pre': '¡Empieza hoy!',
    'ft.cta.title1': 'Crea tu Servidor', 'ft.cta.title2': 'en menos de 60 segundos',
    'ft.cta.sub': 'Sin compromisos. Migración gratuita desde otro host.',
    'ft.cta.btn1': 'Ver Planes →', 'ft.cta.btn2': 'Discord',
    'ft.brand.desc': 'Hosting premium para Minecraft, Discord Bots, webs y dominios. Hardware de última generación a precios accesibles.',
    'ft.col1': 'Servicios', 'ft.col2': 'Soporte', 'ft.col3': 'Empresa',
    'ft.s1': 'Hosting Minecraft', 'ft.s2': 'Hosting Discord Bots', 'ft.s3': 'Desarrollo Web',
    'ft.s4': 'Dominios', 'ft.s5': 'VPS Dedicado',
    'ft.sup1': 'Servidor de Discord', 'ft.sup2': 'Estado del Sistema', 'ft.sup3': 'Métodos de Pago',
    'ft.sup4': 'Migración Gratuita', 'ft.sup5': 'Términos y Condiciones',
    'ft.c1': 'Sobre Nosotros', 'ft.c2': 'Afiliados', 'ft.c3': 'Blog', 'ft.c4': 'Contacto',
    'ft.copy': '© {year} EndorHost. Todos los derechos reservados.',
    'ft.infra': 'Infraestructura global · 13+ ubicaciones',
    'ft.privacy': 'Privacidad', 'ft.terms': 'Términos', 'ft.refund': 'Reembolsos',
    // Login / Signup
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
    // Nav
    'nav.home': 'Home', 'nav.plans': 'Plans', 'nav.hardware': 'Hardware',
    'nav.reviews': 'Reviews', 'nav.payment': 'Payment', 'nav.discord': 'Discord',
    'nav.services': 'Services', 'nav.login': 'Login',
    // Promo
    'promo.text': 'Welcome offer!', 'promo.suffix': 'on your first month using code',
    'promo.link': 'View plans →',
    // Hero
    'hero.badge': 'Next-Gen Hardware',
    'hero.title.pre': 'Premium Hosting for Minecraft & ',
    'hero.title.gradient': 'Discord Bots',
    'hero.subtitle': 'EndorHost offers the best market prices with next-generation hardware. Over 32,000 satisfied customers and counting.',
    'hero.btn.plans': '🚀 View Plans', 'hero.btn.discord': 'Discord',
    'hero.live': 'players connected right now',
    'hero.b1': 'Java & Bedrock.', 'hero.b2': 'Advanced Anti-DDoS.',
    'hero.b3': '+5,000 active clients.', 'hero.b4': 'Unlimited slots.',
    'hero.b5': '99.9% Uptime.', 'hero.b6': '24/7 Discord support.',
    // Stats
    'stats.s1': '32,000+', 'stats.l1': 'Satisfied Purchases',
    'stats.s2': '99.9%',   'stats.l2': 'Guaranteed Uptime',
    'stats.s3': '24/7',    'stats.l3': 'Discord Support',
    'stats.s4': '5,000+',  'stats.l4': 'Active Clients',
    // Services
    'svc.tag': 'Services',
    'svc.title1': 'Everything You Need,', 'svc.title2': 'In One Place',
    'svc.sub': 'Hosting, bots, websites and domains. All managed from your panel.',
    'svc.1.tag': 'HOSTING', 'svc.1.title': 'Minecraft Servers',
    'svc.1.desc': 'Java & Bedrock. Instant setup, Multicraft panel, automatic backups and advanced DDoS protection. From €4.99/month.',
    'svc.1.badge': 'Most Popular', 'svc.1.cta': 'View Plans',
    'svc.2.tag': 'BOTS', 'svc.2.title': 'Discord Bots',
    'svc.2.desc': '24/7 hosting for your bots. No downtime, no limits. Compatible with Node.js, Python and more. Control panel included.',
    'svc.2.badge': 'New', 'svc.2.cta': 'Learn More',
    'svc.3.tag': 'WEB', 'svc.3.title': 'Web Development',
    'svc.3.desc': 'Professional development of landing pages, corporate sites and e-commerce. Modern design optimized for conversion.',
    'svc.3.badge': 'Premium', 'svc.3.cta': 'Request',
    'svc.4.tag': 'DOMAINS', 'svc.4.title': 'Domains',
    'svc.4.desc': 'Register your domain and manage your DNS from a single panel. Available with or without hosting. Competitive pricing.',
    'svc.4.cta': 'View Domains',
    // Hardware
    'hw.tag': 'Infrastructure',
    'hw.title1': 'Next-Generation', 'hw.title2': 'Hardware',
    'hw.sub': 'The best components on the market to guarantee maximum performance and stability.',
    'hw.spec1.title': 'Processors', 'hw.spec1.l1': 'AMD EPYC 7003 Series', 'hw.spec1.l2': 'Intel Xeon Platinum Gen 4', 'hw.spec1.badge': 'Up to 64 Cores',
    'hw.spec2.title': 'RAM Memory', 'hw.spec2.l1': 'DDR5 ECC', 'hw.spec2.l2': 'Speed: 4800 MHz', 'hw.spec2.badge': 'Up to 2 TB',
    'hw.spec3.title': 'Storage', 'hw.spec3.l1': 'NVMe SSD Gen 4', 'hw.spec3.l2': 'Read: 7,000 MB/s', 'hw.spec3.badge': 'RAID 10',
    'hw.spec4.title': 'Network & Security', 'hw.spec4.l1': '10 Gbps Connection', 'hw.spec4.l2': 'Advanced DDoS Protection', 'hw.spec4.badge': 'Unlimited Bandwidth',
    'hw.why': 'Why EndorHost?',
    'hw.p1': 'Server deployment in under 60 seconds',
    'hw.p2': 'Intuitive and powerful control panel',
    'hw.p3': 'Automatic backups included in all plans',
    'hw.p4': 'Free migration from any provider',
    'hw.p5': 'Dedicated IPs available',
    'hw.p6': '24/7 technical support',
    'hw.dc.label': 'Own Infrastructure', 'hw.dc.sub': 'Performance. Stability. Trust.',
    'hw.btn1': 'Dedicated VPS +€10/mo', 'hw.btn2': 'Dedicated Server +€10/mo',
    // Reviews
    'rv.tag': 'Community',
    'rv.title1': 'What Our', 'rv.title2': 'Clients Say',
    'rv.sub': 'Over 5,000 satisfied clients trust EndorHost.',
    'rv.rating': 'out of 5 · over 500 reviews',
    'rv.cta': 'Join our community →',
    // Footer
    'ft.cta.pre': 'Get started today!',
    'ft.cta.title1': 'Launch Your Server', 'ft.cta.title2': 'in under 60 seconds',
    'ft.cta.sub': 'No commitments. Free migration from any host.',
    'ft.cta.btn1': 'View Plans →', 'ft.cta.btn2': 'Discord',
    'ft.brand.desc': 'Premium hosting for Minecraft, Discord Bots, websites and domains. Next-gen hardware at affordable prices.',
    'ft.col1': 'Services', 'ft.col2': 'Support', 'ft.col3': 'Company',
    'ft.s1': 'Minecraft Hosting', 'ft.s2': 'Discord Bot Hosting', 'ft.s3': 'Web Development',
    'ft.s4': 'Domains', 'ft.s5': 'Dedicated VPS',
    'ft.sup1': 'Discord Server', 'ft.sup2': 'System Status', 'ft.sup3': 'Payment Methods',
    'ft.sup4': 'Free Migration', 'ft.sup5': 'Terms & Conditions',
    'ft.c1': 'About Us', 'ft.c2': 'Affiliates', 'ft.c3': 'Blog', 'ft.c4': 'Contact',
    'ft.copy': '© {year} EndorHost. All rights reserved.',
    'ft.infra': 'Global infrastructure · 13+ locations',
    'ft.privacy': 'Privacy', 'ft.terms': 'Terms', 'ft.refund': 'Refunds',
    // Login / Signup
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

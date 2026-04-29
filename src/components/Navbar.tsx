import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* ── PROMO BAR — Like Holy.gg ── */}
      <div className="w-full bg-endor-primary text-white text-center text-xs font-bold py-2.5 px-4 flex items-center justify-center gap-4 relative z-50">
        <span className="animate-pulse text-endor-gold">✦</span>
        <span>
          ¡Oferta de bienvenida! <strong className="text-endor-gold">40% OFF</strong> en tu primer mes usando el código{' '}
          <span className="bg-white/20 px-2 py-0.5 rounded font-mono tracking-wider">ENDOR40</span>
        </span>
        <a href="#planes" className="hidden sm:inline-flex items-center gap-1 underline underline-offset-2 hover:text-endor-gold transition-colors font-black">
          Ver planes →
        </a>
        <span className="animate-pulse text-endor-gold">✦</span>
      </div>

      {/* ── NAVBAR ── */}
      <header
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-endor-darker/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-endor-border'
            : 'bg-endor-darker/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-layout mx-auto px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline text-inherit z-50" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/icon-e-endorhost.png"
              alt="E Logo"
              className="h-9 w-auto"
              style={{ filter: 'drop-shadow(0 0 10px rgba(157,56,255,0.7))', mixBlendMode: 'screen' }}
            />
            <span className="text-xl font-black tracking-wide text-white">EndorHost</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: t('nav.home'), href: '#inicio' },
              { label: t('nav.plans'), href: '#planes' },
              { label: t('nav.hardware'), href: '#hardware' },
              { label: t('nav.reviews'), href: '#resenas' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-endor-muted hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-endor-muted hover:text-white rounded-lg hover:bg-white/5 transition-all">
                Servicios <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-endor-card/95 backdrop-blur-xl border border-endor-border rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                {['Hosting Minecraft', 'Discord Bots', 'Páginas Web', 'Dominios'].map((s) => (
                  <a key={s} href="#" className="block px-4 py-2.5 text-sm text-endor-muted hover:text-white hover:bg-white/5 transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div
              className="flex items-center gap-1 text-xs font-bold bg-endor-card px-3 py-1.5 rounded-full border border-endor-border cursor-pointer hover:border-endor-border-hl transition-colors select-none"
              onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
            >
              <span className={language === 'ES' ? 'text-white' : 'text-endor-muted'}>ES</span>
              <span className="text-endor-muted">/</span>
              <span className={language === 'EN' ? 'text-white' : 'text-endor-muted'}>EN</span>
            </div>
            <Link to="/login" className="text-sm font-semibold text-endor-muted hover:text-white no-underline transition-colors px-3 py-2">
              Iniciar Sesión
            </Link>
            <a
              href="https://discord.gg/rAUQENzfUU"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary py-2 px-5 text-sm"
            >
              {t('nav.discord')}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden z-50 text-endor-text hover:text-endor-primary transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-endor-darker/98 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden pt-24">
          <nav className="flex flex-col items-center gap-6 mb-10 w-full px-8">
            {[
              { label: t('nav.home'), href: '#inicio' },
              { label: t('nav.plans'), href: '#planes' },
              { label: t('nav.hardware'), href: '#hardware' },
              { label: t('nav.reviews'), href: '#resenas' },
              { label: 'Servicios', href: '#servicios' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-black text-endor-muted hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-4 w-full px-12">
            <Link to="/login" className="text-xl font-bold text-endor-primary no-underline" onClick={toggleMenu}>
              Iniciar Sesión
            </Link>
            <button
              className="w-full max-w-xs btn btn-primary py-3 text-lg justify-center"
              onClick={() => { window.open('https://discord.gg/rAUQENzfUU', '_blank'); toggleMenu(); }}
            >
              Discord
            </button>
            <div
              className="flex items-center gap-3 text-base font-bold bg-endor-card px-6 py-3 rounded-full border border-endor-border cursor-pointer"
              onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
            >
              <span className={language === 'ES' ? 'text-white' : 'text-endor-muted'}>ES</span>
              <span className="text-endor-muted">/</span>
              <span className={language === 'EN' ? 'text-white' : 'text-endor-muted'}>EN</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

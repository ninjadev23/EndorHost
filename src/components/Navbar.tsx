import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(15,10,28,0.7)] backdrop-blur-[10px] border-b border-endor-border">
      <div className="max-w-layout mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 cursor-pointer no-underline text-inherit z-50" onClick={() => setIsMenuOpen(false)}>
          <img src="/icon-e-endorhost.png" alt="E Logo" className="h-10 w-auto filter drop-shadow-[0_0_10px_rgba(157,56,255,0.5)]" />
          <span className="text-2xl font-bold tracking-wide">EndorHost</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <a href="#inicio" className="text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.home')}</a>
          <a href="#planes" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.plans')}</a>
          <a href="#hardware" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.hardware')}</a>
          <a href="#resenas" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.reviews')}</a>
          <a href="#pago" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.payment')}</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/login" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors no-underline">
            Login
          </Link>
          <button className="btn btn-primary px-4 py-2 text-sm" onClick={() => window.open('https://discord.gg/rAUQENzfUU', '_blank')}>{t('nav.discord')}</button>
          <div className="flex items-center gap-1 text-xs font-bold bg-endor-card px-3 py-1.5 rounded-full border border-endor-border cursor-pointer" onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}>
            <span className={language === 'ES' ? 'text-endor-text' : 'text-endor-muted'}>GB</span>
            <span className="text-endor-muted">/</span>
            <span className={language === 'EN' ? 'text-endor-text' : 'text-endor-muted'}>EN</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden z-50 text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 w-screen h-screen bg-endor-darker/98 backdrop-blur-2xl flex flex-col items-center justify-center z-40 lg:hidden">
            <nav className="flex flex-col items-center gap-8 mb-12 -mt-40">
              <a href="#inicio" className="text-2xl font-bold text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>{t('nav.home')}</a>
              <a href="#planes" className="text-2xl font-bold text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>{t('nav.plans')}</a>
              <a href="#hardware" className="text-2xl font-bold text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>{t('nav.hardware')}</a>
              <a href="#resenas" className="text-2xl font-bold text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>{t('nav.reviews')}</a>
              <a href="#pago" className="text-2xl font-bold text-endor-text hover:text-endor-primary transition-colors" onClick={toggleMenu}>{t('nav.payment')}</a>
            </nav>

            <div className="flex flex-col items-center gap-6 w-full px-12">
              <Link to="/login" className="text-2xl font-bold text-endor-primary hover:text-endor-primary-hover transition-colors no-underline" onClick={toggleMenu}>
                Login
              </Link>
              <button className="w-full max-w-[200px] btn btn-primary py-2 text-lg" onClick={() => { window.open('https://discord.gg/rAUQENzfUU', '_blank'); toggleMenu(); }}>{t('nav.discord')}</button>
              <div className="flex items-center gap-3 text-base font-bold bg-endor-card px-6 py-3 rounded-full border border-endor-border cursor-pointer mt-4" onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}>
                <span className={language === 'ES' ? 'text-endor-text' : 'text-endor-muted'}>ES</span>
                <span className="text-endor-muted">/</span>
                <span className={language === 'EN' ? 'text-endor-text' : 'text-endor-muted'}>EN</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

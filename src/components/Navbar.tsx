import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(15,10,28,0.7)] backdrop-blur-[10px] border-b border-endor-border">
      <div className="max-w-layout mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/icon-e-endorhost.png" alt="E Logo" className="h-10 w-auto filter drop-shadow-[0_0_10px_rgba(157,56,255,0.5)]" />
          <span className="text-2xl font-bold tracking-wide">EndorHost</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.home')}</a>
          <a href="#planes" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.plans')}</a>
          <a href="#hardware" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.hardware')}</a>
          <a href="#proceso" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.process')}</a>
          <a href="#pago" className="text-endor-text hover:text-endor-primary-hover font-semibold text-[0.95rem] transition-colors">{t('nav.payment')}</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="btn btn-primary px-4 py-2 text-sm" onClick={() => window.open('https://discord.gg/rAUQENzfUU', '_blank')}>{t('nav.discord')}</button>
          <div className="flex items-center gap-1 text-xs font-bold bg-endor-card px-3 py-1.5 rounded-full border border-endor-border cursor-pointer" onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}>
            <span className={language === 'ES' ? 'text-endor-text' : 'text-endor-muted'}>GB</span>
            <span className="text-endor-muted">/</span>
            <span className={language === 'EN' ? 'text-endor-text' : 'text-endor-muted'}>EN</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

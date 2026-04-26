import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="min-h-[100vh] flex items-center justify-center pt-20 text-center animate-fade-in relative z-10 overflow-hidden">

      {/* Background Watermark Logo */}
      <img
        src="/endorhost.png"
        alt="Fondo EndorHost"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[1000px] opacity-[0.06] pointer-events-none -z-10 filter blur-[1px]"
      />

      <div className="max-w-[800px] px-8 flex flex-col items-center relative z-20">
        {/* Restored Badge instead of solid image */}
        <div className="bg-[rgba(157,56,255,0.1)] border border-endor-border-hl text-[#d991ff] px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(157,56,255,0.2)]">
          {t('hero.badge')}
        </div>

        <h1 className="text-4xl md:text-[4rem] font-extrabold leading-[1.2] mb-6">
          {t('hero.title.pre')} <span className="text-gradient">{t('hero.title.gradient')}</span>
        </h1>

        <p className="text-lg md:text-xl text-endor-muted mb-10 max-w-[600px]">
          {t('hero.subtitle')}
        </p>

        <div className="flex gap-6 justify-center">
          <a href="#planes" className="btn btn-primary">{t('hero.btn.plans')}</a>
          <a href="https://discord.gg/rAUQENzfUU" target="_blank" rel="noreferrer" className="btn btn-secondary">{t('hero.btn.discord')}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

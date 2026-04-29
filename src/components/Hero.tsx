import { useLanguage } from '../context/LanguageContext';
import { Check, Zap, Shield, Users, Server } from 'lucide-react';

const bullets = [
  { icon: <Server size={15} />, text: 'Java & Bedrock.' },
  { icon: <Zap size={15} />, text: 'Anti-DDoS Avanzado.' },
  { icon: <Users size={15} />, text: '+5.000 clientes activos.' },
  { icon: <Check size={15} />, text: 'Slots ilimitados.' },
  { icon: <Shield size={15} />, text: 'Uptime 99.9%.' },
  { icon: <Check size={15} />, text: 'Soporte 24/7 Discord.' },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/imagen1.png"
          alt="EndorHost Background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Dark vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-endor-darker via-endor-darker/80 to-endor-darker/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-endor-darker via-transparent to-endor-darker/60" />
      </div>

      {/* Purple nebula glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-endor-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-endor-secondary/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-layout mx-auto px-8 pt-28 pb-20 w-full relative z-10">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-endor-primary/10 border border-endor-border-hl text-[#d991ff] px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-[0_0_20px_rgba(157,56,255,0.2)]">
            <Zap size={14} className="text-endor-gold" />
            {t('hero.badge')}
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-[5rem] font-black leading-[1.05] mb-6 tracking-tight">
            <span className="text-white uppercase drop-shadow-[0_0_30px_rgba(157,56,255,0.4)]">
              {t('hero.title.pre')}
            </span>
            <br />
            <span
              className="uppercase"
              style={{
                background: 'linear-gradient(90deg, #9d38ff, #d991ff, #FFB800)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(157,56,255,0.5))',
              }}
            >
              {t('hero.title.gradient')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-endor-muted mb-8 max-w-xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Feature bullets — like Holy.gg */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 mb-10">
            {bullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-endor-muted">
                <span className="text-endor-primary shrink-0">{b.icon}</span>
                <span><strong className="text-white">{b.text.split(' ')[0]}</strong>{' '}{b.text.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#planes" className="btn btn-primary text-base px-8 py-3.5 shadow-[0_0_30px_rgba(157,56,255,0.5)]">
              🚀 Ver Planes
            </a>
            <a
              href="https://discord.gg/rAUQENzfUU"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary text-base px-8 py-3.5"
            >
              Discord
            </a>
          </div>

          {/* Live players badge */}
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-endor-muted">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
            <span><strong className="text-white">3.200+</strong> jugadores conectados ahora mismo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

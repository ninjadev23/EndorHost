import { Cpu, MemoryStick, HardDrive, Wifi, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hardware = () => {
  const { t } = useLanguage();

  const specs = [
    {
      icon: <Cpu size={28} />,
      title: t('hw.spec1.title'),
      lines: [t('hw.spec1.l1'), t('hw.spec1.l2')],
      badge: t('hw.spec1.badge'),
    },
    {
      icon: <MemoryStick size={28} />,
      title: t('hw.spec2.title'),
      lines: [t('hw.spec2.l1'), t('hw.spec2.l2')],
      badge: t('hw.spec2.badge'),
    },
    {
      icon: <HardDrive size={28} />,
      title: t('hw.spec3.title'),
      lines: [t('hw.spec3.l1'), t('hw.spec3.l2')],
      badge: t('hw.spec3.badge'),
    },
    {
      icon: <Wifi size={28} />,
      title: t('hw.spec4.title'),
      lines: [t('hw.spec4.l1'), t('hw.spec4.l2')],
      badge: t('hw.spec4.badge'),
    },
  ];

  const perks = [
    t('hw.p1'),
    t('hw.p2'),
    t('hw.p3'),
    t('hw.p4'),
    t('hw.p5'),
    t('hw.p6'),
  ];

  return (
    <section id="hardware" className="py-24 relative z-10 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hardware-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-endor-darker via-endor-darker/90 to-endor-darker" />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-endor-primary/40 to-transparent" />

      <div className="max-w-layout mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-black tracking-[0.25em] text-endor-primary uppercase mb-3 bg-endor-primary/10 border border-endor-border px-4 py-1.5 rounded-full">
            {t('hw.tag')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
            {t('hw.title1')}{' '}
            <span style={{
              background: 'linear-gradient(90deg,#9d38ff,#d991ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}> {t('hw.title2')}</span>
          </h2>
          <p className="text-endor-muted text-lg mt-4 max-w-xl mx-auto">
            {t('hw.sub')}
          </p>
        </div>

        {/* Spec cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {specs.map((s, i) => (
            <div
              key={i}
              className="group bg-endor-card/50 backdrop-blur-sm border border-endor-border rounded-2xl p-7 text-center hover:border-endor-border-hl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center top, rgba(157,56,255,0.1) 0%, transparent 70%)' }} />
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-endor-primary/10 border border-endor-border text-endor-primary mb-5 group-hover:shadow-[0_0_20px_rgba(157,56,255,0.3)] transition-shadow">
                {s.icon}
              </div>
              <h4 className="text-lg font-black text-white mb-3">{s.title}</h4>
              {s.lines.map((l, j) => (
                <p key={j} className="text-endor-muted text-sm leading-7">{l}</p>
              ))}
              <span className="mt-5 inline-block bg-endor-primary text-white text-xs font-black px-4 py-1.5 rounded-full shadow-[0_0_12px_rgba(157,56,255,0.4)]">
                {s.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Perks + Datacenter image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="text-2xl font-black text-white mb-6">{t('hw.why')}</h3>
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-endor-muted">
                <span className="w-5 h-5 rounded-full bg-endor-primary/10 border border-endor-border text-endor-primary flex items-center justify-center shrink-0">
                  <Check size={11} />
                </span>
                {p}
              </div>
            ))}
            <div className="flex gap-4 mt-8 flex-wrap">
              <button className="btn btn-secondary py-2.5 px-6 text-sm">{t('hw.btn1')}</button>
              <button className="btn border border-endor-gold text-endor-gold hover:bg-endor-gold/10 py-2.5 px-6 text-sm">{t('hw.btn2')}</button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-endor-border h-72 group">
            <img
              src="/imagen5.png"
              alt="EndorHost Datacenter"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-endor-darker/80 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-xs text-endor-muted uppercase tracking-widest font-bold">{t('hw.dc.label')}</p>
              <p className="text-xl font-black text-white">{t('hw.dc.sub')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;

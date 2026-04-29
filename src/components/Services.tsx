import { Server, Bot, Globe, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <Server size={32} />,
    tag: 'HOSTING',
    title: 'Servidores Minecraft',
    desc: 'Java & Bedrock. Instalación instantánea, panel Multicraft, backups automáticos y DDoS protection avanzada. Desde €4.99/mes.',
    badge: 'Más Popular',
    badgeGold: false,
    cta: 'Ver Planes',
    href: '#planes',
    glow: 'rgba(157,56,255,0.25)',
  },
  {
    icon: <Bot size={32} />,
    tag: 'BOTS',
    title: 'Bots de Discord',
    desc: 'Hosting 24/7 para tus bots. Sin caídas, sin límites. Compatible con Node.js, Python y más. Panel de control incluido.',
    badge: 'Nuevo',
    badgeGold: false,
    cta: 'Más Info',
    href: '#',
    glow: 'rgba(157,56,255,0.15)',
  },
  {
    icon: <Globe size={32} />,
    tag: 'WEB',
    title: 'Páginas Web',
    desc: 'Desarrollo profesional de landing pages, webs corporativas y e-commerce. Diseño moderno y optimizado para conversión.',
    badge: 'Premium',
    badgeGold: true,
    cta: 'Solicitar',
    href: '#',
    glow: 'rgba(255,184,0,0.15)',
  },
  {
    icon: <ShieldCheck size={32} />,
    tag: 'DOMINIOS',
    title: 'Dominios',
    desc: 'Registra tu dominio y gestiona tus DNS desde un solo panel. Disponible con o sin hosting. Precios competitivos.',
    badge: null,
    badgeGold: false,
    cta: 'Ver Dominios',
    href: '#',
    glow: 'rgba(157,56,255,0.15)',
  },
];

const Services = () => (
  <section id="servicios" className="py-24 relative z-10">
    {/* Section top gradient separator */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-endor-primary to-transparent opacity-40" />

    <div className="max-w-layout mx-auto px-8">
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-black tracking-[0.25em] text-endor-primary uppercase mb-3 bg-endor-primary/10 border border-endor-border px-4 py-1.5 rounded-full">
          Servicios
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mt-3">
          Todo lo que Necesitas,<br />
          <span style={{
            background: 'linear-gradient(90deg,#9d38ff,#d991ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            En Un Solo Lugar
          </span>
        </h2>
        <p className="text-endor-muted text-lg mt-4 max-w-xl mx-auto">
          Hosting, bots, webs y dominios. Todo gestionado desde tu panel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative group bg-endor-card/60 backdrop-blur-sm border border-endor-border rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            style={{ '--glow': s.glow } as React.CSSProperties}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ boxShadow: `inset 0 0 40px ${s.glow}` }}
            />
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-endor-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon + tag */}
            <div className="flex items-start justify-between">
              <div className="text-endor-primary p-3 bg-endor-primary/10 rounded-xl border border-endor-border group-hover:shadow-[0_0_20px_rgba(157,56,255,0.3)] transition-shadow">
                {s.icon}
              </div>
              {s.badge && (
                <span className={`text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase border ${s.badgeGold ? 'text-endor-gold border-endor-gold/40 bg-endor-gold/10' : 'text-endor-primary border-endor-border bg-endor-primary/10'}`}>
                  {s.badge}
                </span>
              )}
            </div>

            {/* Text */}
            <div className="flex-grow">
              <p className="text-[10px] font-black tracking-[0.2em] text-endor-muted uppercase mb-1">{s.tag}</p>
              <h3 className="text-xl font-black text-white mb-2 group-hover:text-endor-primary transition-colors leading-tight">{s.title}</h3>
              <p className="text-sm text-endor-muted leading-relaxed">{s.desc}</p>
            </div>

            {/* CTA */}
            <a
              href={s.href}
              className={`btn text-sm py-2.5 w-full justify-center ${s.badgeGold ? 'btn-gold' : 'btn-primary'}`}
            >
              {s.cta} →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

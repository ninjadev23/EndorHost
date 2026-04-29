import { Cpu, MemoryStick, HardDrive, Wifi, Check } from 'lucide-react';

const specs = [
  {
    icon: <Cpu size={28} />,
    title: 'Procesadores',
    lines: ['AMD EPYC 7003 Series', 'Intel Xeon Platinum Gen 4'],
    badge: 'Hasta 64 Cores',
  },
  {
    icon: <MemoryStick size={28} />,
    title: 'Memoria RAM',
    lines: ['DDR5 ECC', 'Velocidad: 4800 MHz'],
    badge: 'Hasta 2 TB',
  },
  {
    icon: <HardDrive size={28} />,
    title: 'Almacenamiento',
    lines: ['NVMe SSD Gen 4', 'Lectura: 7.000 MB/s'],
    badge: 'RAID 10',
  },
  {
    icon: <Wifi size={28} />,
    title: 'Red & Seguridad',
    lines: ['Conexión 10 Gbps', 'Protección DDoS Avanzada'],
    badge: 'Banda Ilimitada',
  },
];

const perks = [
  'Instalación de servidor en menos de 60 segundos',
  'Panel de control intuitivo y potente',
  'Backups automáticos incluidos en todos los planes',
  'Migración gratuita desde cualquier proveedor',
  'IPs dedicadas disponibles',
  'Soporte técnico en español 24/7',
];

const Hardware = () => (
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
          Infraestructura
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
          Hardware de
          <span style={{
            background: 'linear-gradient(90deg,#9d38ff,#d991ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}> Última Generación</span>
        </h2>
        <p className="text-endor-muted text-lg mt-4 max-w-xl mx-auto">
          Los mejores componentes del mercado para garantizar el máximo rendimiento y estabilidad.
        </p>
      </div>

      {/* Spec cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {specs.map((s) => (
          <div
            key={s.title}
            className="group bg-endor-card/50 backdrop-blur-sm border border-endor-border rounded-2xl p-7 text-center hover:border-endor-border-hl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center top, rgba(157,56,255,0.1) 0%, transparent 70%)' }} />
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-endor-primary/10 border border-endor-border text-endor-primary mb-5 group-hover:shadow-[0_0_20px_rgba(157,56,255,0.3)] transition-shadow">
              {s.icon}
            </div>
            <h4 className="text-lg font-black text-white mb-3">{s.title}</h4>
            {s.lines.map((l) => (
              <p key={l} className="text-endor-muted text-sm leading-7">{l}</p>
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
          <h3 className="text-2xl font-black text-white mb-6">¿Por qué EndorHost?</h3>
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-3 text-sm text-endor-muted">
              <span className="w-5 h-5 rounded-full bg-endor-primary/10 border border-endor-border text-endor-primary flex items-center justify-center shrink-0">
                <Check size={11} />
              </span>
              {p}
            </div>
          ))}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="btn btn-secondary py-2.5 px-6 text-sm">VPS Dedicado +10€/mes</button>
            <button className="btn border border-endor-gold text-endor-gold hover:bg-endor-gold/10 py-2.5 px-6 text-sm">Servidor Dedicado +10€/mes</button>
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
            <p className="text-xs text-endor-muted uppercase tracking-widest font-bold">Infraestructura Propia</p>
            <p className="text-xl font-black text-white">Rendimiento. Estabilidad. Confianza.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hardware;

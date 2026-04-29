const stats = [
  { value: '32.000+', label: 'Compras Satisfechas', glow: true },
  { value: '99.9%',   label: 'Uptime Garantizado',  glow: false },
  { value: '24/7',    label: 'Soporte en Discord',   glow: false },
  { value: '5.000+',  label: 'Clientes Activos',     glow: true  },
];

const Stats = () => (
  <section className="py-4 relative z-10">
    <div className="max-w-layout mx-auto px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-endor-border bg-endor-card/40 backdrop-blur-md border border-endor-border rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <div
            key={i}
            className="py-10 px-6 text-center relative group hover:bg-endor-primary/5 transition-colors"
          >
            <h3
              className="text-4xl md:text-5xl font-black text-white mb-2"
              style={s.glow ? { filter: 'drop-shadow(0 0 16px rgba(157,56,255,0.6))' } : {}}
            >
              {s.value}
            </h3>
            <p className="text-xs text-endor-muted tracking-[0.18em] font-bold uppercase">{s.label}</p>
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-endor-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;

import React from 'react';

const Hardware: React.FC = () => {
  return (
    <section id="hardware" className="py-20 relative bg-hardware-bg bg-cover bg-center bg-fixed border-y border-endor-border">
      <div className="max-w-layout mx-auto px-8 relative z-10">
        <h2 className="text-center text-[2.5rem] font-extrabold text-endor-primary mb-2 drop-shadow-[0_0_20px_rgba(157,56,255,0.4)]">Hardware de Última Generación</h2>
        <p className="text-center text-lg text-endor-muted mb-12">
          Utilizamos los mejores componentes del mercado para garantizar el máximo rendimiento
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Procesadores", desc: "AMD EPYC 7003 Series\nIntel Xeon Platinum Gen 4", badge: "Hasta 64 Cores", outline: false },
            { title: "Memoria RAM", desc: "DDR5 ECC\nVelocidad: 4800 MHz", badge: "Hasta 2 TB", outline: false },
            { title: "Almacenamiento", desc: "NVMe SSD Gen 4\nLectura: 7.000 MB/s", badge: "RAID 10", outline: true },
            { title: "Red", desc: "Conexión 10 Gbps\nProtección DDoS Avanzada", badge: "Ancho de Banda Ilimitado", outline: false }
          ].map((item, index) => (
            <div key={index} className="bg-[rgba(22,16,42,0.6)] border border-[rgba(157,56,255,0.1)] rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(157,56,255,0.5)] hover:shadow-[0_0_20px_rgba(157,56,255,0.1)]">
              <h4 className="text-endor-primary text-xl mb-4 font-bold">{item.title}</h4>
              <p className="text-endor-text text-sm leading-7 mb-6 whitespace-pre-line">{item.desc}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${item.outline ? 'bg-transparent border border-endor-primary text-endor-text' : 'bg-endor-primary text-white'}`}>
                {item.badge}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(22,16,42,0.4)] rounded-xl p-8 text-center border border-[rgba(157,56,255,0.1)]">
          <h4 className="text-endor-text mb-6 text-xl font-bold">Opciones de Mejora Disponibles</h4>
          <div className="flex justify-center gap-6 flex-wrap">
            <button className="bg-transparent border border-[rgba(157,56,255,0.4)] text-endor-text px-6 py-3 rounded-lg font-sans text-base cursor-pointer flex items-center gap-3 transition-colors hover:bg-[rgba(157,56,255,0.1)]">
              VPS Dedicado <span className="text-endor-muted text-sm">+10€/mes</span>
            </button>
            <button className="bg-transparent border border-endor-gold text-endor-text px-6 py-3 rounded-lg font-sans text-base cursor-pointer flex items-center gap-3 transition-colors hover:bg-[rgba(255,184,0,0.1)]">
              Servidor Dedicado <span className="text-endor-muted text-sm">+10€/mes</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;

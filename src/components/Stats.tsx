import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-layout mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-endor-card p-12 rounded-2xl border border-endor-border shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(157,56,255,0.05)] to-transparent pointer-events-none"></div>
          
          <div className="text-center relative lg:after:content-[''] lg:after:absolute lg:after:-right-4 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-px lg:after:bg-endor-border sm:[&:nth-child(2)]:after:content-[''] sm:[&:nth-child(2)]:after:absolute sm:[&:nth-child(2)]:after:-right-4 sm:[&:nth-child(2)]:after:top-[15%] sm:[&:nth-child(2)]:after:h-[70%] sm:[&:nth-child(2)]:after:w-px sm:[&:nth-child(2)]:after:bg-endor-border">
            <h3 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(157,56,255,0.5)]">32.000+</h3>
            <p className="text-sm text-endor-muted tracking-widest font-semibold uppercase">COMPRAS SATISFECHAS</p>
          </div>
          
          <div className="text-center relative lg:after:content-[''] lg:after:absolute lg:after:-right-4 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-px lg:after:bg-endor-border">
            <h3 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(157,56,255,0.5)]">99.9%</h3>
            <p className="text-sm text-endor-muted tracking-widest font-semibold uppercase">UPTIME GARANTIZADO</p>
          </div>
          
          <div className="text-center relative lg:after:content-[''] lg:after:absolute lg:after:-right-4 lg:after:top-[15%] lg:after:h-[70%] lg:after:w-px lg:after:bg-endor-border sm:[&:nth-child(2)]:after:hidden">
            <h3 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(157,56,255,0.5)]">24/7</h3>
            <p className="text-sm text-endor-muted tracking-widest font-semibold uppercase">SOPORTE EN DISCORD</p>
          </div>
          
          <div className="text-center relative">
            <h3 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(157,56,255,0.5)]">5.000+</h3>
            <p className="text-sm text-endor-muted tracking-widest font-semibold uppercase">CLIENTES ACTIVOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

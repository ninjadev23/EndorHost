import React, { useState } from 'react';
import { Check } from 'lucide-react';
import PayPalModal from './PayPalModal';

const Plans: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

  const handleBuy = (name: string, price: string) => {
    setSelectedPlan({ name, price });
    setIsModalOpen(true);
  };

  const planBaseClasses = "bg-endor-card rounded-2xl border border-[rgba(157,56,255,0.1)] p-10 relative flex flex-col transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]";

  return (
    <section id="planes" className="py-20 relative z-10">
      <div className="max-w-layout mx-auto px-8">
        <h2 className="text-center text-[2.5rem] font-extrabold text-endor-primary mb-2 drop-shadow-[0_0_20px_rgba(157,56,255,0.4)]">Nuestros Planes</h2>
        <p className="text-center text-lg text-endor-muted mb-12">Elige el plan que mejor se adapte a tu servidor</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Plan Básico */}
          <div className={planBaseClasses}>
            <div className="text-center border-b border-[rgba(157,56,255,0.1)] pb-6 mb-6">
              <h3 className="text-2xl font-bold mb-1">Básico</h3>
              <p className="text-sm text-endor-muted mb-6">Para servidores pequeños</p>
              <div className="text-endor-primary">
                <span className="text-2xl align-super">€</span>
                <span className="text-5xl font-extrabold text-white">4.99</span>
                <span className="text-base text-endor-muted">/mes</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-[0.95rem] mb-2"><strong className="text-white">16 GB RAM</strong> DDR5</p>
              <p className="text-[0.95rem] mb-2"><strong className="text-white">300 GB</strong> NVMe SSD</p>
              <p className="text-[0.95rem] mb-2">Procesador <strong className="text-white">AMD EPYC</strong></p>
            </div>
            <ul className="flex-grow mb-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Ancho de banda ilimitado</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Panel Multicraft</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Soporte en Discord 24/7</li>
            </ul>
            <button className="btn btn-primary w-full p-4 mb-4" onClick={() => handleBuy('Básico', '4.99')}>Comprar Ahora</button>
            <div className="text-center text-xs text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] p-2 rounded-md">Mejora a VPS (+10€) o Dedicado (+10€)</div>
          </div>

          {/* Plan Avanzado */}
          <div className={`${planBaseClasses} border-[rgba(157,56,255,0.5)] shadow-[0_0_20px_rgba(157,56,255,0.15)]`}>
            <div className="absolute top-[15px] -right-[35px] bg-endor-primary text-white px-12 py-1 text-[0.7rem] font-extrabold tracking-widest rotate-45">POPULAR</div>
            <div className="text-center border-b border-[rgba(157,56,255,0.1)] pb-6 mb-6">
              <h3 className="text-2xl font-bold mb-1">Avanzado</h3>
              <p className="text-sm text-endor-muted mb-6">Lo más vendido</p>
              <div className="text-endor-primary">
                <span className="text-2xl align-super">€</span>
                <span className="text-5xl font-extrabold text-white">9.99</span>
                <span className="text-base text-endor-muted">/mes</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-[0.95rem] mb-2"><strong className="text-white">32 GB RAM</strong> DDR5</p>
              <p className="text-[0.95rem] mb-2"><strong className="text-white">600 GB</strong> NVMe SSD</p>
              <p className="text-[0.95rem] mb-2">Procesador <strong className="text-white">AMD EPYC</strong></p>
            </div>
            <ul className="flex-grow mb-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Ancho de banda ilimitado</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Panel Multicraft</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Copias de seguridad diarias</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Soporte prioritario Discord</li>
            </ul>
            <button className="btn btn-primary w-full p-4 mb-4" onClick={() => handleBuy('Avanzado', '9.99')}>Comprar Ahora</button>
            <div className="text-center text-xs text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] p-2 rounded-md">Mejora a VPS (+10€) o Dedicado (+10€)</div>
          </div>

          {/* Plan Premium */}
          <div className={planBaseClasses}>
            <div className="text-center border-b border-[rgba(157,56,255,0.1)] pb-6 mb-6">
              <h3 className="text-2xl font-bold mb-1">Premium</h3>
              <p className="text-sm text-endor-muted mb-6">Servidores grandes</p>
              <div className="text-endor-primary">
                <span className="text-2xl align-super">€</span>
                <span className="text-5xl font-extrabold text-white">19.99</span>
                <span className="text-base text-endor-muted">/mes</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-[0.95rem] mb-2"><strong className="text-white">64 GB RAM</strong> DDR5</p>
              <p className="text-[0.95rem] mb-2"><strong className="text-white">1 TB</strong> NVMe SSD</p>
              <p className="text-[0.95rem] mb-2">Procesador <strong className="text-white">AMD EPYC</strong></p>
            </div>
            <ul className="flex-grow mb-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Ancho de banda ilimitado</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Panel Multicraft completo</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Copias de seguridad diarias</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Protección DDoS Avanzada</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-primary shrink-0" /> Soporte VIP en Discord</li>
            </ul>
            <button className="btn btn-primary w-full p-4 mb-4" onClick={() => handleBuy('Premium', '19.99')}>Comprar Ahora</button>
            <div className="text-center text-xs text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] p-2 rounded-md">Mejora a VPS (+10€) o Dedicado (+10€)</div>
          </div>

          {/* Plan Ultra */}
          <div className={`${planBaseClasses} border-endor-gold shadow-[0_0_20px_rgba(255,184,0,0.15)]`}>
            <div className="absolute top-[15px] -right-[35px] bg-endor-gold text-black px-12 py-1 text-[0.7rem] font-extrabold tracking-widest rotate-45">ÉLITE</div>
            <div className="text-center border-b border-[rgba(157,56,255,0.1)] pb-6 mb-6">
              <h3 className="text-2xl font-bold mb-1">Ultra</h3>
              <p className="text-sm text-endor-muted mb-6">Máximo rendimiento</p>
              <div className="text-endor-gold">
                <span className="text-2xl align-super">€</span>
                <span className="text-5xl font-extrabold text-endor-gold">39.99</span>
                <span className="text-base text-endor-muted">/mes</span>
              </div>
            </div>
            <div className="text-center mb-8">
              <p className="text-[0.95rem] mb-2"><strong className="text-white">128 GB RAM</strong> DDR5</p>
              <p className="text-[0.95rem] mb-2"><strong className="text-white">2 TB</strong> NVMe SSD</p>
              <p className="text-[0.95rem] mb-2">Procesador <strong className="text-white">AMD EPYC</strong> Dedicado</p>
            </div>
            <ul className="flex-grow mb-8 space-y-4">
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> Ancho de banda ilimitado</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> Panel Multicraft completo</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> Copias de seguridad cada 6h</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> Protección DDoS Pro</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> IP dedicada incluida</li>
              <li className="flex items-center gap-3 text-sm text-endor-muted"><Check className="w-[18px] h-[18px] text-endor-gold shrink-0" /> Soporte VIP 24/7 Discord</li>
            </ul>
            <button className="btn btn-gold w-full p-4 mb-4" onClick={() => handleBuy('Ultra', '39.99')}>Comprar Ahora</button>
            <div className="text-center text-xs text-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] p-2 rounded-md">Incluye VPS dedicado</div>
          </div>
        </div>
      </div>
      <PayPalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan.name} 
        price={selectedPlan.price} 
      />
    </section>
  );
};

export default Plans;

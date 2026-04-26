import { X, ShieldCheck } from 'lucide-react';

interface PayPalModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
}

const PayPalModal = ({ isOpen, onClose, planName, price }: PayPalModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(8,5,16,0.85)] backdrop-blur-[5px] z-[9999] flex items-center justify-center animate-fade-in" onClick={onClose}>
      <div className="bg-endor-card border border-endor-border rounded-2xl w-full max-w-[450px] p-10 relative shadow-[0_10px_40px_rgba(0,0,0,0.8)] animate-slide-up" onClick={e => e.stopPropagation()}>
        <button className="absolute top-[15px] right-[15px] bg-[rgba(255,255,255,0.1)] border-none rounded-full text-white w-8 h-8 flex items-center justify-center cursor-pointer transition-all hover:bg-[rgba(255,255,255,0.2)] hover:scale-110" onClick={onClose}>
          <X size={20}/>
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-endor-primary text-2xl font-bold mb-2">Procesar Pago Seguro</h2>
          <p className="text-endor-muted text-[0.95rem]">Estás adquiriendo el <strong className="text-white">Plan {planName}</strong></p>
        </div>

        <div className="bg-[rgba(0,0,0,0.3)] p-6 rounded-lg mb-8">
          <div className="flex justify-between mb-2 text-endor-text">
            <span>Suscripción Mensual</span>
            <span>€{price}</span>
          </div>
          <div className="flex justify-between mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)] font-extrabold text-[1.1rem] text-endor-primary">
            <span>Total a pagar</span>
            <span>€{price}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
           <div className="bg-white p-3 rounded text-center text-[1.8rem]">
             <span style={{ color: '#003087', fontStyle: 'italic', fontWeight: 900 }}>Pay</span><span style={{ color: '#0079C1', fontStyle: 'italic', fontWeight: 900 }}>Pal</span>
           </div>
           <p className="text-[0.85rem] text-endor-muted text-center mb-2">Paga seguro con PayPal o Tarjeta de Crédito/Débito. Tu compra está 100% protegida.</p>
           
           <button className="bg-[#FFC439] text-black border-none p-4 rounded font-bold cursor-pointer transition-opacity hover:opacity-90" onClick={() => alert('¡Pago simulado con éxito! Aquí iría la redirección a PayPal.')}>
             Pagar con PayPal
           </button>
           <button className="bg-[#2C2E2F] text-white border-none p-4 rounded font-semibold cursor-pointer transition-colors hover:bg-[#3c3e3f]" onClick={() => alert('¡Pago simulado con éxito!')}>
             💳 Tarjeta de Débito o Crédito
           </button>
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-6 text-[#2ed573] text-[0.85rem]">
          <ShieldCheck size={16} /> Pago 100% encriptado y seguro
        </div>
      </div>
    </div>
  );
};

export default PayPalModal;

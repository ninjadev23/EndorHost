import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-20 relative z-10 bg-process-bg bg-cover bg-center bg-fixed border-y border-endor-border">
      <div className="max-w-layout mx-auto px-8 relative z-10">
        <h2 className="text-center text-[2.5rem] font-extrabold text-endor-primary mb-2 drop-shadow-[0_0_20px_rgba(157,56,255,0.4)]">¿Cómo Funciona el Proceso?</h2>
        <p className="text-center text-lg text-endor-muted mb-12">En solo 4 sencillos pasos tendrás tu servicio activo</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { id: 1, title: 'Elige tu Plan', desc: 'Selecciona el plan que mejor se adapte a tus necesidades y haz clic en "Comprar Ahora".' },
            { id: 2, title: 'Obtén tu Código', desc: 'Se generará automáticamente un código único de pedido.\n¡Guárdalo bien, lo necesitarás!' },
            { id: 3, title: 'Realiza el Pago', desc: 'Envía el pago a nuestro PayPal indicando tu código único en el concepto del pago.' },
            { id: 4, title: 'Abre un Ticket', desc: 'Únete al Discord, crea un ticket y envía tu código. Activaremos tu servicio en minutos.' }
          ].map((step) => (
            <div key={step.id} className="bg-endor-card rounded-2xl p-8 text-center transition-transform duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(157,56,255,0.1)]">
              <div className="w-[50px] h-[50px] bg-endor-primary text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-6 shadow-[0_0_15px_rgba(157,56,255,0.5)]">
                {step.id}
              </div>
              <h4 className="text-[1.2rem] font-bold mb-4">{step.title}</h4>
              <p className="text-endor-muted text-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(22,16,42,0.5)] border border-[rgba(157,56,255,0.2)] rounded-2xl p-12 text-center">
          <h3 className="text-[1.8rem] font-bold text-endor-text mb-2">¿Tienes dudas?</h3>
          <p className="text-endor-muted mb-8">Nuestro equipo de soporte está disponible 24/7 en nuestro servidor de Discord</p>
          <a href="https://discord.gg/rAUQENzfUU" target="_blank" className="btn btn-primary px-8 py-4 text-lg">Unirse al servidor de Discord</a>
        </div>
      </div>
    </section>
  );
};

export default Process;

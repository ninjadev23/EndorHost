import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-endor-dark border-t border-endor-border pt-20 relative z-10">
      <div className="max-w-layout mx-auto px-8">
        <div className="mb-20 text-center">
          <h2 className="text-[2.2rem] font-bold text-endor-primary mb-2">Términos y Condiciones</h2>
          <p className="text-endor-muted mb-12">Por favor, lee cuidadosamente nuestros términos antes de contratar</p>
          
          <div className="bg-endor-card rounded-xl p-10 text-left border border-[rgba(157,56,255,0.1)] max-w-[900px] mx-auto mb-8">
            <h4 className="text-[1.3rem] font-bold text-endor-text mb-4">Aceptación de Términos</h4>
            <p className="text-endor-muted leading-relaxed text-[0.95rem] mb-6">
              Al contratar cualquiera de nuestros servicios de hosting, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no deberás utilizar nuestros servicios.
            </p>
            <div className="bg-[rgba(157,56,255,0.1)] border-l-4 border-endor-primary p-4 rounded text-endor-text text-[0.9rem]">
              <strong className="text-endor-primary font-bold">Importante:</strong> El uso continuado de nuestros servicios constituye la aceptación de cualquier modificación a estos términos.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          <div className="lg:col-span-2">
            <h3 className="text-[1.1rem] font-bold text-endor-primary mb-6">EndorHost</h3>
            <p className="text-endor-muted text-[0.9rem] leading-relaxed max-w-[300px]">
              Hosting de alta calidad para Minecraft y Discord Bots. Hardware de última generación a precios accesibles.
            </p>
          </div>
          
          <div>
            <h3 className="text-[1.1rem] font-bold text-endor-primary mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Hosting Minecraft</a></li>
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Hosting Discord Bots</a></li>
              <li><a href="#hardware" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Nuestro Hardware</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[1.1rem] font-bold text-endor-primary mb-6">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Servidor de Discord</a></li>
              <li><a href="#proceso" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Proceso de Compra</a></li>
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Métodos de Pago</a></li>
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[1.1rem] font-bold text-endor-primary mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-endor-muted text-[0.9rem] hover:text-endor-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center py-8 text-[rgba(255,255,255,0.3)] text-[0.85rem]">
          <p>&copy; {new Date().getFullYear()} EndorHost. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

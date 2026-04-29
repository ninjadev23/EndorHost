import { Server, Bot, Globe, ShieldCheck, MessageCircle, MapPin, Mail } from 'lucide-react';

const footerLinks = {
  'Servicios': [
    { label: 'Hosting Minecraft', href: '#planes' },
    { label: 'Hosting Discord Bots', href: '#' },
    { label: 'Desarrollo Web', href: '#' },
    { label: 'Dominios', href: '#' },
    { label: 'VPS Dedicado', href: '#' },
  ],
  'Soporte': [
    { label: 'Servidor de Discord', href: 'https://discord.gg/rAUQENzfUU' },
    { label: 'Estado del Sistema', href: '#' },
    { label: 'Métodos de Pago', href: '#' },
    { label: 'Migración Gratuita', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
  ],
  'Empresa': [
    { label: 'Sobre Nosotros', href: '#' },
    { label: 'Afiliados', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contacto', href: '#' },
  ],
};

const Footer = () => (
  <footer className="bg-endor-dark border-t border-endor-border relative z-10 overflow-hidden">

    {/* CTA Banner */}
    <div className="relative overflow-hidden border-b border-endor-border">
      <div className="absolute inset-0 -z-10">
        <img src="/imagen2.png" alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-endor-dark via-endor-dark/80 to-endor-dark" />
      </div>
      <div className="max-w-layout mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs font-black tracking-[0.2em] text-endor-primary uppercase mb-2">¡Empieza hoy!</p>
          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Crea tu Servidor<br />
            <span style={{
              background: 'linear-gradient(90deg,#9d38ff,#FFB800)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>en menos de 60 segundos</span>
          </h3>
          <p className="text-endor-muted mt-2 text-sm">Sin compromisos. Migración gratuita desde otro host.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a href="#planes" className="btn btn-primary px-8 py-3.5 text-base shadow-[0_0_30px_rgba(157,56,255,0.4)]">
            Ver Planes →
          </a>
          <a href="https://discord.gg/rAUQENzfUU" target="_blank" rel="noreferrer" className="btn btn-secondary px-8 py-3.5 text-base">
            Discord
          </a>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="max-w-layout mx-auto px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/5">

        {/* Brand col */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img src="/icon-e-endorhost.png" alt="E" className="h-10 w-auto drop-shadow-[0_0_10px_rgba(157,56,255,0.7)]" style={{ mixBlendMode: 'screen' }} />
            <span className="text-xl font-black tracking-wide">EndorHost</span>
          </div>
          <p className="text-endor-muted text-sm leading-relaxed max-w-xs">
            Hosting premium para Minecraft, Discord Bots, webs y dominios. Hardware de última generación a precios accesibles.
          </p>
          {/* Service icons */}
          <div className="flex gap-3 mt-6">
            {[Server, Bot, Globe, ShieldCheck].map((Icon, i) => (
              <div key={i} className="w-9 h-9 rounded-xl bg-endor-card border border-endor-border flex items-center justify-center text-endor-muted hover:text-endor-primary hover:border-endor-border-hl transition-colors cursor-pointer">
                <Icon size={16} />
              </div>
            ))}
          </div>
          {/* Social */}
          <div className="flex gap-3 mt-4">
            <a href="https://discord.gg/rAUQENzfUU" target="_blank" rel="noreferrer"
               className="w-9 h-9 rounded-xl bg-endor-card border border-endor-border flex items-center justify-center text-endor-muted hover:text-endor-primary hover:border-endor-border-hl transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:soporte@endorhost.com"
               className="w-9 h-9 rounded-xl bg-endor-card border border-endor-border flex items-center justify-center text-endor-muted hover:text-endor-primary hover:border-endor-border-hl transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-sm font-black text-white uppercase tracking-[0.15em] mb-5">{title}</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-endor-muted text-sm hover:text-endor-primary transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 text-xs text-endor-muted/60">
        <p>© {new Date().getFullYear()} EndorHost. Todos los derechos reservados.</p>
        <div className="flex items-center gap-1">
          <MapPin size={11} />
          <span>Infraestructura global · 13+ ubicaciones</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-endor-primary transition-colors">Privacidad</a>
          <a href="#" className="hover:text-endor-primary transition-colors">Términos</a>
          <a href="#" className="hover:text-endor-primary transition-colors">Reembolsos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

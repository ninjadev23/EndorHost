import React from 'react';
import { Star } from 'lucide-react';

interface ReviewProps {
  name: string;
  avatar: string;
  text: string;
  rating?: number;
  tag: string;
}

const reviews: ReviewProps[] = [
  {
    name: 'AlexGamer99',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex&backgroundColor=16102a',
    text: '¡El mejor host que he probado! Rendimiento brutal en mi servidor con 50 mods. Cero lag y el soporte es rapidísimo.',
    rating: 5, tag: 'Minecraft Hosting',
  },
  {
    name: 'CreepersBane',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Creeper&backgroundColor=16102a',
    text: 'Monté un servidor para mis amigos y la instalación fue instantánea. El panel es súper intuitivo. Totalmente recomendado.',
    rating: 5, tag: 'Hosting',
  },
  {
    name: 'DiamondMiner',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond&backgroundColor=16102a',
    text: 'Llevo 3 meses con ellos y jamás se ha caído el servidor. Relación calidad-precio imbatible frente a otros hosts.',
    rating: 5, tag: 'Cliente habitual',
  },
  {
    name: 'PvPMaster',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=PvP&backgroundColor=16102a',
    text: 'Ping bajísimo, perfecto para servidores de PvP. Me ayudaron a configurar plugins en el Discord. 10/10.',
    rating: 5, tag: 'PvP Server',
  },
  {
    name: 'NightOwl_Dev',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Night&backgroundColor=16102a',
    text: 'El soporte me respondió en menos de 5 minutos a las 3 de la mañana. Eso se llama servicio de verdad.',
    rating: 5, tag: 'Discord Bot',
  },
  {
    name: 'SkyWarsKing',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Sky&backgroundColor=16102a',
    text: 'Migré desde otro host y fue gratis y sin perder ningún dato. El proceso fue súper sencillo y rápido.',
    rating: 5, tag: 'Migración',
  },
];

const ReviewCard: React.FC<ReviewProps> = ({ name, avatar, text, rating = 5, tag }) => (
  <div className="group relative bg-endor-card/50 backdrop-blur-sm border border-endor-border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-endor-border-hl overflow-hidden">
    {/* Top glow line on hover */}
    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-endor-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Stars */}
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-endor-gold fill-endor-gold' : 'text-endor-muted'}
          style={i < rating ? { filter: 'drop-shadow(0 0 4px rgba(255,184,0,0.6))' } : {}}
        />
      ))}
    </div>

    <p className="text-endor-muted text-sm leading-relaxed flex-grow">"{text}"</p>

    <div className="flex items-center gap-3 pt-2 border-t border-endor-border">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full border border-endor-border bg-endor-darker p-0.5 object-cover"
      />
      <div>
        <p className="font-bold text-sm text-white group-hover:text-endor-primary transition-colors">{name}</p>
        <p className="text-[10px] text-endor-primary font-bold uppercase tracking-wider">{tag}</p>
      </div>
    </div>
  </div>
);

const Reviews = () => (
  <section id="resenas" className="py-24 relative z-10 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-endor-primary/8 blur-[120px] -bottom-20 -left-20 pointer-events-none" />
    </div>
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-endor-primary/40 to-transparent" />

    <div className="max-w-layout mx-auto px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-black tracking-[0.25em] text-endor-primary uppercase mb-3 bg-endor-primary/10 border border-endor-border px-4 py-1.5 rounded-full">
          Comunidad
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
          Lo Que Dicen<br />
          <span style={{
            background: 'linear-gradient(90deg,#9d38ff,#d991ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Nuestros Clientes</span>
        </h2>
        <p className="text-endor-muted text-lg mt-4">
          Más de 5.000 clientes satisfechos confían en EndorHost.
        </p>
      </div>

      {/* Rating badge */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-3 bg-endor-card/60 border border-endor-border rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-endor-gold fill-endor-gold" style={{ filter: 'drop-shadow(0 0 4px rgba(255,184,0,0.5))' }} />
            ))}
          </div>
          <span className="font-black text-white">4.9</span>
          <span className="text-endor-muted text-sm">de 5 · más de 500 reseñas</span>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://discord.gg/rAUQENzfUU"
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary text-sm px-8 py-3"
        >
          Únete a nuestra comunidad →
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;

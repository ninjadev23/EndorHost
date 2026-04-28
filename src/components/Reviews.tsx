import React from 'react';

interface ReviewProps {
  name: string;
  avatar: string;
  text: string;
  rating?: number;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, avatar, text, rating = 5 }) => {
  return (
    <div className="backdrop-blur-md border border-[rgba(157,56,255,0.3)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(157,56,255,0.3)] hover:border-[rgba(157,56,255,0.8)] flex flex-col gap-4 relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-endor-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-endor-primary shadow-[0_0_15px_rgba(157,56,255,0.5)] object-cover bg-endor-darker p-1"
        />
        <div>
          <h4 className="font-bold text-lg text-endor-text group-hover:text-endor-primary transition-colors">{name}</h4>
          <div className="flex text-endor-gold text-sm drop-shadow-[0_0_5px_rgba(255,184,0,0.5)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-endor-muted italic leading-relaxed text-sm">"{text}"</p>
    </div>
  );
};

const Reviews = () => {
  const dummyReviews = [
    {
      name: "AlexGamer99",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Alex&backgroundColor=16102a",
      text: "¡El mejor host que he probado! El rendimiento en mi servidor de Survival con 50 mods es increíble. Cero lag y el soporte es súper rápido.",
      rating: 5
    },
    {
      name: "CreepersBane",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Creeper&backgroundColor=16102a",
      text: "Monté un servidor para mis amigos y la instalación fue instantánea. El panel de control es súper intuitivo. Totalmente recomendado.",
      rating: 5
    },
    {
      name: "DiamondMiner",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond&backgroundColor=16102a",
      text: "Llevo 3 meses con ellos y nunca se ha caído el servidor. La relación calidad-precio es insuperable frente a otros hosts que he usado.",
      rating: 5
    },
    {
      name: "PvPMaster",
      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=PvP&backgroundColor=16102a",
      text: "El ping es bajísimo, perfecto para servidores de PvP. Además, me ayudaron a configurar mis plugins en el Discord. Servicio 10/10.",
      rating: 5
    }
  ];

  return (
    <section id="resenas" className="py-24 relative z-10 bg-process-bg bg-cover bg-center bg-fixed border-y border-endor-border overflow-hidden">

      <div className="absolute inset-0 bg-endor-darker/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-endor-darker via-transparent to-endor-darker pointer-events-none"></div>

      <div className="max-w-layout mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-endor-primary/30 bg-endor-primary/10 text-endor-primary font-semibold text-sm mb-4">
            Comunidad EndorHost
          </div>
          <h2 className="text-[3rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-endor-text to-endor-primary mb-4 drop-shadow-[0_0_20px_rgba(157,56,255,0.4)]">
            Lo Que Dicen Nuestros Jugadores
          </h2>
          <p className="text-xl text-endor-muted max-w-2xl mx-auto">
            Únete a cientos de administradores que confían en nosotros para mantener sus mundos de Minecraft siempre en línea.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyReviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-[rgba(22,16,42,0.8)] backdrop-blur-xl border border-[rgba(157,56,255,0.4)] rounded-full px-8 py-4 shadow-[0_0_30px_rgba(157,56,255,0.2)] hover:shadow-[0_0_40px_rgba(157,56,255,0.4)] transition-shadow duration-300">
            <p className="text-endor-text text-lg flex items-center justify-center gap-3 flex-wrap">
              <span className="text-2xl animate-pulse">✨</span>
              <span>Calificados con <strong className="text-endor-gold drop-shadow-[0_0_5px_rgba(255,184,0,0.8)]">4.9/5</strong> por más de <strong className="text-endor-primary">500+</strong> usuarios satisfechos</span>
              <span className="text-2xl animate-pulse">✨</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

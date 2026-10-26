import { ShoppingCart, CheckCircle2, ShieldCheck, Zap, Star } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: (plan: 'basic' | 'complete') => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  const scrollToPricing = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenCheckout('complete');
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: High-Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            
            {/* Pill-free eyebrow / kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700">
              <Zap className="w-4 h-4 fill-emerald-600 text-emerald-600 shrink-0" />
              <span>Cardápio Inteligente Para o Dia a Dia</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-600 font-medium">Secar com Sabor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              150 Almoços Fitness <span className="text-emerald-600">Práticos e Econômicos</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 max-w-xl text-balance">
              Seu Guia Completo para Secar Comendo Bem e Sem Abrir Mão do Sabor!
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Mais de 150 receitas práticas, baratas e que funcionam de verdade. Chega de marmita sem graça, de passar fome ou de gastar fortunas com ingredientes caros.
            </p>

            {/* Fast Benefit List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 w-full max-w-lg text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pronto em 15 a 25 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ingredientes simples de feira</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Calorias e macros calculados</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Acesso vitalício no celular</span>
              </div>
            </div>

            {/* Pricing Callout in Hero */}
            <div className="w-full max-w-md pt-2">
              <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-xs text-slate-500 font-medium line-through">
                    De R$ 97,00
                  </div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    A partir de apenas
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono tabular-nums leading-none mt-0.5">
                    R$ 29<span className="text-xl">,90</span>
                  </div>
                </div>

                <button
                  onClick={scrollToPricing}
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 animate-cta cursor-pointer whitespace-nowrap"
                >
                  <ShoppingCart className="w-5 h-5 shrink-0" />
                  <span>QUERO OS 150 ALMOÇOS</span>
                </button>
              </div>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Compra 100% Segura
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-amber-500" />
                Envio Imediato
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Garantia de 7 Dias
              </span>
            </div>

          </div>

          {/* Right Column: High-Res Product Presentation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/hero_ebook_presentation_1792979467882.jpg"
                alt="Mockup do Guia Digital 150 Almoços Fitness em tablet e marmitas saudáveis"
                className="w-full h-auto object-cover aspect-[4/3] block"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay rating tag on bottom right */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-left leading-none">
                  <div className="text-xs font-extrabold text-slate-900">4.9 / 5.0</div>
                  <div className="text-[10px] text-slate-500 font-medium">+12.400 alunas</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

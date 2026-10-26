import { Star, ThumbsUp, MessageSquare, CheckCheck, ShoppingCart } from 'lucide-react';
import { testimonials, whatsappMessages } from '../data/testimonials';

interface SocialProofProps {
  onSelectOffer: () => void;
}

export default function SocialProof({ onSelectOffer }: SocialProofProps) {
  return (
    <section id="depoimentos" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Resultados de Verdade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Quem Já Preparou, <span className="text-emerald-600">Aprovou!</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Veja o que algumas alunas estão preparando na prática com as receitas do guia:
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {t.avatarText}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-none">
                      {t.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {t.role} · {t.date}
                    </div>
                  </div>
                </div>

                {/* Stars and Result Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {t.result}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  "{t.comment}"
                </p>

                {/* Dish Photo Attachment if available */}
                {t.dishImage && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 mb-3 bg-slate-100">
                    <img
                      src={t.dishImage}
                      alt={t.dishName}
                      className="w-full h-36 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="px-2.5 py-1 text-[11px] text-slate-600 font-medium bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                      <span className="truncate">{t.dishName}</span>
                      <span className="text-emerald-600 font-bold">Foto da aluna</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer interaction */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 hover:text-emerald-600 cursor-pointer transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5 text-slate-400" />
                  <span>Curtir ({t.likes})</span>
                </span>
                <span className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                  <span>Comentar</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Testimonials Strip */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <span>Mensagens Reais no WhatsApp</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                O que as alunas estão comentando nos grupos
              </h3>
            </div>
            <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Prints Verificados
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whatsappMessages.map((msg, i) => (
              <div
                key={i}
                className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900">{msg.author}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{msg.time}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  "{msg.text}"
                </p>
                <div className="flex items-center justify-end gap-1 text-[11px] text-emerald-700 font-medium">
                  <span>Enviado no WhatsApp</span>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-page CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onSelectOffer}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 shrink-0" />
            <span>QUERO OS 150 ALMOÇOS FITNESS AGORA</span>
          </button>
        </div>

      </div>
    </section>
  );
}

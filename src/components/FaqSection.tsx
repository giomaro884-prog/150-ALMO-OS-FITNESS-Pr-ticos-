import { useState } from 'react';
import { ChevronDown, HelpCircle, ShoppingCart } from 'lucide-react';
import { faqList } from '../data/faqs';

interface FaqSectionProps {
  onSelectOffer: () => void;
}

export default function FaqSection({ onSelectOffer }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Perguntas <span className="text-emerald-600">Frequentes</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Respostas diretas e transparentes para todas as suas dúvidas antes de garantir o seu acesso.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black flex items-center justify-center shrink-0">
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA callout */}
        <div className="mt-12 text-center p-6 sm:p-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm">
          <p className="text-sm font-semibold text-slate-700 mb-2">
            Ainda não garantiu a sua oferta?
          </p>
          <p className="text-xs text-slate-500 mb-5 max-w-md mx-auto">
            O valor promocional acaba hoje. Não perca a chance de transformar sua rotina por um preço menor que uma pizza!
          </p>
          <button
            onClick={onSelectOffer}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-emerald-600/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 shrink-0" />
            <span>QUERO OS 150 ALMOÇOS FITNESS</span>
          </button>
        </div>

      </div>
    </section>
  );
}

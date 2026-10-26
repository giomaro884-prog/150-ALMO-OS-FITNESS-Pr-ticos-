import { Check, X, ShieldCheck, Zap, Sparkles, ShoppingCart, Award } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: 'basic' | 'complete') => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Condição Exclusiva de Lançamento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Escolha o <span className="text-emerald-600">Pacote Ideal</span> Para Você
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Tenha acesso imediato hoje com valor promocional único, sem mensalidades ou taxas extras.
          </p>
        </div>

        {/* The 2 Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* OFERTA 1: PACOTE BÁSICO */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Oferta Básica
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Acesso Individual
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                150 Almoços Fitness
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                O essencial para transformar suas refeições de almoço e parar de comer marmita sem graça.
              </p>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-center">
                <div className="text-xs text-slate-400 font-medium line-through">
                  De R$ 97,00
                </div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-0.5">
                  Pagamento Único por apenas
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tabular-nums leading-none mt-1">
                  R$ 29<span className="text-2xl">,90</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1.5">
                  Sem mensalidade · Acesso vitalício
                </div>
              </div>

              {/* What is included */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  O que você recebe:
                </div>
                
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Livro Digital 150 Almoços Fitness</strong> em PDF alta resolução</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Lista de Compras Inteligente</strong> para feira e mercado</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Tabela de <strong>Calorias e Macros por Porção</strong></span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Acesso Vitalício</strong> no celular, tablet e computador</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Entrega Imediata</strong> no E-mail e WhatsApp</span>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2 text-slate-400">
                  <div className="flex items-start gap-2.5 text-xs">
                    <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    <span>Sem os 5 Super Bônus Digitais</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    <span>Sem o Guia de Jantares Leves para Desinchar</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs">
                    <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    <span>Sem o Planner Organizador de Marmitas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectPlan('basic')}
                className="w-full py-4 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 shrink-0" />
                <span>QUERO O PACOTE BÁSICO (R$ 29,90)</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Compra Segura
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Acesso Imediato
                </span>
              </div>
            </div>
          </div>

          {/* OFERTA 2: PACOTE COMPLETO (DESTAQUE / RECOMENDADO) */}
          <div className="bg-gradient-to-b from-white to-emerald-50/50 rounded-3xl border-2 border-emerald-500 shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative transform lg:-translate-y-2">
            
            {/* Top Ribbon Highlight */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
              <Award className="w-4 h-4 text-amber-300" />
              <span>O Mais Escolhido (94% das Alunas)</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Combo Completo Definitivo
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Economize R$ 159,10
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                Pacote Completo + 5 Bônus VIP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                A solução definitiva para transformar seu corpo, acelerar o metabolismo e ter refeições completas dia e noite.
              </p>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-emerald-100/70 border border-emerald-300 mb-6 text-center">
                <div className="text-xs text-slate-500 font-medium line-through">
                  De R$ 197,00
                </div>
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mt-0.5">
                  Pagamento Único Especial por apenas
                </div>
                <div className="text-4xl sm:text-5xl font-black text-emerald-700 font-mono tabular-nums leading-none mt-1">
                  R$ 37<span className="text-2xl">,90</span>
                </div>
                <div className="text-[11px] text-emerald-800 font-medium mt-1.5">
                  Pagamento único · Sem cobranças adicionais
                </div>
              </div>

              {/* What is included */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Tudo do Pacote Básico:</span>
                </div>
                
                <div className="pl-5 text-xs sm:text-sm text-slate-700 space-y-1.5 border-l-2 border-emerald-200">
                  <p>✓ Livro Digital 150 Almoços Fitness (PDF HD)</p>
                  <p>✓ Lista de Compras Inteligente para Feira e Supermercado</p>
                  <p>✓ Tabela de Calorias e Macronutrientes por Porção</p>
                  <p>✓ Acesso Vitalício + Envio Imediato no E-mail & WhatsApp</p>
                </div>

                <div className="pt-2 text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>+ Mais 5 Super Bônus Exclusivos (GRÁTIS HOJE):</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                    <span className="text-base">🍹</span>
                    <div>
                      <strong className="text-emerald-900">Bônus 1:</strong> Guia de Sucos Detox Emagrecedores e Digestivos
                      <span className="text-[10px] text-emerald-600 block font-bold">Valor separado: R$ 37,00 (Hoje: Grátis)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                    <span className="text-base">📅</span>
                    <div>
                      <strong className="text-emerald-900">Bônus 2:</strong> Planner Semanal Organizador de Marmitas Fit
                      <span className="text-[10px] text-emerald-600 block font-bold">Valor separado: R$ 27,00 (Hoje: Grátis)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                    <span className="text-base">🔄</span>
                    <div>
                      <strong className="text-emerald-900">Bônus 3:</strong> Guia Inteligente de Substituições de Alimentos
                      <span className="text-[10px] text-emerald-600 block font-bold">Valor separado: R$ 37,00 (Hoje: Grátis)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                    <span className="text-base">🍰</span>
                    <div>
                      <strong className="text-emerald-900">Bônus 4:</strong> Guia de Doces & Sobremesas Fit Sem Culpa
                      <span className="text-[10px] text-emerald-600 block font-bold">Valor separado: R$ 47,00 (Hoje: Grátis)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 bg-white/80 p-2 rounded-xl border border-emerald-200/60">
                    <span className="text-base">🌙</span>
                    <div>
                      <strong className="text-emerald-900">Bônus 5:</strong> Guia de Jantares Leves para Desinchar Dormindo
                      <span className="text-[10px] text-emerald-600 block font-bold">Valor separado: R$ 49,00 (Hoje: Grátis)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => onSelectPlan('complete')}
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 animate-cta cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 shrink-0" />
                <span>QUERO O PACOTE COMPLETO (R$ 37,90)</span>
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Compra Segura
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Acesso Imediato
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  7 Dias de Garantia
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

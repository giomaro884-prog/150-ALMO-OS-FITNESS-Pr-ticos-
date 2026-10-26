import { ShieldCheck, Lock, RefreshCw, Award } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-3xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          
          {/* Shield Emblem */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-emerald-600 text-white flex flex-col items-center justify-center shadow-xl shadow-emerald-600/20 rotate-1 border-4 border-white">
              <ShieldCheck className="w-12 h-12 text-amber-300 stroke-[2.2]" />
              <span className="text-xs font-black uppercase tracking-wider text-white mt-1">
                7 Dias
              </span>
              <span className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest">
                Garantia
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
              RISCO ZERO
            </div>
          </div>

          {/* Guarantee Content */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Compromisso Blindado de Satisfação</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Experimente por 7 Dias sem Risco Algum
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Você tem 7 dias inteiros para acessar o guia, testar as receitas, preparar as marmitas e provar o sabor na sua casa. Se por qualquer motivo você não gostar, achar que não valeu a pena ou não economizar no mercado, basta nos enviar um e-mail ou uma mensagem no WhatsApp.
            </p>

            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
              Devolvemos 100% do seu dinheiro investido na hora, sem letras miúdas, sem questionamentos e continuamos amigos. O risco é todo nosso!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Devolução Instantânea
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-emerald-600" />
                Reembolso 100% sem burocracia
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

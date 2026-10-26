import { Gift, Sparkles, CheckCircle } from 'lucide-react';

const bonuses = [
  {
    number: '1',
    title: 'Guia de Sucos Detox Emagrecedores e Digestivos',
    desc: 'Combinações anti-inchaço para acelerar o metabolismo pela manhã e melhorar a digestão.',
    realValue: 'R$ 37,00'
  },
  {
    number: '2',
    title: 'Planner Semanal Organizador de Marmitas Fit',
    desc: 'Metodologia passo a passo para você cozinhar em 2 horas no domingo e ter a semana inteira resolvida.',
    realValue: 'R$ 27,00'
  },
  {
    number: '3',
    title: 'Guia Inteligente de Substituições de Alimentos',
    desc: 'Não tem um ingrediente em casa? Descubra o que trocar sem perder o sabor e sem alterar os macros.',
    realValue: 'R$ 37,00'
  },
  {
    number: '4',
    title: 'Guia de Doces & Sobremesas Fit Sem Culpa',
    desc: 'Mousse de chocolate fit, brigadeiro de colher, bolo de banana e doces funcionais para matar a vontade.',
    realValue: 'R$ 47,00'
  },
  {
    number: '5',
    title: 'Guia de Jantares Leves para Desinchar Dormindo',
    desc: 'Pratos leves, sopas e caldos calmantes que relaxam o estômago e promovem queima noturna.',
    realValue: 'R$ 49,00'
  }
];

export default function BonusShowcase() {
  return (
    <section id="bonus" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-400 mb-2">
            <Gift className="w-4 h-4" />
            <span>Presentes Exclusivos Para Você Hoje</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Levando o <span className="text-emerald-400">Pacote Completo</span>, Você Ganha Mais 5 Bônus Especiais
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Se fossem comprados separadamente, esses 5 materiais custariam mais de <strong className="text-white">R$ 197,00</strong>. Hoje, eles saem <strong className="text-emerald-400">100% GRÁTIS</strong> no Pacote Completo.
          </p>
        </div>

        {/* Big Bundle Visual Feature */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img
                src="/src/assets/images/bonus_bundle_mockup_1792979470141.jpg"
                alt="Coleção de 5 Livros Digitais Bônus em 3D"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-400 tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Combo Definitivo Seca & Desincha</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Tudo o que você precisa para uma rotina 100% saudável
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Do café da manhã ao jantar, passando pelas sobremesas de final de semana e pela lista de compras. Uma transformação completa para o seu corpo e o seu bolso.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs text-slate-400 line-through">Valor Real: R$ 197,00</span>
                <span className="text-sm font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                  HOJE: R$ 0,00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((b) => (
            <div
              key={b.number}
              className="bg-slate-800/60 rounded-2xl p-5 border border-slate-700/70 hover:border-emerald-500/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-extrabold text-sm flex items-center justify-center border border-emerald-500/30">
                    #{b.number}
                  </span>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 line-through block leading-none">
                      {b.realValue}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                      GRÁTIS
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {b.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Incluso no Pacote Completo</span>
              </div>
            </div>
          ))}

          {/* Call to Action card */}
          <div className="bg-gradient-to-br from-emerald-950 to-slate-900 rounded-2xl p-6 border border-emerald-500/40 flex flex-col justify-center text-center items-center">
            <h4 className="text-lg font-bold text-white mb-1">
              Garanta Todos os Bônus
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              Disponíveis apenas enquanto durar o lote promocional de hoje.
            </p>
            <a
              href="#ofertas"
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              QUERO O PACOTE COM TODOS OS BÔNUS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

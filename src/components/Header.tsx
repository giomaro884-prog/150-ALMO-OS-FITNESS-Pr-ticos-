import { Salad, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onSelectOffer: (plan: 'basic' | 'complete') => void;
}

export default function Header({ onSelectOffer }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-9 z-30 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Salad className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              150 Almoços Fitness
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
              Práticos & Econômicos
            </span>
          </div>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#beneficios" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
            Benefícios
          </a>
          <a href="#receitas" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
            Receitas
          </a>
          <a href="#bonus" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
            Bônus
          </a>
          <a href="#depoimentos" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#garantia" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0">
            Garantia
          </a>
          <a href="#checkout" className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0 font-semibold text-emerald-700">
            Checkout
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onSelectOffer('complete')}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Garantir Oferta</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </header>
  );
}

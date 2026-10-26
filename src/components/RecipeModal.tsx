import { useState } from 'react';
import { X, Clock, Flame, Dumbbell, ChefHat, Sparkles, Check } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onChooseOffer: () => void;
}

export default function RecipeModal({ recipe, onClose, onChooseOffer }: RecipeModalProps) {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');

  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Scrim */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
            aria-label="Fechar receita"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              {recipe.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1.5 leading-snug text-white">
              {recipe.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 line-clamp-1">
              {recipe.subtitle}
            </p>
          </div>
        </div>

        {/* Nutritional Badges Strip */}
        <div className="grid grid-cols-4 divide-x divide-slate-100 bg-emerald-50/60 border-b border-emerald-100 text-center py-2.5 px-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tempo</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{recipe.prepTime}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Calorias</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{recipe.calories}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
              <span>Proteína</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{recipe.protein}</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
              <ChefHat className="w-3.5 h-3.5 text-emerald-600" />
              <span>Custo Médio</span>
            </div>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 mt-0.5">{recipe.costEstimate}</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 px-6 pt-3">
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 mr-6 cursor-pointer ${
              activeTab === 'ingredients'
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Ingredientes ({recipe.ingredients.length})
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`pb-3 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
              activeTab === 'steps'
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Modo de Preparo
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[42vh] overflow-y-auto space-y-4">
          {activeTab === 'ingredients' ? (
            <ul className="space-y-2.5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ol className="space-y-3">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          )}

          {/* Chef Pro Tip */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-amber-950">Dica Prática: </strong>
              <span>{recipe.tips}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Esta é apenas 1 das <strong>150 receitas</strong> completas do guia.</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onChooseOffer();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
          >
            Quero Acesso a Todas as 150 Receitas
          </button>
        </div>

      </div>
    </div>
  );
}

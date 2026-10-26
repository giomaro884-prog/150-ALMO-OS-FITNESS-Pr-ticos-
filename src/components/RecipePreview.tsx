import { useState } from 'react';
import { ZoomIn, Clock, Flame, Dumbbell } from 'lucide-react';
import { sampleRecipes, Recipe } from '../data/recipes';
import RecipeModal from './RecipeModal';

interface RecipePreviewProps {
  onSelectOffer: () => void;
}

export default function RecipePreview({ onSelectOffer }: RecipePreviewProps) {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <section id="receitas" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Degustação Visual</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Veja Algumas Receitas <span className="text-emerald-600">Que Você Recebe</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Toque em qualquer prato abaixo para abrir a ficha completa com ingredientes, tabela de macros e modo de preparo:
          </p>
        </div>

        {/* 3 Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {sampleRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group hover:-translate-y-1"
            >
              {/* Image Container with Zoom Badge */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Pill */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {recipe.category}
                </span>

                {/* Tap to zoom button overlay */}
                <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 group-hover:bg-emerald-700 transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Toque para ampliar</span>
                </div>
              </div>

              {/* Recipe Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {recipe.subtitle}
                  </p>
                </div>

                {/* Fast Nutrition Strip */}
                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    {recipe.calories}
                  </span>
                  <span className="flex items-center gap-1">
                    <Dumbbell className="w-3.5 h-3.5 text-emerald-600" />
                    {recipe.protein}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below recipes */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 mb-3">
            Gostou dessas opções? O livro completo contém <strong>150 receitas exclusivas</strong> divididas por categorias.
          </p>
          <a
            href="#ofertas"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            QUERO O LIVRO COM AS 150 RECEITAS
          </a>
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onChooseOffer={onSelectOffer}
        />
      )}
    </section>
  );
}

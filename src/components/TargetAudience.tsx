import { useState } from 'react';
import { Check, HeartHandshake, ArrowDown } from 'lucide-react';

const checklistItems = [
  {
    id: 1,
    title: 'Tem uma rotina corrida e precisa de almoços rápidos',
    desc: 'Sem passar 2 horas na beira do fogão ou lavando montanhas de panelas todos os dias.'
  },
  {
    id: 2,
    title: 'Quer comer saudável sem cair na mesma comida sem graça',
    desc: 'Chega de frango seco sem tempero e arroz com salada murcha. Aqui a comida tem sabor de verdade.'
  },
  {
    id: 3,
    title: 'Busca economizar usando ingredientes simples de mercado e feira',
    desc: 'Nada de farinhas caras de R$ 50 ou suplementos inacessíveis. Economize até R$ 350 por mês no supermercado.'
  },
  {
    id: 4,
    title: 'Não quer pesar cada garfada nem calcular calorias do zero',
    desc: 'Todas as receitas já vêm com o cálculo exato de calorias, proteínas, carboidratos e gorduras prontas por porção.'
  },
  {
    id: 5,
    title: 'Tem pouca prática e precisa de um passo a passo visual e fácil',
    desc: 'Instruções diretas ao ponto, em linguagem do dia a dia, para você acertar o ponto logo na primeira tentativa.'
  },
  {
    id: 6,
    title: 'Quer servir refeições que a família inteira coma com prazer',
    desc: 'Receitas tão gostosas que marido, filhos e visitas vão comer e repetir sem nem perceber que é fit.'
  }
];

export default function TargetAudience() {
  const [checkedIds, setCheckedIds] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const toggleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
          <span>Identificação Imediata</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Esse Cardápio é <span className="text-emerald-600">Perfeito Para Você</span> Que...
        </h2>
        
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Marque os itens que fazem parte do seu dia a dia e descubra como o guia vai resolver sua rotina na cozinha:
        </p>

        {/* Checklist Cards */}
        <div className="mt-10 grid grid-cols-1 gap-3.5 text-left">
          {checklistItems.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 opacity-75'
                }`}
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 text-white'
                      : 'border-2 border-slate-300 text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive feedback callout */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-white">
                Você marcou {checkedIds.length} de {checklistItems.length} situações comuns!
              </p>
              <p className="text-xs text-slate-300">
                Se você marcou pelo menos 1 item, as 150 receitas foram desenhadas exatamente para resolver a sua rotina.
              </p>
            </div>
          </div>

          <a
            href="#receitas"
            className="px-4 py-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <span>Ver Receitas</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

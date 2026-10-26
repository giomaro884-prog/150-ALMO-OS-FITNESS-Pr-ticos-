import { 
  UtensilsCrossed, 
  Clock, 
  ShoppingBag, 
  BookOpen, 
  Flame, 
  Heart, 
  Users, 
  Smartphone 
} from 'lucide-react';

const benefits = [
  {
    icon: UtensilsCrossed,
    title: '150 Almoços sem cair na repetição',
    desc: 'Um acervo imenso para você nunca mais se perguntar "o que vou fazer pro almoço hoje?". Mais de 5 meses sem repetir prato.'
  },
  {
    icon: Clock,
    title: 'Receitas rápidas para a sua rotina',
    desc: 'Pratos de panela única, assados rápidos e opções de 15 a 25 minutos pensadas para quem não tem tempo a perder.'
  },
  {
    icon: ShoppingBag,
    title: 'Ingredientes baratos e acessíveis',
    desc: 'Comida com ingredientes da feira e do mercado tradicional. Economize até 40% na sua compra semanal de alimentos.'
  },
  {
    icon: BookOpen,
    title: 'Passo a passo simples e ilustrado',
    desc: 'Sem termos técnicos complicados de chef. Explicações claras e diretas para quem quer praticidade e comida no prato.'
  },
  {
    icon: Flame,
    title: 'Calorias calculadas por porção',
    desc: 'Chega de quebrar a cabeça calculando grama por grama. Saiba exatamente quanto está comendo em cada porção.'
  },
  {
    icon: Heart,
    title: 'Comida de verdade com sabor',
    desc: 'Combinações de temperos naturais, ervas e marinadas que deixam carnes e legumes com gosto de refeição de restaurante.'
  },
  {
    icon: Users,
    title: 'Opções para toda a família',
    desc: 'Panquecas, risotos fit, massas leves e tortas que as crianças e o marido amam, acabando com a necessidade de fazer dois almoços.'
  },
  {
    icon: Smartphone,
    title: 'Acesso no celular ou impresso',
    desc: 'Diagramado com carinho em alta resolução para ler na tela do celular, tablet, computador ou imprimir o livro físico.'
  }
];

export default function BenefitsGrid() {
  return (
    <section id="beneficios" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 mb-2">
            <span>Diferenciais Exclusivos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tudo o Que Você Precisa Para <span className="text-emerald-600">Almoçar Bem Todo Dia</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Desenvolvido para eliminar o estresse da cozinha e tornar a sua alimentação saudável um hábito natural e econômico.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

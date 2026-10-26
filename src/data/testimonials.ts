export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  date: string;
  rating: number;
  avatarText: string;
  avatarBg: string;
  result: string;
  comment: string;
  dishName: string;
  dishImage?: string;
  likes: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Camila Fernandes',
    role: 'Advogada & Mãe',
    location: 'São Paulo, SP',
    date: '28 de março',
    rating: 5,
    avatarText: 'CF',
    avatarBg: 'bg-emerald-600',
    result: '-3.8 kg em 24 dias',
    comment: 'Minhas marmitas estavam sem graça há meses, sempre aquele mesmo frango seco com batata doce. Agora uso o guia todo dia! As receitas de almoço salvaram minha rotina corrida e ainda emagreci quase 4kg sem passar um pingo de fome.',
    dishName: 'Risoto de Quinoa com Frango Desfiado',
    dishImage: '/src/assets/images/recipe_pure_frango_dish_1792979468824.jpg',
    likes: 51
  },
  {
    id: '2',
    name: 'Patrícia Rocha',
    role: 'Professora',
    location: 'Belo Horizonte, MG',
    date: '18 de fevereiro',
    rating: 5,
    avatarText: 'PR',
    avatarBg: 'bg-amber-600',
    result: 'Família inteira aprovou',
    comment: 'Minha filha de 8 anos adora as receitas do livro. A gente faz a panqueca de carne, a lasanha de berinjela e a crepioca de frigideira juntas. Fica uma delícia, meu marido parou de reclamar de comida saudável e a cozinha virou festa!',
    dishName: 'Lasanha Fit Prática de Berinjela',
    dishImage: '/src/assets/images/recipe_lasanha_fit_dish_1792979469618.jpg',
    likes: 62
  },
  {
    id: '3',
    name: 'Mariana Silveira',
    role: 'Enfermeira',
    location: 'Curitiba, PR',
    date: '12 de abril',
    rating: 5,
    avatarText: 'MS',
    avatarBg: 'bg-teal-600',
    result: '-5.2 kg e mais disposição',
    comment: 'Comprei por causa da promessa de receitas rápidas e realmente entrego o almoço pronto em menos de 20 minutos. Não tenho tempo nenhum por causa dos plantões e agora não peço mais delivery de fast food. O melhor investimento que fiz no ano.',
    dishName: 'Crepioca Crocante com Salada Verde',
    dishImage: '/src/assets/images/recipe_crepioca_dish_1792979467671.jpg',
    likes: 74
  },
  {
    id: '4',
    name: 'Juliana Medeiros',
    role: 'Contadora',
    location: 'Campinas, SP',
    date: '05 de maio',
    rating: 5,
    avatarText: 'JM',
    avatarBg: 'bg-rose-600',
    result: 'Economia de R$ 380/mês no mercado',
    comment: 'O que mais me surpreendeu foi a economia! Nada de ingredientes caros ou suplementos mirabolantes. É comida simples da feira e do açougue bem temperada com os segredinhos do livro. Só o pacote completo com os 5 bônus já vale dez vezes mais.',
    dishName: 'Marmitas Semanais Organizadas',
    dishImage: '/src/assets/images/hero_ebook_presentation_1792979467882.jpg',
    likes: 49
  }
];

export const whatsappMessages = [
  {
    author: 'Renata L.',
    time: '13:14',
    text: 'Menina, fiz a crepioca de frango ontem pro almoço, meu marido nem acreditou que era fit kkkk pediu pra fazer de novo hoje!',
    verified: true
  },
  {
    author: 'Beatriz Castro',
    time: '14:22',
    text: 'Perdi 4kg em 3 semanas só trocando o almoço pesado do buffet pelas opções práticas do livro. O melhor é que não sinto aquele sono da tarde.',
    verified: true
  },
  {
    author: 'Cláudia Ramos',
    time: '12:05',
    text: 'A lista de compras inteligente me economizou quase 100 reais na feira só essa semana! Comprei só o que ia usar e não joguei nada fora.',
    verified: true
  }
];

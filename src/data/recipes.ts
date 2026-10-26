export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  prepTime: string;
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  image: string;
  servings: string;
  costEstimate: string;
  ingredients: string[];
  instructions: string[];
  tips: string;
}

export const sampleRecipes: Recipe[] = [
  {
    id: 'crepioca-frango',
    title: 'Crepioca Crocante de Frango com Queijo Leve',
    subtitle: 'Rápida, saciante e pronta em menos de 10 minutos',
    category: 'Almoço Express',
    prepTime: '10 min',
    calories: '320 kcal',
    protein: '28g',
    carbs: '22g',
    fats: '11g',
    image: '/src/assets/images/recipe_crepioca_dish_1792979467671.jpg',
    servings: '1 porção individual',
    costEstimate: 'R$ 4,50 por prato',
    ingredients: [
      '2 colheres de sopa de goma de tapioca hidratada',
      '1 ovo caipira inteiro + 1 clara',
      '80g de frango cozido e desfiado',
      '1 fatia (30g) de queijo minas frescal ou muçarela light ralada',
      '1/2 tomate picadinho sem sementes',
      'Folhas de orégano fresco ou seco a gosto',
      '1 pitada de sal marinho e cúrcuma'
    ],
    instructions: [
      'Bata o ovo, a clara, a goma de tapioca, uma pitadinha de sal e a cúrcuma em uma tigela até ficar homogêneo.',
      'Aqueça uma frigideira antiaderente untada com um fiozinho de azeite em fogo médio-baixo.',
      'Despeje a massa e deixe firmar por 2 minutos até soltar as bordas douradas.',
      'Distribua o frango desfiado temperado, o queijo e o tomate em metade do disco.',
      'Dobre a crepioca ao meio, tampe por 1 minuto para o queijo derreter e sirva com salada de folhas.'
    ],
    tips: 'Você pode deixar o frango desfiado já congelado em porções para montar essa refeição em 5 minutos nos dias mais corridos.'
  },
  {
    id: 'pure-mandioca-frango',
    title: 'Frango ao Molho Rústico com Purê de Mandioca Aveludado',
    subtitle: 'Comida caseira de verdade com tempero afetivo e baixo índice glicêmico',
    category: 'Marmita Perfeita',
    prepTime: '25 min',
    calories: '385 kcal',
    protein: '36g',
    carbs: '34g',
    fats: '9g',
    image: '/src/assets/images/recipe_pure_frango_dish_1792979468824.jpg',
    servings: '2 refeições',
    costEstimate: 'R$ 6,80 por porção',
    ingredients: [
      '300g de peito de frango cozido e desfiado',
      '3 tomates maduros picados (ou molho caseiro sem açúcar)',
      '1/2 cebola roxa bem picadinha e 2 dentes de alho amassados',
      '250g de mandioca cozida bem macia',
      '50ml de leite vegetal ou desnatado para dar o ponto do purê',
      '1 colher de chá de azeite de oliva extravirgem',
      'Cheiro-verde picadinho e páprica defumada a gosto'
    ],
    instructions: [
      'Amasse a mandioca ainda quente com um garfo ou mixer, acrescentando o leite e uma pitadinha de sal até formar um purê bem liso.',
      'Em uma panela, refogue o alho e a cebola no azeite até dourarem.',
      'Adicione os tomates e a páprica defumada, cozinhando em fogo baixo até criar um molho espesso e brilhante.',
      'Misture o peito de frango desfiado ao molho, ajustando o sal e finalizando com bastante cheiro-verde fresco.',
      'Sirva o purê de base com o frango suculento por cima. Excelente para congelar!'
    ],
    tips: 'A mandioca é um carboidrato complexo que mantém sua saciedade por até 4 horas sem provocar picos de insulina.'
  },
  {
    id: 'lasanha-berinjela-carne',
    title: 'Lasanha Fit de Berinjela com Carne Magra e Ricota',
    subtitle: 'O sabor da lasanha tradicional sem farinha de trigo e sem peso na consciência',
    category: 'Refeição de Família',
    prepTime: '30 min',
    calories: '340 kcal',
    protein: '34g',
    carbs: '16g',
    fats: '12g',
    image: '/src/assets/images/recipe_lasanha_fit_dish_1792979469618.jpg',
    servings: '4 porções generosas',
    costEstimate: 'R$ 7,20 por porção',
    ingredients: [
      '2 berinjelas grandes cortadas no sentido do comprimento em fatias finas',
      '400g de carne moída magra (patinho ou coxão mole)',
      '1 lata de tomate pelado triturado com orégano e manjericão fresco',
      '150g de creme de ricota leve temperado com noz-moscada',
      '80g de queijo muçarela ralado para gratinar',
      'Sal marinho, pimenta-do-reino e alho à vontade'
    ],
    instructions: [
      'Grelhe as fatias de berinjela numa frigideira quente com um fio de azeite por 1 minuto de cada lado para murchar e liberar a água.',
      'Refogue a carne moída magra com alho, cebola e tempere com os tomates pelados até obter um bolonhesa encorpado.',
      'Em um refratário, intercale: camada de molho à bolonhesa, fatias de berinjela e colheradas de creme de ricota leve.',
      'Repita até o topo e finalize cobrindo com a muçarela ralada e folhas de manjericão fresco.',
      'Leve ao forno a 200°C por 18 minutos até dourar e borbulhar na superfície. Toda a família vai amar!'
    ],
    tips: 'Grelhar a berinjela antes de montar garante uma textura firme que não solta água no refratário.'
  }
];

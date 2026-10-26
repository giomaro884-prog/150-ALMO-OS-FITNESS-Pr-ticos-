export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    id: '1',
    question: 'Os ingredientes das receitas são caros ou difíceis de achar?',
    answer: 'Não! Esse é um dos maiores diferenciais do guia. Todas as receitas foram pensadas especificamente para a realidade brasileira: utilizam ingredientes simples encontrados em qualquer feira de bairro ou supermercado popular (frango, ovos, mandioca, berinjela, cenoura, tomate, temperos naturais). Você não precisará comprar farinhas caras, ingredientes importados ou suplementos.'
  },
  {
    id: '2',
    question: 'Como vou receber o acesso ao material?',
    answer: 'O envio é imediato e 100% automático! Assim que o seu pagamento for aprovado (no Pix a liberação leva menos de 30 segundos), você recebe o link de download direto no seu e-mail cadastrado e também por mensagem no seu WhatsApp. Você pode baixar em PDF e acessar quantas vezes quiser no celular, tablet, computador ou até imprimir.'
  },
  {
    id: '3',
    question: 'Eu quase não sei cozinhar, vou conseguir fazer?',
    answer: 'Com certeza! Cada receita possui instruções claras, passo a passo ilustrado, tempo estimado de preparo e dicas de substituição. Mesmo quem nunca fritou um ovo consegue preparar pratos deliciosos e douradinhos logo na primeira tentativa.'
  },
  {
    id: '4',
    question: 'Serve tanto para quem quer emagrecer quanto para quem quer manter o peso?',
    answer: 'Sim! Todas as 150 opções acompanham a tabela de calorias e macronutrientes (proteínas, carboidratos e gorduras boas). Se você quer emagrecer com déficit calórico saudável, as receitas são altamente saciantes. Se você treina e busca definição ou manutenção, basta ajustar as porções conforme sua meta.'
  },
  {
    id: '5',
    question: 'O pagamento é mensalidade ou taxa única?',
    answer: 'Pagamento ÚNICO! Não é assinatura e você nunca terá cobranças extras ou mensalidades. Você paga apenas uma vez (R$ 29,90 no Básico ou R$ 37,90 no Completo) e o material é seu para a vida toda, incluindo futuras atualizações.'
  },
  {
    id: '6',
    question: 'E se eu comprar e não gostar?',
    answer: 'Você está 100% protegida pela nossa Garantia Blindada de 7 Dias. Se você abrir o guia, testar as receitas e achar que não valeu cada centavo, basta enviar um e-mail ou uma mensagem para o nosso suporte e devolvemos todo o seu dinheiro na mesma hora, sem burocracia ou perguntas.'
  }
];

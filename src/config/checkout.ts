/**
 * CONFIGURAÇÃO DOS LINKS DE CHECKOUT
 * 
 * Cole aqui os seus links de checkout (Kiwify, Hotmart, Eduzz, Kirvano, PerfectPay, etc.)
 */
export const CHECKOUT_CONFIG = {
  // Link de checkout do Pacote Básico (R$ 29,90)
  basicUrl: '',

  // Link de checkout do Pacote Completo (R$ 37,90)
  completeUrl: '',
};

/**
 * Função utilitária para obter a URL ativa (seja do arquivo ou configurada na interface)
 */
export function getCheckoutUrl(plan: 'basic' | 'complete'): string {
  const localStored = localStorage.getItem(`custom_checkout_${plan}`);
  if (localStored && localStored.trim().startsWith('http')) {
    return localStored.trim();
  }
  return plan === 'complete' ? CHECKOUT_CONFIG.completeUrl : CHECKOUT_CONFIG.basicUrl;
}

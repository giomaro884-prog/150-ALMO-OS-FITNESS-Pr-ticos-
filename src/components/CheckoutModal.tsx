import { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode, 
  CreditCard, 
  Download, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CheckoutModalProps {
  initialPlan: 'basic' | 'complete';
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ initialPlan, isOpen, onClose }: CheckoutModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>(initialPlan);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Sync if initialPlan changes
  if (!isOpen) return null;

  const currentPrice = selectedPlan === 'complete' ? '37,90' : '29,90';
  const planTitle = selectedPlan === 'complete' 
    ? 'Pacote Completo · 150 Almoços + 5 Bônus VIP' 
    : 'Pacote Básico · 150 Almoços Fitness';

  const mockPixKey = '00020126580014BR.GOV.BCB.PIX0136d8f8a150-fitness-ebook-892415204000053039865405' + 
    (selectedPlan === 'complete' ? '37.90' : '29.90') + 
    '5802BR5923150 ALMOCOS FITNESS LT6009SAO PAULO62070503***6304E8A2';

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(mockPixKey);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Por favor, preencha seu nome e e-mail para receber o guia.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsCompleted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white leading-none">
                {isCompleted ? 'Acesso Liberado com Sucesso!' : 'Finalizar Acesso Seguro'}
              </h3>
              <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Ambiente Criptografado de 256 bits · Envio Imediato
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success Screen */}
        {isCompleted ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                Pagamento Aprovado Instantaneamente
              </span>
              <h4 className="text-2xl font-black text-slate-900 mt-3">
                Parabéns, {name || 'Aluna'}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Seu acesso ao <strong>{planTitle}</strong> foi gerado e enviado para <strong>{email}</strong>
                {whatsapp ? ` e para o seu WhatsApp (${whatsapp})` : ''}.
              </p>
            </div>

            {/* Instant Download Box */}
            <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                  Material Pronto para Download:
                </span>
                <span className="text-[11px] font-semibold text-emerald-700">PDF em Alta Resolução</span>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#download-simulado"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Download simulado com sucesso! Na versão em produção, o link abre o PDF instantaneamente.');
                  }}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Livro Digital 150 Almoços Fitness (PDF)</span>
                </a>

                {selectedPlan === 'complete' && (
                  <a
                    href="#download-bonus"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Download dos 5 Bônus simulado com sucesso!');
                    }}
                    className="w-full py-2.5 px-4 bg-white border border-emerald-300 text-emerald-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Baixar Pacote de 5 Bônus VIP (Sucos, Planner, Doces e Jantares)</span>
                  </a>
                )}
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold transition-colors"
            >
              Fechar e Voltar à Página
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSimulatePayment} className="p-5 sm:p-7 space-y-5">
            
            {/* Plan Switcher / Summary */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Item Selecionado:
                </span>
                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                  {planTitle}
                </h4>
              </div>

              <div className="text-right flex items-center gap-3">
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through">
                    {selectedPlan === 'complete' ? 'R$ 197,00' : 'R$ 97,00'}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 font-mono tabular-nums leading-none">
                    R$ {currentPrice}
                  </div>
                </div>
              </div>
            </div>

            {/* If basic is selected, present a 1-click upgrade to complete */}
            {selectedPlan === 'basic' && (
              <div 
                onClick={() => setSelectedPlan('complete')}
                className="p-3.5 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-center justify-between gap-3 cursor-pointer hover:bg-amber-100/70 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-bold text-amber-950">
                      Levar também os 5 Bônus VIP por apenas +R$ 8,00?
                    </p>
                    <p className="text-[11px] text-amber-800">
                      Inclui Guia de Jantares Leves, Sucos Detox, Doces Fit e Planner.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-amber-300 shrink-0">
                  Upgrade R$ 37,90
                </span>
              </div>
            )}

            {/* Buyer Contact Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria da Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Seu Melhor E-mail * <span className="font-normal text-slate-400">(para envio do PDF)</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maria@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp <span className="font-normal text-slate-400">(cópia instantânea)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                Forma de Pagamento:
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('pix')}
                  className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'pix'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <QrCode className="w-4 h-4 text-emerald-600" />
                  <span>PIX Instantâneo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-slate-700" />
                  <span>Cartão de Crédito</span>
                </button>
              </div>
            </div>

            {/* Payment specifics */}
            {paymentMethod === 'pix' ? (
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-emerald-950 font-bold">
                  <span>Código Pix Copia e Cola:</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Liberação em 30 seg</span>
                </div>

                <div className="relative">
                  <input
                    readOnly
                    value={mockPixKey}
                    className="w-full pr-24 pl-3 py-2 text-[11px] font-mono text-slate-600 bg-white border border-emerald-200 rounded-xl"
                  />
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Pix</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
                <p>Pagamento seguro via Cartão de Crédito em até 3x de R$ {(parseFloat(currentPrice) / 3).toFixed(2).replace('.', ',')}.</p>
                <input
                  type="text"
                  placeholder="Número do Cartão de Crédito"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300"
                />
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isProcessing ? (
                  <span>Liberando Acesso Seguro...</span>
                ) : (
                  <>
                    <span>Confirmar Pedido de R$ {currentPrice}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-2.5">
                🔒 Pagamento processado com segurança bancária · 7 Dias de Garantia Incondicional
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}

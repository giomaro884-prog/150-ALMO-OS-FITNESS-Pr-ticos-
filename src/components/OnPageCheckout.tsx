import { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Copy, 
  Check, 
  QrCode, 
  CreditCard, 
  Sparkles, 
  Download, 
  ArrowRight,
  Salad,
  Clock,
  ExternalLink,
  Settings
} from 'lucide-react';
import { CHECKOUT_CONFIG } from '../config/checkout';

interface OnPageCheckoutProps {
  selectedPlan: 'basic' | 'complete';
  onChangePlan: (plan: 'basic' | 'complete') => void;
}

export default function OnPageCheckout({ selectedPlan, onChangePlan }: OnPageCheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cpf, setCpf] = useState('');
  
  // Card states
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [installments, setInstallments] = useState('1');

  // Checkout workflow states
  const [isCopied, setIsCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pixGenerated, setPixGenerated] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Link configurator drawer
  const [showConfig, setShowConfig] = useState(false);
  const [customBasicUrl, setCustomBasicUrl] = useState(
    localStorage.getItem('custom_checkout_basic') || CHECKOUT_CONFIG.basicUrl
  );
  const [customCompleteUrl, setCustomCompleteUrl] = useState(
    localStorage.getItem('custom_checkout_complete') || CHECKOUT_CONFIG.completeUrl
  );

  const priceValue = selectedPlan === 'complete' ? 37.90 : 29.90;
  const priceFormatted = selectedPlan === 'complete' ? '37,90' : '29,90';

  const mockPixKey = `00020126580014BR.GOV.BCB.PIX0136d8f8a150-fitness-${selectedPlan === 'complete' ? '3790' : '2990'}5204000053039865405${priceValue.toFixed(2)}5802BR5923150 ALMOCOS FITNESS LT6009SAO PAULO62070503***6304`;

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('custom_checkout_basic', customBasicUrl.trim());
    localStorage.setItem('custom_checkout_complete', customCompleteUrl.trim());
    setShowConfig(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      return;
    }

    // Check if an external checkout link was configured
    const activeExternalUrl = selectedPlan === 'complete' 
      ? (customCompleteUrl || CHECKOUT_CONFIG.completeUrl)
      : (customBasicUrl || CHECKOUT_CONFIG.basicUrl);

    if (activeExternalUrl && activeExternalUrl.trim().startsWith('http')) {
      // Redirect to external checkout
      window.location.href = activeExternalUrl.trim();
      return;
    }

    // Native checkout execution
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (paymentMethod === 'pix') {
        setPixGenerated(true);
      } else {
        setIsSuccess(true);
      }
    }, 1000);
  };

  const handleCopyPix = () => {
    navigator.clipboard?.writeText(mockPixKey);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleConfirmPixPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section id="checkout" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/80 via-white to-slate-100 border-t border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Checkout Oficial Integrado na Página</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Finalize Seu Acesso em <span className="text-emerald-600">Menos de 1 Minuto</span>
          </h2>
          
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Seus dados estão protegidos com criptografia bancária de 256 bits. O material é liberado instantaneamente.
          </p>

          {/* Prominent External Checkout Link Banner */}
          <div className="mt-4 max-w-xl mx-auto">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-950">
                    Tem seu link da Kiwify, Hotmart, Eduzz ou Kirvano?
                  </p>
                  <p className="text-[11px] text-amber-800">
                    Clique no botão ao lado para colar seus links ou envie aqui no chat!
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="px-4 py-2 text-xs font-black bg-amber-500 hover:bg-amber-600 text-white rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                {showConfig ? 'Fechar Painel' : 'COLAR MEUS LINKS AQUI'}
              </button>
            </div>
          </div>

          {/* Config Drawer for External Links */}
          {showConfig && (
            <form onSubmit={handleSaveConfig} className="mt-4 p-5 rounded-2xl bg-white border-2 border-emerald-500 text-left space-y-3.5 shadow-xl animate-fade-in max-w-xl mx-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="text-sm font-black text-slate-900">
                  Configurar Links de Checkout Externo
                </h4>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Redirecionamento Automático
                </span>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Link do Pacote Básico (R$ 29,90):
                </label>
                <input
                  type="url"
                  placeholder="https://pay.kiwify.com.br/..."
                  value={customBasicUrl}
                  onChange={(e) => setCustomBasicUrl(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Link do Pacote Completo (R$ 37,90):
                </label>
                <input
                  type="url"
                  placeholder="https://pay.kiwify.com.br/..."
                  value={customCompleteUrl}
                  onChange={(e) => setCustomCompleteUrl(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer"
                >
                  Salvar Links
                </button>
              </div>
            </form>
          )}
        </div>

        {/* If Order is Approved & Finished */}
        {isSuccess ? (
          <div className="bg-white rounded-3xl border-2 border-emerald-500 shadow-2xl p-6 sm:p-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                Pagamento Confirmado
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Acesso Liberado com Sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Parabéns, <strong>{name || 'Aluna'}</strong>! Seus links de acesso foram enviados para <strong>{email}</strong>
                {whatsapp ? ` e também via WhatsApp no número ${whatsapp}` : ''}.
              </p>
            </div>

            {/* Instant Download Options */}
            <div className="p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-left space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                Seus Materiais Prontos para Download:
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => alert('Download do Livro 150 Almoços Fitness em PDF iniciado!')}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Livro Digital 150 Almoços Fitness (PDF HD)</span>
                </button>

                {selectedPlan === 'complete' && (
                  <button
                    type="button"
                    onClick={() => alert('Download do Pacote de 5 Bônus VIP iniciado!')}
                    className="w-full py-3 px-4 bg-white border-2 border-emerald-400 text-emerald-800 font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Baixar Pacote com os 5 Super Bônus VIP (Sucos, Planner, Doces e Jantares)</span>
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                setPixGenerated(false);
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-semibold cursor-pointer"
            >
              Fazer outro pedido de teste
            </button>
          </div>
        ) : (
          /* Main 2-Column On-Page Checkout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form & Steps */}
            <form onSubmit={handleFormSubmit} className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-5 sm:p-8 space-y-6">
              
              {/* Step 1: Package Selection Cards */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                  <span>Escolha o Seu Pacote:</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Basic Option */}
                  <div
                    onClick={() => {
                      onChangePlan('basic');
                      setPixGenerated(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPlan === 'basic'
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase text-slate-500">
                          Básico
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'basic' ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'}`}>
                          {selectedPlan === 'basic' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        150 Almoços Fitness
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Guia + Lista de compras
                      </p>
                    </div>
                    <div className="text-base font-black text-slate-900 mt-3 font-mono tabular-nums">
                      R$ 29,90
                    </div>
                  </div>

                  {/* Complete Option */}
                  <div
                    onClick={() => {
                      onChangePlan('complete');
                      setPixGenerated(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative ${
                      selectedPlan === 'complete'
                        ? 'border-emerald-600 bg-emerald-50/80 shadow-md ring-2 ring-emerald-500/20'
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                    }`}
                  >
                    <span className="absolute -top-2.5 right-3 bg-amber-400 text-amber-950 font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Mais Escolhido
                    </span>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase text-emerald-800">
                          Completo + 5 Bônus
                        </span>
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'complete' ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300'}`}>
                          {selectedPlan === 'complete' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                      <h4 className="text-sm font-black text-slate-900 mt-1">
                        Combo Seca & Desincha
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Guia + 5 Super Bônus VIP
                      </p>
                    </div>
                    <div className="text-base font-black text-emerald-700 mt-3 font-mono tabular-nums">
                      R$ 37,90
                    </div>
                  </div>
                </div>

                {/* Upsell if basic is selected */}
                {selectedPlan === 'basic' && (
                  <div 
                    onClick={() => onChangePlan('complete')}
                    className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-between gap-2 cursor-pointer hover:bg-amber-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs font-bold text-amber-950">
                        Adicionar os 5 Bônus VIP por apenas +R$ 8,00?
                      </span>
                    </div>
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-amber-300">
                      Mudar para R$ 37,90
                    </span>
                  </div>
                )}
              </div>

              {/* Step 2: Customer Data */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">2</span>
                  <span>Seus Dados de Acesso:</span>
                </label>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Digite seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Seu E-mail * <span className="text-slate-400 font-normal">(onde receberá o PDF)</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      CPF <span className="text-slate-400 font-normal">(para emissão da nota fiscal digital)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="000.000.000-00"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Payment Options */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                  <span>Forma de Pagamento:</span>
                </label>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentMethod('pix');
                      setPixGenerated(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Instantâneo)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPaymentMethod('card');
                      setPixGenerated(false);
                    }}
                    className={`p-3.5 rounded-2xl border-2 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-sm'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-slate-700" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>

                {/* Pix Specific Instructions / Generated Box */}
                {paymentMethod === 'pix' && !pixGenerated && (
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-slate-700 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span>Por que pagar no Pix?</span>
                    </div>
                    <p className="leading-relaxed">
                      O Pix é o método mais rápido e seguro: assim que você confirmar, o sistema gera o código Copia e Cola e o QR Code. Ao pagar no seu app bancário, seu acesso é enviado instantaneamente.
                    </p>
                  </div>
                )}

                {/* Generated PIX Box */}
                {paymentMethod === 'pix' && pixGenerated && (
                  <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-500 space-y-4 animate-fade-in text-center">
                    <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>Código Pix Válido por 15 Minutos</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-200 max-w-[220px] mx-auto shadow-sm">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(mockPixKey)}`}
                        alt="QR Code Pix"
                        className="w-full h-auto mx-auto"
                      />
                      <span className="text-[10px] text-slate-400 block mt-1 font-mono">
                        Aponte a câmera do seu banco
                      </span>
                    </div>

                    <div className="text-left space-y-1.5">
                      <label className="block text-xs font-bold text-emerald-950">
                        Ou utilize o código Copia e Cola:
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          readOnly
                          value={mockPixKey}
                          className="w-full px-3 py-2 text-[11px] font-mono text-slate-600 bg-white border border-emerald-300 rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={handleCopyPix}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm transition-all"
                        >
                          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          <span>{isCopied ? 'Copiado!' : 'Copiar'}</span>
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleConfirmPixPayment}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>JÁ FIZ O PAGAMENTO PIX (LIBERAR ACESSO)</span>
                    </button>
                  </div>
                )}

                {/* Card Fields */}
                {paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nome Impresso no Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="Como está no cartão"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Validade (MM/AA)
                        </label>
                        <input
                          type="text"
                          placeholder="12/28"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Código CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Opção de Parcelamento
                      </label>
                      <select
                        value={installments}
                        onChange={(e) => setInstallments(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white font-medium"
                      >
                        <option value="1">1x de R$ {priceFormatted} à vista (Sem juros)</option>
                        <option value="2">2x de R$ {(priceValue / 2).toFixed(2).replace('.', ',')} (Sem juros)</option>
                        <option value="3">3x de R$ {(priceValue / 3).toFixed(2).replace('.', ',')} (Sem juros)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA (shown if Pix is not yet generated) */}
              {!pixGenerated && (
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isProcessing ? (
                      <span>Gerando Acesso Seguro...</span>
                    ) : (
                      <>
                        <span>
                          {paymentMethod === 'pix' ? 'GERAR PIX DE R$ ' + priceFormatted : 'PAGAR R$ ' + priceFormatted}
                        </span>
                        <ArrowRight className="w-5 h-5 shrink-0" />
                      </>
                    )}
                  </button>

                  <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Criptografia 256 bits
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      Acesso Vitalício Imediato
                    </span>
                  </div>
                </div>
              )}

            </form>

            {/* Right Column: Order Summary & Guarantee Badge */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Order Summary Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                    <Salad className="w-4 h-4 text-emerald-600" />
                    <span>Resumo do Pedido</span>
                  </h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Acesso Digital
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-slate-700 font-medium">
                    <span>Livro 150 Almoços Fitness (PDF):</span>
                    <span className="font-bold text-slate-900">Incluso</span>
                  </div>
                  <div className="flex justify-between text-slate-700 font-medium">
                    <span>Lista de Compras Inteligente:</span>
                    <span className="font-bold text-slate-900">Incluso</span>
                  </div>
                  <div className="flex justify-between text-slate-700 font-medium">
                    <span>Tabela de Calorias & Macros:</span>
                    <span className="font-bold text-slate-900">Incluso</span>
                  </div>

                  {selectedPlan === 'complete' ? (
                    <>
                      <div className="pt-2 border-t border-slate-100 flex justify-between text-emerald-800 font-bold">
                        <span>5 Super Bônus VIP:</span>
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px]">GRÁTIS HOJE</span>
                      </div>
                      <div className="pl-3 text-[11px] text-slate-500 space-y-1">
                        <p>✓ Sucos Detox Emagrecedores</p>
                        <p>✓ Planner Organizador de Marmitas</p>
                        <p>✓ Guia Inteligente de Substituições</p>
                        <p>✓ Doces & Sobremesas Fit Sem Culpa</p>
                        <p>✓ Jantares Leves para Desinchar Dormindo</p>
                      </div>
                    </>
                  ) : (
                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400">
                      Bônus VIP não inclusos nesta opção.
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-sm font-extrabold text-slate-900">Total a Pagar:</span>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through block">
                        {selectedPlan === 'complete' ? 'R$ 197,00' : 'R$ 97,00'}
                      </span>
                      <span className="text-2xl font-black text-emerald-600 font-mono tabular-nums leading-none">
                        R$ {priceFormatted}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Box in Summary */}
              <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-3xl p-5 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <ShieldCheck className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-emerald-950">
                    Garantia Blindada de 7 Dias
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Se você não gostar do material por qualquer motivo, devolvemos 100% do seu dinheiro com apenas um e-mail.
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

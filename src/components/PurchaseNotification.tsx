import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

interface PurchaseEvent {
  name: string;
  city: string;
  state: string;
  timeAgo: string;
}

const purchasePool: PurchaseEvent[] = [
  { name: 'Camila F.', city: 'São Paulo', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Patrícia R.', city: 'Belo Horizonte', state: 'MG', timeAgo: 'há 3 minutos' },
  { name: 'Mariana S.', city: 'Curitiba', state: 'PR', timeAgo: 'há 1 minuto' },
  { name: 'Amanda L.', city: 'Porto Alegre', state: 'RS', timeAgo: 'há 4 minutos' },
  { name: 'Juliana M.', city: 'Campinas', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Renata B.', city: 'Salvador', state: 'BA', timeAgo: 'há 5 minutos' },
  { name: 'Débora K.', city: 'Fortaleza', state: 'CE', timeAgo: 'agora mesmo' },
  { name: 'Fernanda T.', city: 'Brasília', state: 'DF', timeAgo: 'há 3 minutos' },
  { name: 'Larissa V.', city: 'Goiânia', state: 'GO', timeAgo: 'há 2 minutos' },
  { name: 'Aline C.', city: 'Florianópolis', state: 'SC', timeAgo: 'há 1 minuto' },
  { name: 'Bruna M.', city: 'Recife', state: 'PE', timeAgo: 'há 6 minutos' },
  { name: 'Vanessa P.', city: 'Vitória', state: 'ES', timeAgo: 'há 4 minutos' },
  { name: 'Letícia D.', city: 'Ribeirão Preto', state: 'SP', timeAgo: 'há 2 minutos' },
  { name: 'Roberta S.', city: 'Cuiabá', state: 'MT', timeAgo: 'há 5 minutos' },
  { name: 'Tatiana O.', city: 'Manaus', state: 'AM', timeAgo: 'há 3 minutos' },
  { name: 'Carolina Z.', city: 'Santos', state: 'SP', timeAgo: 'agora mesmo' },
  { name: 'Beatriz N.', city: 'Joinville', state: 'SC', timeAgo: 'há 2 minutos' },
  { name: 'Luciana G.', city: 'Londrina', state: 'PR', timeAgo: 'há 4 minutos' }
];

export default function PurchaseNotification() {
  const [currentNotification, setCurrentNotification] = useState<PurchaseEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      // Random delay between 15 and 30 seconds
      const delay = Math.floor(Math.random() * (30000 - 15000 + 1)) + 15000;

      return setTimeout(() => {
        // Pick random buyer from pool
        const randomItem = purchasePool[Math.floor(Math.random() * purchasePool.length)];
        setCurrentNotification(randomItem);
        setIsVisible(true);

        // Hide after 5 seconds
        hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 5000);

        // Schedule next round
        timerId = scheduleNext();
      }, delay);
    };

    // First trigger after 8 seconds of entering the page
    let timerId = setTimeout(() => {
      const initialItem = purchasePool[0];
      setCurrentNotification(initialItem);
      setIsVisible(true);

      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      timerId = scheduleNext();
    }, 8000);

    return () => {
      clearTimeout(timerId);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <aside 
      aria-live="polite"
      className="fixed top-12 sm:top-14 right-3 sm:right-6 z-50 transition-all duration-500 ease-out transform translate-y-0 opacity-100 max-w-[calc(100vw-24px)]"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-200/90 py-2.5 px-3.5 sm:px-4 flex items-center gap-3 text-slate-800">
        {/* Discreet shopping bag icon */}
        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <ShoppingBag className="w-4 h-4" />
        </div>

        {/* Text info */}
        <div className="text-left text-xs leading-snug">
          <p className="font-bold text-slate-900">
            {currentNotification.name}{' '}
            <span className="font-medium text-slate-500 text-[11px]">
              de {currentNotification.city} - {currentNotification.state}
            </span>
          </p>
          <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5 mt-0.5">
            <span>comprou o <strong>Pacote Completo</strong></span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-400 font-normal">{currentNotification.timeAgo}</span>
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}

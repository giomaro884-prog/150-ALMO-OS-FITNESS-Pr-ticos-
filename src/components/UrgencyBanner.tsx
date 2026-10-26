import { useState, useEffect } from 'react';
import { Clock, ShieldAlert } from 'lucide-react';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState(892); // ~14:52
  const [currentDateFormatted, setCurrentDateFormatted] = useState('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    setCurrentDateFormatted(`${day}/${month}/${year}`);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-xs sm:text-sm font-medium sticky top-0 z-40 shadow-sm">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-center">
        <span className="flex items-center gap-1.5 font-bold tracking-wide uppercase text-white">
          <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0" />
          Esta promoção acaba hoje — {currentDateFormatted || '25/10/2026'}
        </span>
        <span className="hidden sm:inline text-red-200">·</span>
        <div className="flex items-center gap-1.5 bg-red-700/80 px-2.5 py-0.5 rounded text-white font-mono tabular-nums text-xs">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>Oferta expira em: <strong>{formattedTime}</strong></span>
        </div>
        <span className="hidden md:inline text-red-200 text-xs">
          (Últimas 14 cópias com desconto especial)
        </span>
      </div>
    </div>
  );
}

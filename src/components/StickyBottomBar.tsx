import { useState, useEffect } from 'react';
import { ShoppingCart, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenCheckout: (plan: 'basic' | 'complete') => void;
}

export default function StickyBottomBar({ onOpenCheckout }: StickyBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 450px
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl py-2 px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Info: Minimal single line */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="truncate">
            <span className="text-xs sm:text-sm font-extrabold text-slate-900 block truncate">
              150 Almoços Fitness
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-700 font-semibold block">
              A partir de R$ 29,90 · Oferta acaba hoje
            </span>
          </div>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenCheckout('complete')}
            className="px-3.5 sm:px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
            <span>Garantir Vaga</span>
          </button>
        </div>

      </div>
    </div>
  );
}

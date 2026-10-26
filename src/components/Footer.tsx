import { ShieldCheck, Lock, Salad } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        
        {/* Brand */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <Salad className="w-4 h-4" />
            </div>
            <span className="text-lg font-black tracking-tight">150 ALMOÇOS FITNESS</span>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            O guia definitivo de receitas práticas, saborosas e econômicas para o seu dia a dia.
          </p>
        </div>

        {/* Legal Disclaimer from original site */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong>Aviso Legal Importante:</strong> As informações e receitas disponibilizadas neste material digital têm finalidade exclusivamente educativa e informativa e não substituem o diagnóstico, orientação ou acompanhamento médico e nutricional individualizado. Os resultados relacionados ao peso e bem-estar podem variar de pessoa para pessoa de acordo com o metabolismo, consistência e hábitos diários.
          </p>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Compra 100% Segura e Criptografada</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span>Privacidade de Dados Garantida</span>
          </div>
        </div>

        {/* Copyright and links */}
        <div className="pt-4 border-t border-slate-900 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {currentYear} 150 Almoços Fitness. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#hero" className="hover:text-slate-300 transition-colors">Início</a>
            <span>·</span>
            <a href="#ofertas" className="hover:text-slate-300 transition-colors">Ofertas</a>
            <span>·</span>
            <a href="#garantia" className="hover:text-slate-300 transition-colors">Garantia</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

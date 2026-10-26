import { useState } from 'react';
import UrgencyBanner from './components/UrgencyBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import BenefitsGrid from './components/BenefitsGrid';
import RecipePreview from './components/RecipePreview';
import BonusShowcase from './components/BonusShowcase';
import PricingSection from './components/PricingSection';
import SocialProof from './components/SocialProof';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import CheckoutModal from './components/CheckoutModal';
import PurchaseNotification from './components/PurchaseNotification';
import OnPageCheckout from './components/OnPageCheckout';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete'>('complete');

  const handleOpenCheckout = (plan: 'basic' | 'complete') => {
    setSelectedPlan(plan);
    const checkoutEl = document.getElementById('checkout');
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsCheckoutOpen(true);
    }
  };

  const handleScrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenCheckout('complete');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900 pb-16 sm:pb-0">
      {/* Discreet purchase pop-up notification every 15-30s at the top */}
      <PurchaseNotification />

      {/* 1. Urgency Countdown Bar */}
      <UrgencyBanner />

      {/* 2. Top Navigation following Top Bar Contract */}
      <Header onSelectOffer={handleOpenCheckout} />

      {/* 3. High-Impact Hero with product presentation */}
      <main className="flex-1">
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 4. Target Audience / Problem Recognition Checklist */}
        <TargetAudience />

        {/* 5. 8 Core Benefits Grid */}
        <BenefitsGrid />

        {/* 6. Interactive Recipe Preview Showcase */}
        <RecipePreview onSelectOffer={handleScrollToOffers} />

        {/* 7. Bonus Showcase (The 5 Exclusive Bonuses) */}
        <BonusShowcase />

        {/* 8. The 2 Core Offers (Basic vs Complete) */}
        <PricingSection onSelectPlan={handleOpenCheckout} />

        {/* 9. Official On-Page Checkout Embedded Directly on the Page */}
        <OnPageCheckout
          selectedPlan={selectedPlan}
          onChangePlan={setSelectedPlan}
        />

        {/* 10. Social Proof & Verified WhatsApp Testimonials */}
        <SocialProof onSelectOffer={() => handleOpenCheckout('complete')} />

        {/* 10. 7-Day Unconditional Guarantee */}
        <GuaranteeSection />

        {/* 11. FAQ Accordion */}
        <FaqSection onSelectOffer={handleScrollToOffers} />
      </main>

      {/* 12. Legal Footer */}
      <Footer />

      {/* 13. Sticky Floating CTA for High Mobile/Desktop Conversions */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* 14. Interactive High-Conversion Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        initialPlan={selectedPlan}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}

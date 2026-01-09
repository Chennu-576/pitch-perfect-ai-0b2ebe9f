import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PersonalizationEngineSection from "@/components/landing/PersonalizationEngineSection";
import LiveEmailGeneratorSection from "@/components/landing/LiveEmailGeneratorSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <PersonalizationEngineSection />
        <LiveEmailGeneratorSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

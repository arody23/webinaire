import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { RegistrationForm } from "@/components/RegistrationForm";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { WhyAttendSection } from "@/components/WhyAttendSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { UrgencySection } from "@/components/UrgencySection";

const Index = () => {
  const registrationRef = useRef<HTMLElement>(null);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onRegisterClick={scrollToRegistration} />
      <AboutSection />
      <BenefitsSection />
      <WhyAttendSection onRegisterClick={scrollToRegistration} />
      <WhatYouGetSection onRegisterClick={scrollToRegistration} />
      <UrgencySection onRegisterClick={scrollToRegistration} />
      
      <section ref={registrationRef} className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <RegistrationForm />
        </div>
      </section>

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Aroman Emetshu. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
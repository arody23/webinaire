import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/aroman-pro.jpg";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20 max-w-6xl">
        <div className="text-center space-y-6 md:space-y-8 animate-float">
          {/* Urgent Badge */}
          <div className="flex justify-center">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm font-semibold animate-pulse-slow">
              <Sparkles className="w-4 h-4 mr-2" />
              Places limitées - webinaire exclusif
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight px-2">
            <span className="text-foreground">L'</span><span className="text-accent">Influence</span><span className="text-foreground">, c'est du pouvoir :</span>
            <br />
            <span className="text-foreground">Apprend à l'utiliser pour générer des</span>
            <br />
            <span className="text-foreground">revenus durables et prends le </span><span className="text-accent">contrôle</span>
            <br />
            <span className="text-foreground">de ton avenir financier.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Découvrez le produit révolutionnaire qui va transformer le marketing d'influence en Afrique. 
            Pour les créateurs de contenu, influenceurs, UGC creators et tous ceux qui ont une audience.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-6 md:py-8 px-2">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">100K+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Abonnés</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">5+ ans</div>
                <div className="text-xs md:text-sm text-muted-foreground">D'expérience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projets</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onRegisterClick}
            className="text-lg shadow-elegant"
          >
            Réserver ma place
          </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
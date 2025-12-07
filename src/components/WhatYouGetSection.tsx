import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Trophy, Zap } from "lucide-react";

interface WhatYouGetSectionProps {
  onRegisterClick: () => void;
}

export const WhatYouGetSection = ({ onRegisterClick }: WhatYouGetSectionProps) => {
  const benefits = [
    {
      icon: Star,
      title: "Accès exclusif à la plateforme",
      description: "Soyez parmi les premiers à utiliser l'outil révolutionnaire",
      badge: "Exclusif",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Trophy,
      title: "Certificat de participation",
      description: "Validez votre expertise en marketing d'influence",
      badge: "Gratuit",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Stratégies éprouvées",
      description: "Méthodes testées pour monétiser votre audience rapidement",
      badge: "Actionnable",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Gift,
      title: "Bonus surprise",
      description: "Ressources et outils pour booster votre croissance",
      badge: "Surprise",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-4 sm:mb-6 animate-bounce text-xs sm:text-sm">
            Valeur totale: inestimable
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-foreground mb-4 sm:mb-6 leading-tight">
            Ce que vous allez <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">recevoir</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Un événement gratuit avec une valeur incroyable pour votre carrière de créateur
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card via-card to-card/50 backdrop-blur border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className={`p-4 ${benefit.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                      {benefit.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-6 sm:p-8 md:p-12 border-2 border-primary/20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4 leading-tight px-2">
            Tout cela <span className="text-accent">100% gratuit</span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Ne manquez pas cette opportunité unique de transformer votre passion en business
          </p>
          <div className="flex justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={onRegisterClick}
              className="text-sm sm:text-base md:text-lg shadow-elegant animate-float px-4 sm:px-6 py-2.5 sm:py-3 whitespace-normal break-words max-w-xs sm:max-w-sm"
            >
              🌟 Je réserve ma place gratuitement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

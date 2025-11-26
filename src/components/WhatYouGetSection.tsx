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
      title: "Accès Exclusif à la Plateforme",
      description: "Soyez parmi les premiers à utiliser l'outil révolutionnaire",
      badge: "Exclusif",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Trophy,
      title: "Certificat de Participation",
      description: "Validez votre expertise en marketing d'influence",
      badge: "Gratuit",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Stratégies Éprouvées",
      description: "Méthodes testées pour monétiser votre audience rapidement",
      badge: "Actionnable",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Gift,
      title: "Bonus Surprise",
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

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-6 animate-bounce">
            Valeur Totale: INESTIMABLE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Ce Que Vous Allez <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Recevoir</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un événement gratuit avec une valeur incroyable pour votre carrière de créateur
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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

        <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20">
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Tout Cela <span className="text-accent">100% GRATUIT</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ne manquez pas cette opportunité unique de transformer votre passion en business
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={onRegisterClick}
            className="text-xl shadow-elegant animate-float"
          >
            🎯 Je Réserve Ma Place Gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
};

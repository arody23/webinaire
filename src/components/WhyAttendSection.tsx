import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface WhyAttendSectionProps {
  onRegisterClick: () => void;
}

export const WhyAttendSection = ({ onRegisterClick }: WhyAttendSectionProps) => {
  const reasons = [
    {
      title: "Accès à un Produit Révolutionnaire",
      description: "Découvrez en exclusivité la plateforme qui va transformer le marketing d'influence en Afrique",
    },
    {
      title: "Stratégies de Monétisation Prouvées",
      description: "Apprenez comment générer des revenus stables et prévisibles avec votre audience",
    },
    {
      title: "Accompagnement d'un Expert",
      description: "Bénéficiez de l'expérience d'Aroman Emetshu, influenceur avec +100K abonnés",
    },
    {
      title: "Réseau de Créateurs Africains",
      description: "Connectez-vous avec d'autres créateurs de contenu ambitieux de tout le continent",
    },
    {
      title: "Session Interactive en Direct",
      description: "Posez vos questions et obtenez des réponses personnalisées en temps réel",
    },
    {
      title: "Indépendance Financière",
      description: "Prenez le contrôle de votre avenir et créez votre propre succès",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Pourquoi C'est <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Important</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ce webinaire va vous donner les clés pour transformer votre passion en source de revenus durable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="accent"
            size="lg"
            onClick={onRegisterClick}
            className="text-lg shadow-elegant animate-pulse-slow"
          >
            Je Veux Participer Maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

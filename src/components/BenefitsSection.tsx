import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Zap, Target, Globe, Rocket } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Monétisation immédiate",
      description: "Transformez votre audience en revenus dès aujourd'hui",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      title: "Croissance garantie",
      description: "Stratégies éprouvées pour développer votre influence",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Zap,
      title: "Outils révolutionnaires",
      description: "Accédez à la plateforme qui change tout",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Target,
      title: "Indépendance financière",
      description: "Prenez le contrôle de vos revenus",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Globe,
      title: "Réseau africain",
      description: "Rejoignez une communauté de créateurs engagés",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Rocket,
      title: "Support expert",
      description: "Accompagnement personnalisé par Aroman Emetshu",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2 mb-6">
            Ce que vous allez découvrir
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Pourquoi participer à ce webinaire ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un événement unique qui va révolutionner votre approche du marketing d'influence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="pt-6">
                <div className={`p-3 ${benefit.bgColor} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
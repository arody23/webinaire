import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, Users2, Verified } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-6">
            Qui organise ce webinaire ?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Aroman Emetshu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Média Buyer, Consultant & Directeur d'Orbis Creativa Agency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100K+</div>
              <p className="text-sm text-muted-foreground">
                Abonnés sur les réseaux sociaux (Facebook, Instagram, TikTok, Twitter)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5+ ans</div>
              <p className="text-sm text-muted-foreground">
                D'expérience en marketing d'influence et publicité multi-plateformes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <p className="text-sm text-muted-foreground">
                Projets accompagnés et contrats signés en marketing d'influence
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Verified className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Expert</div>
              <p className="text-sm text-muted-foreground">
                Directeur d'Orbis Creativa Agency - Agence de communication et marketing
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Influenceur reconnu avec des contrats majeurs en marketing d'influence, Aroman Emetshu partage 
            son expertise pour aider les créateurs de contenu africains à monétiser leur audience et 
            devenir financièrement indépendants.
          </p>
        </div>
      </div>
    </section>
  );
};
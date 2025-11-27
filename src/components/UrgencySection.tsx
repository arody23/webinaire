import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Calendar, Clock } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

interface UrgencySectionProps {
  onRegisterClick: () => void;
}

export const UrgencySection = ({ onRegisterClick }: UrgencySectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <Card className="bg-gradient-to-br from-card via-card to-card/50 backdrop-blur border-2 border-accent/30 shadow-accent-glow">
          <CardContent className="pt-10 pb-10">
            <div className="text-center space-y-8">
              {/* Alert Icon */}
              <div className="flex justify-center">
                <div className="p-4 bg-accent/20 rounded-full animate-pulse-slow">
                  <AlertCircle className="w-12 h-12 text-accent" />
                </div>
              </div>

              {/* Main Message */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                  Le Webinaire Commence <span className="text-accent">Bientôt</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Ne manquez pas cette opportunité unique. Inscrivez-vous maintenant avant qu'il ne soit trop tard !
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="py-8">
                <CountdownTimer />
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 gap-6 py-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">En Direct</div>
                  <p className="text-sm text-muted-foreground">Session Interactive</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-1">100% GRATUIT</div>
                  <p className="text-sm text-muted-foreground">Valeur Inestimable</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col items-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  onClick={onRegisterClick}
                  className="text-lg shadow-elegant"
                >
                  Je Réserve Ma Place Gratuite
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  ⏰ Ne manquez pas cette opportunité unique
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
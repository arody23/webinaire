import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, Users2, Verified, CheckCircle2 } from "lucide-react";
import aromanProImage from "@/assets/aroman-pro-2.jpg";
import aromanFollowers from "@/assets/aroman-followers.jpg";
import aromanContrat from "@/assets/aroman-contrat.jpg";
import aromanInfluence from "@/assets/aroman-influence-terrain.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-6">
            Who is organizing this webinar?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aroman Emetshu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Influence marketing expert with over 5 years of experience
          </p>
        </div>

        {/* Main Visual Proof Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Professional Photo + Bio */}
          <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden group hover:shadow-glow transition-all duration-500">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <img 
                  src={aromanProImage} 
                  alt="Aroman Emetshu - Expert Marketing Influence"
                  className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 bg-primary/90 text-primary-foreground border-0">
                    <Verified className="w-4 h-4 mr-2" />
                    Expert Certifié
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Aroman Emetshu</h3>
                  <p className="text-muted-foreground">CEO Orbis Creativa Agency</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Followers Proof */}
          <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden group hover:shadow-accent-glow transition-all duration-500">
            <CardContent className="p-0 relative">
              <img 
                src={aromanFollowers} 
                alt="117K+ Followers - Preuve Sociale"
                className="w-full h-[300px] md:h-[500px] object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-accent/90 text-accent-foreground border-0">
                  <Users2 className="w-4 h-4 mr-2" />
                  Communauté Active
                </Badge>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-semibold">117,260 Followers Facebook</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-semibold">4,848 Followers Instagram</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">+ TikTok, Twitter & autres plateformes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contract Proof + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contract Image */}
          <Card className="md:col-span-1 bg-card/50 backdrop-blur border-border/50 overflow-hidden group hover:shadow-glow transition-all duration-500">
            <CardContent className="p-0 relative">
              <img 
                src={aromanContrat} 
                alt="Contrats Signés - Crédibilité Professionnelle"
                className="w-full h-[250px] md:h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <Badge className="bg-primary/90 text-primary-foreground border-0">
                  <Award className="w-4 h-4 mr-2" />
                  Signed Contracts
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card with Image */}
          <Card className="md:col-span-2 bg-card/50 backdrop-blur border-border/50 overflow-hidden group hover:shadow-accent-glow transition-all duration-500">
            <CardContent className="p-0 relative">
              <img 
                src={aromanInfluence} 
                alt="Influence Terrain - Événements et Partenariats"
                className="w-full h-[300px] md:h-[500px] md:h-[600px] object-contain bg-muted/20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-accent/90 text-accent-foreground border-0">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Field Influence
                </Badge>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">5+ years</div>
                  <p className="text-muted-foreground">Of experience in the field</p>
                  <p className="text-sm text-foreground/80 mt-2">Major partnerships, large-scale events, concrete results</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognized influencer with major contracts in influence marketing, Aroman Emetshu shares 
            his expertise to help African content creators monetize their audience and 
            become financially independent.
          </p>
        </div>
      </div>
    </section>
  );
};
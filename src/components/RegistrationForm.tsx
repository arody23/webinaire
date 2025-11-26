import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  onSuccess?: () => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !whatsapp.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    // Validate WhatsApp number (basic validation)
    const whatsappRegex = /^[\d\s\+\-\(\)]+$/;
    if (!whatsappRegex.test(whatsapp)) {
      toast({
        title: "Erreur",
        description: "Numéro WhatsApp invalide",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Here you'll connect to backend (Lovable Cloud) or Zapier webhook
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Registration:", { fullName, whatsapp });
      
      setIsSuccess(true);
      toast({
        title: "Inscription réussie !",
        description: "Vous allez recevoir un message WhatsApp de confirmation",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-md mx-auto border-primary/20 bg-card/50 backdrop-blur">
        <CardContent className="pt-10 pb-10 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Inscription Confirmée ! 🎉</h3>
            <p className="text-muted-foreground">
              Vous allez recevoir un message WhatsApp avec tous les détails du webinaire.
              À très bientôt !
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto border-primary/20 bg-card/50 backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Inscrivez-vous Maintenant</CardTitle>
        <CardDescription className="text-base">
          Remplissez le formulaire pour réserver votre place au webinaire exclusif
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullname" className="text-foreground">
              Nom Complet *
            </Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Ex: Jean Kabongo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-foreground">
              Numéro WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="Ex: +243 900 000 000"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              className="bg-secondary/50 border-border"
            />
            <p className="text-xs text-muted-foreground">
              Vous recevrez la confirmation sur WhatsApp
            </p>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Inscription en cours...
              </>
            ) : (
              "Confirmer Mon Inscription"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            En vous inscrivant, vous acceptez de recevoir des messages WhatsApp concernant le webinaire
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
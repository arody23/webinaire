import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationFormProps {
  onSuccess?: () => void;
}

// Codes pays d'Afrique et Europe
const COUNTRY_CODES = [
  // Afrique
  { name: "Afrique du Sud", code: "+27" },
  { name: "Algérie", code: "+213" },
  { name: "Angola", code: "+244" },
  { name: "Bénin", code: "+229" },
  { name: "Botswana", code: "+267" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cameroun", code: "+237" },
  { name: "Cap-Vert", code: "+238" },
  { name: "Comores", code: "+269" },
  { name: "Congo", code: "+242" },
  { name: "Congo (RDC)", code: "+243" },
  { name: "Côte d'Ivoire", code: "+225" },
  { name: "Djibouti", code: "+253" },
  { name: "Égypte", code: "+20" },
  { name: "Érythrée", code: "+291" },
  { name: "Éthiopie", code: "+251" },
  { name: "Gabon", code: "+241" },
  { name: "Gambie", code: "+220" },
  { name: "Ghana", code: "+233" },
  { name: "Guinée", code: "+224" },
  { name: "Guinée Équatoriale", code: "+240" },
  { name: "Guinée-Bissau", code: "+245" },
  { name: "Kenya", code: "+254" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libye", code: "+218" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Mali", code: "+223" },
  { name: "Maroc", code: "+212" },
  { name: "Maurice", code: "+230" },
  { name: "Mauritanie", code: "+222" },
  { name: "Mozambique", code: "+258" },
  { name: "Namibie", code: "+264" },
  { name: "Niger", code: "+227" },
  { name: "Nigéria", code: "+234" },
  { name: "Ouganda", code: "+256" },
  { name: "Sahara Occidental", code: "+212" },
  { name: "Sao Tomé-et-Principe", code: "+239" },
  { name: "Sénégal", code: "+221" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Somalie", code: "+252" },
  { name: "Soudan", code: "+249" },
  { name: "Soudan du Sud", code: "+211" },
  { name: "Swaziland", code: "+268" },
  { name: "Tanzanie", code: "+255" },
  { name: "Tchad", code: "+235" },
  { name: "Togo", code: "+228" },
  { name: "Tunisie", code: "+216" },
  { name: "Zambie", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
  // Europe
  { name: "Albanie", code: "+355" },
  { name: "Allemagne", code: "+49" },
  { name: "Andorre", code: "+376" },
  { name: "Autriche", code: "+43" },
  { name: "Belgique", code: "+32" },
  { name: "Biélorussie", code: "+375" },
  { name: "Bosnie-Herzégovine", code: "+387" },
  { name: "Bulgarie", code: "+359" },
  { name: "Chypre", code: "+357" },
  { name: "Croatie", code: "+385" },
  { name: "Danemark", code: "+45" },
  { name: "Espagne", code: "+34" },
  { name: "Estonie", code: "+372" },
  { name: "Finlande", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Géorgie", code: "+995" },
  { name: "Gibraltar", code: "+350" },
  { name: "Grèce", code: "+30" },
  { name: "Groenland", code: "+299" },
  { name: "Hongrie", code: "+36" },
  { name: "Île de Man", code: "+44" },
  { name: "Îles Åland", code: "+358" },
  { name: "Îles Féroé", code: "+298" },
  { name: "Irlande", code: "+353" },
  { name: "Islande", code: "+354" },
  { name: "Italie", code: "+39" },
  { name: "Kosovo", code: "+383" },
  { name: "Lettonie", code: "+371" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lituanie", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Macédoine", code: "+389" },
  { name: "Malte", code: "+356" },
  { name: "Moldavie", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Monténégro", code: "+382" },
  { name: "Norvège", code: "+47" },
  { name: "Pays-Bas", code: "+31" },
  { name: "Pologne", code: "+48" },
  { name: "Roumanie", code: "+40" },
  { name: "Royaume-Uni", code: "+44" },
  { name: "Russie", code: "+7" },
  { name: "Saint-Marin", code: "+378" },
  { name: "Serbie", code: "+381" },
  { name: "Slovaquie", code: "+421" },
  { name: "Slovénie", code: "+386" },
  { name: "Suède", code: "+46" },
  { name: "Suisse", code: "+41" },
  { name: "Tchéquie", code: "+420" },
  { name: "Turquie", code: "+90" },
  { name: "Ukraine", code: "+380" },
  { name: "Vatican", code: "+39" },
];

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+243"); // Congo par défaut
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const whatsapp = `${countryCode}${phoneNumber}`.replace(/\s/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !phoneNumber.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        title: "Erreur",
        description: "Numéro WhatsApp invalide",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send to Formspree with Zapier webhook
      const response = await fetch("https://formspree.io/f/mwpdwazw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          whatsapp,
          _webhook: "https://hooks.zapier.com/hooks/catch/23458134/ukim348/",
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

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
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-[140px] bg-secondary/50 border-border">
                  <SelectValue placeholder="Code pays" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {COUNTRY_CODES.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.code} {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="Ex: 900 000 000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="flex-1 bg-secondary/50 border-border"
              />
            </div>
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
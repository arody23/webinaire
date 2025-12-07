import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnAKk7-fjlXx-AxqcPJvlCCDCbpG9zvfFhr90OEfynDZDST18PMhW_5ks_JGb1hdt6/exec";

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  useEffect(() => {
    const form = document.getElementById("monFormulaire") as HTMLFormElement;
    const phoneCountrySelect = document.getElementById("phoneCountry") as HTMLSelectElement;
    const phoneInput = document.getElementById("phoneInput") as HTMLInputElement;
    
    if (!form || !phoneCountrySelect || !phoneInput) return;

    // Créer un input caché pour le numéro complet
    let hiddenPhoneInput = document.getElementById("telephone") as HTMLInputElement;
    if (!hiddenPhoneInput) {
      hiddenPhoneInput = document.createElement("input");
      hiddenPhoneInput.type = "hidden";
      hiddenPhoneInput.name = "telephone";
      form.appendChild(hiddenPhoneInput);
    }

    // Mettre à jour le numéro complet quand on change le pays ou le numéro
    const updatePhone = () => {
      hiddenPhoneInput.value = `${phoneCountrySelect.value}${phoneInput.value}`;
    };

    phoneCountrySelect.addEventListener("change", updatePhone);
    phoneInput.addEventListener("input", updatePhone);

    const handleSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      
      const btn = form.querySelector("button[type='submit']") as HTMLButtonElement;
      const messageContainer = document.getElementById("message-reponse") as HTMLElement;
      const originalText = btn.innerText;

      btn.innerText = "Envoi...";
      btn.disabled = true;
      messageContainer.innerHTML = "";

      // Envoi des données avec FormData
      fetch(GOOGLE_APPS_SCRIPT_URL, { 
        method: "POST", 
        body: new FormData(form)
      })
        .then(() => {
          // Succès
          btn.innerText = "Inscription réussie !";
          form.reset();
          updatePhone();
          messageContainer.innerHTML = `
            <div class="text-center space-y-3 mt-6">
              <div class="text-4xl">🎉</div>
              <h3 class="text-xl font-bold text-foreground">Inscription confirmée !</h3>
              <p class="text-muted-foreground">Vous allez recevoir un message WhatsApp avec tous les détails du webinaire.<br/>À très bientôt !</p>
            </div>
          `;
          form.style.display = "block";
          
          if (onSuccess) {
            onSuccess();
          }
        })
        .catch((error) => {
          // En cas d'erreur
          console.error("Erreur lors de l'envoi des données:", error);
          messageContainer.innerHTML = "❌ Erreur d'envoi. Veuillez réessayer.";
          btn.innerText = originalText;
          btn.disabled = false;
        });
    };

    form.addEventListener("submit", handleSubmit as EventListener);

    return () => {
      form.removeEventListener("submit", handleSubmit as EventListener);
      phoneCountrySelect.removeEventListener("change", updatePhone);
      phoneInput.removeEventListener("input", updatePhone);
    };
  }, [onSuccess]);

  return (
    <Card className="max-w-md mx-auto border-primary/20 bg-card/50 backdrop-blur">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Inscrivez-vous maintenant</CardTitle>
        <CardDescription className="text-base">
          Remplissez le formulaire pour réserver votre place au webinaire exclusif
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="monFormulaire" className="space-y-6">
          {/* Nom complet */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nom complet *</label>
            <input 
              type="text" 
              name="nom" 
              placeholder="Ex : Jean Kabongo" 
              required 
              className="w-full px-3 py-2 border border-border rounded-md bg-secondary/50 text-foreground placeholder-muted-foreground text-sm"
            />
          </div>

          {/* Numéro WhatsApp avec sélecteur de pays */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Numéro WhatsApp *</label>
            <div className="flex gap-2">
              <select 
                id="phoneCountry"
                defaultValue="+243"
                className="w-[120px] px-2 py-2 border border-border rounded-md bg-secondary/50 text-foreground text-sm"
              >
                {COUNTRY_CODES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} {country.name}
                  </option>
                ))}
              </select>
              <input 
                type="tel" 
                id="phoneInput"
                placeholder="Ex : 900 000 000" 
                required 
                className="flex-1 px-3 py-2 border border-border rounded-md bg-secondary/50 text-foreground placeholder-muted-foreground text-sm"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            id="btnSubmit"
            className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Confirmer mon inscription
          </button>
        </form>
        
        <div id="message-reponse" className="text-center text-sm"></div>
      </CardContent>
    </Card>
  );
};

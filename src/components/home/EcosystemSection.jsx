import Container from "../layout/Container.jsx";
import Button from "../common/Button.jsx";

const personaTargets = [
  { label: "Un Transporteur", to: "/transporteur" },
  { label: "Un Partenaire", to: "/partenaire" },
  { label: "Une Autorité Organisatrice", to: "/autorite-organisatrice" },
];

const EcosystemSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="flex flex-col items-center gap-8 py-16 text-center">
        <div className="space-y-4">
          <p className="text-lg uppercase tracking-[0.4em] text-white/70">
            Trouvez votre place
          </p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-[#5088D8] to-[#2D52D0] bg-clip-text text-transparent">
              dans notre écosystème
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
          <span className="font-semibold">Vous êtes :</span>
          {personaTargets.map((persona) => (
            <Button
              key={persona.label}
              href={persona.to}
            >
              {persona.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;

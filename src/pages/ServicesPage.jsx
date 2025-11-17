import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const servicePillars = [
  { title: 'Achats & supply chain', description: 'Groupements pour les véhicules, pneumatiques, IT embarqué et énergie.' },
  { title: 'Support opération', description: 'Plans d’exploitation, assistance AO, optimisation planning / RH.' },
  { title: 'Transition énergétique', description: 'Veille techno, pilotes HVO/bioGNV/électrique et accès financements.' },
];

const ServicesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Réunir Services"
        title="Nos expertises opérationnelles"
        description="Réunir Services structure les achats, les outils numériques et l’accompagnement opérationnel dont les PME ont besoin."
      />
      <Container className="space-y-10 py-20">
        <section className="grid gap-6 md:grid-cols-3">
          {servicePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
            </div>
          ))}
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Catalogue détaillé</p>
          <p className="mt-3 text-white/70">L’ensemble des fiches services et formulaires seront publiés ici très bientôt.</p>
        </section>
      </Container>
    </div>
  );
};

export default ServicesPage;

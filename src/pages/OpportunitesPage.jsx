import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const opportunities = [
  { title: 'Appels d’offres nationaux', description: 'Registre des AO en cours – publication et lien vers la cellule support.' },
  { title: 'Groupements achats', description: 'Lot pneumatiques, IT embarqué, énergie : déposer votre intérêt.' },
  { title: 'Partenariats innovation', description: 'Programmes pilotes mobilité douce, hydrogène, MaaS.' },
];

const OpportunitesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Opportunités"
        title="Développez votre activité avec le réseau"
        description="Retrouvez prochainement les appels d’offres, groupements et programmes ouverts aux adhérents."
      />
      <Container className="space-y-10 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {opportunities.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OpportunitesPage;

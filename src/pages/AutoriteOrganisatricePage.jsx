import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import Button from '../components/common/Button.jsx';

const priorities = [
  'Dessertes du quotidien fiables et accessibles',
  'Décarbonation progressive des flottes',
  'Qualité de service et relation voyageur',
];

const solutions = [
  {
    title: 'Ingénierie & co-conception',
    details: 'Ateliers terrain avec les PME adhérentes pour adapter l’offre aux spécificités de chaque territoire.',
  },
  {
    title: 'Capacité nationale',
    details: '+12 500 véhicules et 13 500 collaborateurs mobilisables pour les besoins scolaires, urbains et touristiques.',
  },
  {
    title: 'Pilotage RSE',
    details: 'Reporting social & environnemental partagé, solutions bioGNV/électrique et programmes QVCT conducteurs.',
  },
];

const AutoriteOrganisatricePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Parcours autorités organisatrices"
        title="Des opérateurs indépendants au service de vos territoires"
        description="Réunir rassemble des PME ancrées localement et capables de répondre à vos appels d’offres en fédérant leurs compétences."
        actions={[{ label: 'Planifier un échange', to: '/contact' }]}
      />

      <Container className="space-y-12 py-20">
        <section className="grid gap-6 md:grid-cols-3">
          {priorities.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/75">
              {item}
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Notre proposition</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="mt-2 text-sm text-white/70">{solution.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-3xl font-semibold">Références & expérimentations</h2>
          <p className="mt-3 text-white/70">
            Mise à jour en cours : nous partagerons prochainement des cas concrets (réseau urbain, scolaires, tourisme) illustrant la capacité des PME Réunir à répondre à vos attentes.
          </p>
          <Button to="/contact" className="mt-6">
            Recevoir notre dossier AO
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default AutoriteOrganisatricePage;

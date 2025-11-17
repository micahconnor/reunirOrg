import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const coverages = [
  'Flottes autocar & bus (multirisque, pertes d’exploitation).',
  'Protection sociale dirigeants et collaborateurs.',
  'Programme prévention et formation sécurité.',
];

const AssurancePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Réunir Assurance"
        title="Des couvertures pensées pour les PME de voyageurs"
        description="Réunir Assurance mutualise les besoins du réseau pour proposer des garanties adaptées, pilotées par des experts du transport."
      />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Couvertures clés</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {coverages.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Informations en cours</p>
          <p className="mt-3 text-white/70">
            Détail des offres, comparatifs et documentation seront ajoutés prochainement. Contactez notre équipe pour une étude personnalisée.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default AssurancePage;

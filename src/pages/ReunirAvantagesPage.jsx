import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const ReunirAvantagesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Réunir Avantages" title="Offres exclusives du réseau" description="Présentation à venir." />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          <p>Programmes d’avantages en cours d’intégration.</p>
        </section>
      </Container>
    </div>
  );
};

export default ReunirAvantagesPage;

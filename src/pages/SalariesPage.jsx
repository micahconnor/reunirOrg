import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const SalariesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Salariés" title="Ressources pour les collaborateurs" description="Espace en construction." />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          <p>Guides, avantages et formulaires salariés seront accessibles ici prochainement.</p>
        </section>
      </Container>
    </div>
  );
};

export default SalariesPage;

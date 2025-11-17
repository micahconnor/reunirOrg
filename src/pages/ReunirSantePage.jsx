import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const ReunirSantePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Réunir Santé" title="Prévention & bien-être" description="Les programmes exacts seront bientôt détaillés." />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          <p>Contenu en préparation.</p>
        </section>
      </Container>
    </div>
  );
};

export default ReunirSantePage;

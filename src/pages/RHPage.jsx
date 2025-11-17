import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const RHPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="RH" title="Ressources humaines et communauté" description="Contenus à venir." />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          <p>Process RH & évènements internes seront publiés ici.</p>
        </section>
      </Container>
    </div>
  );
};

export default RHPage;

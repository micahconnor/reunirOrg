import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const MarqueEmployeurPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Marque employeur"
        title="Des PME qui recrutent et fidélisent"
        description="Les témoignages, vidéos internes et parcours RH seront publiés ici."
      />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-white/70">
          <p>Contenus en cours de production : interviews dirigeants, portraits collaborateurs, engagements QVCT.</p>
        </section>
      </Container>
    </div>
  );
};

export default MarqueEmployeurPage;

import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Confidentialité" title="Politique de confidentialité" />
      <Container className="space-y-8 py-20 text-sm text-white/70">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p>Les informations RGPD, les droits des utilisateurs et les contacts dédiés seront détaillés dans cette section.</p>
        </section>
      </Container>
    </div>
  );
};

export default PolitiqueConfidentialitePage;

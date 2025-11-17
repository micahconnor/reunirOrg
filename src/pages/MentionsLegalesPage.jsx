import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const MentionsLegalesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Mentions légales" title="Identité de l’éditeur" />
      <Container className="space-y-8 py-20 text-sm text-white/70">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p>Les informations juridiques complètes seront publiées ici (raison sociale, hébergeur, propriété intellectuelle…).</p>
        </section>
      </Container>
    </div>
  );
};

export default MentionsLegalesPage;

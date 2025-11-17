import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const CookiesPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero kicker="Cookies" title="Gestion des cookies" />
      <Container className="space-y-8 py-20 text-sm text-white/70">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p>Notre politique détaillant les finalités des cookies (mesure d’audience, personnalisation…) sera ajoutée ici avec un module de consentement.</p>
        </section>
      </Container>
    </div>
  );
};

export default CookiesPage;

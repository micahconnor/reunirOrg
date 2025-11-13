import Container from '../components/layout/Container.jsx';

const MentionsLegalesPage = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-reunir-dark/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Mentions légales</p>
          <h1 className="text-3xl font-semibold text-reunir-dark">Identité de l’éditeur</h1>
          <p className="mt-4 text-lg text-reunir-dark/80">
            Placeholder. Nous ajouterons ici les mentions légales officielles fournies par votre équipe juridique.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MentionsLegalesPage;

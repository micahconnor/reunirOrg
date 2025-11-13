import Container from '../components/layout/Container.jsx';

const ActualitesPage = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-reunir-dark/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Actualités</p>
          <h1 className="text-3xl font-semibold text-reunir-dark">Les news du réseau</h1>
          <p className="mt-4 text-lg text-reunir-dark/80">
            Placeholder. Cette page accueillera le flux d’articles, communiqués et mises à jour.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ActualitesPage;

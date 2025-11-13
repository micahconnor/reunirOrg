import Container from '../components/layout/Container.jsx';

const LeGroupePage = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-reunir-dark/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Le Groupe</p>
          <h1 className="text-3xl font-semibold text-reunir-dark">Réunir, premier réseau coopératif</h1>
          <p className="mt-4 text-lg text-reunir-dark/80">
            Placeholder. Nous présenterons l’histoire, la gouvernance et les chiffres clés du groupe.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default LeGroupePage;

import Container from '../components/layout/Container.jsx';

const JobBoardPage = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-reunir-dark/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Job Board</p>
          <h1 className="text-3xl font-semibold text-reunir-dark">Rejoindre les PME du réseau</h1>
          <p className="mt-4 text-lg text-reunir-dark/80">
            Placeholder. Cette page intégrera votre job board ou un iframe externe selon la solution retenue.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default JobBoardPage;

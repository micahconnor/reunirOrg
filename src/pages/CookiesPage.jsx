import Container from '../components/layout/Container.jsx';

const CookiesPage = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-3xl border border-reunir-dark/10 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Cookies</p>
          <h1 className="text-3xl font-semibold text-reunir-dark">Gestion des cookies</h1>
          <p className="mt-4 text-lg text-reunir-dark/80">
            Placeholder. Nous détaillerons la politique cookies et les options de consentement.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CookiesPage;

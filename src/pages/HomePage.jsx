import Container from '../components/layout/Container.jsx';

const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-b from-reunir-dark to-[#121b3a] text-white">
        <Container className="flex flex-col gap-10 py-20 md:flex-row md:items-center">
          <div className="space-y-6 md:w-1/2">
            <p className="text-sm uppercase tracking-[0.2em] text-reunir-accent">Coopérative Réunir</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Le réseau qui accélère les PME du transport de voyageurs.
            </h1>
            <p className="text-lg text-white/80">
              Placeholder hero pour accueillir les sections Figma. Nous alignerons le wording finales après validation
              design.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:text-reunir-accent"
              >
                Découvrir Réunir
              </button>
              <button
                type="button"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contacter l’équipe
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="aspect-[4/3] w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/70">
              Placeholder image (page Accueil.png)
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="py-12">
          <div className="rounded-3xl border border-reunir-dark/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark/70">Aperçu</p>
            <p className="mt-3 text-lg text-reunir-dark/80">
              Cette page sera remplacée par l’intégration complète basée sur vos exports Figma (hero, stats, partenaires,
              etc.). Les routes et la structure sont prêtes pour brancher les futures sections.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;

import Container from '../layout/Container.jsx';

const FinalBanner = () => {
  return (
    <section className="bg-gradient-to-b from-[#020409] via-[#0D142D] to-[#020409] text-white">
      <Container className="flex flex-col items-center gap-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Services digitaux</p>
        <h2 className="text-4xl font-semibold leading-tight">Tous nos services en un clic.</h2>
        <p className="max-w-3xl text-lg text-white/80">
          Téléchargez notre plaquette et prenez contact avec les équipes Réunir pour explorer les solutions adaptées à votre activité.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Télécharger notre plaquette
          </button>
          <button
            type="button"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white"
          >
            Contactez-nous
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FinalBanner;

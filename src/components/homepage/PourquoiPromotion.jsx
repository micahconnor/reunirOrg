import Container from '../layout/Container.jsx';

const infoSections = [
  {
    title: 'Les avantages Réunir',
    description: 'Accédez à un réseau national, à des achats mutualisés et à un partage d’expertises terrain.',
  },
  {
    title: 'Nos engagements',
    description: 'Sécurité, qualité de service et accompagnement RSE pilotent chaque action du collectif.',
  },
  {
    title: 'Les conditions d’accès',
    description: 'Parcours d’intégration personnalisé, parrainage et comités d’adhésion dédiés.',
  },
];

const PourquoiPromotion = () => {
  return (
    <section className="bg-[#0F162B] text-white">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-20">
        <div className="space-y-6 lg:w-1/2">
          <div className="inline-flex items-center rounded-2xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90">
            Vous êtes un transporteur
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold leading-tight">
              Pourquoi intégrer la Promotion Réunir ?
            </h2>
            <p className="text-lg text-white/80">
              Un parcours unique pour les PME du transport routier de voyageurs : mentoring, outils partagés et accès à
              des opportunités business réservées aux adhérents.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Devenir adhérent
          </button>
        </div>
        <div className="space-y-4 lg:w-1/2">
          {infoSections.map((section, index) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-indigo-300/70">{`0${index + 1}`}</p>
                  <p className="text-xl font-semibold text-white">{section.title}</p>
                </div>
                <span className="text-2xl text-white/80">→</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{section.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PourquoiPromotion;

import Container from '../layout/Container.jsx';

const blocks = [
  {
    title: 'Transporteurs',
    description:
      'Prenez rendez-vous dès aujourd’hui pour en savoir plus sur la Promotion 2027 et découvrir les modalités d’accompagnement.',
  },
  {
    title: 'Autorités organisatrices',
    description:
      'Bénéficiez d’un interlocuteur unique pour explorer nos solutions de mobilité performantes et responsables.',
  },
  {
    title: 'Partenaires',
    description:
      'Rencontrez notre équipe pour intégrer le Book Partenaires 2027 et co-construire des offres innovantes.',
  },
];

const PretALancer = () => {
  return (
    <section className="bg-reunir-light">
      <Container className="space-y-8 py-16">
        {blocks.map((block) => (
          <div
            key={block.title}
            className="flex flex-col gap-6 rounded-[32px] border border-reunir-dark/10 bg-white p-8 shadow-sm lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="space-y-3 lg:w-2/3">
              <p className="text-sm uppercase tracking-[0.3em] text-reunir-dark/60">Prêt à vous lancer ?</p>
              <h3 className="text-3xl font-semibold text-reunir-dark">{block.title}</h3>
              <p className="text-lg text-reunir-dark/80">{block.description}</p>
            </div>
            <button
              type="button"
              className="rounded-full border border-reunir-dark px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:bg-reunir-dark hover:text-white"
            >
              Formulaire de contact
            </button>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default PretALancer;

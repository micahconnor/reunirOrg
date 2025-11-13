import Container from '../layout/Container.jsx';

const commitments = [
  {
    number: '01',
    title: 'Label RSE',
    description: 'Nous accompagnons les PME vers un modèle responsable et labellisé.',
  },
  {
    number: '02',
    title: 'Préservation de la biodiversité',
    description: 'Partenariat EcoTree et actions concrètes pour protéger les territoires.',
  },
  {
    number: '03',
    title: 'Promotion des jeunes talents',
    description: 'Programmes de formation et montée en compétence des équipes.',
  },
  {
    number: '04',
    title: 'Démarche QVCT',
    description: 'Qualité de vie au travail et sécurité ancrées dans nos process.',
  },
];

const NosEngagements = () => {
  return (
    <section className="bg-[#0D142D] text-white">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:gap-20">
        <div className="space-y-5 lg:w-1/2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">PÉRÉNISATION DE L’ACTIVITÉ</p>
          <h2 className="text-4xl font-semibold">Nos engagements</h2>
          <p className="text-lg text-white/80">
            Conscient des enjeux sociaux, environnementaux et de mobilité, Réunir assume pleinement sa responsabilité
            sociétale et s’engage pour ses collaborateurs, l’environnement et les territoires où ses PME sont implantées.
          </p>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            En savoir plus
          </button>
        </div>
        <div className="space-y-4 lg:w-1/2">
          {commitments.map((commitment) => (
            <div key={commitment.number} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">{commitment.number}</p>
              <p className="text-xl font-semibold">{commitment.title}</p>
              <p className="text-sm text-white/80">{commitment.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NosEngagements;

import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const pillars = [
  {
    title: 'Clubs métiers',
    description: 'Groupes de dirigeants et responsables métier qui se réunissent chaque trimestre pour partager outils et bonnes pratiques.',
  },
  {
    title: 'Programmes solidaires',
    description: 'Mentorat entre PME, visites croisées et cellules de soutien pour les dossiers sensibles.',
  },
  {
    title: 'Voix collective',
    description: 'Représentation auprès des institutions et participation aux travaux nationaux sur la mobilité.',
  },
];

const AssociationPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Réunir Association"
        title="La force du collectif coopératif"
        description="L’association anime la communauté des adhérents et porte la vision du groupe : partage d’expériences, gouvernance et solidarité."
      />
      <Container className="space-y-10 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
            </div>
          ))}
        </div>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Vie associative</p>
          <p className="mt-2 text-white/70">
            Agenda, comptes-rendus d’assemblées et ressources seront publiés ici au fur et à mesure des prochaines étapes.
          </p>
        </section>
      </Container>
    </div>
  );
};

export default AssociationPage;

import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const commitments = [
  'Label RSE et accompagnement des PME vers des plans climat adaptés.',
  'Engagement social : QVCT, formation conducteurs, mixité.',
  'Impact territorial : emplois locaux, circuits courts et dialogue permanent avec les collectivités.',
];

const NosEngagementsPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Nos engagements"
        title="Impact, sécurité et qualité de service"
        description="Notre collectif assume sa responsabilité sociétale et œuvre à la transition des mobilités."
      />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-3 text-sm text-white/70">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                {commitment}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Rapports et indicateurs</p>
          <p className="mt-3 text-white/70">Publication prochaine des indicateurs annuels et des projets EcoTree / transition énergétique.</p>
        </section>
      </Container>
    </div>
  );
};

export default NosEngagementsPage;

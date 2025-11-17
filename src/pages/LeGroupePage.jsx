import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const timeline = [
  { year: '1998', detail: 'Création du Groupe Associatif Réunir et premiers adhérents.' },
  { year: '2005', detail: 'Lancement des clubs métiers et premiers achats mutualisés.' },
  { year: '2019', detail: 'Création de Saybus et accélération de la transition énergétique.' },
];

const LeGroupePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Le Groupe"
        title="Réunir, premier réseau coopératif de transporteurs"
        description="Un collectif de PME indépendantes, présentes sur tout le territoire, qui mutualisent leurs forces pour innover et servir les mobilités."
      />
      <Container className="space-y-10 py-20">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Ligne du temps</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            {timeline.map((event) => (
              <li key={event.year} className="flex items-start gap-4">
                <span className="text-lg font-semibold text-white">{event.year}</span>
                <span>{event.detail}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Gouvernance</p>
          <p className="mt-3 text-white/70">Présentation du conseil d’administration, du bureau et des équipes permanentes à venir.</p>
        </section>
      </Container>
    </div>
  );
};

export default LeGroupePage;

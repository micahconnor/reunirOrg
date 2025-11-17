import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const strengths = [
  'Premier réseau coopératif d’autocaristes français',
  'Présence locale + capacité nationale',
  'Outils mutualisés et innovations partagées',
  'Marque commerciale commune',
];

const NosAtoutsPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Nos atouts"
        title="Pourquoi choisir Réunir ?"
        description="Des dirigeants entrepreneurs, un accompagnement de proximité et la puissance d’un réseau national."
      />
      <Container className="space-y-10 py-20">
        <section className="grid gap-6 md:grid-cols-2">
          {strengths.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/75">
              {item}
            </div>
          ))}
        </section>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Dossier complet</p>
          <p className="mt-3 text-white/70">Les détails chiffrés et études seront ajoutés dans cette section très prochainement.</p>
        </section>
      </Container>
    </div>
  );
};

export default NosAtoutsPage;

import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';

const highlights = [
  { title: 'Offres nationales', description: 'Lignes tourisme & événements opérées par les PME adhérentes sous une bannière unique.' },
  { title: 'Digital & CRM', description: 'Plateforme de devis, suivi des demandes et reporting partagé.' },
  { title: 'Expérience voyageur', description: 'Charte qualité, uniformes et communication immersive.' },
];

const SaybusPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Saybus"
        title="La marque commerciale qui unit nos PME"
        description="Saybus regroupe les offres touristiques et corporate pour répondre aux demandes nationales avec la force d’un réseau." />
      <Container className="space-y-10 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Kit marketing</p>
          <p className="mt-3 text-white/70">Brochures, vidéos et guidelines seront intégrés ici prochainement.</p>
        </section>
      </Container>
    </div>
  );
};

export default SaybusPage;

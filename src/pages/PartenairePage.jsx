import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import PartnerTicker from '../components/common/PartnerTicker.jsx';
import Button from '../components/common/Button.jsx';
import { partnersContent } from '../data/homepageContent.js';

const focusAreas = [
  { title: 'Co-innovation', description: 'Pilotes terrain, retours utilisateurs rapides et visibilité nationale lors des salons.' },
  { title: 'Accès réseau', description: 'Clubs dédiés pour présenter vos solutions aux dirigeants et équipes opérationnelles.' },
  { title: 'Impact commun', description: 'Programmes RSE partagés, communication presse et références communes dans les AO.' },
];

const PartenairePage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Parcours partenaires"
        title="Bâtissons des alliances utiles aux territoires"
        description="Réunir fédère +200 PME adhérentes et +50 partenaires nationaux. Ensemble, nous co-développons des solutions pour accélérer la transition des mobilités et répondre aux AO locaux."
        actions={[{ label: 'Devenir partenaire', to: '/contact' }]}
      />

      <Container className="space-y-12 py-20">
        <section className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Ils nous font confiance</p>
          <PartnerTicker logos={partnersContent.logos} />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{area.title}</h3>
              <p className="mt-3 text-sm text-white/70">{area.description}</p>
            </div>
          ))}
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Programme 2025</p>
          <h2 className="mt-2 text-3xl font-semibold">3 rendez-vous annuels pour co-créer</h2>
          <p className="mt-3 text-white/70">
            Tables rondes mobilités, observatoires innovation, ateliers QVCT… Chaque rencontre associe dirigeants Réunir et partenaires pour faire émerger de nouveaux services.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Télécharger la plaquette partenaires</Button>
            <Button to="/actualites">Voir les retours d’expériences</Button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default PartenairePage;

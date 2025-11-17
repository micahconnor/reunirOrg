import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import Button from '../components/common/Button.jsx';

const benefits = [
  {
    title: 'Services mutualisés',
    description: 'Accès aux achats groupés, aux appels d’offres nationaux et à des outils numériques partagés.',
  },
  {
    title: 'Accompagnement stratégie',
    description: 'Coaching dirigeant, clubs d’échanges et équipes support pour structurer la croissance.',
  },
  {
    title: 'Visibilité commerciale',
    description: 'Branding Saybus et communication nationale pour soutenir vos réponses aux AO.',
  },
];

const entities = [
  { title: 'Réunir Association', details: 'Animation du réseau, clubs métiers, partage d’expériences et parrainage des nouvelles PME.' },
  { title: 'Réunir Services', details: 'Achats mutualisés, assistance juridique et expertise opérationnelle pour optimiser chaque ligne.' },
  { title: 'Réunir Assurance', details: 'Couverture adaptée aux flottes, gestion centralisée des sinistres et prévention des risques.' },
  { title: 'Saybus', details: 'Marque commerciale commune pour les offres nationales et la promotion du tourisme collectif.' },
];

const steps = [
  '1. Prise de contact et diagnostic flash (30 minutes).',
  '2. Rencontre avec les équipes régionales & visite d’un adhérent.',
  '3. Passage en comité d’adhésion et parrainage par un dirigeant membre.',
  '4. Onboarding de 90 jours avec accès aux services et clubs.',
];

const TransporteurPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Parcours autocaristes"
        title="Accélérez la croissance de votre PME autocariste"
        description="Devenir adhérent du Groupe Associatif Réunir, c’est rejoindre un collectif d’entrepreneurs qui mutualisent leurs forces : achats, innovation, réponses aux appels d’offres et visibilité nationale."
        actions={[{ label: 'Parler à un référent régional', to: '/contact' }]}
      />

      <Container className="space-y-12 py-20">
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm text-white/70">{benefit.description}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Les entités du groupe</p>
            <h2 className="text-3xl font-semibold">Un collectif, quatre expertises complémentaires</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {entities.map((entity) => (
              <div key={entity.title} className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                <h3 className="text-xl font-semibold">{entity.title}</h3>
                <p className="mt-2 text-sm text-white/70">{entity.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Parcours d’adhésion</p>
            <h2 className="text-3xl font-semibold">Rejoindre Réunir en 4 étapes</h2>
          </div>
          <ol className="space-y-4 text-sm text-white/75">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="text-lg font-semibold text-white">0{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Button to="/contact" className="mt-4 self-start">
            Télécharger la brochure adhérent
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default TransporteurPage;

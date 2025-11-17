import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import Button from '../components/common/Button.jsx';

const contactTypes = [
  { title: 'Adhésion / parcours autocaristes', email: 'adhesion@reunir.fr' },
  { title: 'Partenariats & innovation', email: 'partenaires@reunir.fr' },
  { title: 'Autorités organisatrices', email: 'territoires@reunir.fr' },
  { title: 'Presse & communication', email: 'communication@reunir.fr' },
];

const ContactPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Contact"
        title="Échanger avec les équipes Réunir"
        description="Sélectionnez la thématique qui vous concerne : nous reviendrons vers vous sous 48h."
      />
      <Container className="space-y-10 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {contactTypes.map((type) => (
            <div key={type.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{type.title}</h3>
              <p className="mt-2 text-white/70">{type.email}</p>
              <Button href={`mailto:${type.email}`} className="mt-4">
                Envoyer un message
              </Button>
            </div>
          ))}
        </div>
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Formulaire</p>
          <p className="mt-3 text-white/70">Un formulaire détaillé sera disponible prochainement pour qualifier vos demandes.</p>
        </section>
      </Container>
    </div>
  );
};

export default ContactPage;

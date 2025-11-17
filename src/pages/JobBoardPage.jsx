import PageHero from '../components/common/PageHero.jsx';
import Container from '../components/layout/Container.jsx';
import Button from '../components/common/Button.jsx';

const JobBoardPage = () => {
  return (
    <div className="bg-black text-white">
      <PageHero
        kicker="Job board"
        title="Rejoindre les équipes Réunir"
        description="Notre job board sera bientôt en ligne : CDI, alternance, postes conducteurs ou fonctions support au sein des PME adhérentes."
        actions={[{ label: 'Être alerté des offres', to: '/contact' }]}
      />
      <Container className="space-y-10 py-20">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Intégration prochaine</p>
          <p className="mt-3 text-white/70">
            Nous finalisons actuellement l’intégration technique du job board (iframe externe). Revenez très vite pour consulter les offres ou contactez nos équipes RH.
          </p>
          <Button to="/contact" className="mt-6">
            Contacter l’équipe RH
          </Button>
        </section>
      </Container>
    </div>
  );
};

export default JobBoardPage;

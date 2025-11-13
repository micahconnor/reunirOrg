import Container from '../layout/Container.jsx';
import historyImage from '../../assets/images/homepage/figmaTailwind/a8597ea3f8ef4d175056d8f27dac1bc77fdc77b8.jpg';

const DecouvrirReunir = () => {
  return (
    <section className="bg-reunir-dark text-white">
      <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-center md:gap-16 md:py-20">
        <div className="md:w-1/2">
          <img
            src={historyImage}
            alt="Bus Réunir"
            className="rounded-[32px] border border-white/10 object-cover shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="space-y-6 md:w-1/2">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">Notre histoire</p>
            <h2 className="text-4xl font-semibold text-[#A6B0FF]">Découvrir Réunir</h2>
            <p className="text-lg leading-relaxed text-white/80">
              Depuis plus de 25 ans, Réunir accompagne les PME du transport routier de voyageurs dans leur
              développement, la transformation de leurs pratiques et la conquête de nouveaux marchés grâce à la
              mutualisation de services, à des solutions concrètes et à la solidarité entre pairs.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              Véritable trait d’union entre transporteurs, partenaires et autorités organisatrices, Réunir incarne une
              vision responsable et collaborative de la mobilité : celle d’entreprises indépendantes qui vont plus
              loin, ensemble.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            En savoir plus
          </button>
        </div>
      </Container>
    </section>
  );
};

export default DecouvrirReunir;

import Container from '../layout/Container.jsx';
import bookImage from '../../assets/images/homepage/figmaTailwind/5085dca15dea36eca4ec846eddec91bbcfc5c273.png';

const BookPartenaires = () => {
  return (
    <section className="bg-[#10182E] text-white">
      <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <img src={bookImage} alt="Book Partenaires" className="rounded-[32px] border border-white/10 object-cover shadow-2xl" />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-2xl bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em]">
              Vous êtes un partenaire
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-white">
              Pourquoi intégrer notre Book Partenaires 2027 ?
            </h2>
            <p className="text-lg text-white/80">
              Être partenaire de Réunir, c’est participer activement à la transformation du secteur aux côtés de dirigeants engagés et bénéficier d’une visibilité nationale auprès des PME adhérentes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Les avantages Réunir', 'Vos engagements', 'Les conditions d’accès', 'Support dédié'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/90">
                {item}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            Devenir partenaire
          </button>
        </div>
      </Container>
    </section>
  );
};

export default BookPartenaires;

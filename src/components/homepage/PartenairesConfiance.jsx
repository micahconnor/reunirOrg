import Container from '../layout/Container.jsx';
import logoOne from '../../assets/images/homepage/figmaTailwind/image-238.png';
import logoTwo from '../../assets/images/homepage/figmaTailwind/image-238-1.png';
import logoThree from '../../assets/images/homepage/figmaTailwind/image-238-2.png';
import logoFour from '../../assets/images/homepage/figmaTailwind/image-238-3.png';

const partnerLogos = [logoOne, logoTwo, logoThree, logoFour, logoOne, logoTwo, logoThree, logoFour];

const PartenairesConfiance = () => {
  return (
    <section className="bg-reunir-light">
      <Container className="space-y-10 py-16">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-reunir-dark/60">Constructeurs, fournisseurs & institutionnels</p>
          <h2 className="text-4xl font-semibold text-reunir-dark">+ de 50 partenaires nous font confiance</h2>
          <p className="text-lg text-reunir-dark/70">Devenir partenaire, c’est participer activement à la transformation du secteur aux côtés de dirigeants engagés.</p>
        </div>
        <div className="grid gap-6 rounded-3xl border border-reunir-dark/10 bg-white p-6 shadow-sm sm:grid-cols-2 md:grid-cols-4">
          {partnerLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex h-28 items-center justify-center rounded-2xl border border-reunir-dark/5 bg-reunir-light/60 p-4"
            >
              <img src={logo} alt="Partenaire Réunir" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-full border border-reunir-dark px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:bg-reunir-dark hover:text-white"
          >
            Devenir partenaire
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PartenairesConfiance;

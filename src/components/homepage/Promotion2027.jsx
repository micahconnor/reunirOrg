import Container from '../layout/Container.jsx';
import gridImageOne from '../../assets/images/homepage/figmaTailwind/c132ca4aae863a2b1f0e21cf9d443f50d3ce5f5f.jpg';
import gridImageTwo from '../../assets/images/homepage/figmaTailwind/c8491326d193fc38ba423e8bf8451c6c604234f4.jpg';
import gridImageThree from '../../assets/images/homepage/figmaTailwind/56e81fb558d7a8e237675adf06e0bcb29a670d3b.png';

const featureCards = [
  { title: 'Veille & Appels d’Offres', image: gridImageOne },
  { title: 'Label RSE reconnu', image: gridImageTwo },
  { title: 'Notoriété & promotion du secteur', image: gridImageThree },
  { title: 'Assurances & gestion des sinistres', image: gridImageOne },
  { title: 'Accompagnement d’experts', image: gridImageTwo },
  { title: 'Avantages au quotidien', image: gridImageThree },
];

const kpiCards = [
  {
    value: '206',
    title: 'PME du transport routier',
    description: 'ont rejoint notre Groupe Associatif Réunir.',
  },
  {
    value: '56',
    title: 'Partenaires référencés',
    description: 'Constructeurs, fournisseurs et institutionnels.',
  },
];

const Promotion2027 = () => {
  return (
    <section className="bg-reunir-light text-reunir-dark">
      <Container className="space-y-12 py-16 md:py-20">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-reunir-dark/60">Promotion d’adhérents 2027</p>
          <h2 className="text-4xl font-semibold text-reunir-dark">
            Rejoignez la promotion d’adhérents 2027
          </h2>
          <p className="text-lg text-reunir-dark/80">
            Vous êtes une PME du transport ambitieuse, tournée vers la performance, la sécurité et les opportunités ?
            Intégrez un programme qui mutualise les expertises clés du réseau.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-4 rounded-3xl border border-reunir-dark/10 bg-white/90 p-6 shadow-sm sm:grid-cols-2">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-4 rounded-2xl border border-reunir-dark/5 bg-reunir-light/40 p-4 shadow-inner"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-28 w-full rounded-xl object-cover"
                />
                <p className="text-base font-semibold text-reunir-dark">{feature.title}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {kpiCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-reunir-dark/10 bg-gradient-to-b from-reunir-dark via-[#151D3B] to-[#1B203A] p-6 text-white shadow-lg"
              >
                <p className="text-5xl font-bold">{card.value}</p>
                <p className="mt-2 text-lg font-semibold">{card.title}</p>
                <p className="text-white/80">{card.description}</p>
              </div>
            ))}
            <button
              type="button"
              className="w-full rounded-full border border-reunir-dark px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:bg-reunir-dark hover:text-white"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Promotion2027;

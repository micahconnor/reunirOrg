import Container from '../layout/Container.jsx';
import { partnersContent } from '../../data/homepageContent.js';

const PartnersSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="space-y-10 py-20 text-center">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{partnersContent.kicker}</p>
          <h2 className="text-4xl font-semibold">{partnersContent.title}</h2>
          <p className="text-lg text-white/70">{partnersContent.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {partnersContent.logos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4">
              <img src={logo} alt="Partenaire Réunir" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnersSection;

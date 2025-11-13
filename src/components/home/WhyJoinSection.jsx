import Container from '../layout/Container.jsx';
import { whyJoinContent } from '../../data/homepageContent.js';

const WhyJoinSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="grid gap-10 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">{whyJoinContent.kicker}</p>
          <h2 className="text-4xl font-semibold">{whyJoinContent.title}</h2>
          <p className="text-lg text-white/75">{whyJoinContent.description}</p>
          <a href={whyJoinContent.cta.to} className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            {whyJoinContent.cta.label}
          </a>
        </div>
        <div className="grid gap-4">
          {whyJoinContent.cards.map((card, index) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.3em] text-white/50">0{index + 1}</div>
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-sm text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyJoinSection;

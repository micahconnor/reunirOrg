import Container from '../layout/Container.jsx';
import { engagementsContent } from '../../data/homepageContent.js';

const EngagementsSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{engagementsContent.kicker}</p>
            <h2 className="text-4xl font-semibold">{engagementsContent.title}</h2>
            <p className="text-lg text-white/75">{engagementsContent.description}</p>
          </div>
          <div className="space-y-4">
            {engagementsContent.actions.map((action) => (
              <div key={action.number} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">{action.number}</p>
                <p className="text-xl font-semibold">{action.title}</p>
                <p className="text-sm text-white/70">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:justify-self-end">
          <img src={engagementsContent.image} alt="Engagements Réunir" className="rounded-[32px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
        </div>
      </Container>
    </section>
  );
};

export default EngagementsSection;

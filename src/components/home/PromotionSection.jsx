import Container from '../layout/Container.jsx';
import { promotionContent } from '../../data/homepageContent.js';

const PromotionSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="space-y-12 py-20">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Promotion d’adhérents 2027</p>
          <h2 className="text-4xl font-semibold">{promotionContent.title}</h2>
          <p className="text-lg text-white/75">{promotionContent.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner sm:grid-cols-2">
            {promotionContent.features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-semibold">
                {feature}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {promotionContent.stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/30 p-6 shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {promotionContent.gallery.map((image) => (
            <img key={image} src={image} alt="Promotion Réunir" className="h-56 w-full rounded-3xl border border-white/10 object-cover" />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PromotionSection;

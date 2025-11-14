import Container from '../layout/Container.jsx';
import { discoverContent } from '../../data/homepageContent.js';
import Button from '../common/Button.jsx';

const DiscoverSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="flex flex-col gap-10 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-1/2">
          <img src={discoverContent.image} alt="Découvrir Réunir" className="rounded-[32px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
        </div>
        <div className="space-y-6 lg:w-1/2">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{discoverContent.kicker}</p>
            <h2 className="text-4xl font-semibold">{discoverContent.title}</h2>
            {discoverContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-white/75">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            {discoverContent.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                {bullet}
              </li>
            ))}
          </ul>
          <Button href={discoverContent.cta.to}>
            {discoverContent.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default DiscoverSection;

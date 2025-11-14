import Container from '../layout/Container.jsx';
import { heroContent } from '../../data/homepageContent.js';
import lineBlue from '../../assets/images/homepage/figmaTailwind/Line-blue-blurry.svg';
import Button from '../common/Button.jsx';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <Container className="relative flex flex-col gap-12 py-24 lg:flex-row lg:items-center lg:gap-24">
        <div className="space-y-8 lg:w-1/2">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em]">
              {heroContent.kicker}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[62px] bg-gradient-to-r from-white via-[#5088D8] to-[#0F3A98] bg-clip-text text-transparent">
                {heroContent.title}
              </h1>
              <p className="text-lg text-white/80">{heroContent.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {heroContent.ctas.map((cta) => (
              <Button key={cta.label} to={cta.to}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src={heroContent.media}
              alt="Coopérative Réunir"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>

      <div className="relative pb-16 pt-8">
        <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center">
          <img
            src={lineBlue}
            alt=""
            aria-hidden="true"
            className="h-[220px] w-[120%] max-w-none object-cover opacity-90"
          />
        </div>
        <Container className="relative">
          <div className="grid gap-6 rounded-[28px] border border-white/15 bg-white/5 p-6 text-white shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl md:grid-cols-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Nos chiffres clés</p>
              <p className="text-3xl font-semibold">2026</p>
            </div>
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className="border-t border-white/20 pt-4 text-sm uppercase text-white/75 md:border-l md:border-t-0 md:pl-6">
                <p className="text-2xl font-semibold text-white drop-shadow-[0_0_15px_rgba(30,107,250,0.6)]">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;

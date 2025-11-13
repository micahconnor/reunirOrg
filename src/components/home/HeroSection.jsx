import { Link } from "react-router-dom";
import Container from "../layout/Container.jsx";
import { heroContent } from "../../data/homepageContent.js";
import lineBlue from "../../assets/images/homepage/figmaTailwind/Line-blue-blurry.svg";

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
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[62px] bg-gradient-to-r from-white via-[#8DB3FF] to-[#1A58DC] bg-clip-text text-transparent">
                {heroContent.title}
              </h1>
              <p className="text-lg text-white/80">{heroContent.description}</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold">
                Trouvez votre place dans l’écosystème Réunir. Vous êtes...
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {heroContent.personas.map((label) => (
                  <span
                    key={label}
                    className="rounded-3xl border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {heroContent.ctas.map((cta) => (
                <Link
                  key={cta.label}
                  to={cta.to}
                  className={
                    cta.variant === "primary"
                      ? "rounded-full bg-white px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:bg-[#F8F7F4]"
                      : "rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
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

      <div className="pb-16">
        <Container>
          <div
            className="grid gap-6 rounded-[28px] border border-white/20 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-4"
            style={{
              backgroundImage: `url(${lineBlue})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                Nos chiffres clés
              </p>
              <p className="text-3xl font-semibold">2026</p>
            </div>
            {heroContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-white/20 pt-4 text-sm uppercase text-white/80 md:border-l md:border-t-0 md:pl-6"
              >
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
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

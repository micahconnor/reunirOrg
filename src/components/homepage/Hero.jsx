import { Link } from 'react-router-dom';
import Container from '../layout/Container.jsx';
import heroImage from '../../assets/images/homepage/figmaTailwind/Groupe_1200.svg';

const Hero = () => {
  const personaPills = ['Un Transporteur', 'Un Partenaire', 'Une Autorité Organisatrice'];

  return (
    <section className="bg-gradient-to-br from-[#0D142D] via-[#111936] to-[#01040c] text-white">
      <Container className="flex flex-col gap-12 py-16 md:flex-row md:items-center md:py-20 lg:gap-20 lg:py-24">
        <div className="space-y-8 md:w-1/2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-reunir-accent/80">
              POUR LE MEILLEUR ET POUR L’AVENIR
            </p>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-[56px]">
                Votre collectif qui donne <br />
                <span className="text-indigo-300">de l’élan à la mobilité</span>
              </h1>
              <p className="text-lg leading-relaxed text-white/80">
                Rejoindre le Groupe associatif Réunir, c’est intégrer un collectif solidaire de PME du transport de
                voyageurs qui avancent ensemble vers une mobilité plus performante, responsable et durable.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-base font-semibold text-white">Trouvez votre place dans l’écosystème Réunir. Vous êtes...</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {personaPills.map((label) => (
                  <span
                    key={label}
                    className="rounded-3xl border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 shadow-sm shadow-black/30 backdrop-blur"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/le-groupe"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-reunir-dark transition hover:bg-reunir-light hover:text-reunir-accent"
              >
                Découvrir Réunir
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img src={heroImage} alt="Coopérative Réunir" className="h-full w-full rounded-2xl object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

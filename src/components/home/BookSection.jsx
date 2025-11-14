import Container from '../layout/Container.jsx';
import { bookContent } from '../../data/homepageContent.js';
import Button from '../common/Button.jsx';

const BookSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="flex flex-col gap-10 py-20 lg:flex-row lg:items-center">
        <div className="space-y-6 lg:w-1/2">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">{bookContent.kicker}</p>
            <h2 className="text-4xl font-semibold">{bookContent.title}</h2>
            <p className="text-lg text-white/75">{bookContent.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bookContent.bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-semibold">
                {bullet}
              </div>
            ))}
          </div>
          <Button href={bookContent.cta.to}>
            {bookContent.cta.label}
          </Button>
        </div>
        <div className="lg:w-1/2">
          <img src={bookContent.image} alt="Book partenaires" className="rounded-[32px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.45)]" />
        </div>
      </Container>
    </section>
  );
};

export default BookSection;

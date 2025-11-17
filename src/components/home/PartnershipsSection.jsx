import Container from "../layout/Container.jsx";
import { partnershipsContent } from "../../data/homepageContent.js";

const PartnershipsSection = () => {
  return (
    <section className="bg-black text-white">
      <Container className="space-y-10 py-20 text-center">
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold">
            {partnershipsContent.title}
          </h2>
          <p className="text-lg text-white/70">
            {partnershipsContent.description}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {partnershipsContent.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-sm text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PartnershipsSection;

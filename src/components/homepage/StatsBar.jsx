import Container from '../layout/Container.jsx';

const stats = [
  { value: '13 500', label: 'collaborateurs engagés' },
  { value: '+200', label: 'PME adhérentes' },
  { value: '350', label: 'sites d’exploitation' },
  { value: '+12 500', label: 'véhicules' },
];

const StatsBar = () => {
  return (
    <section className="bg-[#11152a] text-white">
      <Container className="py-12">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm md:grid-cols-5 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Nos chiffres clés</p>
            <p className="text-3xl font-semibold text-white">2026</p>
          </div>
          {stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-6">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm uppercase text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;

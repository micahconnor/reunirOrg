import { useEffect, useState } from 'react';

const PartnerTicker = ({ logos, interval = 3000 }) => {
  const [displayed, setDisplayed] = useState(logos.slice(0, 6));

  useEffect(() => {
    if (!logos.length) return undefined;
    const id = setInterval(() => {
      setDisplayed((prev) => {
        const nextLogo = logos[Math.floor(Math.random() * logos.length)];
        const nextIndex = Math.floor(Math.random() * prev.length);
        const updated = [...prev];
        updated[nextIndex] = nextLogo;
        return updated;
      });
    }, interval);
    return () => clearInterval(id);
  }, [logos, interval]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {displayed.map((logo, index) => (
        <div
          key={`${logo}-${index}`}
          className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 transition"
        >
          <img src={logo} alt="Logo partenaire" className="max-h-full max-w-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default PartnerTicker;

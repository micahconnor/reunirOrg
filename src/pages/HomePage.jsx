import Hero from '../components/homepage/Hero.jsx';
import StatsBar from '../components/homepage/StatsBar.jsx';
import DecouvrirReunir from '../components/homepage/DecouvrirReunir.jsx';
import Promotion2027 from '../components/homepage/Promotion2027.jsx';
import PourquoiPromotion from '../components/homepage/PourquoiPromotion.jsx';
import PartenairesConfiance from '../components/homepage/PartenairesConfiance.jsx';
import BookPartenaires from '../components/homepage/BookPartenaires.jsx';
import PretALancer from '../components/homepage/PretALancer.jsx';
import NosEngagements from '../components/homepage/NosEngagements.jsx';
import FinalBanner from '../components/homepage/FinalBanner.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <DecouvrirReunir />
      <Promotion2027 />
      <PourquoiPromotion />
      <PartenairesConfiance />
      <BookPartenaires />
      <PretALancer />
      <NosEngagements />
      <FinalBanner />
    </>
  );
};

export default HomePage;

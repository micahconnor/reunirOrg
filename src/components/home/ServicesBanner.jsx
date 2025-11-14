import Container from '../layout/Container.jsx';
import { servicesBannerContent } from '../../data/homepageContent.js';
import Button from '../common/Button.jsx';

const ServicesBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url(${servicesBannerContent.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Container className="relative flex flex-col items-center gap-4 py-20 text-center text-white">
        <h2 className="text-4xl font-semibold">{servicesBannerContent.title}</h2>
        <p className="max-w-3xl text-lg text-white/80">{servicesBannerContent.description}</p>
        <Button href={servicesBannerContent.cta.to}>
          {servicesBannerContent.cta.label}
        </Button>
      </Container>
    </section>
  );
};

export default ServicesBanner;

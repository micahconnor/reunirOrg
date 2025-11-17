import Button from './Button.jsx';
import Container from '../layout/Container.jsx';

const PageHero = ({ kicker, title, description, actions = [] }) => {
  return (
    <section className="bg-black text-white">
      <Container className="space-y-6 py-16 text-center">
        {kicker && <p className="text-xs uppercase tracking-[0.4em] text-white/60">{kicker}</p>}
        <h1 className="text-4xl font-semibold leading-tight bg-gradient-to-r from-white via-[#7aa6ff] to-[#1c4ed8] bg-clip-text text-transparent sm:text-5xl">
          {title}
        </h1>
        {description && <p className="text-lg text-white/75 sm:mx-auto sm:max-w-3xl">{description}</p>}
        {actions.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {actions.map((action) => (
              <Button key={action.label} to={action.to} href={action.href}>
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PageHero;

import { Link } from 'react-router-dom';
import logo from '../../assets/logo/reunir-logo.svg';
import Container from './Container.jsx';

const footerCols = [
  {
    title: 'Réunir',
    links: [
      { label: 'Le Groupe', to: '/le-groupe' },
      { label: 'Nos Atouts', to: '/nos-atouts' },
      { label: 'Actualités', to: '/actualites' },
      { label: 'Nos Engagements', to: '/nos-engagements' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Réunir Services', to: '/reunir-services' },
      { label: 'Réunir Assurance', to: '/reunir-assurance' },
      { label: 'Réunir Association', to: '/reunir-association' },
      { label: 'Saybus', to: '/saybus' },
    ],
  },
  {
    title: 'Accompagnement',
    links: [
      { label: 'Autorités organisatrices', to: '/autorite-organisatrice' },
      { label: 'Transporteurs', to: '/transporteur' },
      { label: 'Partenaires', to: '/partenaire' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Talents',
    links: [
      { label: 'Job Board', to: '/job-board' },
      { label: 'Opportunités', to: '/opportunites' },
      { label: 'Présentation employeur', to: '/marque-employeur' },
      { label: 'Salariés & RH', to: '/salaries' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-reunir-dark/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div className="space-y-4">
            <img src={logo} alt="Réunir" className="h-12 w-auto" />
            <p className="text-sm text-reunir-dark/80">
              Premier réseau coopératif des PME du transport de voyageurs en France. Nous accompagnons les
              transporteurs, les territoires et les partenaires avec exigence et proximité.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-reunir-dark transition hover:text-reunir-accent"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-reunir-dark transition hover:text-reunir-accent"
              >
                YouTube
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-reunir-dark transition hover:text-reunir-accent"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerCols.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-reunir-dark">{column.title}</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-reunir-dark/80">
                  {column.links.map((link) => (
                    <Link key={link.to} to={link.to} className="transition hover:text-reunir-accent">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-reunir-dark/10 pt-6 text-xs text-reunir-dark/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Réunir. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/mentions-legales" className="hover:text-reunir-accent">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-reunir-accent">
              Politique de confidentialité
            </Link>
            <Link to="/cookies" className="hover:text-reunir-accent">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

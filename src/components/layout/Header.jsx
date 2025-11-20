import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/reunir-logo.svg';
import Container from './Container.jsx';
import Button from '../common/Button.jsx';

const mainNavLinks = [
  { label: 'Nos Atouts', to: '/nos-atouts' },
  { label: 'Nos Engagements', to: '/nos-engagements' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Opportunités', to: '/opportunites', icon: 'briefcase' },
];

const serviceLinks = [
  { label: 'Réunir Association', to: '/reunir-association' },
  { label: 'Réunir Assurances', to: '/reunir-assurance' },
  { label: 'Synéo', to: '/syneo' },
  { label: 'Saybus', to: '/saybus' },
];

const connectLinks = [
  { label: 'Espace Adhérent', href: 'https://reunir-extranet.web.app' },
  { label: 'Réunir Avantages', href: 'https://avantages.reunir.org/' },
  { label: 'Réunir Assurances', href: 'https://reunir.prod-extranet.iga.fr/' },
  {
    label: 'Réunir Santé',
    children: [
      { label: 'RH', href: 'https://easyaccess.verlingue.fr/View/Accueil.aspx?ReturnUrl=/default.aspx' },
      { label: 'Salarié', href: 'https://www.generation.fr/adherents/' },
    ],
  },
];

const utilityLinks = [
  { label: 'Vous êtes une autorité organisatrice', to: '/autorite-organisatrice' },
  { label: 'Vous êtes un transporteur', to: '/transporteur' },
  { label: 'Vous êtes un partenaire', to: '/partenaire' },
  { label: 'Réunir Santé', to: '/reunir-sante' },
  { label: 'Réunir Avantages', to: '/reunir-avantages' },
  { label: 'Salariés', to: '/salaries' },
  { label: 'RH', to: '/rh' },
  { label: 'Présentation de la marque employeur', to: '/marque-employeur' },
];

const navLinkBase =
  'text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-reunir-accent';

const BriefcaseIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m4 0h-14a2 2 0 0 0-2 2v7.5A2.5 2.5 0 0 0 5.5 19h13a2.5 2.5 0 0 0 2.5-2.5V9a2 2 0 0 0-2-2Zm-7 4v2m-6-2h14"
    />
  </svg>
);

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
    setIsServicesOpen(false);
    setIsConnectOpen(false);
  };

  const toggleServicesMenu = () =>
    setIsServicesOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsConnectOpen(false);
      }
      return next;
    });

  const toggleConnectMenu = () =>
    setIsConnectOpen((prev) => {
      const next = !prev;
      if (next) {
        setIsServicesOpen(false);
      }
      return next;
    });

  const closeMenus = () => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
    setIsConnectOpen(false);
  };

  const renderNavLink = (link) => {
    const Icon = link.icon === 'briefcase' ? BriefcaseIcon : null;
    return (
      <NavLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `${navLinkBase} ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
        }
        onClick={closeMenus}
      >
        <span className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4" />}
          {link.label}
        </span>
      </NavLink>
    );
  };

  const renderConnectLinks = (linkClass, headingClass) =>
    connectLinks.map((link) => {
      if (link.children) {
        return (
          <div key={link.label} className="flex flex-col gap-2">
            <p className={headingClass}>{link.label}</p>
            <div className="flex flex-col gap-2 pl-3">
              {link.children.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                  onClick={closeMenus}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        );
      }

      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
          onClick={closeMenus}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img src={logo} alt="Réunir" className="h-10 w-auto opacity-80 mix-blend-plus-lighter" />
          <span className="sr-only">Réunir</span>
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 text-white"
            onClick={toggleMobileMenu}
            aria-label="Ouvrir la navigation"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-8 text-white">
          <div className="relative">
            <button
              type="button"
              className={`${navLinkBase} flex items-center gap-1 text-white/80 hover:text-white`}
              onClick={toggleServicesMenu}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              Réunir
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-3 w-56 rounded-lg border border-white/10 bg-[#0c1328] p-4 shadow-lg">
                <div className="flex flex-col gap-3 text-sm">
                  {serviceLinks.map((link) => renderNavLink(link))}
                </div>
              </div>
            )}
          </div>
          {mainNavLinks.map((link) => renderNavLink(link))}
          <div className="relative">
            <Button type="button" onClick={toggleConnectMenu} aria-expanded={isConnectOpen} aria-haspopup="true">
              Se connecter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isConnectOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
              </svg>
            </Button>
            {isConnectOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-lg border border-white/10 bg-[#0c1328] p-4 shadow-lg">
                <div className="flex flex-col gap-3 text-sm">
                  {renderConnectLinks(
                    'block text-left text-white/80 transition hover:text-white',
                    'text-xs font-semibold uppercase tracking-wide text-white/60'
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>

      {isMobileOpen && (
        <div className="border-t border-white/10 bg-[#050611]/95 lg:hidden backdrop-blur-xl">
          <Container className="flex flex-col gap-4 py-6">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border border-white/20 px-4 py-2 text-left text-sm font-semibold text-white"
                onClick={toggleServicesMenu}
                aria-expanded={isServicesOpen}
              >
                <span>Réunir</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="mt-3 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/10 p-4 text-white">
                  {serviceLinks.map((link) => renderNavLink(link))}
                </div>
              )}
            </div>
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border border-white/20 px-4 py-2 text-left text-sm font-semibold text-white"
                onClick={toggleConnectMenu}
                aria-expanded={isConnectOpen}
              >
                <span>Se connecter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${isConnectOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {isConnectOpen && (
                <div className="mt-3 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/10 p-4 text-white">
                  {renderConnectLinks(
                    'block text-left text-white/90 transition hover:text-white',
                    'text-xs font-semibold uppercase tracking-wide text-white/70'
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 text-white">{mainNavLinks.map((link) => renderNavLink(link))}</div>
            <div className="grid gap-2 rounded-lg bg-white/5 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white">Explorer</p>
              {utilityLinks.map((link) => renderNavLink(link))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

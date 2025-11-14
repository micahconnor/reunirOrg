import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo/reunir-logo.svg';
import Container from './Container.jsx';
import Button from '../common/Button.jsx';

const mainNavLinks = [
  { label: 'Le Groupe', to: '/le-groupe' },
  { label: 'Nos Atouts', to: '/nos-atouts' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Nos Engagements', to: '/nos-engagements' },
  { label: 'Contact', to: '/contact' },
  { label: 'Opportunités', to: '/opportunites' },
];

const serviceLinks = [
  { label: 'Saybus', to: '/saybus' },
  { label: 'Réunir Assurance', to: '/reunir-assurance' },
  { label: 'Réunir Services', to: '/reunir-services' },
  { label: 'Réunir Association', to: '/reunir-association' },
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

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);
  const toggleDropdown = () => setOpenDropdown((prev) => !prev);

  const closeMenus = () => {
    setIsMobileOpen(false);
    setOpenDropdown(false);
  };

  const renderNavLink = (link) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `${navLinkBase} ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
      }
      onClick={closeMenus}
    >
      {link.label}
    </NavLink>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-3xl shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <img src={logo} alt="Réunir" className="h-10 w-auto opacity-80 mix-blend-plus-lighter" />
          <span className="sr-only">Réunir</span>
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <Link
            to="/job-board"
            className="text-xs font-semibold uppercase tracking-wide text-white/80"
            onClick={closeMenus}
          >
            Job Board
          </Link>
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
              onClick={toggleDropdown}
            >
              Nos Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${openDropdown ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {openDropdown && (
              <div className="absolute left-0 mt-3 w-56 rounded-lg border border-white/10 bg-[#0c1328] p-4 shadow-lg">
                <div className="flex flex-col gap-3 text-sm">
                  {serviceLinks.map((link) => renderNavLink(link))}
                </div>
              </div>
            )}
          </div>
          {mainNavLinks.map((link) => renderNavLink(link))}
          <Link to="/job-board" className="text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-white" onClick={closeMenus}>
            Job Board
          </Link>
          <Button
            href="https://espace-adherent.reunir.fr"
            target="_blank"
            rel="noreferrer"
          >
            Espace Adhérent
          </Button>
        </nav>
      </Container>

      {isMobileOpen && (
        <div className="border-t border-white/10 bg-[#050611]/95 lg:hidden backdrop-blur-xl">
          <Container className="flex flex-col gap-4 py-6">
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-md border border-white/20 px-4 py-2 text-left text-sm font-semibold text-white"
                onClick={toggleDropdown}
              >
                <span>Nos Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${openDropdown ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {openDropdown && (
                <div className="mt-3 flex flex-col gap-3 rounded-lg border border-white/10 bg-white/10 p-4 text-white">
                  {serviceLinks.map((link) => renderNavLink(link))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 text-white">{mainNavLinks.map((link) => renderNavLink(link))}</div>
            <div className="grid gap-2 rounded-lg bg-white/5 p-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wide text-white">Explorer</p>
              {utilityLinks.map((link) => renderNavLink(link))}
            </div>
            <Button
              href="https://espace-adherent.reunir.fr"
              target="_blank"
              rel="noreferrer"
            >
              Espace Adhérent
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;

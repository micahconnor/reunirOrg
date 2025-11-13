import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AssociationPage from './pages/AssociationPage.jsx';
import AssurancePage from './pages/AssurancePage.jsx';
import SaybusPage from './pages/SaybusPage.jsx';
import LeGroupePage from './pages/LeGroupePage.jsx';
import ActualitesPage from './pages/ActualitesPage.jsx';
import NosAtoutsPage from './pages/NosAtoutsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AutoriteOrganisatricePage from './pages/AutoriteOrganisatricePage.jsx';
import TransporteurPage from './pages/TransporteurPage.jsx';
import PartenairePage from './pages/PartenairePage.jsx';
import OpportunitesPage from './pages/OpportunitesPage.jsx';
import NosEngagementsPage from './pages/NosEngagementsPage.jsx';
import SalariesPage from './pages/SalariesPage.jsx';
import RHPage from './pages/RHPage.jsx';
import ReunirSantePage from './pages/ReunirSantePage.jsx';
import ReunirAvantagesPage from './pages/ReunirAvantagesPage.jsx';
import JobBoardPage from './pages/JobBoardPage.jsx';
import MarqueEmployeurPage from './pages/MarqueEmployeurPage.jsx';
import MentionsLegalesPage from './pages/MentionsLegalesPage.jsx';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage.jsx';
import CookiesPage from './pages/CookiesPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/reunir-services" element={<ServicesPage />} />
          <Route path="/reunir-association" element={<AssociationPage />} />
          <Route path="/reunir-assurance" element={<AssurancePage />} />
          <Route path="/saybus" element={<SaybusPage />} />
          <Route path="/le-groupe" element={<LeGroupePage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/nos-atouts" element={<NosAtoutsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/autorite-organisatrice" element={<AutoriteOrganisatricePage />} />
          <Route path="/transporteur" element={<TransporteurPage />} />
          <Route path="/partenaire" element={<PartenairePage />} />
          <Route path="/opportunites" element={<OpportunitesPage />} />
          <Route path="/nos-engagements" element={<NosEngagementsPage />} />
          <Route path="/salaries" element={<SalariesPage />} />
          <Route path="/rh" element={<RHPage />} />
          <Route path="/reunir-sante" element={<ReunirSantePage />} />
          <Route path="/reunir-avantages" element={<ReunirAvantagesPage />} />
          <Route path="/job-board" element={<JobBoardPage />} />
          <Route path="/marque-employeur" element={<MarqueEmployeurPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

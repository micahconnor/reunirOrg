import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1 pt-24 md:pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

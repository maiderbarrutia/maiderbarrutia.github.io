import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from '@pages/projects/projectDetails';
import Header from '@components/layout/Header/Header';
import Home from '@/pages/home/Home';
import Footer from '@components/layout/Footer/Footer';
import NotFound from '@pages/notFound/NotFound';
import PrivacyPolicy from '@pages/privacyPolicy/PrivacyPolicy';
import Login from '@/pages/login/Login';
import { AuthProvider } from '@/context/AuthContext';
import CookiesBanner from '@/components/common/CookiesBanner/CookiesBanner';
import Cookies from '@/pages/cookiesPolicy/CookiesPolicy';

const SiteRoutes: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        {/* Header y Footer se mantienen en todas las rutas */}
        <Header />
        <main>
          <Routes>
            {/* Ruta para la página principal donde estarán todas las secciones */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para las demás páginas */}
            <Route path="/proyectos/:slug" element={<ProjectDetail />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-de-cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Home />} />
            </Route> */}
          </Routes>
        </main>
        <CookiesBanner />
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default SiteRoutes;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/sections/Home/Home';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import Contact from '../components/sections/Contact/Contact';
import ProjectDetail from '../pages/projects/projectDetails';
import NotFound from '../pages/notFound/NotFound';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

const SiteRoutes: React.FC = () => {
  return (
    <Router>
      {/* Header y Footer se mantienen en todas las rutas */}
      <Header />
      <main>
        <Routes>
          {/* Ruta para la página principal donde estarán todas las secciones */}
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
              </>
            } 
          />
          
          {/* Ruta para las demás páginas */}
          <Route path="/proyectos/:slug" element={<ProjectDetail />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default SiteRoutes;

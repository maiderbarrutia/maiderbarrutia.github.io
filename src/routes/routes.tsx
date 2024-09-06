import { useRoutes } from 'react-router-dom';
import Home from '../components/sections/Home/Home';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import Contact from '../components/sections/Contact/Contact';

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return routes;
};

export default Routes;

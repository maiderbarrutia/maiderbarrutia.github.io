// import './App.css'
import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
// import Routes from './routes/routes';
function App() {
  return (
    <Router>
      <Header/>
      <main>
        {/* <Routes/> */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </Router>
  )
}

export default App
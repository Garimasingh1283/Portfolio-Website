import './App.css';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from './components/About';
import Skiils from './components/Skiils';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Element } from 'react-scroll';


function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skiils />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;

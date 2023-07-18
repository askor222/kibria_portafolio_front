import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Meta from '../Pages/Meta';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Meta />
      <Contact />
    </>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import NavBar from "../Components/nav/NavBar";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Meta from '../Pages/Meta';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verificar el token en el servidor o realizar cualquier otra validación necesaria
      // Si el token es válido, establecer isLoggedIn en true
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      {isLoggedIn ? (
        <>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Meta />
          <Contact />
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;

import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Realizar el llamado a la API de login
    const loginData = {
      username: email,
      password: password,
    };
  
    fetch('http://127.0.0.1:8000/api/login_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Guardar el token en el localStorage
          handleLogin(data.token); // Llamar a la función handleLogin con el token
        } else {
          console.error('No se recibió un token válido desde la API');
          // Manejar el caso de no recibir un token válido desde la API
        }
      })
      .catch((error) => {
        console.error('Error en el login:', error);
        // Manejar el error de la API
      });
  };
  

  return (
    <div> <br /><br /><br /><br /><br />
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Ingresa tu correo"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;

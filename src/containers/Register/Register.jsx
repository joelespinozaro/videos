import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

export const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input
          className="login__input"
          type="text"
          placeholder="Nombre"
        />
        <input
          className="login__input"
          type="text"
          placeholder="Correo"
        />
        <input
          className="login__input"
          type="password"
          placeholder="Contraseña"
        />
        <button className="button">Registrarme</button>
      </form>
      <Link to="/login">Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CardLogin.css";

const CardLogin = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const cadastro = (e) => {
    e.preventDefault();
    console.log("Submit", { nome, email });
  };
  return (
    <section className="loginContainer">
      <img src="../../../images/coffee.svg" alt="Logo coffee" />
      <form className="loginInfos" onSubmit={cadastro}>
        <span>Nome completo</span>
        <input
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <span>E-mail</span>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Link to="/app">
          <button type="submit">Cadastrar</button>
        </Link>
      </form>
    </section>
  );
};

export default CardLogin;

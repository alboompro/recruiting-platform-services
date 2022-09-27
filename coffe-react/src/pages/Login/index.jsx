import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSave = () => {
    const data = {
      name, email
    }

    console.log(data)
  }

  return (
    <section className="loginContainer">
      <div className="cardLogin">
        <img src="../../../images/coffee.svg" alt="" />
        <div>
          <span>Nome completo</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <span>E-mail</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="divButton">
          <Link to="/menu">
            <button onClick={handleSave}>Cadastrar</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;

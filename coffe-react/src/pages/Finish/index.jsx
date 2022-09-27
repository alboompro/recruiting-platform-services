import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import "./style.css";

const Finish = () => {
  const time = () => {
    let newTime = [];
    for (let i = 0; i <= 6; i++) {
      newTime.push(parseFloat(localStorage.getItem(i)));
    }

    console.log(newTime);
  };

  const resetLocal = () => {
    for(let i = 0; i <= 6; i++) {
        localStorage.removeItem(i)
    }
  }

  time();
  return (
    <>
      <Header />
      <section className="textFinishContainer">
        <p>Pedido realizado com sucesso!</p>
      </section>
      <section className="circleContainer">
        <div className="circle">
          <p>2:33 min</p>
          <span>tempo restante para ficar pronto</span>
        </div>
      </section>
      <section className="codeParent">
        <div className="codeContainer">
          <p>SC123456</p>
        </div>
      </section>
      <section className="buttonsContainer">
        <div className="buttons">
          <Link to="/">
            <button className="buttonBack" onClick={resetLocal}>
              <img src="../../../images/arrow-counterclockwise.svg" alt="" />
            </button>
          </Link>
          <button className="buttonPrint">IMPRIMIR CUPOM</button>
        </div>
      </section>
    </>
  );
};

export default Finish;

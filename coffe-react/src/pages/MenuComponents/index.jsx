import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import DataCoffees from "../../../mocks/data";
import CardComponent from "../../components/CardComponent/CardComponent";

import "./style.css";

const MenuComponents = () => {
  const [newData, setNewData] = useState([]);

  const selectedData = () => {
    const selected = [];
    for (let i = 0; i <= DataCoffees.length; i++) {
      if (i == localStorage.getItem(i)) {
        selected.push(DataCoffees[i - 1]);
      }
    }
    setNewData(selected);
  };

  const backPage = () => {
    for (let i = 0; i <= 6; i++) {
      localStorage.removeItem(i - 1);
    }
  };

  useEffect(() => {
    selectedData();
  }, []);
  return (
    <>
      <Header />
      <div className="textContainer">
        <p>Adicione complementos ao seu pedido</p>
      </div>
      {newData.map((e) => {
        return (
          <CardComponent
            name={e.name}
            image={e.image}
            id={e.id}
            time={e.time}
            components={e.complementos}
          />
        );
      })}
      <div className="divButtonContainer">
        <Link to="/menu">
          <button id="back" onClick={backPage}>
            VOLTAR
          </button>
        </Link>
        <Link to="/finish">
          <button id="finish">FINALIZAR</button>
        </Link>
      </div>
    </>
  );
};

export default MenuComponents;

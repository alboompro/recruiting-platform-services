import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import CardCoffees from "../../components/CardCoffees/CardCoffees";
import DataCoffees from '../../../mocks/data';

import "./style.css";

const Menu = () => {
  
  return (
    <>
      <Header />
      {DataCoffees.map((e) => {
        return (
          <CardCoffees name={e.name} time={e.time} image={e.image} id={e.id} />
        );
      })}
      <Link to="/menu/components">
        <button>CONTINUAR</button>
      </Link>
    </>
  );
};

export default Menu;

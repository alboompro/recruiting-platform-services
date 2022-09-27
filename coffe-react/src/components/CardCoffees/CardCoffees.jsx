import { React } from "react";

import "./CardCoffees.css";

const CardCoffees = (props) => {
  const checked = () => {
    localStorage.setItem(props.id, props.id);
  };

  return (
    <section>
      <div className="cardCoffeesContainer">
        <div className="noConfirm">
          <figure>
            <img src={props.image} alt="" />
          </figure>
          <div className="cardInfoContainer">
            <h2>{props.name}</h2>
            <div className="timeContainer">
              <img src="../../../images/clock.svg" alt="" />
              <span>{props.time}</span>
            </div>
          </div>
        </div>
        <div className="circleConfirmContainer">
          <input
            className="circleConfirm"
            type="checkbox"
            name="selected"
            onClick={checked}
          />
        </div>
      </div>

      <hr />
    </section>
  );
};

export default CardCoffees;

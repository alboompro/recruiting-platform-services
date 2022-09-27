import React from "react";

import "./CardComponent.css";

const CardComponent = (props) => {
  let timer = [props.time];

  return (
    <section>
      <div className="coffeeContainer">
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

      <div className="flex-end">
        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[0].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[0].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[0].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>

        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[1].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[1].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[1].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>

        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[2].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[2].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[2].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>

        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[3].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[3].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[3].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>

        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[4].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[4].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[4].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>

        <div className="componentContainer">
          <div className="componentCard">
            <figure>
              <img src={props.components[5].image} alt="" />
            </figure>
            <div className="cardInfoContainer">
              <h2>{props.components[5].name}</h2>
              <div className="timeContainer">
                <img src="../../../images/clock.svg" alt="" />
                <span>{props.components[5].time}</span>
              </div>
            </div>
          </div>
          <input
            type="checkbox"
            className="inputCheck"
            name="selected"
            value={props.components[0].time}
            onClick={(e) => {
              timer.push(parseFloat(e.target.value));
              localStorage.setItem(props.id, timer);
            }}
          />
        </div>
      </div>

      <hr />
    </section>
  );
};

export default CardComponent;

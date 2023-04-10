import React from "react";
import data from "../CarData";

export default function Fleet() {
  const [currCar, setCurrCar] = React.useState(data[0]);

  const changeCar = function (e) {
    // console.log(e.target.closest("button").id);

    // console.log(data.find((el) => +e.target.closest("button").id === el.id));
    setCurrCar(data.find((el) => +e.target.closest("button").id === el.id));
  };

  const cars = data.map((el) => {
    return (
      <li key={el.id}>
        <button
          className={`fleet-nav-link ${
            el.id === currCar.id ? "fleet-nav--active" : ""
          }`}
          onClick={changeCar}
          id={el.id}
        >
          {el.car}
        </button>
      </li>
    );
  });

  return (
    <section className="section-fleet">
      <h3 className="section-subheading">Vehicle Models</h3>
      <h1 className="section-heading">Our rental fleet</h1>
      <p className="fleet-text">
        Choose from a variety of amazing luxury vehicles to rent for your next
        business trip or when you just want to ride in style
      </p>
      <div className="fleet-viewer-box">
        <nav className="fleet-viewer-nav">
          <ul className="fleet-viewer-nav-list">{cars}</ul>
        </nav>
        <img
          className="fleet-viewer-image"
          src={`../img/${currCar.coverImg}`}
          alt={`${currCar.car}`}
        />
        <div className="car-specs">
          <span className="fleet-car-price">{`£${currCar.price}.00 Per day`}</span>
          <div className="fleet-viewer-spec-box">
            <div className="fleet-spec-headings">
              <span className="fleet-spec-heading">Model</span>
              <span className="fleet-spec-heading">Make</span>
              <span className="fleet-spec-heading">Year</span>
              <span className="fleet-spec-heading">4-Wheel</span>
              <span className="fleet-spec-heading">AC</span>
              <span className="fleet-spec-heading">Horsepower</span>
              <span className="fleet-spec-heading">Fuel</span>
            </div>
            <div className="fleet-car-spec-box">
              <span className="fleet-spec-heading">{currCar.specs.model}</span>
              <span className="fleet-spec-heading">{currCar.specs.make}</span>
              <span className="fleet-spec-heading">{currCar.specs.year}</span>
              <span className="fleet-spec-heading">
                {currCar.specs.fourwheel}
              </span>
              <span className="fleet-spec-heading">{currCar.specs.ac}</span>
              <span className="fleet-spec-heading">
                {currCar.specs.horsepower}
              </span>
              <span className="fleet-spec-heading">
                {currCar.specs.fuelcap}
              </span>
            </div>
          </div>
          <button className="fleet-rent-car-btn">Reserve Now</button>
        </div>
      </div>
    </section>
  );
}

// cars ---
// maserati MC20
//aston martin DB11
//bmw i8
//audi r8
//bugatti chiron

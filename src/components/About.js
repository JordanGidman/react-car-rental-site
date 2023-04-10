import React from "react";
import sports_car_icon from "../img/sports_car_icon.png";

import racing_car_icon from "../img/racing_car_icon.png";
import caller_icon from "../img/caller_icon.png";

export default function About() {
  return (
    <section className="section-about">
      <h3 className="section-subheading">Plan your trip now</h3>
      <h1 className="section-heading">Quick & easy car rental</h1>
      <div className="about-cards">
        <div className="about-card">
          <img
            className="about-card-icon"
            src={sports_car_icon}
            alt="car-icon"
          />
          <h3 className="about-card-heading">Select Car</h3>
          <p className="about-card-text">
            We offer a wide range of luxury vehicles for all your driving
            desires. We have that perfect car you have been searching for.
          </p>
        </div>
        <div className="about-card">
          <img
            className="about-card-icon icon-operator"
            src={caller_icon}
            alt="call operator svg"
          />
          <h3 className="about-card-heading">Contact Operator</h3>
          <p className="about-card-text">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concers you may have.
          </p>
        </div>
        <div className="about-card">
          <img
            className="about-card-icon"
            src={racing_car_icon}
            alt="racing car svg icon"
          />
          <h3 className="about-card-heading">Lets Drive</h3>
          <p className="about-card-text">
            Whether you need to get from point A to B in style or are just
            looking to hit the open road in a ride that makes you feel alive we
            have you covered.
          </p>
        </div>
      </div>
    </section>
  );
}

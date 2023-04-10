import React from "react";
// import hero_img from "../img/hero_img.webp";
import hero_img_2 from "../img/hero_img_2.webp";

export default function Hero() {
  return (
    <header className="hero-container">
      <div className="hero-text-container">
        <h1 className="hero-title">
          Cruise in <strong>Style</strong> with our luxury car rental
        </h1>
        <p className="hero-text">
          Rent the luxury car of your dreams to cruise around the streets in
          style. Unbeatable prices, Unlimited miles, Flexible pick-up and
          drop-off. With top of the line cars from the likes of Ferrari, Audi,
          BMW and more.
        </p>
        <div className="hero-btns">
          <button className="hero-btn btn-book">Book a ride</button>
          <button className="hero-btn btn-learn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero_img_2} className="hero-img" alt="car" />
      </div>
    </header>
  );
}

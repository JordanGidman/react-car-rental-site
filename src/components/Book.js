import React from "react";

export default function Book() {
  const bookCar = function () {
    document.querySelector(`.book-message`).textContent = `Booking Successful!`;
  };

  return (
    <section className="section-book">
      <h2 className="section-book-title">Book a car</h2>
      <div className="booking-form">
        <div className="section-book-input-box">
          <label for="car-type" className="booking-label">
            Select Car Type <strong>*</strong>
          </label>
          <select name="car-type" id="car-type" className="booking-input">
            <option value="ferrari">Ferrari</option>
            <option value="bmw">BMW</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="section-book-input-box">
          <label for="location-pickup" className="booking-label">
            Choose Pickup Location <strong>*</strong>
          </label>
          <select
            name="location-pickup"
            id="location-pickup"
            className="booking-input"
          >
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="bradford">Bradford</option>
            <option value="blackpool">Blackpool</option>
          </select>
        </div>
        <div className="section-book-input-box">
          <label for="location-drop" className="booking-label">
            Choose Drop-off Location <strong>*</strong>
          </label>
          <select
            name="location-drop"
            id="location-drop"
            className="booking-input"
          >
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="bradford">Bradford</option>
            <option value="blackpool">Blackpool</option>
          </select>
        </div>
        <div className="section-book-input-box">
          <label for="pickup-time" className="booking-label">
            Choose Pickup Time <strong>*</strong>
          </label>
          <input
            type="date"
            name="pickup-time"
            id="pickup-time"
            className="booking-input"
          ></input>
        </div>
        <div className="section-book-input-box">
          <label for="drop-time" className="booking-label">
            Choose Drop-off Time <strong>*</strong>
          </label>
          <input
            type="date"
            name="drop-time"
            id="drop-time"
            className="booking-input"
          ></input>
        </div>
        <button className="btn-submit-booking" onClick={bookCar}>
          Book
        </button>
        <span className="book-message"></span>
      </div>
    </section>
  );
}

import React from "react";
import { useState } from "react";

export default function Book() {
  const [booked, setBooked] = useState(false);
  const [carType, setCarType] = useState("ferrari");
  const [pickupLocation, setPickupLocation] = useState("london");
  const [dropoffLocation, setDropOffLocation] = useState("london");
  const handleBookCar = function () {
    setBooked(true);
  };

  function handleChangeCarType(e) {
    setCarType(e.target.value);
  }

  function handleChangePickup(e) {
    setPickupLocation(e.target.value);
  }

  function handleChangeDropoff(e) {
    setDropOffLocation(e.target.value);
  }

  return (
    <section className="section-book">
      <h2 className="section-book-title">Book a car</h2>
      <div className="booking-form">
        <div className="section-book-input-box">
          <label for="car-type" className="booking-label">
            Select Car Type <strong>*</strong>
          </label>
          <select
            name="car-type"
            id="car-type"
            className="booking-input"
            value={carType}
            onChange={handleChangeCarType}
          >
            <option value="ferrari">Masarati MC20</option>
            <option value="astonmartin">Aston Martin DB11</option>
            <option value="audi">Audi R8</option>
            <option value="bugatti">Bugatti Chiron</option>
            <option value="bmw">BMW i8</option>
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
            value={pickupLocation}
            onChange={handleChangePickup}
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
            value={dropoffLocation}
            onChange={handleChangeDropoff}
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
        <button className="btn-submit-booking" onClick={handleBookCar}>
          Book
        </button>
        <span className="book-message">{booked && `Booking Successful`}</span>
      </div>
    </section>
  );
}

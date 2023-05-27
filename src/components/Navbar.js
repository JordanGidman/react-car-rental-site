import React from "react";
import handleNav from "./handleNav";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">JG Car Rental</div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <button
            className="nav-link"
            onClick={() => {
              handleNav(
                document.querySelector(`header`).getBoundingClientRect()
              );
            }}
          >
            Home
          </button>
        </li>
        <li className="nav-list-item">
          <button
            className="nav-link"
            onClick={() => {
              handleNav(
                document.querySelector(`.section-about`).getBoundingClientRect()
              );
            }}
          >
            About
          </button>
        </li>
        <li className="nav-list-item">
          <button
            className="nav-link"
            onClick={() => {
              handleNav(
                document.querySelector(`.section-fleet`).getBoundingClientRect()
              );
            }}
          >
            Vehicle Options
          </button>
        </li>
        <li className="nav-list-item">
          <button
            className="nav-link"
            onClick={() => {
              handleNav(
                document
                  .querySelector(`.section-our-test`)
                  .getBoundingClientRect()
              );
            }}
          >
            Testimonials
          </button>
        </li>
        <li className="nav-list-item">
          <button
            className="nav-link"
            onClick={() => {
              handleNav(
                document.querySelector(`footer`).getBoundingClientRect()
              );
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

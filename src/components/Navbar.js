import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">JG Car Rental</div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <a href="google.com" target="_blank" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-list-item">
          <a href="google.com" target="_blank" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-list-item">
          <a href="google.com" target="_blank" className="nav-link">
            Vehicle Options
          </a>
        </li>
        <li className="nav-list-item">
          <a href="google.com" target="_blank" className="nav-link">
            Testimonials
          </a>
        </li>
        <li className="nav-list-item">
          <a href="google.com" target="_blank" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

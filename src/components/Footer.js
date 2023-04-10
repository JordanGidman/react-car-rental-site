import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3 className="footer-heading">JG Rental</h3>
        <p className="footer-contact-info secondary-text">
          For any enquiries regarding your rental or hiring me to build a killer
          website like this for you please feel free
        </p>
        <div className="footer-contact-details-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="footer-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
          <span>07960042632</span>
        </div>
        <div className="footer-contact-details-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="footer-icon"
          >
            <path
              strokeLinecap="round"
              d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
            />
          </svg>

          <span>jordanleegidman@hotmail.com</span>
        </div>
      </div>
      <div className="footer-links">
        <h3 className="footer-heading">Company</h3>
        <ul className="footer-link-list">
          {/* Im lot adding a link here as these will not be functional */}
          <li className="footer-link">Support</li>
          <li className="footer-link">Careers</li>
          <li className="footer-link">Mobile App</li>
          <li className="footer-link">Blog</li>
          <li className="footer-link">How we Work</li>
        </ul>
      </div>
      <div className="footer-hours">
        <h3 className="footer-heading">Working Hours</h3>
        <span>Mon - Fri: 8:00AM - 8PM</span>
        <span>Sat: 11:00AM - 9PM</span>
        <span>Sun: Closed</span>
      </div>
      <div className="footer-cta">
        <h3 className="footer-heading">Newsletter</h3>
        <p className="footer-cta-text secondary-text">
          Please Subscribe to our email newsletter that lets us keep you
          informed of the latest deals and new vehicle options.
        </p>
        <input
          className="footer-cta-input"
          type="text"
          placeholder="Please Enter Email Address"
        ></input>
        <button className="footer-cta-btn">Subscribe</button>
      </div>
    </footer>
  );
}

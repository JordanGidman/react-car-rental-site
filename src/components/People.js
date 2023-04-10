import React from "react";
import scofield from "../img/scofield.webp";
import frank from "../img/frank.webp";
import quotes_red from "../img/quotes_red.png";

export default function People() {
  return (
    <section className="section-people">
      <h3 className="section-subheading people-subheading center-text">
        Reviewed by People
      </h3>
      <h1 className="people-heading">Customer Testimonials</h1>
      <p className="secondary-text people-text center-text">
        Browse the experiences and opinions of our former customers to see what
        they think of us by reading through some of their testimonials listed
        below. Clients of our service our never dissapointed and they are quick
        to share their experiences with you.
      </p>
      <div className="testimonials-container">
        <div className="people-card">
          <p className="testimonial">
            We rented one of the bugatti's from this website and it was pristine
            with a full tank of gas. Never has driving around the countryside
            felt better than in this car. Overall amazing time totally worth the
            money.
          </p>
          <div className="testimonial-owner-box">
            <div className="testimonial-owner-inner">
              <img className="person-img" src={frank} alt="profile avatar" />
              <div className="person">
                <span className="person-name">Frank Castle</span>
                <span className="person-location">Washington D.C</span>
              </div>
            </div>
            <img src={quotes_red} alt="quotes" className="person-quote-img" />
          </div>
        </div>
        <div className="people-card">
          <p className="testimonial">
            I wanted to turn up to my business meeting in style and JG rentals
            was able to not only provide me a stunning aston martin but they
            were able to have the entire process handled in under an hour.
            Stellar service.
          </p>
          <div className="testimonial-owner-box">
            <div className="testimonial-owner-inner">
              <img className="person-img" alt="profile avatar" src={scofield} />
              <div className="person">
                <span className="person-name">Michael Scofield</span>
                <span className="person-location">Chicago</span>
              </div>
            </div>
            <img src={quotes_red} alt="quotes" className="person-quote-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

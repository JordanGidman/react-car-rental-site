import React from "react";
import OurTestCard from "./OurTestCard";
// import hero_img_OT_2 from "../img/hero_img_OT_2.png";

export default function OurTestimonial() {
  return (
    <section className="section-our-test">
      {/* <div className="our-test-img">
        <img src={hero_img_OT_2} alt="car" className="our-test-hero-img" />
      </div> */}
      <div className="our-test-container">
        <div className="our-test-info">
          <h3 className="section-subheading">Why Choose Us</h3>
          <h1 className="our-test-title">
            Best value for money you will find on the market
          </h1>
          <p className="secondary-text our-test-text">
            Cruise the streets in the car you have always dreamed of without
            breaking the bank. We are commited to keeping our pices affordable
            for all. Everyone should get their chance to ride around in one of
            our beautiful luxury cars without any hassle and aided by the best
            customer service we can provide. There are no hidden fees or charges
            and even late returns are subject to no fees upto 24 hours.
          </p>
          <button className="our-test-btn">Find Details</button>
        </div>
        <div className="our-test-features">
          <OurTestCard
            title="Cross Country Drive"
            text="Level up your driving experience and take one of our cars on the open roads across the country with no extra costs"
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="our-test-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
            }
          />
          <OurTestCard
            title="All Inclusive Pricing"
            text="What you see is what you get and for the price you pay you will be given the car as well as a full tank of petrol or diesel to get you on your way as fast as possible."
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="our-test-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            }
          />
          <OurTestCard
            title="Finance Payment Option"
            text="Cant afford to pay the lump sum all at once? Dont worry we've got you covered you can pay us back by spreading the payment over 6 months using our finance payment option."
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="our-test-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

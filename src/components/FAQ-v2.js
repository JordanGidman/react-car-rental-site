import React, { useState } from "react";

export default function FAQ() {
  const [showText, setShowText] = useState(0);

  function handleShowText(id) {
    id === showText ? setShowText(0) : setShowText(id);
  }

  return (
    <section className="section-FAQ">
      <h3 className="section-subheading">FAQ</h3>
      <h1 className="section-heading">Frequesntly Asked Questions</h1>
      <div className="dropdown-menu-container">
        <div className="dropdown-option" onClick={() => handleShowText(1)}>
          <h4 className="dropdown-option-heading">
            1. What happens if i damage the vehichle
          </h4>
        </div>
        {showText === 1 && (
          <p className="dropdown-option-text secondary-text option-text-1">
            This is something we are always asked and don't worry we have the
            cars insured against damage caused out of your control at no extra
            cost to you so you are totally covered. there is no hidden charges
            or extra fees. However you will be liable to cover the amount for
            the necessary repairs if the incident is deemed your fault and
            therefor not eligible for insurance payout.
          </p>
        )}
        <div
          className="dropdown-option"
          option="2"
          onClick={() => handleShowText(2)}
        >
          <h4 className="dropdown-option-heading">
            2. How do we keep our prices low?
          </h4>
        </div>
        {showText === 2 && (
          <p className="dropdown-option-text secondary-text option-text-2">
            we make advertisement deals with the car companies we work with.
            Every time you are driving around in one of our cars you are a
            living advertisement to all on the road. We leverage this and in
            turn we recieve cars for free with our costs pertaining entirely
            with insurance and maintenance. This helps to significantly reduce
            costs and keep prices low.
          </p>
        )}
        <div
          tab="3"
          className="dropdown-option"
          option="3"
          onClick={() => handleShowText(3)}
        >
          <h4 className="dropdown-option-heading">
            3. If i return early do i get money back?
          </h4>
          <div className="img"></div>
        </div>
        {showText === 3 && (
          <p className="dropdown-option-text secondary-text option-text-3">
            We do offer money back for early returns with some conditions. The
            first being the minimum amount of time for an early return to be
            repayable is 24 Hours. So if you are only returning the vehicle a
            few hours early you will not be eligible for any early return
            refund. Anything over 24 hours early will be refunded in full and
            you dont even have to ask if you already paid the money will be
            transferred within 3-5 business days
          </p>
        )}
      </div>
    </section>
  );
}

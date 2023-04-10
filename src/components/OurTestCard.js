import React from "react";

export default function OurTestCard(props) {
  return (
    <div className="OTCard">
      {props.img}
      <div className="OTCard-text">
        <h3 className="OTCard-title">{props.title}</h3>
        <p className="OTCard-text secondary-text">{props.text}</p>
      </div>
    </div>
  );
}

import React from "react";
import "./css/LandingInfo.css";

const InfoCards = (props) => {
  return (
    <div>
      <div className="info-card">
        <div className="info-card-img">
          <img src={props.data.imgPath} alt={props.data.title} />
        </div>
        <h1 className="center-text">{props.data.title}</h1>
        <div className="info-card-text">
          <p>{props.data.info}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;

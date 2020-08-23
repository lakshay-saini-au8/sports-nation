import React from "react";
import './css/SportCard.css'
const SportCard = ({ data }) => {
  return (
    <div className="SportCard">
      <div className="SportCard__image">
        <img src={data.strSportThumb} alt="" />
      </div>
      <div className="SportCard__title">{data.strSport}</div>
    </div>
  );
};

export default SportCard;

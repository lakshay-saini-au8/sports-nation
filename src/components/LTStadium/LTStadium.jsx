import React from "react";
import Default from "../../assets/img/default.jpg";
import "./LTStadium.css";
const LTStadium = ({ desc, image }) => {
  return (
    <div className="LTStadium__Desc--up">
      <p className="LTStadium__Desc--upH"> Stadium</p>
      <div className="LTStadium__Desc--upImg">
        <img src={image || Default} alt="" />
      </div>
      <div className="LTStadium__Desc--upD">{desc}</div>
    </div>
  );
};

export default LTStadium;

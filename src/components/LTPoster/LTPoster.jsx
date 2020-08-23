import React from "react";
import Default from "../../assets/img/default.jpg";

import "./LTPoster.css";
const LTPoster = ({ firstHead, poster, badge, thirdHead, trophy }) => {
  return (
    <div className="LT__Desc--poster">
      <div className="poster">
        <p>{firstHead}:</p>
        <img src={poster || Default} alt="" />
      </div>
      <div className="badge">
        <p>Badge:</p>
        <img src={badge || Default} alt="" />
      </div>
      <div className="trophy">
        <p>{thirdHead}:</p>
        <img src={trophy || Default} alt="" />
      </div>
    </div>
  );
};

export default LTPoster;

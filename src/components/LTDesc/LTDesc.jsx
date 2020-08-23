import React from "react";
import "./LTDesc.css";
const LTDesc = ({ description }) => {
  return (
    <div className="LT__Desc--full">
      <p className="LT__Desc--fullH"> Description</p>
      <p className="LT__Desc--fullD">{description}</p>
    </div>
  );
};

export default LTDesc;

import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <Link to="/">
        <div className="Logo">
          <span className="Logo__sport">SPORTS</span>
          <span className="Logo__nation">NATION</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

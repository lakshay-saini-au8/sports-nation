import React from "react";
import Logo from "../Logo/Logo";
import "./SportsHeader.css";
import { Link } from "react-router-dom";
const SportsHeader = () => {
  return (
    <div className="Header">
      <Logo />

      <Link to="/sports" className="Header__link">
        Sports Portal
      </Link>
    </div>
  );
};

export default SportsHeader;

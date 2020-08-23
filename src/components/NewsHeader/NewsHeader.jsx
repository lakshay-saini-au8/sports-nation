import React from "react";
import Logo from "../Logo/Logo";
import "./NewsHeader.css";
import { Link } from "react-router-dom";
const NewsHeader = () => {
  return (
    <div className="Header">
      <Logo />

      <Link to="/sports" className="Header__link">
        Sports Portal
      </Link>
    </div>
  );
};

export default NewsHeader;

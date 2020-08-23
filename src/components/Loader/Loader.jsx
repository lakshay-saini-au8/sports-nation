import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 80px)",
      }}
    >
      <div className="loader">Loading...</div>
    </div>
  );
};

export default Loader;

import React from "react";
import "./NewsCategory.css";
const NewsCategory = () => {
  return (
    <>
      <div className="NewsCategory__tab" data-id="sports">
        SPORTS
      </div>
      <div className="NewsCategory__tab" data-id="technology">
        TECHNOLOGY
      </div>
      <div className="NewsCategory__tab" data-id="science">
        SCIENCE
      </div>
      <div className="NewsCategory__tab" data-id="health">
        HEALTH
      </div>
      <div className="NewsCategory__tab" data-id="entertainment">
        ENTERTAINMENT
      </div>
      <div className="NewsCategory__tab" data-id="general">
        GENERAL
      </div>
    </>
  );
};

export default NewsCategory;

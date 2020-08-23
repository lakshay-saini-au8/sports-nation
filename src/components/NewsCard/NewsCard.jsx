import React from "react";
import "./NewsCard.css";
import Default from "../../assets/img/default.jpg";
const NewsCard = ({ image, tag, title, author, date, readMore }) => {
  return (
    <div className="NewsCard">
      <div>
        <div className="NewsCard__img">
          <img src={image || Default} alt="" />
          <div className="NewsCard__img--tag">{tag || "NA"}</div>
        </div>
        <div className="NewsCard__body">
          <p className="NewsCard__body--date">
            {date.split("-").reverse().join("-")}
          </p>
          <p className="NewsCard__body--author">{author || "Lakshay Saini"}</p>
          <p className="NewsCard__body--title">{title || "NA"}</p>
        </div>
      </div>
      <div>
        <div className="NewsCard__body">
          <a href={readMore} target="_blank" rel="noopener noreferrer">
            <p className="NewsCard__body--read">Read More</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

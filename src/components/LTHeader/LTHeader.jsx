import React from "react";
import Logo from "../Logo/Logo";
import Default from "../../assets/img/default.jpg";
import "./LTHeader.css";
const LTHeader = ({ banner, fb, tw, web, yt }) => {
  return (
    <div
      className="SLeague__head"
      style={{
        backgroundImage: `url(${banner || Default})`,
      }}
    >
      <Logo />
      <div className="SocialIcon">
        {fb !== "" ? (
          <a href={`http://${fb}`} target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.thesportsdb.com/images/icons/facebook_128.png"
              alt=""
              className="SocialIcon__btn"
            />
          </a>
        ) : null}
        {tw !== "" ? (
          <a href={`https://${tw}`} target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.thesportsdb.com/images/icons/twitter_128.png"
              alt=""
              className="SocialIcon__btn"
            />
          </a>
        ) : null}
        {web !== "" ? (
          <a href={`http://${web}`} target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.thesportsdb.com/images/icons/webpage_128.png"
              alt=""
              className="SocialIcon__btn"
            />
          </a>
        ) : null}
        {yt !== "" ? (
          <a href={`https://${yt}`} target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.thesportsdb.com/images/icons/youtube_128.png"
              alt=""
              className="SocialIcon__btn"
            />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default LTHeader;

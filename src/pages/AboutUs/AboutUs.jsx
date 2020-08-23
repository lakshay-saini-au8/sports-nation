import React, { Component } from "react";
import "./AboutUs.css";
import Logo from "../../components/Logo/Logo";

class AboutUs extends Component {
  render() {
    return (
      <>
        <Logo />
        <div className="about">
          <div className="about-this-website">
            <h1 className="heading">About This Website</h1>
            <div className="all-about">
              <p>
                Sports Nation website gives the information about Sports and
                sports related news.
              </p>
              <p>
                In this website we have two options one is sports data and other
                one is sports news.
              </p>
              <p>
                In this section we can select any of the sport and render to the
                country page, then we search a country according to sports and
                then we render to all related to particular sports, then we
                select any of the leagues and render to the particular league
                info page and then we select a particular league team and see
                all about the particular team.{" "}
              </p>
              <p>
                In sports news section we can see all the trending sports news
                related to the particular sports.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;

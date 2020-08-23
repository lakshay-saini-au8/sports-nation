import React, { Component } from "react";
import "./ContactUs.css";
import Logo from "../../components/Logo/Logo";

class ContactUs extends Component {
  render() {
    return (
      <>
        <Logo />

        <div className="contact">
          <h1 className="Contact-us">Contact Us</h1>
          <div className="info">
            <div className="profile-card">
              <img
                src={require("../../assets/img/lakshayimg.jpg")}
                alt="Lakshay"
                className="lakshay-img"
              />
              <h3 className="profile-name">Lakshay Saini</h3>
              <p className="information">Frontend Developer</p>
              <a href="https://www.linkedin.com/in/lakshay-saini-dev/">
                <img
                  src={require("../../assets/img/icons8-linkedin-480.png")}
                  alt="Linkedin-profile"
                  className="linkedin"
                />
              </a>
            </div>
            <div className="profile-card">
              <img
                src={require("../../assets/img/IMG20200207175040.jpg")}
                alt="Akshat"
                className="akshat-img"
              />
              <h3 className="profile-name">Akshat Austin</h3>
              <p className="information">Frontend Developer</p>
              <a href="https://www.linkedin.com/in/akshat-austin/">
                <img
                  src={require("../../assets/img/icons8-linkedin-480.png")}
                  alt="Linkedin-profile"
                  className="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;

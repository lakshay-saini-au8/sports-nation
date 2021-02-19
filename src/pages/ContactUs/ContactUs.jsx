import React, { Component } from "react";
import { Info, Head, ContactWrapper } from "./ContactUs.style";
import Logo from "../../components/Logo/Logo";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

class ContactUs extends Component {
  render() {
    return (
      <>
        <Logo />

        <ContactWrapper>
          <Head>Contact Us</Head>
          <Info>
            <ProfileCard
              img={require("../../assets/img/lakshayimg.jpg")}
              name="Lakshay saini"
              title="Frontend Developer"
              link="https://www.linkedin.com/in/lakshay-saini-dev/"
            />
          </Info>
        </ContactWrapper>
      </>
    );
  }
}

export default ContactUs;

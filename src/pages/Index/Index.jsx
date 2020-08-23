import React from "react";
import Logo from "../../components/Logo/Logo";
import Sports from "../../assets/img/sports.svg";
import News from "../../assets/img/newsPaper.svg";
import IndexSec from "../../components/IndexSec/IndexSec";
// styles
import {
  IndexWrapper,
  IndexLogo,
  IndexLeftSec,
  IndexRightSec,
} from "./Index.style";

const Index = () => {
  return (
    <IndexWrapper>
      <IndexLogo>
        <Logo />
      </IndexLogo>

      <IndexLeftSec>
        <IndexSec
          img={Sports}
          text="Want to know more about sports details according to country?"
          secLink="sports"
          footerLink="aboutus"
          footerContent="About Us"
          sec="left"
        />
      </IndexLeftSec>
      <IndexRightSec>
        <IndexSec
          img={News}
          text="Want to know more about sports news?"
          secLink="news"
          footerLink="contactus"
          footerContent=" Contact Us"
          sec="right"
        />
      </IndexRightSec>
    </IndexWrapper>
  );
};

export default Index;

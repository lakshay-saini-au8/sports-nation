import React from "react";
import { IndexImg, IndexText, IndexBtn, Indexfooter } from "./IndexSec.style";
const IndexSec = ({ img, text, secLink, footerContent, footerLink, sec }) => {
  return (
    <>
      <IndexImg>
        <img src={img} alt="Sports" />
      </IndexImg>
      <IndexText>
        <p>{text}</p>
      </IndexText>
      <IndexBtn sec={sec} to={`/${secLink}`}>
        Click Here
      </IndexBtn>
      <Indexfooter sec={sec} to={`/${footerLink}`}>
        {footerContent}
      </Indexfooter>
    </>
  );
};

export default IndexSec;

import styled from "styled-components";
import { Link } from "react-router-dom";

const whiteDominate = ({ sec }) => (sec === "left" ? "#fff" : "#8a00da");
const voliteDominate = ({ sec }) => (sec === "left" ? "#8a00da" : "#fff");
const footerMobile = ({ sec }) =>
  sec === "left"
    ? ` color: #8a00d8;
        border-bottom: 1px solid #8a00d8;
        bottom: 12px;
        left: 20px;`
    : ` bottom: 12px;
        right: 20px;`;

export const IndexImg = styled.div`
  & img {
    width: 100%;
    @media screen and (max-width: 550px) {
      width: 45%;
    }
  }
`;

export const IndexText = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const IndexBtn = styled(Link)`
  color: ${voliteDominate};
  background: ${whiteDominate};
  border: 1px solid ${whiteDominate};
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    color: ${whiteDominate};
    background: ${voliteDominate};
  }
`;

export const Indexfooter = styled(Link)`
  position: absolute;
  bottom: 15px;
  color: ${whiteDominate};
  border-bottom: 1px solid ${whiteDominate};
  transition: all 0.3s ease;
  @media screen and (max-width: 550px) {
    ${footerMobile}
  }
  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

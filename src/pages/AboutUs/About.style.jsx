import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  @media screen and (max-width: 550px) {
    margin-bottom: 69px;
  }
  & .about-this-website {
    width: 70%;
    text-align: center;
  }
`;

export const AboutHead = styled.div`
  padding: 25px;
  font-size: 45px;
  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;

export const AllAbout = styled.div`
  text-align: center;
  & > p {
    padding: 7px;
  }
`;

import styled from "styled-components";

export const ContactWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 80px);
  flex-direction: column;
  text-align: center;
`;

export const Head = styled.div`
  font-size: 50px;
  font-weight: 400;
  text-align: center;
`;

export const Info = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  text-align: left;
  @media screen and (max-width: 570px) {
    flex-direction: column;
  }
`;

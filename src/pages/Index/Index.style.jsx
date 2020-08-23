import styled, { css } from "styled-components";
const secCommon = css`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  flex-direction: column;
  padding: 100px;
  text-align: center;
`;

const secMobileCommon = css`
  width: 100%;
  height: 50vh;
  padding: 20px;
  padding-top: 41px;
`;

export const IndexWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    position: relative;
  }
`;

export const IndexLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IndexLeftSec = styled.div`
  ${secCommon}
  background-color: #0f0c29;
  @media screen and (max-width: 550px) {
    ${secMobileCommon}
  }
`;

export const IndexRightSec = styled.div`
  ${secCommon}
  color: #0f0c29;
  background-color: #fff;
  @media screen and (max-width: 550px) {
    ${secMobileCommon}
  }
`;

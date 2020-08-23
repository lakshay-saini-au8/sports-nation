import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-height: 100vh;
  background: #0f0c29;
`;

export const CenterLogo = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 50%;
  transform: translate(-50%, -25%);
`;

import styled from "styled-components";

export const ProfileWrapper = styled.div`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.095);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 40px;
  background: #231f4e;
  width: 380px;
  height: 430px;
  text-align: center;
  @media screen and (max-width: 950px) {
    width: 300px;
    height: 430px;
  }
  @media screen and (max-width: 760px) {
    width: 200px;
    height: 350px;
  }
  @media screen and (max-width: 570px) {
    width: 250px;
    height: 350px;
  }
  & > img {
    margin: 20px;
    width: 150px;
    height: 150px;
    border: 4px solid #fff;
    border-radius: 50%;
    @media screen and (max-width: 570px) {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ProfileName = styled.div`
  font-size: 25px;
`;
export const ProfileTitle = styled.div`
  margin: 20px 35px;
  letter-spacing: 2px;
`;

export const ProfileLink = styled.div`
  & img {
    width: 70px;
    height: 70px;
  }
`;

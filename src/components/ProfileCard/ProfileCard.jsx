import React from "react";
import {
  ProfileWrapper,
  ProfileName,
  ProfileTitle,
  ProfileLink,
} from "./ProfileCard.style";
const ProfileCard = ({ img, name, title, link }) => {
  return (
    <ProfileWrapper>
      <img src={img} alt={name} />
      <ProfileName>{name}</ProfileName>
      <ProfileTitle>{title}</ProfileTitle>
      <ProfileLink to={link}>
        <img
          src={require("../../assets/img/icons8-linkedin-480.png")}
          alt="Linkedin-profile"
          className="linkedin"
        />
      </ProfileLink>
    </ProfileWrapper>
  );
};

export default ProfileCard;

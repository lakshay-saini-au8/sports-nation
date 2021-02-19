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
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ProfileLink>
          <img
            src={require("../../assets/img/icons8-linkedin-480.png")}
            alt="Linkedin-profile"
            className="linkedin"
          />
        </ProfileLink>
      </a>
    </ProfileWrapper>
  );
};

export default ProfileCard;

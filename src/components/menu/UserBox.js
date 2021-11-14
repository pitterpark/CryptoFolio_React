import React, { useState, useContext } from "react";
import { Expanded, SizedBox, IconButton, Button } from "../GlobalComponents";
import { LogoutBtn } from "../User/LogoutBtn";
import styled from "styled-components";
import { authService } from "../../firebase_config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const UserBox = () => {
  function changeDisplayName() {
    // updateProfile(authService.currentUser, { displayName: "PitterPark" });
  }

  return (
    <div>
      <UserBtn>
        <FontAwesomeIcon icon="user"></FontAwesomeIcon>
      </UserBtn>
      <UserContainer onClick={changeDisplayName}>
        {authService.currentUser.displayName}
        <SizedBox width="16px" />
        <LogoutBtn />
      </UserContainer>
    </div>
  );
};

const UserBtn = styled(IconButton)`
  display: none;
  ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  max-width: 250px;
  padding: 0px 24px;
  border: 1px solid grey;
  border-radius: 21px;
  background: #2b2a37;
  font-size: 20px;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
import { updateProfile } from "@firebase/auth";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { authService } from "../../firebase_config";
import { logout } from "../../Service/FirebaseAuth";
import { SColumn, SInput, SRow, SSizedBox } from "../GlobalComponents";
import { TitleText, Button } from "../TransComponants";

export const UserModalBox = ({ setShowModal }) => {
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  function changeInput(e) {
    setInput(e.target.value);
  }

  function changeDisplayName(e) {
    updateProfile(authService.currentUser, { displayName: input }).then(() => {
      setShowModal(false);
    });
  }

  return (
    <Container>
      <TitleText>My Account</TitleText>
      <SSizedBox height="32px" />
      <form onSubmit={changeDisplayName}>
        <SRow justify_content="space-around">
          <SInput
            value={input}
            onChange={changeInput}
            placeholder={t("Nickname")}
            minLength={3}
            required
          ></SInput>
          <Button>Change Nickname</Button>
        </SRow>
      </form>
      <SSizedBox height="32px" />
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};

const Container = styled(SColumn)``;

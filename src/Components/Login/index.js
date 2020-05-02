import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  CheckArea,
  SaveAcc,
  Logo,
  LogoArea,
  Social,
  CheckInner,
  BtnArea,
  Forgot,
  ForgotText,
  CreateAcc,
  CreateText,
} from "./styles";
import { Text } from "react-native";
import Button from "~/Components/Button";
import Input from "~/Components/Input";
// import Client from "~/Assets/Images/client.svg";
// import Company from "~/Assets/Images/company.svg";

import Google from "~/Assets/Images/google.svg";
import Face from "~/Assets/Images/face.svg";
import { Principal, Gray } from "~/Config/Global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ logo }) {
  const [check, setCheck] = useState(true);

  function handleCheck() {
    setCheck(!check);
  }
  return (
    <Container>
      <LogoArea>{/* {logo? <Client /> : <Company />} */}</LogoArea>
      <Social>
        <Google />
        <Face />
      </Social>
      <Input icon="person" />
      <Input safe={true} icon="pass" />
      <CheckArea onPress={handleCheck}>
        <CheckInner>
          <MaterialCommunityIcons
            size={20}
            color={Gray}
            name={check ? "checkbox-marked" : "checkbox-blank-outline"}
          />
        </CheckInner>
        <SaveAcc>Lembrar usuário</SaveAcc>
      </CheckArea>
      <BtnArea>
        <Button title="Acessar" color={Principal} textcolor="#fff" />
      </BtnArea>
      <Forgot>
        <ForgotText>esqueceu a senha?</ForgotText>
      </Forgot>
      <CreateAcc>
        <CreateText>
          Ainda não tem conta?{" "}
          <Text style={{ fontWeight: "bold" }}>Criar usuário</Text>
        </CreateText>
      </CreateAcc>
    </Container>
  );
}

Login.propTypes = {
  logo: PropTypes.string,
};

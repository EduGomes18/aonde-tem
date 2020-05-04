import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-navigation-hooks";

import { signInRequest } from "~/Store/modules/login/actions";

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
import Client from "~/Assets/Images/client.svg";
import Company from "~/Assets/Images/empresa.svg";

import Google from "~/Assets/Images/google.svg";
import Face from "~/Assets/Images/face.svg";
import { Principal, Gray } from "~/Config/Global";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({ logo }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  const passwordRef = useRef();

  const [check, setCheck] = useState(true);

  function handleCheck() {
    setCheck(!check);
  }
  return (
    <Container>
      <LogoArea>{logo ? <Client /> : <Company />}</LogoArea>
      <Social>
        <Google />
        <Face />
      </Social>
      <Input
        placeholder="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        value={email}
        onChangeText={setEmail}
        icon="person"
      />
      <Input
        placeholder="senha"
        ref={passwordRef}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
        value={password}
        onChangeText={setPassword}
        safe={true}
        icon="pass"
      />
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

      <Button
        onPress={handleSubmit}
        style={{ margin: 22 }}
        title="Acessar"
        color={Principal}
        textcolor="#fff"
      />

      <Forgot>
        <ForgotText>esqueceu a senha?</ForgotText>
      </Forgot>
      <CreateAcc
        onPress={() => {
          navigate("Create");
        }}
      >
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

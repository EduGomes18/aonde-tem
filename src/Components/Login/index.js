import React from "react";
import PropTypes from "prop-types";
import { Container, Logo, Social, Google, Face } from "./styles";
import Input from "~/Components/Input";
import client from "~/Assets/Images/Client.png";
import company from "~/Assets/Images/empresa.png";
import face from "~/Assets/Images/face.png";
import google from "~/Assets/Images/google.png";

export default function Login({ logo }) {
  return (
    <Container>
      <Logo source={logo === "client" ? client : company} />
      <Social>
        <Google source={google} />
        <Face source={face} />
      </Social>
      <Input icon="person" />
      <Input icon="pass" />
    </Container>
  );
}

Login.propTypes = {
  logo: PropTypes.string,
};

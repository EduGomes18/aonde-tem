import React from "react";
import PropTypes from "prop-types";
import { Container, Logo, Title } from "./styles";
import Input from "~/Components/Input";
import client from "~/Assets/Images/Client.png";

export default function Login({ logo }) {
  return (
    <Container>
      <Logo source={client} />
      <Input />
    </Container>
  );
}

Login.propTypes = {
  logo: PropTypes.string,
};

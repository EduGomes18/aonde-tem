import React from "react";

import { Container, Logo, Title } from "./styles";

export default function Login({ logo }) {
  return (
    <Container>
      <Title>TESTE</Title>
      <Logo source={{ uri: "~/assets/images" + logo + ".svg" }} />
    </Container>
  );
}

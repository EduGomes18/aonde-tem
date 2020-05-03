import React from "react";
import { View } from "react-native";

import { Container, Header, BackButton, Points, Pts, Desc } from "./styles";

export default function CompanyStore() {
  return (
    <Container>
      <Header>
        <BackButton></BackButton>
        <Points>
          <Pts>₳ 20,00</Pts>
          <Desc>seus pontos</Desc>
        </Points>
      </Header>
    </Container>
  );
}

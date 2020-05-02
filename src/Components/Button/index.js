import React from "react";

import { Container, Title } from "./styles";

export default function Button({ title, color, textcolor }) {
  return (
    <Container color={color}>
      <Title textcolor={textcolor}>{title}</Title>
    </Container>
  );
}

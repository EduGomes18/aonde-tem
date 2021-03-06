import React from "react";

import { Container, Title } from "./styles";

export default function Button({ title, color, textcolor, size, ...rest }) {
  return (
    <Container {...rest} size={size} color={color}>
      <Title size={size} textcolor={textcolor}>
        {title}
      </Title>
    </Container>
  );
}

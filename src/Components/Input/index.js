import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, TInput, BoxShadow } from "./styles";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 22 * elevation,
  };
}

export default function Input() {
  return (
    <BoxShadow>
      <Container style={styles.shadow}>
        <TInput />
      </Container>
    </BoxShadow>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
});

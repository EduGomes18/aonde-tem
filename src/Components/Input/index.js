import React from "react";
import { View, StyleSheet } from "react-native";

import { Container, TInput, BoxShadow } from "./styles";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.5,
    shadowRadius: 13.97 * elevation,
  };
}

export default function Input() {
  return (
    // <BoxShadow>
    <Container style={styles.shadow}>
      <TInput />
    </Container>
    // </BoxShadow>
  );
}

const styles = StyleSheet.create({
  shadow: {
    // shadowColor: "rgba(0,0,0,0.25)",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
    ...elevationShadowStyle(10),
    backgroundColor: "white", // It'll look weird without a background color!
  },
});

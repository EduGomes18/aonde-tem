import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Container, TInput, Icon } from "./styles";
import person from "~/Assets/Images/person.png";
import pass from "~/Assets/Images/pass.png";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 22 * elevation,
  };
}

export default function Input({ icon }) {
  return (
    <Container style={styles.shadow}>
      <Icon source={icon === "person" ? person : pass} />
      <TInput />
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
});

Input.propTypes = {
  icon: PropTypes.string,
};

import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Container, TInput, Icon } from "./styles";
import Person from "~/Assets/Images/person.svg";
import Pass from "~/Assets/Images/pass.svg";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 22 * elevation,
  };
}

export default function Input({ icon, safe }) {
  return (
    <Container style={styles.shadow}>
      <Icon>{icon === "person" ? <Person /> : <Pass />}</Icon>

      <TInput secureTextEntry={safe} />
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
  safe: PropTypes.bool,
};

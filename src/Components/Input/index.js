import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Container, TInput, Icon } from "./styles";
import Person from "~/Assets/Images/person.svg";
import Pass from "~/Assets/Images/pass.svg";
import Search from "~/Assets/Images/search.svg";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 22 * elevation,
  };
}

export default function Input({ icon, safe, placeholder }) {
  const Ic = function () {
    if (icon === "pass") {
      return <Pass />;
    }
    if (icon === "person") {
      return <Person />;
    }
    if (icon === "search") {
      return <Search style={{ marginLeft: 10 }} />;
    }
  };
  const result = <Ic />;
  return (
    <Container style={styles.shadow}>
      <Icon>{result}</Icon>

      <TInput placeholder={placeholder} secureTextEntry={safe} />
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(10),
    backgroundColor: "#fff",
  },
});

Input.propTypes = {
  icon: PropTypes.string,
  safe: PropTypes.bool,
};

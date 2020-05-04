import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Container, TInput, Icon } from "./styles";
import Person from "~/Assets/Images/person.svg";
import Pass from "~/Assets/Images/pass.svg";
import Insta from "~/Assets/Images/insta.svg";
import Face from "~/Assets/Images/face2.svg";
import Whats from "~/Assets/Images/whats2.svg";
import Smarth from "~/Assets/Images/smarth.svg";
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

export default function Input({ icon, safe, placeholder, sm, ...rest }) {
  const Ic = function () {
    if (icon === "pass") {
      return <Pass />;
    }
    if (icon === "person") {
      return <Person />;
    }
    if (icon === "insta") {
      return <Insta />;
    }
    if (icon === "face") {
      return <Face />;
    }
    if (icon === "whats") {
      return <Whats />;
    }
    if (icon === "smarth") {
      return <Smarth />;
    }
    if (icon === "search") {
      return <Search style={{ marginLeft: 10 }} />;
    }

    if (icon) {
      return icon;
    }

    if (!icon) {
      return <View />;
    }
  };
  const result = <Ic />;
  return (
    <Container sm={sm} style={styles.shadow}>
      <Icon>{result}</Icon>

      <TInput {...rest} placeholder={placeholder} secureTextEntry={safe} />
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

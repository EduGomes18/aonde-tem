import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import { Container } from "./styles";
import Input from "~/Components/Input";

const Contact = () => {
  return (
    <Container>
      <KeyboardAwareScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input sm={true} icon="insta" />
        <Input sm={true} icon="face" />
        <Input sm={true} icon="whats" />
        <Input sm={true} icon="smarth" />
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Contact;

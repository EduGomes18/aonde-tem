import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

import { Container, SmInputs } from "./styles";
import Input from "~/Components/Input";

const Address = () => {
  return (
    <Container>
      <KeyboardAwareScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingBottom: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input sm={true} placeholder="cidade" />
        <Input sm={true} placeholder="CEP" />
        <Input sm={true} placeholder="bairo" />
        <Input sm={true} placeholder="rua" />
        <Input sm={true} placeholder="numero" />
        <Input sm={true} placeholder="complemento" />
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Address;

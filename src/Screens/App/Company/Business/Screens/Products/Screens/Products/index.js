import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Plus from "~/Assets/Images/Plus.svg";
import Brush from "~/Assets/Icons/brush.svg";
import Nail from "~/Assets/Icons/nail.svg";
import Shampoo from "~/Assets/Icons/shampoo.svg";
import Hydro from "~/Assets/Icons/Hydro.svg";
import Hydro2 from "~/Assets/Icons/Hydro2.svg";
import GreenPlus from "~/Assets/Icons/GreenPlus.svg";

import elevationShadowStyle from "~/Components/ShadowFunc";

import {
  Container,
  PlusBtn,
  PlusTitle,
  InputContainer,
  IconInput,
  BtnText,
  BtnInner,
} from "./styles";

const Products = () => {
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
        <InputContainer style={styles.shadow}>
          <IconInput>
            <Shampoo />
          </IconInput>
          <BtnInner>
            <BtnText>Shampoo</BtnText>
          </BtnInner>
        </InputContainer>

        <PlusBtn>
          <Plus />
          <PlusTitle>Adicionar categoria</PlusTitle>
        </PlusBtn>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Products;

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(10),
    backgroundColor: "#fff",
  },
});

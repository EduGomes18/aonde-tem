import React from "react";
import { StyleSheet } from "react-native";
import { Gray, Principal } from "~/Config/Global";
import { MaterialIcons } from "@expo/vector-icons";

import ped from "~/Assets/Images/ped.jpg";
import brush from "~/Assets/Images/brush.jpg";
import man from "~/Assets/Images/man.jpg";

import elevationShadowStyle from "~/Components/ShadowFunc";

import Plus from "~/Assets/Images/Plus.svg";
import {
  Container,
  PlusBtn,
  PlusTitle,
  CardInner,
  Card,
  CardIcons,
  CardImage,
  CardTitle,
  CardPrice,
  Serv,
  IconBtn,
} from "./styles";

const Services = () => {
  return (
    <Container>
      <Serv>
        <Card style={styles.shadow}>
          <CardImage source={ped} />
          <CardInner>
            <CardTitle>Pedicure</CardTitle>
            <CardPrice>R$ 40,00</CardPrice>
          </CardInner>

          <CardIcons>
            <IconBtn>
              <MaterialIcons name="edit" color={Gray} size={32} />
            </IconBtn>
            <IconBtn>
              <MaterialIcons name="delete" color={Principal} size={32} />
            </IconBtn>
          </CardIcons>
        </Card>
      </Serv>
      <PlusBtn>
        <Plus />
        <PlusTitle>Adicionar categoria</PlusTitle>
      </PlusBtn>
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(12),
    backgroundColor: "#fff",
  },
  shadowArea: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
});

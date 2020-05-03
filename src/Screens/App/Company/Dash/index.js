import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import avatar from "~/Assets/Images/pic.jpg";
import { Gray } from "~/Config/Global";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import Plus from "~/Assets/Images/Plus.svg";

import elevationShadowStyle from "~/Components/ShadowFunc";

import { Container } from "~/Config/Global";
import {
  Content,
  Header,
  HeaderInner,
  Title,
  Points,
  PointsDesc,
  AvatarArea,
  AvtCircle,
  Avatar,
  BTitle,
  Card,
  Inner,
  Business,
  CardDesc,
  BInner,
} from "./styles";
export default function Dash() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderInner>
          <Title>Bem vinda, Maria!</Title>
          <Points>₳ 0,00</Points>
          <PointsDesc>seus pontos</PointsDesc>
        </HeaderInner>
      </Header>
      <Content>
        <AvatarArea>
          <AvtCircle style={styles.shadow}>
            <Avatar source={avatar}></Avatar>
          </AvtCircle>
        </AvatarArea>
        <Inner>
          <Business>
            <BInner>
              <FontAwesome5 name="briefcase" color={Gray} size={14} />
              <BTitle>seu negócio</BTitle>
            </BInner>

            <Card
              onPress={() => {
                navigate("Business");
              }}
              style={styles.shadow}
            >
              <Plus />
              <CardDesc>adicionar negócio</CardDesc>
            </Card>
          </Business>
          <Business>
            <BInner>
              <FontAwesome5 name="percentage" color={Gray} size={14} />
              <BTitle>suas promoções</BTitle>
            </BInner>
            <Card
              onPress={() => {
                navigate("Promo");
              }}
              style={styles.shadow}
            >
              <Plus />
              <CardDesc>adicionar promoção</CardDesc>
            </Card>
          </Business>
          <Business>
            <BInner>
              <FontAwesome size={14} color={Gray} name="calendar" />
              <BTitle>sua agenda</BTitle>
            </BInner>
            <Card
              onPress={() => {
                navigate("Schedule");
              }}
              style={styles.shadow}
            >
              <Plus />
              <CardDesc>adicionar horário</CardDesc>
            </Card>
          </Business>
        </Inner>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(22),
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

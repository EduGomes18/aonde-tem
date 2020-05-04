import React from "react";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "react-navigation-hooks";
import { signOut } from "~/Store/modules/login/actions";
import avatar from "~/Assets/Images/pic.jpg";
import { Gray, White } from "~/Config/Global";
import { FontAwesome, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

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
  LogoutBtn,
  LogoutText,
} from "./styles";
export default function Dash() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Header>
        <HeaderInner>
          <Title>Bem vinda, Maria!</Title>
          <Points>₳ 0,00</Points>
          <PointsDesc>seus pontos</PointsDesc>
        </HeaderInner>
        <LogoutBtn onPress={handleLogout}>
          <SimpleLineIcons name="logout" size={22} color={White} />
          <LogoutText>logout</LogoutText>
        </LogoutBtn>
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

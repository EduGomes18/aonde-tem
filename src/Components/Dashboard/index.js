import React from "react";
import { Text, StyleSheet } from "react-native";
import avatar from "~/Assets/Images/avatar.jpg";
import ChatIcon from "~/Assets/Images/chat.svg";
import bikebg from "~/Assets/Images/bike.jpg";
import {
  Container,
  Area,
  Header,
  Welcome,
  Name,
  Points,
  PtDesc,
  HeaderInner,
  AvatarArea,
  AvtCircle,
  Avatar,
  Chat,
} from "./styles";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "rgba(0,0,0,0.25)",
    shadowOffset: { width: 0, height: 10 * elevation },
    shadowOpacity: 0.2,
    shadowRadius: 22 * elevation,
  };
}

export default function Dashboard() {
  return (
    <Container>
      <Header source={bikebg}>
        <AvatarArea>
          <AvtCircle style={styles.shadow}>
            <Avatar source={avatar}></Avatar>
          </AvtCircle>
        </AvatarArea>
        <HeaderInner>
          <Welcome>
            Bem vinda, <Name>Luiza!</Name>
          </Welcome>
          <Points>₳ 20,00</Points>
          <PtDesc>seus pontos</PtDesc>
        </HeaderInner>
        <Chat>
          <ChatIcon />
        </Chat>
      </Header>
      <Area></Area>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
});

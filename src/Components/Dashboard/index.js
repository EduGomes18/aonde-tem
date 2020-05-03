import React, { useState } from "react";
import { Gray } from "~/Config/Global";
import { Text, StyleSheet, FlatList } from "react-native";
import avatar from "~/Assets/Images/avatar.jpg";
import ChatIcon from "~/Assets/Images/chat.svg";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "react-navigation-hooks";
import { LightGray } from "~/Config/Global";

import bikebg from "~/Assets/Images/bike.jpg";

import elevationShadowStyle from "~/Components/ShadowFunc";

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
  HeaderBg,
  HeaderShade,
  Content,
  Back,
  BackButton,
  ChatArea,
} from "./styles";

export default function Dashboard({ back, children, route }) {
  const { navigate } = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderBg source={bikebg} />
        <HeaderShade />

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
        <ChatArea>
          <Chat>
            <ChatIcon />
          </Chat>
          {back ? (
            <BackButton
              onPress={() => {
                navigate(route);
              }}
            >
              <Entypo size={22} color={LightGray} name="chevron-left" />
              <Back>Voltar</Back>
            </BackButton>
          ) : (
            <></>
          )}
        </ChatArea>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
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

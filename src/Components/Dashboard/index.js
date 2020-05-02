import React, { useState } from "react";
import { Gray } from "~/Config/Global";
import { Text, StyleSheet, FlatList } from "react-native";
import avatar from "~/Assets/Images/avatar.jpg";
import ChatIcon from "~/Assets/Images/chat.svg";
import Seta from "~/Assets/Images/seta.svg";
import Stroke from "~/Assets/Images/stroke.svg";
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
  Region,
  RegTitle,
  Content,
  RegClosed,
  PromoCard,
  FlatContainer,
} from "./styles";

export default function Dashboard({ children }) {
  const [content, showContent] = useState(false);

  const data = [
    { id: "00", name: "Relâmpago McQueen" },
    { id: "01", name: "Agente Tom Mate" },
    { id: "02", name: "Doc Hudson" },
    { id: "03", name: "Cruz Ramirez" },
  ];

  function handleDrawer() {
    showContent(!content);
  }
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
        <Chat>
          <ChatIcon />
        </Chat>
      </Header>
      <Content>
        {children}
        <Area area={content} style={styles.shadowArea}>
          {content ? (
            <FlatContainer>
              <Region onPress={handleDrawer}>
                <Seta />
                <RegTitle>Ofertas na sua região</RegTitle>
              </Region>
              <FlatList
                style={{
                  width: "100%",
                }}
                contentContainerStyle={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <PromoCard>
                      <Text>{item.name}</Text>
                    </PromoCard>
                  );
                }}
              />
            </FlatContainer>
          ) : (
            <RegClosed onPress={handleDrawer}>
              <Stroke />
            </RegClosed>
          )}
        </Area>
      </Content>
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

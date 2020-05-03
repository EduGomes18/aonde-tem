import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation, useNavigationState } from "react-navigation-hooks";
import avatar from "~/Assets/Images/mask.png";
import Routes from "./Routes";
import {
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Whats from "~/Assets/Images/whats.svg";
import bg from "~/Assets/Images/bg-sal.jpg";
import elevationShadowStyle from "~/Components/ShadowFunc";

import {
  Container,
  Header,
  BackButton,
  Points,
  Pts,
  Desc,
  Content,
  HeaderBg,
  Store,
  StoreName,
  StoreTime,
  StoreInner,
  StoreInfo,
  AvatarArea,
  AvtCircle,
  Avatar,
  SocialArea,
  WhatsBtn,
  WhatsTxt,
  ScIcon,
} from "./styles";

export default function CompanyStore() {
  const { routeName } = useNavigationState();

  return (
    <Container>
      <Header>
        <HeaderBg resizeMode="cover" source={bg} />
        <BackButton>
          <Entypo size={42} color="#F15F7E" name="chevron-left" />
        </BackButton>
        <Points>
          <Pts>₳ 20,00</Pts>
          <Desc>seus pontos</Desc>
        </Points>
      </Header>
      <Content>
        <Store>
          <StoreInfo>
            <StoreName>Maria Bonita Salao de Beleza</StoreName>
            <StoreInner>
              <MaterialCommunityIcons
                name="clock-outline"
                size={18}
                style={{ marginRight: 2 }}
                color="#c4c4c4"
              />
              <StoreTime>9:00 - 18:30</StoreTime>
            </StoreInner>
            <StoreInner>
              <Ionicons
                name="md-pin"
                size={18}
                style={{ marginRight: 6, marginLeft: 2 }}
                color="#c4c4c4"
              />
              <StoreTime>300m - R. Anita Garibaldi, 200</StoreTime>
            </StoreInner>
          </StoreInfo>
          <AvatarArea>
            <AvtCircle style={styles.shadow}>
              <Avatar source={avatar}></Avatar>
            </AvtCircle>
          </AvatarArea>
        </Store>
        <SocialArea>
          <WhatsBtn>
            <Whats />
            <WhatsTxt>Enviar mensagem</WhatsTxt>
          </WhatsBtn>
          <ScIcon>
            <AvtCircle style={styles.shadow}>
              <FontAwesome name="facebook" color="#F15F7E" size={20} />
            </AvtCircle>
          </ScIcon>
          <ScIcon>
            <AvtCircle style={styles.shadow}>
              <FontAwesome name="instagram" color="#F15F7E" size={20} />
            </AvtCircle>
          </ScIcon>
          <ScIcon>
            <AvtCircle style={styles.shadow}>
              <FontAwesome name="whatsapp" color="#F15F7E" size={20} />
            </AvtCircle>
          </ScIcon>
        </SocialArea>
        <Routes />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(8),
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

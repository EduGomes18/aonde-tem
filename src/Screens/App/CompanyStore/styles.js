import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: flex-start;
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 20%;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
`;

export const Points = styled.View`
  width: 30%;
  padding: 12px 6px;
  position: absolute;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
  right: 10%;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background: #fbd6de;
`;

export const Pts = styled.Text`
  font-size: 24px;
  color: #737373;
  font-weight: bold;
`;

export const Desc = styled.Text`
  font-size: 10px;
  color: #737373;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 10;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
`;

export const HeaderBg = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 160px;
  bottom: 0;
  margin-bottom: -22px;
`;

export const Store = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 5%;
`;

export const StoreName = styled.Text`
  color: #787878;
  font-weight: bold;
  margin: 22px 0;
  font-size: 18px;
`;

export const StoreTime = styled.Text`
  color: #787878;
  font-size: 12px;
`;

export const StoreInner = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: 4px 0;
`;
export const StoreInfo = styled.View`
  width: 80%;
`;

export const AvatarArea = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  right: 0;
`;

export const AvtCircle = styled.View`
  width: 80%;
  height: 80%;
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) /
    2 +
  "px"};

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 90%;
  height: 90%;
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) /
    2 +
  "px"};
`;

export const SocialArea = styled.View`
  width: 100%;
  margin: 32px 0 0 0;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 5%;
`;

export const WhatsBtn = styled.TouchableOpacity`
  width: 54%;
  padding: 8px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #73ddb1;
  border-radius: 22px;
`;
export const WhatsTxt = styled.Text`
  font-size: 14px;
  margin-left: 6px;
  font-weight: bold;
  color: #fff;
`;

export const ScIcon = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

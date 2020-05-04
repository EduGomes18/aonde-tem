import styled from "styled-components/native";
import { Principal, Gray } from "~/Config/Global";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Container = styled.View`
  width: 100%;
  padding: 22px;
  justify-content: center;
  align-items: center;
`;

export const PlusBtn = styled.TouchableOpacity`
  width: 100%;
  margin: 12px;
  justify-content: center;
  align-items: center;
`;

export const PlusTitle = styled.Text`
  font-size: 14px;
  margin-top: 12px;
  color: ${Principal};
`;

export const Serv = styled.View`
  width: 100%;
`;

export const Card = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height / 8 + "px"};
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-around;
  padding: 6px;
  margin: 12px 0;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  color: ${Gray};
  font-weight: bold;
`;

export const CardPrice = styled.Text`
  font-size: 16px;
  color: ${Gray};
`;

export const CardImage = styled.Image`
  width: 25%;
  border-radius: 8px;
`;

export const CardInner = styled.View`
  width: 48%;
  justify-content: center;
  align-items: center;
`;
export const CardIcons = styled.View`
  width: 25%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const IconBtn = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

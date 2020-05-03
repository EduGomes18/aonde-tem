import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

import { Gray, LightGray } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  padding: 0 5%;
`;

export const Header = styled.View`
  flex-direction: row;
  margin: 22px 0;
  width: 100%;
  align-items: center;
`;

export const ServPic = styled.Image`
  border-radius: 1000px;
`;

export const ServCircle = styled.View`
  width: ${Dimensions.get("window").width / 4 + "px"};
  height: ${Dimensions.get("window").width / 4 + "px"};
  border-radius: 1000px;
  justify-content: center;
  align-items: center;
`;

export const ServArea = styled.View`
  width: 35%;
`;

export const ServTitle = styled.Text`
  font-size: 36px;
  color: ${Gray};
  font-weight: bold;
`;

export const Times = styled.View`
  flex: 1;
  padding-bottom: ${Dimensions.get("window").height / 12 + "px"};
`;

export const TimeInner = styled.View`
  margin: 22px 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const TimeTitle = styled.Text`
  color: ${Gray};
  font-weight: bold;
`;

export const Stroke = styled.View`
  border-bottom-width: 2px;
  border-color: ${Gray};
  width: 35%;
  height: 6px;
  margin: 0 6px;
`;

export const Time = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width / 6 + "px"};
  height: ${Dimensions.get("window").width / 12 + "px"};
  background: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
  border-radius: 12px;
`;

export const TimeHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

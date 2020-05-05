import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

import { Gray, Black, White, LightGray } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  padding-left: 2%;
  padding-right: 2%;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin: 22px;
`;

export const Title = styled.Text`
  color: ${Gray};
  font-size: 14px;
  margin-top: -18px;
  margin-left: 18px;
  font-weight: bold;
`;

export const AvtArea = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const AvtInner = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const AvtCircle = styled.View`
  width: 80%;
  height: 80%;
  border-radius: 10000px;

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

export const Theme = styled.View`
  width: 58%;
`;

export const ThemeInner = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
`;

export const ThemeTitle = styled.Text`
  font-size: 12px;
  margin-bottom: 6px;
  margin-left: 12px;
  color: ${LightGray};
`;

export const Themes = styled.View`
  width: ${Dimensions.get("window").width / 6 + "px"};
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  border-radius: 22px;
  background: ${(props) => props.color};
`;

export const Rect = styled.View`
  width: 80%;
  height: 8px;
  margin: 2px 0;
  border-radius: 12px;
  background: ${(props) => props.color};
`;

export const CreateArea = styled.View`
  width: 100%;
  margin: 22px 0;
  padding: 6px;
`;

export const Bussiness = styled.View`
  width: 100%;
`;

export const BussIner = styled.View`
  width: 100%;
  height: 52px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const End = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const ErrorMsg = styled.Text`
  font-size: 12px;
  color: #d60000;
`;

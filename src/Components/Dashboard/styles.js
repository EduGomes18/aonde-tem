import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { Principal, Gray, Black, White } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 160px;
  flex-direction: row;
  background: ${White};
`;

export const HeaderShade = styled.View`
  bottom: 0;
  width: 100%;
  height: 34%;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
  position: absolute;
  background: ${White};
`;

export const HeaderBg = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const HeaderInner = styled.View`
  width: 36%;
  height: 100%;
  padding-top: 5%;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AvatarArea = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
  height: 100%;
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

export const Points = styled.Text`
  font-size: 20px;
  color: ${Black};
  font-weight: bold;
`;

export const PtDesc = styled.Text`
  font-size: 12px;
  color: ${Gray};
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: ${Black};
  font-weight: bold;
`;

export const Name = styled.Text`
  color: ${Principal};
  font-weight: bold;
`;

export const Chat = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  padding-top: 6%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

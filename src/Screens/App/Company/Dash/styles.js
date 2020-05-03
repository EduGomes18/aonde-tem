import styled from "styled-components/native";

import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { Principal, Gray, Black, White, LightGray } from "~/Config/Global";

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

export const Header = styled.View`
  height: 180px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  background: #f15f7e;
`;

export const AvatarArea = styled.View`
  width: ${Dimensions.get("window").width / 2.2 + "px"};
  height: ${Dimensions.get("window").width / 2.2 + "px"};
  position: absolute;
  left: 5%;
  margin-top: -102px;
  z-index: 9999;
  top: 0;
`;

export const HeaderInner = styled.View`
  width: 55%;
  height: 80%;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${White};
  font-size: 14px;
  font-weight: bold;
`;
export const Points = styled.Text`
  font-size: 24px;
  color: ${White};
`;

export const PointsDesc = styled.Text`
  font-size: 12px;
  color: ${White};
`;

export const Content = styled.View`
  width: 100%;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  background: #fff;
  margin-top: -52px;
  padding-top: 52px;
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
  z-index: 1;
`;

export const Business = styled.View`
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 22px 0;
`;

export const BTitle = styled.Text`
  color: ${Gray};
  margin-left: 6px;
`;

export const Card = styled.TouchableOpacity`
  width: 80%;
  padding: 22px;
  border-radius: 22px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: ${White};
`;

export const Inner = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardDesc = styled.Text`
  color: ${Principal};
  text-align: center;
`;
export const BInner = styled.View`
  width: 100%;
  height: 28px;
  flex-direction: row;
  align-items: center;
`;

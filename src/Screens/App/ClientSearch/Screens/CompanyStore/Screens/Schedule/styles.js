import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { Principal, Gray, Black, White, LightGray } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  padding: 10% 5%;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 6px 12px;
  color: ${LightGray};
`;

export const RateCard = styled.View`
  width: ${Dimensions.get("window").width / 2 + "px"};
  height: ${Dimensions.get("window").width / 3 + "px"};
  border-radius: 12px;
  padding: 4px;
  margin: 12px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const RateArea = styled.View`
  width: 100%;
`;

export const DescribeText = styled.Text`
  font-size: 14px;
  width: 90%;
  margin-left: 6px;
  height: 40px;
  color: ${Black};
`;

export const DateDesc = styled.Text`
  font-size: 12px;
  color: ${LightGray};
`;

export const RateAvatar = styled.ImageBackground`
  width: 60px;
  height: 60px;
`;

export const RateStars = styled.View``;

export const RateIcons = styled.View`
  flex-direction: row;
`;

export const CardInner = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  height: 70px;
  align-items: center;
`;

export const PromoCard = styled.View`
  width: ${Dimensions.get("window").width / 1.8 + "px"};
  height: ${Dimensions.get("window").width / 4.2 + "px"};
  border-radius: 12px;
  margin: 12px;
  background: ${White};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PromoArea = styled.View`
  width: 100%;
`;

export const PromoPoints = styled.Text`
  transform: rotate(-25deg);
  margin-right: 6px;
  margin-top: 6px;
  font-size: 22px;
  color: ${Principal};
`;

export const PromoDesc = styled.Text`
  font-size: 14px;
  width: 40%;
  margin-left: 12px;
  margin-bottom: 6px;
  color: ${Black};
`;

export const ServicesArea = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width / 3 + "px"};
  height: ${Dimensions.get("window").width / 3 + "px"};
  justify-content: space-around;
  align-items: center;
`;

export const ServicesCircle = styled.View`
  width: ${Dimensions.get("window").width / 4 + "px"};
  height: ${Dimensions.get("window").width / 4 + "px"};
  border-radius: 10000px;
  justify-content: center;
  align-items: center;
`;

export const ServPic = styled.Image`
  border-radius: 1000px;
`;

export const ServDesc = styled.Text`
  font-size: 14px;
  color: ${LightGray};
`;

export const Services = styled.View`
  width: 100%;
`;

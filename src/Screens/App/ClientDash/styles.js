import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";
import { Principal, Gray, Black, White } from "~/Config/Global";

export const DescribeArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`;

export const DescribeText = styled.Text`
  font-size: 14px;
  margin-left: 6px;
  color: ${Gray};
`;

export const HistoryCard = styled.View`
  width: ${Dimensions.get("window").width / 2.5 + "px"};
  height: ${Dimensions.get("window").width / 3 + "px"};
  border-radius: 22px;
  margin: 12px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const HistList = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 0 38px;
  height: 46px;
  margin: 16px 0;
  flex-direction: row;
  background: #ffffff;
  border-radius: 41px;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchText = styled.Text`
  font-size: 14px;
  width: 80%;
  margin-left: 10px;
  text-align: center;
  color: #7b7b7b;
`;

export const Area = styled.View`
  width: 100%;
  border-top-right-radius: 26px;
  border-top-left-radius: 26px;
  background: #fff;
  position: ${(props) => (props.content ? "relative" : "absolute")};
  bottom: 0;
  justify-content: flex-start;
  z-index: 99;
  align-items: center;
`;

export const FlatContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const Region = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 22px 0;
  padding-bottom: 6px;
  border-bottom-color: #f2f2f2;
  border-bottom-width: 1.6px;
  border-style: solid;
`;
export const RegClosed = styled.TouchableOpacity`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin: 22px 0;
  padding: 22px;
`;

export const RegTitle = styled.Text`
  color: ${Gray};
  font-size: 14px;
  margin-top: 8px;
`;

export const PromoCard = styled.View`
  width: ${Dimensions.get("window").width / 2 + "px"};
  height: 80px;
  margin: 6px 0;
  border-radius: 22px;
  background: ${Gray};
  justify-content: center;
  align-items: center;
`;

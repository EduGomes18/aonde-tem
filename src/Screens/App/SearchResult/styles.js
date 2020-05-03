import styled from "styled-components/native";
import { LightGray, Gray } from "~/Config/Global";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Container = styled.View``;

export const SearchBar = styled.View`
  width: 100%;
  padding: 0 10% 0 10%;
  justify-content: center;
  flex-direction: row;
`;
export const FilterIcon = styled.TouchableOpacity`
  width: 16%;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 90%;
`;
export const FiText = styled.Text`
  font-size: 12px;
  color: ${LightGray};
`;

export const Local = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;
export const LocalInner = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LocalText = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  color: ${LightGray};
`;

export const Recent = styled.View`
  width: 100%;
  padding: 0 5%;
  height: 80%;
  justify-content: space-around;
  align-items: center;
`;

export const RecTitle = styled.Text`
  width: 100%;
  margin-top: 16px;
  color: ${LightGray};
  font-size: 14px;
  font-weight: bold;
`;

export const BtnClosed = styled.TouchableOpacity`
  width: ${(props) => (props.size ? "40%" : "80%")};
  background: ${(props) => props.color};
  padding: ${(props) => (props.size ? "8px 0" : "2px 0")};
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const DescribeText = styled.Text`
  font-size: 14px;
  margin-left: 6px;
  color: ${Gray};
`;

export const HistoryCard = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width / 2.5 + "px"};
  height: ${Dimensions.get("window").width / 3 + "px"};
  border-radius: 22px;
  margin: 12px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const HistList = styled.View`
  flex: 1;
`;

export const DescArea = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 6px;
  align-items: center;
`;

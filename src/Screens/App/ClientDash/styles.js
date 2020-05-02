import styled from "styled-components/native";

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

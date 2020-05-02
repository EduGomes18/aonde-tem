import styled from "styled-components/native";

export const Container = styled.View``;

export const SearchBar = styled.View`
  width: 100%;
  padding: 5% 10% 0 10%;
  justify-content: center;
  flex-direction: row;
`;
export const FilterIcon = styled.TouchableOpacity`
  width: 16%;
  padding-top: 12px;
  justify-content: center;
  align-items: center;
`;
export const InputArea = styled.View`
  width: 76%;
`;
export const FiText = styled.Text`
  font-size: 12px;
  color: #c4c4c4;
`;

export const Local = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 12px;
`;

export const LocalText = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  color: #c4c4c4;
`;

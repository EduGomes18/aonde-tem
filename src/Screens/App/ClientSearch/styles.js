import styled from "styled-components/native";
import { LightGray } from "~/Config/Global";

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
  color: ${LightGray};
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
  color: ${LightGray};
`;

export const Recent = styled.View`
  width: 100%;
  padding: 0 5%;
  height: 30%;
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

export const RecDescs = styled.Text`
  font-size: 14px;
  margin-left: 6px;
  color: ${LightGray};
`;

export const RecInner = styled.View`
  width: 100%;
  padding: 6px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Filters = styled.View`
  width: 100%;
  justify-content: center;
  padding: 2% 5%;
  align-items: center;
`;

export const Kms = styled.Text`
  width: 100%;
  text-align: right;
  padding: 2% 5%;
  color: #ab223f;
  font-size: 14px;
  font-weight: bold;
`;

export const CashArea = styled.View`
  width: 100%;
  padding: 0 2%;
  margin-top: 12px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Cash = styled.TouchableOpacity`
  background: ${(props) => props.color};
  width: 22%;
  padding: 12px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;

export const CashVal = styled.Text`
  color: #ffff;
  font-size: 18px;
`;

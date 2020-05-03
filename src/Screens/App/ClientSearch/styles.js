import styled from "styled-components/native";
import { LightGray } from "~/Config/Global";

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
export const FilterTitle = styled.Text`
  width: 100%;
  padding: 0 5%;
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
  margin-top: 26px;
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

export const ClosedArea = styled.View`
  width: 100%;
  padding: 12px 0;
  flex-direction: row;
  margin-top: 22px;
  justify-content: space-around;
  align-items: center;
`;

export const BtnClosed = styled.TouchableOpacity`
  width: ${(props) => (props.size ? "40%" : "30%")};
  background: ${(props) => props.color};
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

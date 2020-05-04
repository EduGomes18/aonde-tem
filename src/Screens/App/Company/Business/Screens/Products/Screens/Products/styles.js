import styled from "styled-components/native";
import { Principal, Gray } from "~/Config/Global";

export const Container = styled.View`
  width: 100%;
  padding: 22px;
  justify-content: center;
  align-items: center;
`;

export const PlusBtn = styled.TouchableOpacity`
  width: 100%;
  margin: 12px 0;
  justify-content: center;
  align-items: center;
`;

export const PlusTitle = styled.Text`
  font-size: 14px;
  margin-top: 12px;
  color: ${Principal};
`;

export const InputContainer = styled.TouchableOpacity`
  padding: 0 38px;
  height: 46px;
  margin: 16px 0;
  width: 90%;
  flex-direction: row;
  background: #ffffff;
  border-radius: 41px;
  align-items: center;
`;

export const IconInput = styled.View`
  z-index: 10;
  position: absolute;
  left: 1px;
`;

export const BtnInner = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BtnText = styled.Text`
  font-size: 18px;
  color: ${Gray};
`;

import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 12px;
  height: 46px;
  margin: 22px 0;
  flex-direction: row;
  background: #ffffff;
  border-radius: 41px;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "#7B7B7B",
})`
  flex: 1;
  font-size: 14px;
  margin-left: 10px;
  color: #7b7b7b;
`;

export const Icon = styled.Image`
  z-index: 10;
  position: absolute;
  left: 1px;
`;

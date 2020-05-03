import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 38px;
  height: 46px;
  margin: 16px 0;
  width: 100%;
  flex-direction: row;
  background: #ffffff;
  border-radius: 41px;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "#727272",
})`
  flex: 1;
  font-size: 14px;
  margin-left: 10px;
  color: #7b7b7b;
  /* text-align: ${(props) => (props.placeholder ? "center" : "left")}; */
`;

export const Icon = styled.View`
  z-index: 10;
  position: absolute;
  left: 1px;
`;

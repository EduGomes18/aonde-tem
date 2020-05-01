import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 15px;
  height: 50px;
  flex-direction: row;
  margin-top: 25px;
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

export const BoxShadow = styled.View`
  width: 100%;
  padding: 0 4%;
  height: 56px;
  overflow: hidden;
`;

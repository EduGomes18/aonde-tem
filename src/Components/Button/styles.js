import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 44px;
  padding: 8px 0;
  width: ${(props) => (props.size === "sm" ? "34%" : "100%")};
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`;

export const Title = styled.Text`
  font-size: ${(props) => (props.size === "sm" ? "12px" : "18px")};
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.textcolor};
`;

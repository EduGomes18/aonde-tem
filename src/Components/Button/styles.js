import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 44px;
  padding: 8px 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.textcolor};
`;

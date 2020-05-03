import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const Principal = "#F15F7E";

export const Gray = "#828282";

export const Black = "#000";

export const White = "#FFF";

export const LightGray = "#c4c4c4";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: flex-start;
  align-items: center;
  background: ${Principal};
`;

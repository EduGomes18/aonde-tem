import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { Gray, Black } from "~/Config/Global";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  height: 120px;
  width: 100%;
  padding-top: 52px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  height: 44px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;
`;

export const Time = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 22px;
  color: ${Black};
`;

export const TimeDesc = styled.Text`
  font-size: 12px;
  color: ${Gray};
`;

export const TimeCard = styled.View`
  width: 40%;
  border-radius: 22px;
  padding: 28px;
  justify-content: center;
  align-items: flex-start;
`;

export const ScheduleArea = styled.View`
  flex: 1;
  margin-top: ${Dimensions.get("window").height / 18 + "px"};
  padding-bottom: ${Dimensions.get("window").height / 12 + "px"};
`;

export const TimeInner = styled.View`
  margin: 22px 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const TimeTitle = styled.Text`
  color: ${Gray};
  font-weight: bold;
`;

export const Stroke = styled.View`
  border-bottom-width: 2px;
  border-color: ${Gray};
  width: 35%;
  height: 6px;
  margin: 0 6px;
`;

export const Timing = styled.TouchableOpacity`
  width: ${Dimensions.get("window").width / 6 + "px"};
  height: ${Dimensions.get("window").width / 12 + "px"};
  background: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
  border-radius: 12px;
`;

export const ScheHeader = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

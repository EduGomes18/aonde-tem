import styled from "styled-components/native";

import { White, Principal, LightGray, Gray, Black } from "~/Config/Global";

export const Header = styled.View`
  width: 100%;
  height: 180px;
  background: ${Principal};
`;

export const HeaderInner = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: row;
`;
export const Name = styled.View`
  width: 100%;
  height: 40%;
  padding: 0 5%;
  justify-content: center;
  align-items: flex-start;
`;

export const NameDesc = styled.Text`
  font-size: 12px;
  color: ${LightGray};
`;

export const Back = styled.TouchableOpacity`
  flex-direction: row;
  margin: 22px 0 12px 12px;
  width: 100%;
`;

export const BackText = styled.Text`
  font-size: 14px;
  color: ${White};
  margin-left: 12px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  color: ${White};
  font-size: 22px;
  font-weight: bold;
  background: ${Principal};
`;
export const Content = styled.View`
  width: 100%;
  flex: 1;
  background: transparent;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
`;
export const ContentInner = styled.View`
  width: 100%;
  height: 20px;
  position: absolute;
  top: 8%;
  background: #fff;
`;

import React, { useState } from "react";
import { useNavigation } from "react-navigation-hooks";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Routes from "./Routes";
import { Container, Gray, White } from "~/Config/Global";

import {
  Header,
  HeaderInner,
  Back,
  BackText,
  Input,
  Name,
  NameDesc,
  Content,
} from "./styles";

const Business = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState("Maria Bonita Salao de Beleza");

  return (
    <Container>
      <Header>
        <HeaderInner>
          <Back
            onPress={() => {
              navigate("Dash");
            }}
          >
            <Entypo color={White} name="chevron-left" size={22} />
            <BackText>Salvar e voltar</BackText>
          </Back>
        </HeaderInner>
        <Name>
          <Input value={name} onChangeText={(name) => setName(name)} />
          <NameDesc>Nome do seu negocio</NameDesc>
        </Name>
      </Header>
      <Content>
        <Routes />
      </Content>
    </Container>
  );
};

export default Business;

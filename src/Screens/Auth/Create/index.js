import React, { useState, useEffect } from "react";
import { StyleSheet, Switch } from "react-native";
import Pink from "~/Assets/Images/pink.svg";
import Blue from "~/Assets/Images/blue.svg";
import Purple from "~/Assets/Images/purple.svg";
import Logo from "~/Assets/Images/client1x.svg";
import Pic from "~/Assets/Images/pic.jpg";
import Input from "~/Components/Input";
import Button from "~/Components/Button";

import elevationShadowStyle from "~/Components/ShadowFunc";

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(22),
    backgroundColor: "#fff",
  },
  shadowArea: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
  },
  inactive: {
    opacity: 0.5,
  },
  active: {
    opacity: 1,
  },
});

import {
  Container,
  Header,
  Title,
  AvtArea,
  AvtCircle,
  ThemeInner,
  Theme,
  Themes,
  ThemeTitle,
  Rect,
  Avatar,
  AvtInner,
  CreateArea,
  Bussiness,
  BussIner,
  End,
  Option,
} from "./styles";

const Create = () => {
  const [active, setActive] = useState(false);

  function handleClient() {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  return (
    <Container>
      <Header>
        <Logo style={{ marginLeft: -18 }} />
        <Title>Cadastro de usuário</Title>
      </Header>
      <AvtArea>
        <AvtInner>
          <AvtCircle style={styles.shadow}>
            <Avatar source={Pic} />
          </AvtCircle>
        </AvtInner>
        <Theme>
          <ThemeTitle>tema</ThemeTitle>
          <ThemeInner>
            <Themes color="#FFC7E2">
              <Pink style={{ marginBottom: 6 }} />
              <Rect color="#5A5A5A" />
              <Rect color="#A3A1A1" />
              <Rect color="#C4C4C4" />
            </Themes>
            <Themes style={styles.shadowArea} color="#FFF">
              <Blue style={{ marginBottom: 6 }} />
              <Rect color="#5A5A5A" />
              <Rect color="#A3A1A1" />
              <Rect color="#C4C4C4" />
            </Themes>
            <Themes style={styles.shadowArea} color="#FFF">
              <Purple style={{ marginBottom: 6 }} />
              <Rect color="#5A5A5A" />
              <Rect color="#A3A1A1" />
              <Rect color="#C4C4C4" />
            </Themes>
          </ThemeInner>
        </Theme>
      </AvtArea>
      <CreateArea>
        <Input icon="person" placeholder="E-mail" />
        <Input safe={true} icon="pass" placeholder="Senha" />
        <Input safe={true} icon="pass" placeholder="Confirmar senha" />
      </CreateArea>
      <Bussiness>
        <BussIner>
          <Option color="#7A6BB0">Empresa</Option>
          <Switch
            trackColor={{ true: "#73DDB1", false: "#7A6BB0" }}
            onValueChange={handleClient}
            value={active}
          />
          <Option color="#73DDB1">Cliente</Option>
        </BussIner>
      </Bussiness>
      <End>
        <Button
          onPress={() => {
            console.log("check");
          }}
          color="#F15F7E"
          textcolor="#fff"
          title="Acessar"
        />
      </End>
    </Container>
  );
};

export default Create;

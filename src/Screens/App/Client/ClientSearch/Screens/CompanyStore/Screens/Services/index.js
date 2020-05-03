import React, { useState } from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import mani from "~/Assets/Images/man.jpg";
import { useNavigation } from "react-navigation-hooks";

import elevationShadowStyle from "~/Components/ShadowFunc";

import {
  Container,
  Header,
  ServPic,
  ServArea,
  ServCircle,
  ServTitle,
  Times,
  Time,
  Stroke,
  TimeInner,
  TimeTitle,
  TimeHeader,
} from "./styles";

const Services = () => {
  const times = [
    { id: 0, time: "9:00", active: true },
    { id: 1, time: "9:30", active: true },
    { id: 2, time: "10:00", active: false },
    { id: 3, time: "10:30", active: true },
    { id: 4, time: "11:00", active: false },
    { id: 5, time: "11:30", active: true },
  ];
  // const { getParam } = useNavigation();

  // const [picsource, setPicSource] = useState("")

  const data = times.map((item) => {
    return item.active ? (
      <Time style={styles.shadow} color="#FFF">
        <TimeTitle>{item.time}</TimeTitle>
      </Time>
    ) : (
      <Time disabled={true} style={{ opacity: 0.5 }} color="#FFC7E2">
        <TimeTitle>{item.time}</TimeTitle>
      </Time>
    );
  });

  return (
    <Container>
      <Header>
        <ServArea>
          <ServCircle style={styles.shadow}>
            <ServPic source={mani} />
          </ServCircle>
        </ServArea>
        <ServTitle>Manicure</ServTitle>
      </Header>
      <Times>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 52,
            paddingTop: 12,
          }}
        >
          <TimeHeader>
            <Stroke />
            <TimeTitle>Manha</TimeTitle>
            <Stroke />
          </TimeHeader>
          <TimeInner>{data}</TimeInner>
          <TimeHeader>
            <Stroke />
            <TimeTitle>Tarde</TimeTitle>
            <Stroke />
          </TimeHeader>
          <TimeInner>{data}</TimeInner>
          <TimeHeader>
            <Stroke />
            <TimeTitle>Noite</TimeTitle>
            <Stroke />
          </TimeHeader>
          <TimeInner>{data}</TimeInner>
        </ScrollView>
      </Times>
    </Container>
  );
};

export default Services;

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(6),
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
});

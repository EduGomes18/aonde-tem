import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import elevationShadowStyle from "~/Components/ShadowFunc";
import {
  Container,
  Header,
  TimeCard,
  ScheduleArea,
  Time,
  TimeDesc,
  InputArea,
  Timing,
  TimeTitle,
  ScheHeader,
  TimeInner,
  Stroke,
} from "./styles";

const Times = () => {
  const [openvalue, setopenValue] = useState("");
  const [closevalue, setcloseValue] = useState("");

  const times = [
    { id: 0, time: "9:00", active: true },
    { id: 1, time: "9:30", active: true },
    { id: 2, time: "10:00", active: false },
    { id: 3, time: "10:30", active: true },
    { id: 4, time: "11:00", active: false },
    { id: 5, time: "11:30", active: true },
  ];

  const data = times.map((item) => {
    return item.active ? (
      <Timing style={styles.shadow} color="#FFF">
        <TimeTitle>{item.time}</TimeTitle>
      </Timing>
    ) : (
      <Timing disabled={true} style={{ opacity: 0.5 }} color="#FFC7E2">
        <TimeTitle>{item.time}</TimeTitle>
      </Timing>
    );
  });

  return (
    <Container>
      <Header>
        <TimeCard style={styles.shadow}>
          <InputArea>
            <Time
              keyboardType="numeric"
              value={openvalue}
              onChangeText={(value) => setopenValue(value)}
              placeholder="--"
            />
          </InputArea>
          <TimeDesc>horario de abertura</TimeDesc>
        </TimeCard>
        <TimeCard style={styles.shadow}>
          <InputArea>
            <Time
              keyboardType="numeric"
              value={closevalue}
              onChangeText={(value) => setcloseValue(value)}
              placeholder="--"
            />
          </InputArea>
          <TimeDesc>horario de abertura</TimeDesc>
        </TimeCard>
      </Header>
      <ScheduleArea>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 52,
            paddingTop: 12,
          }}
        >
          <ScheHeader>
            <Stroke />
            <TimeTitle>Manha</TimeTitle>
            <Stroke />
          </ScheHeader>
          <TimeInner>{data}</TimeInner>
          <ScheHeader>
            <Stroke />
            <TimeTitle>Tarde</TimeTitle>
            <Stroke />
          </ScheHeader>
          <TimeInner>{data}</TimeInner>
          <ScheHeader>
            <Stroke />
            <TimeTitle>Noite</TimeTitle>
            <Stroke />
          </ScheHeader>
          <TimeInner>{data}</TimeInner>
        </ScrollView>
      </ScheduleArea>
    </Container>
  );
};

export default Times;

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(12),
    backgroundColor: "#fff",
  },
});

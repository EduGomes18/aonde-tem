import React from "react";
import { StyleSheet, FlatList, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Entypo } from "@expo/vector-icons";
import user1 from "~/Assets/Images/Userpic.png";
import mani from "~/Assets/Images/man.jpg";
import brush from "~/Assets/Images/brush.jpg";
import pedi from "~/Assets/Images/ped.jpg";

import user2 from "~/Assets/Images/Userpic.jpg";

import {
  Container,
  Title,
  RateArea,
  RateCard,
  DescribeText,
  RateAvatar,
  RateIcons,
  RateStars,
  CardInner,
  DateDesc,
  PromoCard,
  PromoArea,
  PromoPoints,
  PromoDesc,
  ServicesArea,
  ServicesCircle,
  ServPic,
  ServDesc,
  Services,
} from "./styles";
import elevationShadowStyle from "~/Components/ShadowFunc";

const Schedule = () => {
  const data = [
    { id: "00", desc: "Adorei o servico! A Maria e uma fofa!", source: user2 },
    { id: "01", desc: "boa profisional, adorei", source: user1 },
    { id: "02", desc: "A maria e muito legal!", source: user1 },
    { id: "03", desc: "Sempre tenho meu horario marcado...", source: user1 },
  ];
  const services = [
    { id: "00", desc: "Manicure", source: mani },
    { id: "01", desc: "Pedicure", source: pedi },
    { id: "02", desc: "Escova", source: brush },
    { id: "03", desc: "Manicure", source: mani },
  ];

  const promos = [
    { id: "00", desc: "promocao manicure", points: 50 },
    { id: "01", desc: "promocao escova", points: 62 },
    { id: "02", desc: "promocao pedicure", points: 30 },
    { id: "03", desc: "promocao manicure", points: 10 },
  ];

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 52,
          paddingTop: 12,
        }}
      >
        <Title>Avaliações</Title>
        <RateArea>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <RateCard style={styles.shadow}>
                  <CardInner>
                    <RateAvatar resizeMode="cover" source={item.source} />
                    <RateStars>
                      <RateIcons>
                        <Entypo name="star" color="#BADDA9" size={20} />
                        <Entypo name="star" color="#BADDA9" size={20} />
                        <Entypo name="star" color="#BADDA9" size={20} />
                        <Entypo name="star" color="#BADDA9" size={20} />
                        <Entypo name="star" color="#BADDA9" size={20} />
                      </RateIcons>
                      <DateDesc>ha 1 hora</DateDesc>
                    </RateStars>
                  </CardInner>

                  <DescribeText>{item.desc}</DescribeText>
                </RateCard>
              );
            }}
          />
        </RateArea>
        <Title>Promoções</Title>
        <PromoArea>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={promos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <PromoCard style={styles.shadow}>
                  <LinearGradient
                    colors={["#FFA9A9", "transparent"]}
                    start={[1, 1]}
                    end={[0.8, 0]}
                    style={{
                      borderTopRightRadius: 12,
                      borderBottomRightRadius: 12,
                      position: "absolute",
                      right: 0,
                      width: "100%",
                      height: "100%",
                      top: 0,
                    }}
                  />
                  <PromoDesc>{item.desc}</PromoDesc>
                  <PromoPoints>₳ {item.points},00</PromoPoints>
                </PromoCard>
              );
            }}
          />
        </PromoArea>
        <Title>Serviços</Title>

        <Services>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={services}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ServicesArea>
                  <ServicesCircle style={styles.shadow}>
                    <ServPic source={item.source} />
                  </ServicesCircle>
                  <ServDesc>{item.desc}</ServDesc>
                </ServicesArea>
              );
            }}
          />
        </Services>
      </ScrollView>
    </Container>
  );
};

export default Schedule;

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

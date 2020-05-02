import React, { useState } from "react";
import {
  DescribeArea,
  DescribeText,
  HistoryCard,
  HistList,
  SearchButton,
  SearchText,
  Region,
  RegTitle,
  Area,
  RegClosed,
  PromoCard,
  FlatContainer,
} from "./styles";
import { useNavigation } from "react-navigation-hooks";
import { Gray } from "~/Config/Global";
import { Text, StyleSheet, FlatList } from "react-native";
import Input from "~/Components/Input";
import Search from "~/Assets/Images/search.svg";
import Seta from "~/Assets/Images/seta.svg";
import Stroke from "~/Assets/Images/stroke.svg";
import { FontAwesome } from "@expo/vector-icons";

import Dashboard from "~/Components/Dashboard";

import elevationShadowStyle from "~/Components/ShadowFunc";

export default function ClientDash() {
  const [content, showContent] = useState(false);

  function handleDrawer() {
    showContent(!content);
  }
  const { navigate } = useNavigation();
  const data = [
    { id: "00", name: "Relâmpago McQueen" },
    { id: "01", name: "Agente Tom Mate" },
    { id: "02", name: "Doc Hudson" },
    { id: "03", name: "Cruz Ramirez" },
  ];

  return (
    <>
      <Dashboard>
        <SearchButton
          onPress={() => {
            navigate("ClientSearch");
          }}
          style={styles.shadow}
        >
          <Search />
          <SearchText>Buscar</SearchText>
        </SearchButton>
        <DescribeArea>
          <FontAwesome size={14} color={Gray} name="history" />
          <DescribeText>histórico</DescribeText>
        </DescribeArea>
        <HistList>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <HistoryCard style={styles.shadow}>
                  <DescribeText>{item.name}</DescribeText>
                </HistoryCard>
              );
            }}
          />
        </HistList>

        <DescribeArea>
          <FontAwesome size={14} color={Gray} name="calendar" />
          <DescribeText>agenda</DescribeText>
        </DescribeArea>
        <DescribeArea>
          <FontAwesome size={14} color={Gray} name="shopping-cart" />
          <DescribeText>carrinho</DescribeText>
        </DescribeArea>

        <Area area={content} style={styles.shadowArea}>
          {content ? (
            <FlatContainer>
              <Region onPress={handleDrawer}>
                <Seta />
                <RegTitle>Ofertas na sua região</RegTitle>
              </Region>
              <FlatList
                style={{
                  width: "100%",
                }}
                contentContainerStyle={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 12,
                }}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <PromoCard>
                      <Text>{item.name}</Text>
                    </PromoCard>
                  );
                }}
              />
            </FlatContainer>
          ) : (
            <RegClosed onPress={handleDrawer}>
              <Stroke />
            </RegClosed>
          )}
        </Area>
      </Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
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

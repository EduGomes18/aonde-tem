import React from "react";
import {
  DescribeArea,
  DescribeText,
  HistoryCard,
  HistList,
  SearchButton,
  SearchText,
} from "./styles";
import { Text, StyleSheet, FlatList } from "react-native";
import Input from "~/Components/Input";
import Search from "~/Assets/Images/search.svg";
import { FontAwesome } from "@expo/vector-icons";

import Dashboard from "~/Components/Dashboard";

import elevationShadowStyle from "~/Components/ShadowFunc";

export default function ClientDash() {
  return (
    <>
      <Dashboard>
        <SearchButton style={styles.shadow}>
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
      </Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
});

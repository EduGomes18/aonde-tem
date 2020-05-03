import React from "react";
import {
  DescribeArea,
  DescribeText,
  HistoryCard,
  HistList,
  SearchButton,
  SearchText,
} from "./styles";
import { useNavigation } from "react-navigation-hooks";
import { Gray } from "~/Config/Global";
import { Text, StyleSheet, FlatList } from "react-native";
import Input from "~/Components/Input";
import Search from "~/Assets/Images/search.svg";
import { FontAwesome } from "@expo/vector-icons";

import Dashboard from "~/Components/Dashboard";

import elevationShadowStyle from "~/Components/ShadowFunc";

export default function Settings() {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
});

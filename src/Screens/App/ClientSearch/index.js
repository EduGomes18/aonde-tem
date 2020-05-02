import React, { useState } from "react";
import Dashboard from "~/Components/Dashboard";
import Input from "~/Components/Input";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet, View, Slider } from "react-native";
import {
  SearchBar,
  FilterIcon,
  InputArea,
  FiText,
  Local,
  LocalText,
} from "./styles";

export default function ClientSearch() {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Dashboard>
        <SearchBar>
          <InputArea>
            <Input icon="search" />
          </InputArea>
          <FilterIcon>
            <MaterialCommunityIcons
              size={22}
              color="#C4C4C4"
              name="filter-variant"
            />
            <FiText>filtros</FiText>
          </FilterIcon>
        </SearchBar>
        <Local>
          <Ionicons name="md-pin" size={12} color="#c4c4c4" />
          <LocalText>Porto Alegre</LocalText>
        </Local>
        <View style={styles.container}>
          <Slider
            style={{ width: "100%" }}
            maximumValue={100}
            minimumTrackTintColor="#AB223F"
            maximumTrackTintColor="#CDCDCD"
            thumbTintColor="#AB223F"
            minimumValue={0}
            value={value}
            step={1}
            onValueChange={handleChange}
          />
          <Text>{value}</Text>
        </View>
      </Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

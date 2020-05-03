import React, { useState } from "react";
import Dashboard from "~/Components/Dashboard";
import Input from "~/Components/Input";
import { useNavigation } from "react-navigation-hooks";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { Text, StyleSheet, View, Slider } from "react-native";

import {
  SearchBar,
  FilterIcon,
  InputArea,
  FiText,
  Local,
  LocalText,
  RecDescs,
  Recent,
  RecInner,
  RecTitle,
  Filters,
  Kms,
  Cash,
  CashArea,
  CashVal,
  ClosedArea,
  BtnText,
  BtnClosed,
  FilterTitle,
  LocalInner,
} from "../../styles";

const Search = () => {
  const { navigate } = useNavigation();

  const [active, setActive] = useState(false);

  const activeColor = "#940C29";

  const inactiveColor = "#FBD6DE";

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <>
      <Dashboard>
        <SearchBar>
          <InputArea>
            <Input icon="search" placeholder="buscar item ou serviço" />
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
          <LocalInner>
            <Ionicons name="md-pin" size={12} color="#c4c4c4" />
            <LocalText>Porto Alegre</LocalText>
          </LocalInner>
          <BtnClosed
            onPress={() => {
              navigate("SearchResult");
            }}
            size="lg"
            color="#73DDB1"
          >
            <BtnText>Pesquisar</BtnText>
          </BtnClosed>
        </Local>
        <Recent>
          <RecTitle>Buscas recentes</RecTitle>
          <RecInner>
            <Entypo name="back-in-time" size={18} color="#c4c4c4" />
            <RecDescs>arroz</RecDescs>
          </RecInner>
          <RecInner>
            <Entypo name="back-in-time" size={18} color="#c4c4c4" />
            <RecDescs>cerveja</RecDescs>
          </RecInner>
          <RecInner>
            <Entypo name="back-in-time" size={18} color="#c4c4c4" />
            <RecDescs>borracharia</RecDescs>
          </RecInner>
        </Recent>
        <Filters>
          <FilterTitle>Filtros</FilterTitle>
          <View style={styles.container}>
            <Kms>{value + "KM"}</Kms>
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
          </View>
          <CashArea>
            <Cash color={inactiveColor}>
              <CashVal>$</CashVal>
            </Cash>
            <Cash color={inactiveColor}>
              <CashVal>$$</CashVal>
            </Cash>
            <Cash color={activeColor}>
              <CashVal>$$$</CashVal>
            </Cash>
            <Cash color={inactiveColor}>
              <CashVal>$$$$</CashVal>
            </Cash>
          </CashArea>
          <ClosedArea>
            <BtnClosed color="#73DDB1">
              <BtnText>Aberto agora</BtnText>
            </BtnClosed>
            <BtnClosed color="#FBD061">
              <BtnText>Abre logo</BtnText>
            </BtnClosed>
            <BtnClosed color="#F48686">
              <BtnText>Fechado</BtnText>
            </BtnClosed>
          </ClosedArea>
        </Filters>
      </Dashboard>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: "2%",
    paddingRight: "2%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

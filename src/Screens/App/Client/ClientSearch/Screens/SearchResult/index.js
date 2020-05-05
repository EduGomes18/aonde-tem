import React, { useState, useEffect } from "react";
import Dashboard from "~/Components/Dashboard";
import Input from "~/Components/Input";
import { useNavigation } from "react-navigation-hooks";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { View, StyleSheet, Image, FlatList } from "react-native";
import elevationShadowStyle from "~/Components/ShadowFunc";

import api from "~/Services/api";

import {
  SearchBar,
  FilterIcon,
  InputArea,
  FiText,
  Local,
  LocalText,
  Recent,
  RecTitle,
  BtnText,
  BtnClosed,
  LocalInner,
  HistList,
  HistoryCard,
  DescribeText,
  DescArea,
} from "./styles";

export default function SearchResult() {
  const { navigate } = useNavigation();

  // const [load, setLoad] = useState(false);

  // const [store, setStore] = useState([]);

  // const getStores = async () => {
  //   if (load) return;
  //   setLoad(true);

  //   const response = await api.get("/business");

  //   setStore(response.data);
  //   setLoad(false);
  // };

  // useEffect(() => {
  //   getStores();
  // }, []);

  const [active, setActive] = useState(false);

  const Time = function (time) {
    if (time === 0) {
      return "Aberto agora";
    }
    if (time === 1) {
      return "Abre logo";
    }
    if (time === 2) {
      return "Fechado";
    }
  };

  const Color = function (time) {
    if (time === 0) {
      return "#73DDB1";
    }
    if (time === 1) {
      return "#FBD061";
    }
    if (time === 2) {
      return "#F48686";
    }
  };

  const data = [
    {
      id: "00",
      time: 0,
      distance: "150m",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "01",
      time: 1,
      distance: "500m",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "02",
      time: 2,
      distance: "1km",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "03",
      time: 0,
      distance: "250m",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "04",
      time: 1,
      distance: "250m",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "05",
      time: 2,
      distance: "250m",
      logo: require("~/Assets/Images/mask.png"),
    },
    {
      id: "06",
      time: 0,
      distance: "250m",
      logo: require("~/Assets/Images/mask.png"),
    },
  ];

  const activeColor = "#940C29";

  const inactiveColor = "#FBD6DE";

  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Dashboard back={true} route="Search">
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
          <BtnClosed size="lg" color="#73DDB1">
            <BtnText>Pesquisar</BtnText>
          </BtnClosed>
        </Local>
        <Recent>
          <RecTitle>Resultados da pesquisa</RecTitle>
          <HistList>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <HistoryCard
                      onPress={() => {
                        navigate("CompanyStore");
                      }}
                      style={styles.shadow}
                    >
                      <Image source={item.logo} />
                    </HistoryCard>
                    <DescArea>
                      <Ionicons name="md-pin" size={12} color="#c4c4c4" />
                      <DescribeText>{item.distance}</DescribeText>
                    </DescArea>
                    <BtnClosed color={Color(item.time)}>
                      <BtnText>{Time(item.time)}</BtnText>
                    </BtnClosed>
                  </View>
                );
              }}
            />
          </HistList>
        </Recent>
      </Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
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

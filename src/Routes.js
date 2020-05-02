import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import BottomBar from "~/Components/BottomBar";
import Home from "~/Assets/Images/home.svg";
//para fazer autenticacao
//import { useSelector } from "react-redux";
//import store from "~/Store";
import Home1 from "~/Assets/Images/home1.svg";
import CompanyDash from "~/Screens/App/CompanyDash";
import ClientDash from "~/Screens/App/ClientDash";
import ClientSearch from "~/Screens/App/ClientSearch";

import Client from "~/Screens/Auth/Client";
import Company from "~/Screens/Auth/Company";

const MenuBox = () => {
  return (
    <View
      style={{
        backgroundColor: "#F15F7E",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingLeft: "20%",
        paddingRight: "20%",
        width: 100,
        height: 100,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home1 />
      {/* <FontAwesome size={42} color="#fff" name="home" /> */}
    </View>
  );
};

const AppNavigator = createSwitchNavigator(
  {
    Auth: createBottomTabNavigator(
      {
        Client: {
          screen: Client,
          navigationOptions: {
            // tabBarIcon: ({ tintColor }) => <Icon name="grocery" color={tintColor} />
          },
        },
        Company,
      },
      {
        tabBarComponent: BottomBar,
        tabBarOptions: {
          activeTintColor: "#E2283D",
          inactiveTintColor: "#5D5D5D",
        },
      }
    ),
    App: createBottomTabNavigator(
      {
        ClientSearch,
        ClientDash: {
          screen: ClientDash,
          navigationOptions: {
            tabBarIcon: <MenuBox />,
          },
        },
        CompanyDash,
      },
      {
        tabBarComponent: BottomBar,
        tabBarOptions: {
          activeTintColor: "#E2283D",
          inactiveTintColor: "#5D5D5D",
        },
      }
    ),
  },
  {
    initialRouteName: "App",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

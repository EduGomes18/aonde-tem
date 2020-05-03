import React, { useState, useEffect } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import BottomBar from "~/Components/BottomBar";

//para fazer autenticacao
//import { useSelector } from "react-redux";
//import store from "~/Store";

import Settings from "~/Screens/App/Settings";
import CompanyDash from "~/Screens/App/CompanyDash";
import ClientDash from "~/Screens/App/ClientDash";
import ClientSearch from "~/Screens/App/ClientSearch";
import SearchResult from "~/Screens/App/SearchResult";

import Client from "~/Screens/Auth/Client";
import Company from "~/Screens/Auth/Company";

const MenuBox = () => {
  return (
    <View
      style={{
        backgroundColor: "#F15F7E",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        width: 90,
        height: 90,
        paddingBottom: 10,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={38} height={38} viewBox="0 0 46 46">
        <Path
          d="M44.7598 20.0078C44.7587 20.0067 44.7577 20.0057 44.7566 20.0046L25.9923 1.24097C25.1924 0.440796 24.1291 0 22.9979 0C21.8668 0 20.8034 0.440445 20.0033 1.24062L1.24874 19.9948C1.24242 20.0011 1.2361 20.0078 1.22978 20.0141C-0.412673 21.666 -0.409865 24.3463 1.23786 25.994C1.99065 26.7471 2.9849 27.1833 4.04793 27.229C4.0911 27.2332 4.13461 27.2353 4.17848 27.2353H4.92636V41.0442C4.92636 43.7767 7.14964 46 9.88286 46H17.2241C17.9681 46 18.5717 45.3967 18.5717 44.6523V33.8262C18.5717 32.5792 19.586 31.565 20.8329 31.565H25.163C26.4099 31.565 27.4241 32.5792 27.4241 33.8262V44.6523C27.4241 45.3967 28.0274 46 28.7718 46H36.113C38.8462 46 41.0695 43.7767 41.0695 41.0442V27.2353H41.763C42.8938 27.2353 43.9572 26.7948 44.7577 25.9947C46.4072 24.3441 46.4079 21.6594 44.7598 20.0078V20.0078Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};
const MenuBoxActive = () => {
  return (
    <View
      style={{
        backgroundColor: "#F15F7E",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        width: 90,
        height: 100,
        paddingBottom: 12,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={48} height={48} viewBox="0 0 46 46">
        <Path
          d="M44.7598 20.0078C44.7587 20.0067 44.7577 20.0057 44.7566 20.0046L25.9923 1.24097C25.1924 0.440796 24.1291 0 22.9979 0C21.8668 0 20.8034 0.440445 20.0033 1.24062L1.24874 19.9948C1.24242 20.0011 1.2361 20.0078 1.22978 20.0141C-0.412673 21.666 -0.409865 24.3463 1.23786 25.994C1.99065 26.7471 2.9849 27.1833 4.04793 27.229C4.0911 27.2332 4.13461 27.2353 4.17848 27.2353H4.92636V41.0442C4.92636 43.7767 7.14964 46 9.88286 46H17.2241C17.9681 46 18.5717 45.3967 18.5717 44.6523V33.8262C18.5717 32.5792 19.586 31.565 20.8329 31.565H25.163C26.4099 31.565 27.4241 32.5792 27.4241 33.8262V44.6523C27.4241 45.3967 28.0274 46 28.7718 46H36.113C38.8462 46 41.0695 43.7767 41.0695 41.0442V27.2353H41.763C42.8938 27.2353 43.9572 26.7948 44.7577 25.9947C46.4072 24.3441 46.4079 21.6594 44.7598 20.0078V20.0078Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

const AppNavigator = createSwitchNavigator(
  {
    Stack: createSwitchNavigator({
      SearchResult,
    }),
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
        ClientSearch: {
          screen: ClientSearch,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <MaterialIcons size={48} color="#F15F7E" name="person" />
                );
              } else {
                return (
                  <MaterialIcons size={38} color="#F15F7E" name="person" />
                );
              }
            },
          },
        },
        ClientDash: {
          screen: ClientDash,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return <MenuBoxActive />;
              } else {
                return <MenuBox />;
              }
            },
          },
        },
        Settings: {
          screen: Settings,
          navigationOptions: {
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <Ionicons size={48} color="#F15F7E" name="ios-settings" />
                );
              } else {
                return (
                  <Ionicons size={38} color="#F15F7E" name="ios-settings" />
                );
              }
            },
          },
        },
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

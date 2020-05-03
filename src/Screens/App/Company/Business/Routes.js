import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Dimensions } from "react-native";
import { LightGray, White } from "~/Config/Global";

import Products from "./Screens/Products";
import Info from "./Screens/Info";

const width = Dimensions.get("window").width;
const width2 = Dimensions.get("window").width / 2;

const Tab = createMaterialTopTabNavigator(
  {
    "Informações do negócio": {
      screen: Info,
    },
    "Produtos e serviços": {
      screen: Products,
    },
  },
  {
    tabBarOptions: {
      tabStyle: {
        width: width2,
        backgroundColor: "transparent",
        borderRadius: 22,
      },
      labelStyle: {
        backgroundColor: "transparent",
        width: "100%",
        height: 62,
        fontWeight: "bold",
        fontSize: 12,
      },
      style: {
        backgroundColor: "transparent",
        // marginTop: "5%",
        height: 56,
        width: width,
      },
      indicatorStyle: {
        width: width2,
        height: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
      },
      activeTintColor: LightGray,
      inactiveTintColor: White,
      upperCaseLabel: false,
    },
  }
);

export default createAppContainer(Tab);

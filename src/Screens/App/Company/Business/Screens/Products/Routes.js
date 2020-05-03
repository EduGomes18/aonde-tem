import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { Dimensions } from "react-native";
import { LightGray, White, Principal } from "~/Config/Global";

import Services from "./Screens/Services";
import Products from "./Screens/Products";

const width = Dimensions.get("window").width;
const width2 = Dimensions.get("window").width / 2;
const width3 = Dimensions.get("window").width / 4;

const Tab = createMaterialTopTabNavigator(
  {
    serviços: {
      screen: Services,
    },
    produtos: {
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
        flexWrap: "wrap",
        height: 62,
        fontWeight: "bold",
        fontSize: 10,
      },
      style: {
        backgroundColor: "transparent",
        // marginTop: "5%",
        height: 36,
        width: width,
      },
      indicatorStyle: {
        width: width3,
        height: 2,
        left: 50,
        backgroundColor: Principal,
        borderRadius: 10,
      },
      activeTintColor: Principal,
      inactiveTintColor: LightGray,
      upperCaseLabel: false,
    },
  }
);

export default createAppContainer(Tab);

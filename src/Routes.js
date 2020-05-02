import { createAppContainer, createSwitchNavigator } from "react-navigation";

//para fazer autenticacao
//import { useSelector } from "react-redux";
//import store from "~/Store";

import CompanyDash from "~/Screens/App/CompanyDash";
import ClientDash from "~/Screens/App/ClientDash";

import Client from "~/Screens/Auth/Client";
import Company from "~/Screens/Auth/Company";

const AppNavigator = createSwitchNavigator(
  {
    Auth: createSwitchNavigator({
      Client,
      Company,
    }),
    App: createSwitchNavigator({
      ClientDash,
      CompanyDash,
    }),
  },
  {
    initialRouteName: "App",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

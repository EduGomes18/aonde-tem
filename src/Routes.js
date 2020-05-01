import { createAppContainer, createSwitchNavigator } from "react-navigation";

//para fazer autenticacao
//import { useSelector } from "react-redux";
//import store from "~/Store";

import Client from "~/Screens/Auth/Client";
import Company from "~/Screens/Auth/Company";

const AppNavigator = createSwitchNavigator({
  Client,
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

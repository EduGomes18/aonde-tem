import { createAppContainer, createSwitchNavigator } from "react-navigation";

import CompanyStore from "./Screens/CompanyStore";
import Search from "./Screens/Search";
import SearchResult from "./Screens/SearchResult";

const Switch = createSwitchNavigator({
  Search,
  CompanyStore,
  SearchResult,
});

const AppContainer = createAppContainer(Switch);

export default AppContainer;

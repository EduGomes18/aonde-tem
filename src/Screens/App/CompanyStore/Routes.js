import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Schedule from "./Screens/Schedule";
import Services from "./Screens/Services";

const Switch = createSwitchNavigator({
  Schedule,
  Services,
});

const AppContainer = createAppContainer(Switch);

export default AppContainer;

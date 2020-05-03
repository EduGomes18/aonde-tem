import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Business from "./Business";
import Promo from "./Promo";
import Dash from "./Dash";
import Schedule from "./Schedule";

const Switch = createSwitchNavigator({
  Dash,
  Promo,
  Business,
  Schedule,
});

const AppContainer = createAppContainer(Switch);

export default AppContainer;

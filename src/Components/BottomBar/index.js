import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import posed from "react-native-pose";
import { Principal } from "~/Config/Global";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 8;
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 },
  route4: { x: tabWidth * 4 },
  route5: { x: tabWidth * 5 },
  route6: { x: tabWidth * 6 },
  route7: { x: tabWidth * 7 },
});

const S = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 62,
    elevation: 2,
    backgroundColor: "#FFDFEE",
  },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center" },
  active: {
    color: "#E2283D",
  },
  inactive: {
    color: "#5D5D5D",
  },
});

const Scaler = posed.View({
  active: { scale: 1.1 },
  inactive: { scale: 1 },
});

const BottomBar = (props) => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <>
      <View style={S.container}>
        {routes.map((route, routeIndex) => {
          const isRouteActive = routeIndex === activeRouteIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
          return (
            <TouchableOpacity
              key={routeIndex}
              style={S.tabButton}
              onPress={() => {
                onTabPress({ route });
              }}
              onLongPress={() => {
                onTabLongPress({ route });
              }}
              accessibilityLabel={getAccessibilityLabel({ route })}
            >
              <Scaler
                style={S.scaler}
                pose={isRouteActive ? "active" : "inactive"}
              >
                {renderIcon({ route, focused: isRouteActive, tintColor })}
              </Scaler>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomBar;

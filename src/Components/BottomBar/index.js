import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const S = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 52,
    elevation: 4,
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

const Stl = StyleSheet.create({
  active: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inactive: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
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
              <View style={isRouteActive ? Stl.active : Stl.inactive}>
                {renderIcon({ route, focused: isRouteActive, tintColor })}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomBar;

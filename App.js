import React, { useState } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "./src/Config/ReactotronConfig";

import { Principal } from "./src/Config/Global";

import { store, persistor } from "./src/Store";

import Constants from "expo-constants";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from "react-native";
import Base from "./src/Base";

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Principal,
    height: Constants.statusBarHeight,
  },
});

const fetchFonts = () => {
  return Font.loadAsync({
    "Roboto-Regular": require("./assets/font/Roboto/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {Platform.OS === "ios" && <View style={styles.statusBar} />}
        <Base />
      </PersistGate>
    </Provider>
  );
}

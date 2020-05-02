import React, { useState } from "react";
import Dashboard from "~/Components/Dashboard";
// import { Slider } from "react-native-elements";
import { Text, StyleSheet, View, Slider } from "react-native";

export default function ClientSearch() {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <>
      <Dashboard>
        <View style={styles.container}>
          <Slider
            style={{ width: "100%" }}
            maximumValue={100}
            minimumTrackTintColor="#AB223F"
            maximumTrackTintColor="#CDCDCD"
            thumbTintColor="#AB223F"
            minimumValue={0}
            value={value}
            step={1}
            onValueChange={handleChange}
          />
          <Text>{value}</Text>
        </View>
      </Dashboard>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
